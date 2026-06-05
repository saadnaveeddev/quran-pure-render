import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={className ?? "flex items-center gap-2.5"} aria-label={SITE.name}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-emerald text-primary-foreground shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path d="M16.5 3.5a8 8 0 1 0 4 6.9 6.5 6.5 0 1 1-4-6.9Z" fill="currentColor" />
          <path
            d="m18.2 8 .7 1.6 1.7.2-1.3 1.2.4 1.7-1.5-.9-1.5.9.4-1.7-1.3-1.2 1.7-.2.5-1.6Z"
            fill="var(--gold)"
          />
        </svg>
      </span>
      <span className="font-display text-lg font-semibold leading-none text-foreground">{SITE.name}</span>
    </Link>
  );
}
