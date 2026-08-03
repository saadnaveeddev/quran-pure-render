/**
 * Tutors and testimonials.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  READ THIS BEFORE THE SITE GOES LIVE
 * ─────────────────────────────────────────────────────────────────────────
 * The entries below are STRUCTURE, not fact. They exist so the tutor and
 * testimonial layouts can be designed and reviewed; they are not real people.
 *
 * Publishing invented tutors or invented reviews on a site whose entire
 * proposition is "trust us with your child" is both a Google spam-policy
 * exposure and, for an Islamic education brand, a serious credibility problem
 * if it is ever discovered. So:
 *
 *   - `TUTORS_VERIFIED` and `TESTIMONIALS_VERIFIED` must stay `false` until
 *     each entry has been replaced with a real, consented, attributable one.
 *   - While they are `false`, production renders an honest alternative
 *     instead of these cards, and no Person / Review structured data is
 *     emitted. Preview builds still render the cards so the design can be
 *     reviewed.
 *   - Flipping either flag to `true` with placeholder data still in place is
 *     the single worst thing that can be done to this site.
 *
 * To go live: replace every entry, confirm written consent for each
 * testimonial, then set the flag to `true`.
 */

export const TUTORS_VERIFIED = false;
export const TESTIMONIALS_VERIFIED = false;

export interface Tutor {
  slug: string;
  name: string;
  gender: "male" | "female";
  /** Path under /public. Real photograph, not an avatar illustration. */
  photo: string | null;
  /** Specific and checkable. "Certified" on its own is not a credential. */
  credentials: ReadonlyArray<string>;
  yearsTeaching: number;
  languages: ReadonlyArray<string>;
  /** Course keys this tutor is assigned to. */
  teaches: ReadonlyArray<string>;
  bio: string;
}

export const TUTORS: ReadonlyArray<Tutor> = [
  {
    slug: "placeholder-tutor-1",
    name: "[Tutor name]",
    gender: "male",
    photo: null,
    credentials: ["[Ijazah, riwayah and chain]", "[Degree or institution]"],
    yearsTeaching: 0,
    languages: ["English", "Urdu"],
    teaches: ["tajweed", "recitation", "hifz"],
    bio: "[Two sentences: where they studied, who they studied under, and what they are known for among their students.]",
  },
  {
    slug: "placeholder-tutor-2",
    name: "[Tutor name]",
    gender: "female",
    photo: null,
    credentials: ["[Ijazah, riwayah and chain]", "[Degree or institution]"],
    yearsTeaching: 0,
    languages: ["English", "Urdu"],
    teaches: ["qaida", "recitation", "female"],
    bio: "[Two sentences: where they studied, who they studied under, and what they are known for among their students.]",
  },
  {
    slug: "placeholder-tutor-3",
    name: "[Tutor name]",
    gender: "female",
    photo: null,
    credentials: ["[Ijazah, riwayah and chain]", "[Degree or institution]"],
    yearsTeaching: 0,
    languages: ["English", "Urdu", "Punjabi"],
    teaches: ["hifz", "female", "islamicStudies"],
    bio: "[Two sentences: where they studied, who they studied under, and what they are known for among their students.]",
  },
  {
    slug: "placeholder-tutor-4",
    name: "[Tutor name]",
    gender: "male",
    photo: null,
    credentials: ["[Ijazah, riwayah and chain]", "[Degree or institution]"],
    yearsTeaching: 0,
    languages: ["English", "Arabic", "Urdu"],
    teaches: ["arabic", "islamicStudies"],
    bio: "[Two sentences: where they studied, who they studied under, and what they are known for among their students.]",
  },
];

export interface Testimonial {
  /** First name plus last initial. Anonymous reviews read as placeholder copy. */
  name: string;
  country: string;
  /** Course key, so the reader knows what was actually taught. */
  course: string;
  /** ISO date. An undated review is not evidence of anything. */
  date: string;
  quote: string;
  /** Written permission on file to publish name, country and course. */
  consentOnFile: boolean;
}

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    name: "[First name + initial]",
    country: "[Country]",
    course: "tajweed",
    date: "2026-01-01",
    quote: "[What they were struggling with, what changed, and over what period.]",
    consentOnFile: false,
  },
  {
    name: "[First name + initial]",
    country: "[Country]",
    course: "qaida",
    date: "2026-01-01",
    quote: "[What they were struggling with, what changed, and over what period.]",
    consentOnFile: false,
  },
  {
    name: "[First name + initial]",
    country: "[Country]",
    course: "hifz",
    date: "2026-01-01",
    quote: "[What they were struggling with, what changed, and over what period.]",
    consentOnFile: false,
  },
  {
    name: "[First name + initial]",
    country: "[Country]",
    course: "female",
    date: "2026-01-01",
    quote: "[What they were struggling with, what changed, and over what period.]",
    consentOnFile: false,
  },
  {
    name: "[First name + initial]",
    country: "[Country]",
    course: "arabic",
    date: "2026-01-01",
    quote: "[What they were struggling with, what changed, and over what period.]",
    consentOnFile: false,
  },
];

/**
 * Whether to show the placeholder cards at all.
 *
 * Preview and local builds show them so the layout can be reviewed. Production
 * shows the honest fallback instead, so unverified content cannot reach a
 * visitor even if someone forgets this file exists.
 */
export const showPlaceholderPeople = import.meta.env.DEV || import.meta.env.MODE !== "production";

export const tutorsArePublishable = TUTORS_VERIFIED;
export const testimonialsArePublishable =
  TESTIMONIALS_VERIFIED && TESTIMONIALS.every((t) => t.consentOnFile);
