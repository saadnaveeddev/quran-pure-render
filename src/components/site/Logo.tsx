import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-2.5 sm:gap-3", className)}
      aria-label={SITE.name}
    >
      <img
        src={SITE.logoIconPath}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
        aria-hidden="true"
      />
      <span className="flex flex-col gap-0.5 leading-none">
        <span className="font-display text-[0.9rem] font-semibold uppercase tracking-[0.14em] text-primary sm:text-base">
          My Quran
        </span>
        <span className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[0.68rem]">
          <span className="h-px w-3 bg-gold/70" aria-hidden="true" />
          Guide
          <span className="h-px w-3 bg-gold/70" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}
