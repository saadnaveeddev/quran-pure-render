import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Background tone */
  tone?: "default" | "muted" | "emerald" | "secondary";
}

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background",
  muted: "bg-muted/30",
  secondary: "bg-secondary/30",
  emerald: "bg-gradient-emerald text-primary-foreground",
};

export function Section({ children, className, id, tone = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20 lg:py-24",
        tone !== "emerald" && "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border/80 before:to-transparent",
        tones[tone],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

interface HeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  inverted = false,
  as = "h2",
}: HeadingProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
            inverted
              ? "bg-primary-foreground/15 text-primary-foreground"
              : "border border-border/80 bg-card/80 text-secondary-foreground backdrop-blur-sm",
          )}
        >
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
            "text-balance text-3xl leading-tight sm:text-4xl lg:text-[2.9rem]",
          as === "h1" && "text-4xl sm:text-5xl lg:text-6xl",
          inverted ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
            inverted ? "text-primary-foreground/85" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
