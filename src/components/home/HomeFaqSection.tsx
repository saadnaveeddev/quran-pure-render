import { FAQ, type FaqItem } from "@/components/site/FAQ";
import { Section, SectionHeading } from "@/components/site/Section";

export function HomeFaqSection({ items }: { items: ReadonlyArray<FaqItem> }) {
  return (
    <Section>
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Online Quran Classes — Common Questions Answered"
      />
      <div className="mt-12">
        <FAQ items={items} />
      </div>
    </Section>
  );
}
