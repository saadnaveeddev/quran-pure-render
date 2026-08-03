import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Replacements for the tables that were being used as page layout.
 *
 * A table is correct when both axes carry meaning — the per-class price grid,
 * the sibling discount tiers. It is wrong for a spec list or a feature set,
 * and it degrades badly on the phones most of this traffic arrives on.
 */

export interface SpecItem {
  label: string;
  value: ReactNode;
}

/** Definition list for "one subject, many attributes" content. */
export function SpecStrip({
  items,
  className,
  columns = 2,
}: {
  items: ReadonlyArray<SpecItem>;
  className?: string;
  columns?: 1 | 2 | 3;
}) {
  return (
    <dl
      className={cn(
        "grid gap-px border border-rule bg-rule",
        columns === 1 && "sm:grid-cols-1",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.label} className="bg-paper-warm px-5 py-4">
          <dt className="text-caption text-gold-ink">{item.label}</dt>
          <dd className="mt-1.5 text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Pill group for enumerable, non-hierarchical options. */
export function ChipGroup({
  items,
  className,
  label,
}: {
  items: ReadonlyArray<ReactNode>;
  className?: string;
  /** Accessible name for the group when it isn't preceded by a heading. */
  label?: string;
}) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className="rounded-[2px] border border-rule bg-paper-warm px-3.5 py-2 text-[0.9375rem] text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * A real table, for genuinely two-dimensional data only.
 * Figures are set in tabular mono so columns align down the page.
 */
export function DataTable({
  caption,
  head,
  rows,
  className,
}: {
  caption?: string;
  head: ReadonlyArray<string>;
  rows: ReadonlyArray<ReadonlyArray<ReactNode>>;
  className?: string;
}) {
  return (
    <div className={cn("overflow-x-auto border border-rule bg-paper-warm", className)}>
      <table className="w-full border-collapse text-left text-[0.9375rem]">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-gold/40">
            {head.map((h) => (
              <th key={h} scope="col" className="text-caption px-5 py-4 text-gold-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-rule last:border-b-0">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "px-5 py-4",
                    ci === 0 ? "font-medium text-ink" : "text-data text-ink-soft",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
