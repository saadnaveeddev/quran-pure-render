import { CTAButton } from "@/components/site/CTAButton";
import { Section, SectionHeading } from "@/components/site/Section";

export function HomeFinalCtaSection() {
  return (
    <Section tone="emerald">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          inverted
          title="Start Your Quran Learning Journey Today — 2 Days Completely Free"
          intro="There has never been a better time to start learning the Quran. With My Quran Guide, you get certified tutors, flexible timings, one-on-one or group classes, and a 2-day free trial with zero risk. Join thousands of students and families who have already chosen My Quran Guide as their trusted online Quran academy."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CTAButton to="/free-trial" variant="gold" size="lg">Start My Free Trial Now</CTAButton>
          <CTAButton to="/courses" size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
            View All Courses
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
