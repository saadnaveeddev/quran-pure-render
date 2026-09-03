import { Section, SectionHeading } from "@/components/site/Section";
import { RosetteNumeral } from "@/components/manuscript/Rosette";
import { ORG_FACTS } from "@/lib/site";

const STEPS = [
  {
    title: "Book Your Free Trial",
    body: "Click the free trial button, share your name and preferred timing — we confirm your 2-day trial within 24 hours.",
  },
  {
    title: "Get Matched with Your Tutor",
    body: "Based on age, level, and your preference for a male or female tutor, we match you with the most suitable teacher on our team.",
  },
  {
    title: "Start Learning from Home",
    body: `Join your class on ${ORG_FACTS.platforms.join(", ")} and begin your Quran learning journey.`,
  },
];

export function HomeHowItWorks() {
  return (
    <Section tone="warm" ruled>
      <SectionHeading label="3 simple steps" title="Start Learning Quran Online in 3 Simple Steps" />
      <ol className="mt-14 grid gap-10 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <li key={step.title}>
            <RosetteNumeral value={i + 1} />
            <h3 className="text-h3 mt-5 text-ink">{step.title}</h3>
            <p className="mt-3 text-pretty text-[0.9375rem] text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
