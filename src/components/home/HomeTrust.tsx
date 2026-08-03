import { Section, SectionHeading } from "@/components/site/Section";
import { TestimonialsSection, TutorsSection } from "@/components/site/Trust";

export function HomeTutors() {
  return (
    <Section ruled>
      <SectionHeading
        label="The people teaching"
        title="You are choosing a tutor, not a platform"
        intro="The tutor who takes your trial class is the tutor who takes every class after it. Same person, same time, every week."
      />
      <TutorsSection limit={4} />
    </Section>
  );
}

export function HomeTestimonials() {
  return (
    <Section tone="warm" ruled>
      <SectionHeading label="From families we teach" title="What parents and students say" />
      <TestimonialsSection />
    </Section>
  );
}
