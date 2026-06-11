// Shared site constants — navigation + contact details.
// Content preserved exactly from source documents.

export const SITE = {
  name: "My Quran Guide",
  domain: "myquranguide.com",
  siteUrl: "https://myquranguide.com",
  email: "info@myquranguide.com",
  whatsappDisplay: "+97471763566",
  whatsappLink: "https://wa.me/97471763566",
  whatsappNumber: "+97471763566",
  facebookDisplay: "facebook.com/MyQuranGuide",
  facebookLink: "https://facebook.com/MyQuranGuide",
  instagramDisplay: "@MyQuranGuide",
  instagramLink: "https://instagram.com/MyQuranGuide",
  twitterHandle: "@MyQuranGuide",
  locale: "en_US",
  logoPath: "/logo.png",
  logoIconPath: "/logo-icon.png",
  faviconPath: "/favicon.png",
  heroImagePath: "/hero-quran.jpg",
  defaultOgImagePath: "/og-cover.png",
} as const;

/** Public social/profile URLs used for schema.org `sameAs`. */
export const SOCIAL_PROFILES = [SITE.facebookLink, SITE.instagramLink] as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.siteUrl).toString();
}

/**
 * Analytics / tracking configuration, sourced from build-time env vars so that
 * no scripts load unless real IDs are provided (keeps Lighthouse clean in dev).
 *   VITE_GA_ID                 → Google Analytics 4 measurement ID (G-XXXX)
 *   VITE_META_PIXEL_ID         → Meta (Facebook) Pixel ID
 *   VITE_GSC_VERIFICATION      → Google Search Console verification token
 */
export const ANALYTICS = {
  gaId: import.meta.env.VITE_GA_ID as string | undefined,
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID as string | undefined,
  gscVerification: import.meta.env.VITE_GSC_VERIFICATION as string | undefined,
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/fee-schedule", label: "Fee Schedule" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
