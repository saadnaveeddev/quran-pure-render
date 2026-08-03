import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absoluteUrl } from "@/lib/site";
import { isProductionDeployment } from "@/lib/deployment.server";

// Served dynamically rather than from public/ so preview deployments can
// disallow everything while production stays fully crawlable.

const PRODUCTION_ROBOTS = [
  "User-agent: *",
  "Allow: /",
  "",
  `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
  "",
].join("\n");

const PREVIEW_ROBOTS = ["User-agent: *", "Disallow: /", ""].join("\n");

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const isProduction = isProductionDeployment();

        return new Response(isProduction ? PRODUCTION_ROBOTS : PREVIEW_ROBOTS, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": isProduction ? "public, max-age=3600" : "no-store",
            ...(isProduction ? {} : { "X-Robots-Tag": "noindex, nofollow" }),
          },
        });
      },
    },
  },
});
