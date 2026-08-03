import { Section, SectionHeading } from "@/components/site/Section";
import { RosetteNumeral } from "@/components/manuscript/Rosette";
import { ORG_FACTS } from "@/lib/site";

const STEPS = [
  {
    title: "Tell us who is learning and when",
    body: "Three short steps: who the student is, which course and what times suit them, and how to reach you. The form detects your time zone so the slots you are offered are in your own clock, not ours.",
  },
  {
    title: "We match a tutor and confirm the slot",
    body: `We reply ${ORG_FACTS.supportResponseTime} with a named tutor, their qualification, and two proposed class times. If you asked for a female tutor, that is who you are offered.`,
  },
  {
    title: "Take two free classes, then decide",
    body: "Both trial classes are real lessons with the tutor you would continue with. If the match is wrong we will reassign; if the fit is wrong you walk away having paid nothing.",
  },
];

export function HomeHowItWorks() {
  return (
    <Section tone="warm" ruled>
      <SectionHeading label="Three steps, about two minutes" title="How booking actually works" />
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
