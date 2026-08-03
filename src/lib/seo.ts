import { absoluteUrl, ORG_FACTS, SITE, SOCIAL_PROFILES } from "@/lib/site";

export interface FaqItem {
  q: string;
  a: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
  type?: "website" | "article";
  /** Utility pages that should never appear in results (e.g. /thank-you). */
  noindex?: boolean;
}

const TITLE_RANGE = [45, 60] as const;
const DESCRIPTION_RANGE = [140, 158] as const;

/**
 * Warns during development when a title would truncate in the SERP or a
 * description falls outside the useful range. Cheaper than auditing 25 pages
 * by hand, and it keeps new pages honest.
 */
function warnOnLength(field: string, value: string, [min, max]: readonly [number, number]) {
  if (!import.meta.env.DEV) return;
  if (value.length < min || value.length > max) {
    console.warn(`[seo] ${field} is ${value.length} chars, outside ${min}–${max}: "${value}"`);
  }
}

/**
 * Per-page head tags. Global, page-independent tags live in the root route so
 * they are emitted once and inherited everywhere.
 */
export function buildPageSeo({
  title,
  description,
  path,
  ogImagePath,
  type = "website",
  noindex = false,
}: PageSeoInput) {
  warnOnLength("title", title, TITLE_RANGE);
  warnOnLength("description", description, DESCRIPTION_RANGE);

  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(ogImagePath ?? SITE.defaultOgImagePath);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: noindex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:type", content: type },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: canonical },
      // Single English locale for now. Add `ur` here when the Urdu locale ships.
      { rel: "alternate", hrefLang: "en", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
    ],
  };
}

const ld = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

/* ---- Sitewide entities (root route) ---- */

export function buildOrganizationSchema() {
  return ld({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE.siteUrl}/#organization`,
    name: SITE.name,
    alternateName: "MyQuranGuide",
    url: SITE.siteUrl,
    logo: absoluteUrl(SITE.logoIconPath),
    image: absoluteUrl(SITE.defaultOgImagePath),
    email: SITE.email,
    telephone: SITE.whatsappE164,
    description:
      "Online Quran academy teaching Noorani Qaida, Quran recitation, Tajweed, Hifz, Islamic studies and Quranic Arabic to students worldwide, with certified male and female tutors.",
    sameAs: [...SOCIAL_PROFILES],
    ...(ORG_FACTS.registeredAddress
      ? { address: { "@type": "PostalAddress", ...ORG_FACTS.registeredAddress } }
      : {}),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.email,
      telephone: SITE.whatsappE164,
      availableLanguage: [...ORG_FACTS.teachingLanguages],
      areaServed: "Worldwide",
    },
  });
}

export function buildWebsiteSchema() {
  return ld({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.siteUrl}/#website`,
    name: SITE.name,
    url: SITE.siteUrl,
    publisher: { "@id": `${SITE.siteUrl}/#organization` },
    inLanguage: "en",
  });
}

/* ---- Per-page entities ---- */

export function buildFaqSchema(items: ReadonlyArray<FaqItem>) {
  return ld({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  });
}

export function buildBreadcrumbSchema(items: ReadonlyArray<BreadcrumbItem>) {
  return ld({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  });
}

interface CourseSchemaInput {
  name: string;
  description: string;
  path: string;
  /** ISO 8601 duration for a single session. */
  sessionWorkload?: string;
  /** Canonical per-class fee in USD. */
  usdPerClass: number;
  educationalLevel: string;
  lastUpdated: string;
}

export function buildCourseSchema({
  name,
  description,
  path,
  sessionWorkload = "PT45M",
  usdPerClass,
  educationalLevel,
  lastUpdated,
}: CourseSchemaInput) {
  return ld({
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${absoluteUrl(path)}#course`,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE.siteUrl}/#organization` },
    inLanguage: "en",
    educationalLevel,
    dateModified: lastUpdated,
    isAccessibleForFree: false,
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        name: `${name} — free trial`,
        courseMode: "online",
        courseWorkload: sessionWorkload,
        location: { "@type": "VirtualLocation", url: absoluteUrl(path) },
        offers: {
          "@type": "Offer",
          price: 0,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: absoluteUrl("/free-trial"),
        },
      },
      {
        "@type": "CourseInstance",
        name: `${name} — ongoing classes`,
        courseMode: "online",
        courseWorkload: sessionWorkload,
        location: { "@type": "VirtualLocation", url: absoluteUrl(path) },
        offers: {
          "@type": "Offer",
          price: usdPerClass,
          priceCurrency: "USD",
          unitText: "class",
          availability: "https://schema.org/InStock",
          url: absoluteUrl("/fee-schedule"),
        },
      },
    ],
  });
}

/** The seven courses as an ordered list, for /courses. */
export function buildItemListSchema(
  items: ReadonlyArray<{ name: string; path: string; description: string }>,
) {
  return ld({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        "@id": `${absoluteUrl(item.path)}#course`,
        name: item.name,
        description: item.description,
        url: absoluteUrl(item.path),
        provider: { "@id": `${SITE.siteUrl}/#organization` },
      },
    })),
  });
}

/** ItemList of articles, for the blog index. */
export function buildBlogListSchema(
  items: ReadonlyArray<{ name: string; path: string; datePublished: string }>,
) {
  return ld({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE.name} articles`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(item.path),
      item: {
        "@type": "Article",
        headline: item.name,
        url: absoluteUrl(item.path),
        datePublished: item.datePublished,
        publisher: { "@id": `${SITE.siteUrl}/#organization` },
      },
    })),
  });
}

/** Price range across the monthly packages, for /fee-schedule. */
export function buildAggregateOfferSchema({
  lowUsd,
  highUsd,
  offerCount,
}: {
  lowUsd: number;
  highUsd: number;
  offerCount: number;
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: lowUsd,
    highPrice: highUsd,
    offerCount,
    availability: "https://schema.org/InStock",
    url: absoluteUrl("/fee-schedule"),
    offeredBy: { "@id": `${SITE.siteUrl}/#organization` },
  });
}

export function buildPersonSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string | null;
  knowsLanguage: ReadonlyArray<string>;
  credentials: ReadonlyArray<string>;
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    ...(person.image ? { image: absoluteUrl(person.image) } : {}),
    knowsLanguage: [...person.knowsLanguage],
    worksFor: { "@id": `${SITE.siteUrl}/#organization` },
    hasCredential: person.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
  });
}

export function buildArticleSchema(article: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  imagePath?: string;
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: absoluteUrl(article.path),
    url: absoluteUrl(article.path),
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { "@type": "Person", name: article.authorName },
    publisher: { "@id": `${SITE.siteUrl}/#organization` },
    image: absoluteUrl(article.imagePath ?? SITE.defaultOgImagePath),
    inLanguage: "en",
  });
}
