import type { ReactNode } from "react";
import { Check } from "lucide-react";

/** Inner-page hero band. */
export function PageHero({
  title,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 text-center sm:px-8 sm:py-12">
        <h1 className="font-display text-3xl text-foreground sm:text-4xl">{title}</h1>
      </div>
    </section>
  );
}

/** Bulleted list with emerald check marks. */
export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={className ?? "space-y-3"}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-muted-foreground">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Simple data table styled to match the design system. */
export function DataTable({
  head,
  rows,
}: {
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl surface-card">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-secondary/65">
              {head.map((h, i) => (
                <th key={i} className="px-5 py-4 font-semibold text-secondary-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-t border-border">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={
                      ci === 0
                        ? "px-5 py-4 font-medium text-foreground"
                        : "px-5 py-4 text-muted-foreground"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
