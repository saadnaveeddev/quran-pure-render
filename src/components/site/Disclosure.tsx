import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Collapsible content built on native <details>/<summary>.
 *
 * This is deliberately not a JS accordion. The answers must exist in the
 * initial server response or crawlers never see them — which costs the FAQPage
 * rich result, every long-tail FAQ keyword, and a third of the page's word
 * count. Native <details> also gives us keyboard operability and the correct
 * expanded/collapsed semantics for free.
 */

function DisclosureChevron() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-1 h-4 w-4 shrink-0 text-gold-ink transition-transform duration-200 group-open/d:rotate-90"
    >
      <path d="m6 3.5 4.5 4.5L6 12.5" />
    </svg>
  );
}

export function Disclosure({
  summary,
  children,
  /** Shared name makes a group behave as an exclusive accordion. */
  group,
  defaultOpen = false,
  className,
}: {
  summary: ReactNode;
  children: ReactNode;
  group?: string;
  defaultOpen?: boolean;
  className?: string;
}) {
  return (
    <details
      name={group}
      open={defaultOpen}
      className={cn("group/d border-b border-rule last:border-b-0", className)}
    >
      <summary className="flex items-start justify-between gap-4 py-5 text-left">
        <span className="text-h3 text-ink">{summary}</span>
        <DisclosureChevron />
      </summary>
      <div className="measure pb-6 text-pretty text-ink-soft">{children}</div>
    </details>
  );
}

export interface FaqItem {
  q: string;
  a: string;
}

/** FAQ list. Pair with `buildFaqSchema` on the same set of items. */
export function Faq({
  items,
  group = "faq",
  className,
}: {
  items: ReadonlyArray<FaqItem>;
  group?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-3xl border-t border-rule", className)}>
      {items.map((item) => (
        <Disclosure key={item.q} summary={item.q} group={group}>
          <p>{item.a}</p>
        </Disclosure>
      ))}
    </div>
  );
}
