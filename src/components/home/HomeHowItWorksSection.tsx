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
          <div
            key={step.n}
            className="group card-sweep rounded-2xl p-7 motion-safe:hover:-translate-y-1"
          >
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gold font-display text-xl font-semibold text-gold-foreground transition-colors duration-300 group-hover:bg-primary-foreground group-hover:text-primary">
              {step.n}
            </span>
            <h3 className="relative z-10 mt-5 text-lg text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
              Step {step.n} — {step.title}
            </h3>
            <p className="relative z-10 mt-3 text-[0.95rem] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/88">
              {step.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CTAButton to="/free-trial">Book My Free Trial Class Now</CTAButton>
      </div>
    </Section>
  );
}
