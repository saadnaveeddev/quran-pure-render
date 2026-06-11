import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";

export interface BreadcrumbLink {
  label: string;
  to: string;
}

/** Accessible visible breadcrumb trail (pairs with BreadcrumbList JSON-LD). */
function Breadcrumbs({ items }: { items: BreadcrumbLink[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.to} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <ChevronRight className="h-3.5 w-3.5 text-border" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Inner-page hero band. Renders the page H1 by default; pass `as="p"` on pages
 * that already contain their own keyword-rich <h1> in the body so the document
 * keeps exactly one H1 with a correct heading hierarchy.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  intro,
  breadcrumbs,
  as = "h1",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  intro?: ReactNode;
  breadcrumbs?: BreadcrumbLink[];
  as?: "h1" | "p";
}) {
  const Title = as;
  return (
    <section className="border-y border-border bg-gradient-to-r from-secondary/50 via-background to-secondary/40">
      <div className="mx-auto w-full max-w-3xl px-5 py-10 text-center sm:px-8 sm:py-12">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
        )}
        <Title className="font-display text-3xl text-primary sm:text-4xl">{title}</Title>
        {subtitle && (
          <p className="mt-3 text-base font-medium text-secondary-foreground">{subtitle}</p>
        )}
        {intro && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
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
