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
import { TUTOR_TIMEZONE_LABEL } from "@/lib/timezone";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Free trial", to: "/free-trial" },
];

const faqs = [
  {
    q: "Is the trial really free?",
    a: "Yes. Two full classes, no card details taken at any point, and no automatic enrolment afterwards. If you decide not to continue you simply tell us, and that is the end of it.",
  },
  {
    q: "How long until someone gets back to me?",
    a: `We reply ${ORG_FACTS.supportResponseTime} during working hours, usually on WhatsApp. The reply confirms your tutor, the exact date and time in your own timezone, and the joining link.`,
  },
  {
    q: "What happens in the two trial classes?",
    a: "The first is mostly assessment: the tutor listens to where the student is, checks letter recognition or recitation, and explains what the plan would look like. The second is a normal lesson, so you see the actual teaching rather than a sales pitch.",
  },
  {
    q: "Can I sit in on my child's trial class?",
    a: "Yes, and we would encourage it for the first one. Parents are welcome in any class at any time without notice — there is no session your child attends that you cannot observe.",
  },
  {
    q: "What if the time I picked does not work after all?",
    a: "Tell us and we will move it. Timings are not fixed until you are happy with them, and they can be changed later too as school terms and work patterns shift.",
  },
  {
    q: "Do I need to install anything?",
    a: `Classes run on ${ORG_FACTS.platforms.join(", ")}. Most families use whichever they already have. You need a device with a microphone, a reasonable internet connection, and a copy of the mushaf or Qaida, which we can also share on screen.`,
  },
];

const glance = [
  { label: "Free classes", value: `${ORG_FACTS.freeTrialClasses} full classes` },
  { label: "Cost", value: "None. No card required." },
  { label: "Class length", value: "30 or 45 minutes" },
  { label: "Tutor", value: "Male or female, your choice" },
  { label: "Platforms", value: ORG_FACTS.platforms.join(", ") },
  { label: "Tutor working hours", value: TUTOR_TIMEZONE_LABEL },
];

const steps = [
  {
    n: 1,
    title: "Tell us about the student",
    body: "Three short questions: who is learning, which course, and whether you want a male or female tutor. Nothing that commits you to anything.",
  },
  {
    n: 2,
    title: "We propose a time in your timezone",
    body: `We reply ${ORG_FACTS.supportResponseTime} with a named tutor and a specific slot converted to your own clock, so there is no ambiguity about when to log in.`,
  },
  {
    n: 3,
    title: "Attend both classes, then decide",
    body: "After the second class you either pick a schedule and start, or you tell us it is not right for you. Both answers are completely fine and neither costs anything.",
  },
];

export const Route = createFileRoute("/free-trial")({
  head: () => ({
    ...buildPageSeo({
      title: "Book 2 free Quran trial classes | My Quran Guide",
      description:
        "Book two free one-to-one Quran trial classes with a male or female tutor. No card details, no obligation, and we confirm the time in your own timezone.",
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
        title="Book your two free trial classes"
        intro="Two complete one-to-one classes with a tutor matched to the student — not a fifteen-minute demo. Answer three short questions and we will confirm a time in your own timezone."
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Three steps, about two minutes"
              title="What happens after you send this"
              intro="No call centre, no automated sequence. A person reads your answers and replies with a specific tutor and a specific time."
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
              <h3 className="text-h3 text-ink">What the trial includes</h3>
              <RosetteList
                className="mt-4 text-ink-soft"
                items={[
                  "Two full-length classes, not a demo or a sales call",
                  "Any of the seven courses, chosen by you",
                  "A male or female tutor, chosen by you",
                  "A written assessment of where the student is starting from",
                  "A recommended schedule and honest estimate of how long it will take",
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
        <SectionHeading label="Six common questions" title="Before you book" />
        <Faq className="mt-10" items={faqs} group="trial-faq" />
      </Section>
    </>
  );
}
