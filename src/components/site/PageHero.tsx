import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { RosetteDivider } from "@/components/manuscript/Rosette";

export interface BreadcrumbLink {
  label: string;
  to: string;
}

/** Visible breadcrumb trail. Pair with `buildBreadcrumbSchema` on the same items. */
export function Breadcrumbs({ items }: { items: ReadonlyArray<BreadcrumbLink> }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-ink-soft">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.to} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-ink">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="underline-offset-4 hover:text-lapis hover:underline">
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-gold">
                  ·
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Inner-page opening band. Renders the page H1 and, below it, the single
 * contextual CTA for that page.
 */
export function PageHero({
  label,
  title,
  intro,
  breadcrumbs,
  actions,
}: {
  label?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumbs?: ReadonlyArray<BreadcrumbLink>;
  actions?: ReactNode;
}) {
  return (
    <header className="border-b border-rule bg-paper-warm">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <div className="mt-8 max-w-3xl">
          {label && <p className="text-caption mb-3 text-gold-ink">{label}</p>}
          <h1 className="text-display-l text-balance text-ink">{title}</h1>
          {intro && <p className="measure mt-5 text-pretty text-body-l text-ink-soft">{intro}</p>}
          {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
        <RosetteDivider className="mt-12" />
      </div>
    </header>
  );
}
