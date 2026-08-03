import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "quiet";
type Size = "default" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-[2px] font-sans font-semibold " +
  "transition-colors duration-[120ms] disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  // --lapis is the only interactive fill on the site.
  primary: "bg-lapis text-white hover:bg-lapis-lift",
  secondary: "border border-ink/25 bg-transparent text-ink hover:bg-gold-wash",
  quiet: "text-lapis underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  default: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-7 py-3.5 text-base",
};

/** 16px chevron. The only directional emphasis a label ever gets. */
function Chevron() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-[120ms] motion-safe:group-hover/btn:translate-x-0.5"
    >
      <path d="m6 3.5 4.5 4.5L6 12.5" />
    </svg>
  );
}

interface ButtonProps {
  children: ReactNode;
  /** Internal route. */
  to?: string;
  /** Path params for dynamic routes, e.g. `{ slug }` for /blog/$slug. */
  params?: Record<string, string>;
  /** External or hash href. */
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  withChevron?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  to,
  params,
  href,
  variant = "primary",
  size = "default",
  className,
  withChevron = false,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], variant !== "quiet" && sizes[size], className);
  const content = (
    <>
      {children}
      {withChevron && <Chevron />}
    </>
  );

  if (to) {
    return (
      <Link to={to} params={params} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
