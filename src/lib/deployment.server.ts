import process from "node:process";

// Server-only. Distinguishes the live money domain from Vercel preview/branch
// deployments so that only production is ever crawlable. See server.ts and
// routes/robots[.]txt.ts.

/**
 * True only for the production deployment.
 *
 * Vercel exposes `VERCEL_ENV` ("production" | "preview" | "development") to
 * serverless functions at runtime. `SITE_ENV` is an explicit override for
 * non-Vercel hosting, where `VERCEL_ENV` is absent and we would otherwise
 * fail closed to noindex.
 */
export function isProductionDeployment(): boolean {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv) return vercelEnv === "production";
  return process.env.SITE_ENV === "production";
}

/** Robots directive applied to every response on non-production deployments. */
export const PREVIEW_ROBOTS_TAG = "noindex, nofollow, noarchive, nosnippet";
