import { Section, SectionHeading } from "@/components/site/Section";
import { TestimonialsSection, TutorsSection } from "@/components/site/Trust";

export function HomeTutors() {
  return (
    <Section ruled>
      <SectionHeading
        label="Why My Quran Guide"
        title="Why My Quran Guide Is the Right Choice for Your Family"
        intro="Every tutor is certified from Quran-teaching institutes and has 8+ years of hands-on classroom experience. You pick the day and time. Classes run on Zoom, Skype or Google Meet."
      />
      <TutorsSection limit={4} />
    </Section>
  );
}

export function HomeTestimonials() {
  return (
    <Section tone="warm" ruled>
      <SectionHeading label="Trusted by families around the world" title="What Our Students Say" />
      <TestimonialsSection />
    </Section>
  );
}
