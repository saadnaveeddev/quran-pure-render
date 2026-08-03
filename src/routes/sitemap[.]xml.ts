import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absoluteUrl } from "@/lib/site";
import { COURSE_LIST } from "@/content/courses";
import { AUDIENCE_PAGE_LIST } from "@/content/audience-pages";
import { GEO_PAGES } from "@/content/geo-pages";
import { POSTS } from "@/content/blog";
import { isProductionDeployment } from "@/lib/deployment.server";

/**
 * Derived from the content layer rather than hand-maintained.
 *
 * The previous version was a literal list of fifteen paths, which had already
 * drifted and would have silently omitted every page added since. Anything
 * with a `lastUpdated` in its data contributes an accurate `lastmod`.
 *
 * Deliberately excluded: /thank-you (noindex), /robots.txt and /sitemap.xml
 * themselves, and the API routes.
 */

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

function buildEntries(): SitemapEntry[] {
  const courseLastMod = COURSE_LIST.map((c) => c.lastUpdated)
    .sort()
    .at(-1);

  return [
    { path: "/", changefreq: "weekly", priority: "1.0", lastmod: courseLastMod },
    { path: "/courses", changefreq: "weekly", priority: "0.9", lastmod: courseLastMod },

    ...COURSE_LIST.map(
      (course): SitemapEntry => ({
        path: course.path,
        changefreq: "monthly",
        priority: "0.9",
        lastmod: course.lastUpdated,
      }),
    ),

    { path: "/free-trial", changefreq: "monthly", priority: "0.9" },
    { path: "/fee-schedule", changefreq: "monthly", priority: "0.8" },
    { path: "/tutors", changefreq: "monthly", priority: "0.8" },

    ...AUDIENCE_PAGE_LIST.map(
      (page): SitemapEntry => ({
        path: page.path,
        changefreq: "monthly",
        priority: "0.8",
        lastmod: page.lastUpdated,
      }),
    ),

    ...GEO_PAGES.map(
      (page): SitemapEntry => ({
        path: page.path,
        changefreq: "monthly",
        priority: "0.8",
        lastmod: page.lastUpdated,
      }),
    ),

    { path: "/blog", changefreq: "weekly", priority: "0.7", lastmod: POSTS.at(0)?.dateModified },
    ...POSTS.map(
      (post): SitemapEntry => ({
        path: `/blog/${post.slug}`,
        changefreq: "yearly",
        priority: "0.6",
        lastmod: post.dateModified,
      }),
    ),

    { path: "/about", changefreq: "monthly", priority: "0.7" },
    { path: "/contact", changefreq: "monthly", priority: "0.6" },
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.2" },
    { path: "/terms-conditions", changefreq: "yearly", priority: "0.2" },
  ];
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = buildEntries().map((e) =>
          [
            `  <url>`,
            `    <loc>${absoluteUrl(e.path)}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            // Previews must not have their sitemap cached or fetched by anyone.
            "Cache-Control": isProductionDeployment() ? "public, max-age=3600" : "no-store",
          },
        });
      },
    },
  },
});
