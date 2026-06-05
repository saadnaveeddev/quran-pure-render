// Shared site constants — navigation + contact details.
// Content preserved exactly from source documents.

export const SITE = {
  name: "My Quran Guide",
  domain: "myquranguide.com",
  siteUrl: "https://myquranguide.com",
  email: "info@myquranguide.com",
  whatsappDisplay: "+97471763566",
  whatsappLink: "https://wa.me/97471763566",
  facebookDisplay: "facebook.com/MyQuranGuide",
  facebookLink: "https://facebook.com/MyQuranGuide",
  instagramDisplay: "@MyQuranGuide",
  instagramLink: "https://instagram.com/MyQuranGuide",
  defaultOgImagePath: "/og-cover.svg",
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.siteUrl).toString();
}

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/fee-schedule", label: "Fee Schedule" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
