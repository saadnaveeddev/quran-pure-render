import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/**
 * The icon set. Drawn from manuscript and madrasa vocabulary rather than
 * generic mosque-and-crescent shapes — and explicitly not emoji, whose glyphs
 * are supplied by the visitor's OS and therefore outside our control.
 *
 * 24×24, 1.5px stroke, no fills, inherits `currentColor`.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ className, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---- Course icons (7) ---- */

/** Noorani Qaida — the alif letterform held in a ruled frame. */
export function IconQaida(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M12 6.8v10.4" />
      <path d="M10.4 17.2h3.2" />
    </Icon>
  );
}

/** Quran Recitation — an open mushaf resting on a rehal. */
export function IconRecitation(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 7.6c-1.7-1.2-3.9-1.8-6.4-1.8v8.6c2.5 0 4.7.6 6.4 1.8" />
      <path d="M12 7.6c1.7-1.2 3.9-1.8 6.4-1.8v8.6c-2.5 0-4.7.6-6.4 1.8" />
      <path d="M12 7.6v8.6" />
      <path d="m7 17.4 10 4.2" />
      <path d="M17 17.4 7 21.6" />
    </Icon>
  );
}

/** Tajweed — the reed pen (qalam) with the arcs of an articulated sound. */
export function IconTajweed(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m5.4 20.6 1-3.2 8.4-8.4 2.2 2.2-8.4 8.4z" />
      <path d="m6.4 17.4 2.2 2.2" />
      <path d="M16.4 6.6c1.5 1.7 1.5 4 0 5.7" />
      <path d="M19 4.4c2.6 3 2.6 7.5 0 10.5" />
    </Icon>
  );
}

/** Hifz — stacked ajza' with a bookmark ribbon marking the day's portion. */
export function IconHifz(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="15.6" width="16" height="4.4" />
      <rect x="5.2" y="11.2" width="13.6" height="4.4" />
      <rect x="6.4" y="6.8" width="11.2" height="4.4" />
      <path d="M14.4 6.8v7.4l-1.6-1.4-1.6 1.4V6.8" />
    </Icon>
  );
}

/** Islamic Studies — a muqarnas arch fragment. */
export function IconIslamicStudies(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.4 20.8v-7.6c0-2.9 3.3-5.2 8.6-9.2 5.3 4 8.6 6.3 8.6 9.2v7.6" />
      <path d="M8.6 20.8v-3.9c0-1.5 1.5-2.5 3.4-4.2 1.9 1.7 3.4 2.7 3.4 4.2v3.9" />
      <path d="M2.6 20.8h18.8" />
    </Icon>
  );
}

/** Arabic Language — an interlocking girih tile. */
export function IconArabic(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.4 20.6 12 12 20.6 3.4 12z" />
      <path d="M6.5 6.5h11v11h-11z" />
    </Icon>
  );
}

/** Female classes — the rosette carrying an inner eight-point star. */
export function IconFemaleClasses(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.4 17.6 12 12 17.6 6.4 12z" />
      <path d="M8.1 8.1h7.8v7.8H8.1z" />
    </Icon>
  );
}

/* ---- Feature icons (6) ---- */

/** Certified tutors — an Ijazah seal with its ribbon. */
export function IconIjazah(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.2 2.8h5.6l3.7 3.7v5.6l-3.7 3.7H9.2l-3.7-3.7V6.5z" />
      <path d="M9.6 8.4h4.8" />
      <path d="M9.6 11.2h3.2" />
      <path d="M9.6 15.8v5.4l2.4-1.8 2.4 1.8v-5.4" />
    </Icon>
  );
}

/** Flexible timing — the ring of an astrolabe with its rule. */
export function IconAstrolabe(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.8" />
      <circle cx="12" cy="12" r="5.2" />
      <path d="m5.8 18.2 12.4-12.4" />
      <path d="M12 1.4v1.8M12 20.8v1.8M1.4 12h1.8M20.8 12h1.8" />
    </Icon>
  );
}

/** One-on-one — two rehals set facing each other. */
export function IconOneToOne(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2.4 11.4h8.2" />
      <path d="m3.4 12.4 6 8.2" />
      <path d="m9.4 12.4-6 8.2" />
      <path d="M13.4 11.4h8.2" />
      <path d="m14.4 12.4 6 8.2" />
      <path d="m20.4 12.4-6 8.2" />
      <path d="M12 3.4v4.8" />
    </Icon>
  );
}

/** Platform — a screen with the arch of a madrasa niche inside it. */
export function IconPlatform(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.8" y="3.6" width="18.4" height="13.2" />
      <path d="M8.6 14v-3c0-2 1.5-3.5 3.4-3.5s3.4 1.5 3.4 3.5v3" />
      <path d="M12 16.8v3.6" />
      <path d="M8.8 20.4h6.4" />
    </Icon>
  );
}

/** Free trial — the rosette drawn with an open gap: an invitation, not a seal. */
export function IconFreeTrial(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15.4 3.7a9 9 0 1 0 4.9 5" />
      <path d="M12 7 17 12l-5 5-5-5z" />
    </Icon>
  );
}

/** Siblings discount — three rosettes, one household. */
export function IconSiblings(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="7.4" r="4.2" />
      <circle cx="6.2" cy="16.4" r="3.4" />
      <circle cx="17.8" cy="16.4" r="3.4" />
      <path d="M12 5.2v4.4M9.8 7.4h4.4" />
    </Icon>
  );
}

/* ---- Registry ---- */

export const COURSE_ICONS = {
  qaida: IconQaida,
  recitation: IconRecitation,
  tajweed: IconTajweed,
  hifz: IconHifz,
  islamicStudies: IconIslamicStudies,
  arabic: IconArabic,
  female: IconFemaleClasses,
} as const;

export type CourseIconName = keyof typeof COURSE_ICONS;
