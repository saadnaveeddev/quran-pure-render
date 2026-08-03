import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The ayah-marker rosette — the site's single signature device.
 *
 * In an illuminated mushaf a gold rosette separates one verse from the next.
 * Here it appears in exactly four contexts and nowhere else:
 *   1. `RosetteList`     — bullets on feature and credential lists
 *   2. `RosetteDivider`  — the divider between major page sections
 *   3. `RosetteNumeral`  — holding the numeral in "How it works" steps
 *   4. `Rosette animate` — the one-shot draw-in on a page's opening hero
 *                          (the home page and /thank-you, nowhere else)
 *
 * It is not a spare icon. If you reach for it as a card decoration, an empty
 * state, a success tick or an avatar placeholder, you are diluting the one
 * device that distinguishes this site — use type, a rule, or one of the
 * thirteen course icons in ./icons.tsx instead.
 */

/** Total stroke length of every path in the mark, used by the draw animation. */
const STROKE_LENGTH = 400;

export function Rosette({
  className,
  animate = false,
  title,
}: {
  className?: string;
  /** One-shot draw-in. Suppressed automatically under prefers-reduced-motion. */
  animate?: boolean;
  /** Supply only when the mark carries meaning on its own. */
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      className={cn(animate && "animate-rosette-draw", className)}
      style={animate ? ({ "--rosette-length": STROKE_LENGTH } as React.CSSProperties) : undefined}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <circle cx="16" cy="16" r="14.2" />
      <path d="M5.96 5.96h20.08v20.08H5.96z" />
      <path d="M16 1.8 30.2 16 16 30.2 1.8 16z" />
      <circle cx="16" cy="16" r="6.5" />
    </svg>
  );
}

/** Context 2 — a single centred rosette sitting on a hairline gold rule. */
export function RosetteDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-gold/45" />
      <Rosette className="h-6 w-6 shrink-0 text-gold" />
      <span className="h-px flex-1 bg-gold/45" />
    </div>
  );
}

/** Context 1 — feature lists. Replaces the emoji and generic disc bullets. */
export function RosetteList({
  items,
  className,
  itemClassName,
}: {
  items: ReadonlyArray<ReactNode>;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <li key={i} className={cn("flex items-start gap-3", itemClassName)}>
          <Rosette className="mt-[0.3em] h-3.5 w-3.5 shrink-0 text-gold" />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Context 3 — the step numeral sits inside the rosette's inner circle. */
export function RosetteNumeral({
  value,
  className,
}: {
  value: number | string;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-flex h-14 w-14 items-center justify-center", className)}>
      <Rosette className="absolute inset-0 h-full w-full text-gold" />
      <span className="text-data relative text-base text-ink">{value}</span>
    </span>
  );
}
