import { Section, SectionHeading } from "@/components/site/Section";
import { Faq } from "@/components/site/Disclosure";
import { homeFaqs } from "@/content/faqs";

export function HomeFaq() {
  return (
    <Section tone="warm" ruled>
      <SectionHeading
        label="Common questions answered"
        title="Online Quran Classes — Common Questions Answered"
      />
      <div className="mt-12">
        <Faq items={homeFaqs} group="home-faq" />
      </div>
    </Section>
  );
}
