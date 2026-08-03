import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Tone = "paper" | "warm" | "ink";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink-soft",
  warm: "bg-paper-warm text-ink-soft",
  ink: "bg-ink text-paper",
};

export function Section({
  children,
  className,
  id,
  tone = "paper",
  ruled = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: Tone;
  /** Adds the hairline gold rule that opens a new movement on the page. */
  ruled?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20 lg:py-24",
        tones[tone],
        ruled && "border-t border-gold/35",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
  align = "center",
  inverted = false,
  as = "h2",
}: {
  /**
   * Carries real information — a stage, a count, a level, an age range
   * ("Module 3 of 6", "For ages 5+"). Never an all-caps echo of the title
   * below it; if you can't add information, leave it out.
   */
  label?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  as?: "h1" | "h2";
}) {
  const Tag = as;

  return (
    <Reveal className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {label && (
        <p className={cn("text-caption mb-3", inverted ? "text-gold" : "text-gold-ink")}>{label}</p>
      )}
      <Tag
        className={cn(
          as === "h1" ? "text-display-l" : "text-h2",
          "text-balance",
          inverted ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-5 text-pretty text-body-l",
            align === "center" && "mx-auto",
            inverted ? "text-paper/80" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
