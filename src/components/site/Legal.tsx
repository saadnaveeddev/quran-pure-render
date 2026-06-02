import type { ReactNode } from "react";
import { Check } from "lucide-react";

export function LegalPage({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="space-y-6">{children}</div>
    </article>
  );
}

export function LH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="pt-6 text-2xl text-foreground sm:text-[1.7rem]">{children}</h2>
  );
}

export function LH3({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 text-lg text-foreground">{children}</h3>;
}

export function LP({ children }: { children: ReactNode }) {
  return (
    <p className="text-pretty text-[0.97rem] leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

export function LUL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-muted-foreground">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Simple two-column key/value card list, used for "Who we are" style blocks. */
export function LInfoList({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <dl className="divide-y divide-border">
        {rows.map(([k, v], i) => (
          <div key={i} className="grid gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-semibold text-foreground">{k}</dt>
            <dd className="text-sm text-muted-foreground sm:col-span-2">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
