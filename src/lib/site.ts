// Shared site constants — navigation + contact details.
// Content preserved exactly from source documents.

export const SITE = {
  name: "My Quran Guide",
  email: "info@myquranquide.com",
  whatsappDisplay: "+97471763566",
  whatsappLink: "https://wa.me/97471763566",
  facebookDisplay: "facebook.com/MyQuranGuide",
  facebookLink: "https://facebook.com/MyQuranGuide",
  instagramDisplay: "@MyQuranGuide",
  instagramLink: "https://instagram.com/MyQuranGuide",
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/fee-schedule", label: "Fee Schedule" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
