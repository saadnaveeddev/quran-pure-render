/**
 * Tutors and testimonials.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  READ THIS BEFORE THE SITE GOES LIVE
 * ─────────────────────────────────────────────────────────────────────────
 * The entries below are DUMMY DATA for layout review. They are not real
 * people and must be replaced with consented, attributable profiles before
 * launch.
 *
 *   - `TUTORS_VERIFIED` and `TESTIMONIALS_VERIFIED` must stay `false` until
 *     each entry has been replaced with a real one.
 *   - While they are `false`, production renders an honest alternative
 *     instead of these cards, and no Person / Review structured data is
 *     emitted. Preview builds still render the cards so the design can be
 *     reviewed.
 *   - Flipping either flag to `true` with dummy data still in place is
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
    slug: "imran-hassan",
    name: "Imran Hassan",
    gender: "male",
    photo: null,
    credentials: [
      "Ijazah in Hafs ‘an ‘Asim — Sheikh Abdullah al-Khalili",
      "BA Islamic Studies, International Islamic University Islamabad",
    ],
    yearsTeaching: 12,
    languages: ["English", "Urdu"],
    teaches: ["tajweed", "recitation", "hifz"],
    bio: "Studied tajweed and Hifz in Madinah and Islamabad, and has taught one-to-one online for over a decade. Parents usually ask for him when a student needs firm correction without losing confidence.",
  },
  {
    slug: "fatima-zahra",
    name: "Fatima Zahra",
    gender: "female",
    photo: null,
    credentials: [
      "Ijazah in Hafs ‘an ‘Asim — Ustadha Maryam Siddiqui",
      "Completed Noorani Qaida teacher training, Al-Huda",
    ],
    yearsTeaching: 9,
    languages: ["English", "Urdu"],
    teaches: ["qaida", "recitation", "female"],
    bio: "Specialises in absolute beginners, including children as young as five and adult women starting from the alphabet. Known for keeping young students on camera and on task without raising her voice.",
  },
  {
    slug: "ayesha-malik",
    name: "Ayesha Malik",
    gender: "female",
    photo: null,
    credentials: [
      "Hafiza of the Quran with sanad in Hafs",
      "Diploma in Islamic Studies, Jamia Aisha",
    ],
    yearsTeaching: 11,
    languages: ["English", "Urdu", "Punjabi"],
    teaches: ["hifz", "female", "islamicStudies"],
    bio: "Memorised the Quran as a teenager and now guides girls and women through structured Hifz with daily revision plans. Families often keep her for both memorisation and a weekly fiqh circle.",
  },
  {
    slug: "yusuf-rahman",
    name: "Yusuf Rahman",
    gender: "male",
    photo: null,
    credentials: [
      "Ijazah in Arabic grammar — Sheikh Ibrahim al-Masri",
      "MA Arabic Language, University of Punjab",
    ],
    yearsTeaching: 8,
    languages: ["English", "Arabic", "Urdu"],
    teaches: ["arabic", "islamicStudies"],
    bio: "Teaches Quranic Arabic by working through short passages rather than abstract rule lists. Adult students who want to understand what they recite usually request him after the trial.",
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
    name: "Sarah K.",
    country: "United Kingdom",
    course: "tajweed",
    date: "2025-11-12",
    quote:
      "I had been reciting for twenty years with mistakes nobody ever corrected. After four months of tajweed classes, I can hear the difference in my own prayer — and so can my children.",
    consentOnFile: false,
  },
  {
    name: "Omar R.",
    country: "United States",
    course: "qaida",
    date: "2025-09-03",
    quote:
      "My six-year-old went from refusing to sit still to reading full lines of Qaida in under five months. The tutor never rushed him, and that patience is why he stuck with it.",
    consentOnFile: false,
  },
  {
    name: "Nadia H.",
    country: "Canada",
    course: "hifz",
    date: "2025-10-21",
    quote:
      "We tried two Hifz programmes before this one. What changed was the revision plan — our daughter still holds the first five juz a year later, which never happened for us before.",
    consentOnFile: false,
  },
  {
    name: "Amina S.",
    country: "Australia",
    course: "female",
    date: "2025-08-18",
    quote:
      "I specifically needed a female tutor and a camera-off option. Both were respected from the first trial, and I finished Qaida as an adult without feeling self-conscious once.",
    consentOnFile: false,
  },
  {
    name: "Bilal M.",
    country: "United Arab Emirates",
    course: "arabic",
    date: "2026-01-09",
    quote:
      "I wanted to understand short surahs, not pass an exam. Six months in, I can follow the meaning of Juz Amma without a translation open beside me.",
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
