import { absoluteUrl, SITE, SOCIAL_PROFILES } from "@/lib/site";

export interface FaqItem {
  q: string;
  a: string;
}

export interface BreadcrumbItem {
  /** Human-readable label shown to users and search engines. */
  name: string;
  /** Route path, e.g. "/courses". */
  path: string;
}

interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
  /** Open Graph type — "website" (default) or "article". */
  type?: "website" | "article";
  /** Set true to keep a page out of the index (e.g. thin/utility pages). */
  noindex?: boolean;
}

/**
 * Builds per-page <head> meta + canonical link. Global, page-independent tags
 * (site_name, locale, twitter card, default robots, etc.) live in the root
 * route so they are emitted once and inherited everywhere.
 */
export function buildPageSeo({
  title,
  description,
  path,
  ogImagePath,
  type = "website",
  noindex = false,
}: PageSeoInput) {
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
      { property: "og:image:alt", content: `${SITE.name} online Quran learning` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

const ld = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

export function buildFaqSchema(items: ReadonlyArray<FaqItem>) {
  return ld({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  });
}

/** Sitewide Organization entity (emitted once from the root route). */
export function buildOrganizationSchema() {
  return ld({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE.siteUrl}/#organization`,
    name: SITE.name,
    alternateName: "MyQuranGuide",
    url: SITE.siteUrl,
    logo: absoluteUrl(SITE.logoPath),
    image: absoluteUrl(SITE.defaultOgImagePath),
    email: SITE.email,
    description:
      "Online Quran academy offering Tajweed, Hifz, Noorani Qaida, Arabic, Islamic Studies and Female Quran Classes with certified English-speaking tutors.",
    sameAs: [...SOCIAL_PROFILES],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.email,
      telephone: SITE.whatsappNumber,
      availableLanguage: ["English", "Urdu", "Punjabi"],
      areaServed: "Worldwide",
    },
  });
}

/** Sitewide WebSite entity (emitted once from the root route). */
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
  /** ISO 8601 duration for a single session, e.g. "PT45M". */
  workload?: string;
}

/** Course rich-result schema with provider + free-trial offer. */
export function buildCourseSchema({
  name,
  description,
  path,
  workload = "PT45M",
}: CourseSchemaInput) {
  return ld({
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${SITE.siteUrl}/#organization`,
      name: SITE.name,
      url: SITE.siteUrl,
    },
    inLanguage: "en",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: workload,
      location: {
        "@type": "VirtualLocation",
        url: SITE.siteUrl,
      },
    },
    offers: {
      "@type": "Offer",
      category: "Paid course with free trial",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/free-trial"),
    },
  });
}
