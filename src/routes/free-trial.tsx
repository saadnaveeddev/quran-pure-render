import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Faq } from "@/components/site/Disclosure";
import { SpecStrip } from "@/components/site/Spec";
import { RosetteList, RosetteNumeral } from "@/components/manuscript/Rosette";
import { Reveal } from "@/components/site/Reveal";
import { TrialForm } from "@/components/trial/TrialForm";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageSeo } from "@/lib/seo";
import { ORG_FACTS } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Free trial", to: "/free-trial" },
];

const faqs = [
  {
    q: "Can I choose any course for my free trial?",
    a: "Yes. You can choose any course for your free trial — Noorani Qaida, Quran Recitation, Tajweed, Hifz, Islamic Studies, Arabic Language, or Female Quran Classes. The choice is completely yours.",
  },
  {
    q: "Can I choose my class timing?",
    a: "Absolutely. You choose the day and time that works best for you. Morning, afternoon, evening, or weekend — we will schedule your free trial classes at your preferred timing.",
  },
  {
    q: "Can I choose a male or female tutor?",
    a: "Yes. Simply mention your preference in the booking form and we will match you with a tutor accordingly.",
  },
  {
    q: "What happens after my free trial, and what does it cost?",
    a: "After your 2 free trial classes, our team will follow up to ask about your experience. Plans start from $18/month, with no long-term contract required. There is absolutely no pressure — the decision is entirely yours.",
  },
  {
    q: "Can my child take the free trial?",
    a: "Yes. The free trial is available for students of all ages — including young children aged 5 and above. Many parents book a free trial for their child first to see how they respond before enrolling.",
  },
  {
    q: "Can I take the free trial more than once?",
    a: "The 2-day free trial is available once per student. However, every new member of your family is welcome to book their own free trial separately.",
  },
];

const glance = [
  { label: "Number of free classes", value: "2 complete classes" },
  { label: "Cost", value: "100% free — no payment required" },
  { label: "Credit card required", value: "No — never" },
  { label: "Class duration", value: "30 or 45 minutes" },
  { label: "Tutor gender", value: "Male or female — student chooses" },
  { label: "Platform", value: ORG_FACTS.platforms.join(", ") },
  { label: "Pricing after trial", value: "Plans start from $18/month" },
  { label: "Commitment after trial", value: "Zero — no obligation" },
  { label: "Who can apply", value: "New students only — once per student" },
];

const steps = [
  {
    n: 1,
    title: "Fill in the Form Below",
    body: "Tell us your name, email, WhatsApp number, the course you are interested in, your preferred tutor gender, and your available timing. It takes less than 2 minutes.",
  },
  {
    n: 2,
    title: "We Confirm Your Trial & Match Your Tutor",
    body: "Within a few hours, our team will contact you to confirm your 2 free trial classes and match you with the most suitable tutor based on your preferences.",
  },
  {
    n: 3,
    title: "Join Your Class & Start Learning",
    body: `At your chosen time, join your free trial class on ${ORG_FACTS.platforms.join(", ")} and begin your Quran learning journey — completely free, with zero pressure to enroll.`,
  },
];

export const Route = createFileRoute("/free-trial")({
  head: () => ({
    ...buildPageSeo({
      title: "Free Online Quran Trial - 2 Days Free | My Quran Guide",
      description:
        "Book a 2-day free trial online Quran class - 100% free, no card, no commitment. Pick any course, any timing, male or female tutor. Enroll now!",
      path: "/free-trial",
    }),
    scripts: [
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
      buildFaqSchema(faqs),
    ],
  }),
  component: FreeTrialPage,
});

function FreeTrialPage() {
  return (
    <>
      <PageHero
        label={`${ORG_FACTS.freeTrialClasses} classes, no card required`}
        title="Book Your 2-Day Free Trial Online Quran Class - My Quran Guide"
        intro="Have you been thinking about starting Quran classes for yourself or your child? Now there is absolutely no reason to wait. My Quran Guide offers every new student a 2-day free trial — two complete online Quran classes, at a timing that works for you, on any course you choose. 100% free. No credit card. No commitment. Just two classes to experience the My Quran Guide difference for yourself."
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Three steps, about two minutes"
              title="3 Simple Steps to Start Your Free Trial"
              intro="Complete the form and we will confirm your 2 free trial classes within a few hours."
            />
            <ol className="mt-10 space-y-8">
              {steps.map((s) => (
                <Reveal key={s.n} as="li" className="flex gap-5">
                  <RosetteNumeral value={s.n} className="shrink-0" />
                  <div>
                    <h3 className="text-h3 text-ink">{s.title}</h3>
                    <p className="measure mt-2 text-pretty text-ink-soft">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <div className="mt-12">
              <h3 className="text-h3 text-ink">Your 2-Day Free Trial Includes Everything</h3>
              <RosetteList
                className="mt-4 text-ink-soft"
                items={[
                  "2 complete online classes — not a demo, not a sales pitch. Real classes, real learning.",
                  "Any course — you choose: Noorani Qaida, Quran Recitation, Tajweed, Hifz, Islamic Studies, Arabic or Female Quran Classes.",
                  "Male or female tutor — you choose. Tell us your preference and we will match you.",
                  "Your timing — you decide. Morning, afternoon, evening or weekend.",
                  "Your platform — Zoom, Skype or Google Meet. No complicated setup required.",
                ]}
              />
            </div>
          </div>

          <div id="booking-form" className="lg:sticky lg:top-24 lg:self-start">
            <TrialForm />
          </div>
        </div>
      </Section>

      <Section tone="warm" ruled>
        <SectionHeading title="The trial at a glance" />
        <SpecStrip className="mt-10" columns={3} items={glance} />
      </Section>

      <Section ruled>
        <SectionHeading label="Free trial FAQ" title="Free Trial — Common Questions" />
        <Faq className="mt-10" items={faqs} group="trial-faq" />
      </Section>
    </>
  );
}
