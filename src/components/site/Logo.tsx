import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

export function Logo({
  className,
  /** Use on the ink footer, where the default ink type would disappear. */
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link to="/" className={cn("flex items-center gap-3", className)}>
      <img
        src={SITE.logoIconPath}
        alt={SITE.name}
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
      />
      {/* Decorative repeat of the alt text above — hidden so the link is
          announced once, not twice. */}
      <span aria-hidden="true" className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.0625rem] font-bold tracking-[-0.01em]",
            inverted ? "text-paper" : "text-ink",
          )}
        >
          My Quran Guide
        </span>
        <span
          className={cn(
            "text-[0.625rem] font-semibold uppercase tracking-[0.26em]",
            inverted ? "text-gold" : "text-gold-ink",
          )}
        >
          Online Quran Academy
        </span>
      </span>
    </Link>
  );
}
