import { Section, SectionHeading } from "@/components/site/Section";

export function HomeTestimonialSection() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="What Our Students Say"
        title="Trusted by Families Around the World"
        intro="Here is what parents, students, and new Muslims are saying about their experience with My Quran Guide:"
      />
      <figure className="mx-auto mt-12 max-w-2xl rounded-3xl surface-card p-8 text-center shadow-card sm:p-10">
        <div className="mb-4 text-2xl tracking-widest text-gold" aria-label="5 out of 5 stars">★★★★★</div>
        <blockquote className="text-pretty font-display text-xl leading-relaxed text-foreground sm:text-2xl">
          “My daughter started with Noorani Qaida and within 3 months she is reading the Quran on her own. The female tutor is so patient and kind. Highly recommend My Quran Guide to every Muslim family.”
        </blockquote>
        <figcaption className="mt-6 text-sm font-medium text-muted-foreground">— Sarah M., Mother of 2</figcaption>
      </figure>
    </Section>
  );
}
import { Section, SectionHeading } from "@/components/site/Section";

export function HomeTestimonialSection() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="What Our Students Say"
        title="Trusted by Families Around the World"
        intro="Here is what parents, students, and new Muslims are saying about their experience with My Quran Guide:"
      />
      <figure className="mx-auto mt-12 max-w-2xl rounded-3xl surface-card p-8 text-center shadow-card sm:p-10">
        <div className="mb-4 text-2xl tracking-widest text-gold" aria-label="5 out of 5 stars">
          ★★★★★
        </div>
        <blockquote className="text-pretty font-display text-xl leading-relaxed text-foreground sm:text-2xl">
          “My daughter started with Noorani Qaida and within 3 months she is reading the Quran on her own. The
          female tutor is so patient and kind. Highly recommend My Quran Guide to every Muslim family.”
        </blockquote>
        <figcaption className="mt-6 text-sm font-medium text-muted-foreground">— Sarah M., Mother of 2</figcaption>
      </figure>
    </Section>
  );
}
