import type { FaqItem } from "@/components/site/Disclosure";
import type { CourseKey } from "@/content/courses";
import type { CurrencyCode } from "@/content/pricing";

/**
 * Shape for the audience and country landing pages.
 *
 * These pages exist to capture intents that `/courses` collapses together
 * ("Quran classes for kids", "online Quran classes UK"). Each one must carry
 * genuinely different content — a country name swapped into one shared
 * template is a doorway page, which is a manual-action risk rather than a
 * ranking shortcut.
 */

export interface LandingSection {
  /** Real information, not an all-caps echo of the heading. */
  label?: string;
  heading: string;
  paragraphs: ReadonlyArray<string>;
  list?: ReadonlyArray<string>;
}

export interface LandingPage {
  path: string;
  breadcrumbLabel: string;
  heroLabel: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  sections: ReadonlyArray<LandingSection>;
  /** Country pages: class times expressed in the reader's own clock. */
  slotTable?: {
    caption: string;
    head: ReadonlyArray<string>;
    rows: ReadonlyArray<ReadonlyArray<string>>;
  };
  /** Country pages: which currency the fee examples should default to. */
  currency?: CurrencyCode;
  faqs: ReadonlyArray<FaqItem>;
  relatedCourses: ReadonlyArray<CourseKey>;
  closing: { title: string; body: string; action: string };
  lastUpdated: string;
}
