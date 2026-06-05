import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost";
type Size = "default" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-emerald text-primary-foreground shadow-card motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.01]",
  gold: "bg-gold text-gold-foreground shadow-gold motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.01]",
  outline:
    "border border-primary/30 bg-background/70 text-primary backdrop-blur-sm hover:bg-secondary/80",
  ghost: "bg-transparent text-foreground hover:bg-secondary/70",
};

const sizes: Record<Size, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

interface Props {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function CTAButton({
  children,
  to,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
  type = "button",
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
