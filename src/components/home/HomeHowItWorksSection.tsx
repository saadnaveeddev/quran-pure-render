import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";

const steps = [
  { n: "1", title: "Book Your Free Trial", body: "Click the free trial button, fill in your name and preferred timing, and we will confirm your 2-day free trial class within 24 hours." },
  { n: "2", title: "Get Matched with Your Tutor", body: "Based on your age, level, and preference for a male or female tutor, we match you with the most suitable certified teacher from our team." },
  { n: "3", title: "Start Learning from Home", body: "Join your class on Zoom, Skype, or Google Meet — whichever you prefer — and begin your Quran learning journey with My Quran Guide today." },
];

export function HomeHowItWorksSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How It Works"
        title="Start Learning Quran Online in 3 Simple Steps"
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.n} className="relative surface-card rounded-2xl p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground font-display text-xl font-semibold">
              {step.n}
            </span>
            <h3 className="mt-5 text-lg text-foreground">Step {step.n} — {step.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CTAButton to="/free-trial">Book My Free Trial Class Now</CTAButton>
      </div>
    </Section>
  );
}
