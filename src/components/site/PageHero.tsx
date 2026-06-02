import type { ReactNode } from "react";
import { Check } from "lucide-react";

/** Inner-page hero band. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
        {eyebrow && (
          <span className="mb-5 inline-flex items-center rounded-full bg-secondary px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="animate-fade-up text-balance text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
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
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-secondary/60">
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
