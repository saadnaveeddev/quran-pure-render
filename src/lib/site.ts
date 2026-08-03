// Shared site constants — identity, contact details and navigation.

export const SITE = {
  name: "My Quran Guide",
  domain: "myquranguide.com",
  siteUrl: "https://myquranguide.com",
  email: "info@myquranguide.com",
  whatsappDisplay: "+974 7176 3566",
  whatsappE164: "+97471763566",
  whatsappDigits: "97471763566",
  facebookLink: "https://facebook.com/MyQuranGuide",
  instagramLink: "https://instagram.com/MyQuranGuide",
  twitterHandle: "@MyQuranGuide",
  locale: "en_US",
  logoPath: "/logo.png",
  logoIconPath: "/logo-icon.png",
  faviconPath: "/favicon.png",
  heroImagePath: "/hero-quran.jpg",
  defaultOgImagePath: "/og-cover.png",
  /** Matches --ink, the darkest surface the browser chrome can tint to. */
  themeColor: "#10182b",
} as const;

export const SOCIAL_PROFILES = [SITE.facebookLink, SITE.instagramLink] as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.siteUrl).toString();
}

/**
 * WhatsApp deep link, optionally pre-filled. For this audience "message us on
 * WhatsApp" converts better than a form, so it is offered at equal weight
 * beside every enquiry form rather than buried in the footer.
 */
export function whatsappUrl(prefill?: string): string {
  const base = `https://wa.me/${SITE.whatsappDigits}`;
  return prefill ? `${base}?text=${encodeURIComponent(prefill)}` : base;
}

/**
 * Verifiable organisation facts.
 *
 * Anything the academy cannot evidence stays `null` and the UI omits the
 * corresponding block rather than printing an unsupported claim. Student
 * counts, ratings and a registered address are the strongest trust signals on
 * a site like this — and the most damaging to invent.
 */
export const ORG_FACTS = {
  /** Registered trading address. Required for local SEO and basic credibility. */
  registeredAddress: null as null | {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  },
  /** Where the teaching staff are based. */
  tutorsBasedIn: "Pakistan",
  /** Where the administrative office and support line are based. */
  officeBasedIn: "Qatar",
  teachingLanguages: ["English", "Urdu", "Punjabi"] as const,
  platforms: ["Zoom", "Skype", "Google Meet"] as const,
  freeTrialClasses: 2,
  supportResponseTime: "within 1–2 hours",
  /** Set only once the academy can evidence the figure. */
  studentsTaught: null as number | null,
  countriesServed: null as number | null,
} as const;

/**
 * Analytics / tracking configuration, sourced from build-time env vars so no
 * scripts load unless real IDs are provided.
 *   VITE_GA_ID            → GA4 measurement ID (G-XXXX)
 *   VITE_META_PIXEL_ID    → Meta Pixel ID
 *   VITE_GSC_VERIFICATION → Search Console verification token
 */
export const ANALYTICS = {
  gaId: import.meta.env.VITE_GA_ID as string | undefined,
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID as string | undefined,
  gscVerification: import.meta.env.VITE_GSC_VERIFICATION as string | undefined,
} as const;

export const NAV_LINKS = [
  { to: "/courses", label: "Courses" },
  { to: "/tutors", label: "Tutors" },
  { to: "/fee-schedule", label: "Fees" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
