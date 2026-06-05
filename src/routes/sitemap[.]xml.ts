import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absoluteUrl } from "@/lib/site";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: "2026-06-05" },
          { path: "/courses", changefreq: "weekly", priority: "0.9", lastmod: "2026-06-05" },
          { path: "/fee-schedule", changefreq: "monthly", priority: "0.8", lastmod: "2026-06-05" },
          { path: "/free-trial", changefreq: "weekly", priority: "0.9", lastmod: "2026-06-05" },
          { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: "2026-06-05" },
          { path: "/contact", changefreq: "monthly", priority: "0.7", lastmod: "2026-06-05" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", lastmod: "2026-06-05" },
          { path: "/terms-conditions", changefreq: "yearly", priority: "0.3", lastmod: "2026-06-05" },
        ];

        const urls = entries.map((e) =>
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
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
