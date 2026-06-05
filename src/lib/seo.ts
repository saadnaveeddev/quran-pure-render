import { absoluteUrl, SITE } from "@/lib/site";

export interface FaqItem {
  q: string;
  a: string;
}

interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
}

export function buildPageSeo({ title, description, path, ogImagePath }: PageSeoInput) {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(ogImagePath ?? SITE.defaultOgImagePath);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "My Quran Guide online Quran learning" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function buildFaqSchema(items: ReadonlyArray<FaqItem>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
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
    }),
  };
}
