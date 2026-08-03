import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Faq } from "@/components/site/Disclosure";
import { SpecStrip } from "@/components/site/Spec";
import { RosetteList } from "@/components/manuscript/Rosette";
import { Reveal } from "@/components/site/Reveal";
import { COURSE_LIST } from "@/content/courses";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageSeo } from "@/lib/seo";
import { ORG_FACTS, whatsappUrl } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

/**
 * Every claim on this page is one the academy can evidence.
 *
 * The previous version led with "500+ students taught" and "10+ years of
 * combined experience", neither of which is in ORG_FACTS and neither of which
 * a visitor can check. Unverifiable numbers are worth less than a specific
 * description of how something works, and they are a real liability on a site
 * asking parents for trust.
 */

const principles = [
  {
    title: "One student, one tutor",
    body: "Every class is one-to-one. Group classes are cheaper to run and we do not offer them, because a child who is embarrassed to make a mistake in front of other children stops trying, and an adult beginner will not recite at all.",
  },
  {
    title: "The same tutor each week",
    body: "Continuity is the single biggest predictor of whether a student keeps going. The tutor who takes your trial is the tutor you continue with, and we do not rotate staff to fill gaps in a timetable.",
  },
  {
    title: "Parents can watch anything",
    body: "Any class, any time, without asking. We would not run a session that a parent was not free to observe, and we think any provider unwilling to say that plainly should be asked why.",
  },
  {
    title: "We say what we do not know",
    body: "Where we cannot evidence a claim, it does not appear on this site. That is why you will not find a student counter or a star rating here until there is something real behind it.",
  },
];

const whoWeTeach = [
  {
    title: "Children starting from nothing",
    body: "Usually from around age five, beginning with letter recognition in the Qaida. Sessions are 30 minutes because that is genuinely how long a young child can concentrate, whatever a longer booking would earn us.",
  },
  {
    title: "Children and teenagers already reading",
    body: "Moving from decoding to fluency, correcting habits picked up early, and starting tajweed properly. This is where most families arrive when a weekend madrasah has taken them as far as it can.",
  },
  {
    title: "Adults returning to it",
    body: "Often people who learned as children, stopped, and are uncomfortable about how much they have lost. One-to-one means nobody hears the process except the tutor.",
  },
  {
    title: "New Muslims",
    body: "Starting at the alphabet with a tutor who expects no prior knowledge, will not assume cultural context, and will not make anyone feel behind.",
  },
];

const facts = [
  { label: "Teaching staff based in", value: ORG_FACTS.tutorsBasedIn },
  { label: "Office and support", value: ORG_FACTS.officeBasedIn },
  { label: "Teaching languages", value: ORG_FACTS.teachingLanguages.join(", ") },
  { label: "Class format", value: "One-to-one only" },
  { label: "Platforms", value: ORG_FACTS.platforms.join(", ") },
  { label: "Session lengths", value: "30 or 45 minutes" },
  { label: "Free trial", value: `${ORG_FACTS.freeTrialClasses} full classes` },
  { label: "Support response", value: ORG_FACTS.supportResponseTime },
  { label: "Courses offered", value: `${COURSE_LIST.length} courses` },
];

const faqs = [
  {
    q: "Who is behind My Quran Guide?",
    a: `The teaching staff are based in ${ORG_FACTS.tutorsBasedIn} and the administrative office is in ${ORG_FACTS.officeBasedIn}. If you want to know who specifically would teach you, ask and we will send that tutor's name and qualification before you book anything.`,
  },
  {
    q: "How many students have you taught?",
    a: "We do not publish a figure, because we would not be able to show you how it was counted. What we can tell you is exactly how classes run and who would teach them, and the two free classes let you judge the teaching directly rather than taking a number on trust.",
  },
  {
    q: "Do you teach a particular madhhab or school of thought?",
    a: "Recitation and tajweed are taught as they are transmitted, and are not a point of difference between schools. For Islamic studies, tell us your family's background and we will teach in line with it or keep to what is agreed across the schools, whichever you prefer.",
  },
  {
    q: "Are classes recorded?",
    a: "Not by default, for the students' privacy. If you would like your own classes recorded for revision, ask your tutor and they will arrange it. Parents are welcome to record their own child's sessions at any time.",
  },
  {
    q: "What happens if we need to pause for a while?",
    a: "Tell us and we pause the schedule. Travel, exams, illness and Ramadan all interrupt lessons and none of that costs you anything. Your slot is held where we reasonably can, and if it cannot be we will tell you honestly rather than quietly reassigning it.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    ...buildPageSeo({
      title: "About My Quran Guide and how our classes work",
      description:
        "How our one-to-one Quran classes are run, who we teach, what we will and will not claim, and the practical facts about the academy in one place.",
      path: "/about",
    }),
    scripts: [
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
      buildFaqSchema(faqs),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        label="Founded to remove three specific barriers"
        title="About My Quran Guide"
        intro="We teach the Quran one-to-one to families who cannot reach a good teacher locally, cannot find a female tutor, or cannot fit a fixed madrasah timetable around work and school."
        breadcrumbs={breadcrumbs}
        actions={
          <>
            <Button to="/free-trial" withChevron>
              Book two free classes
            </Button>
            <Button variant="secondary" to="/tutors">
              How we vet tutors
            </Button>
          </>
        }
      />

      <Section>
        <div className="measure mx-auto space-y-5 text-pretty text-body-l text-ink-soft">
          <p>
            Most families who find us have already tried something else. A weekend madrasah forty
            minutes away that a working parent cannot reliably reach. A class of twenty children
            where a quiet child can go a term without being heard recite. A relative teaching over
            the phone when they have time.
          </p>
          <p>
            None of those are bad options, and for some families they work well. But they fail in
            predictable ways, and the failures are almost always about consistency and attention
            rather than about the teaching itself. That is the specific problem this academy was
            built to solve, and it is why the format has not changed since: one student, one tutor,
            a fixed weekly slot, and a schedule built around your week rather than ours.
          </p>
        </div>
      </Section>

      <Section tone="warm" ruled>
        <SectionHeading
          label="Four things we hold to"
          title="How we run classes, and why"
          intro="These are commitments rather than aspirations. Each one costs us something, which is what makes it worth stating."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <Reveal key={p.title} className="jadwal p-6">
              <h3 className="text-h3 text-ink">{p.title}</h3>
              <p className="mt-2.5 text-pretty text-[0.9375rem] text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ruled>
        <SectionHeading label="Four kinds of student" title="Who we teach" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {whoWeTeach.map((w) => (
            <div key={w.title}>
              <h3 className="text-h3 text-ink">{w.title}</h3>
              <p className="mt-2 text-pretty text-ink-soft">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="warm" ruled>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Stated plainly"
              title="What we will not claim"
              intro="Everything on this site should be something you could check or something we could show you."
            />
            <RosetteList
              className="mt-8 text-ink-soft"
              items={[
                "No student counter, because we cannot show you how it was counted.",
                "No star rating, because there is no verified review corpus behind one.",
                "No stock photographs presented as our tutors or our students.",
                "No testimonial without a real name, country, course, date and written permission.",
                "No claim that a tutor is qualified without naming the qualification.",
              ]}
            />
            <p className="measure mt-6 text-pretty text-ink-soft">
              This costs us conversions against sites that do claim those things. We would rather
              carry that cost than have a parent find out later that a number was invented.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-ink">The academy in facts</h2>
            <SpecStrip className="mt-6" columns={1} items={facts} />
          </div>
        </div>
      </Section>

      <Section ruled>
        <SectionHeading label="Five questions" title="What people ask before enrolling" />
        <Faq className="mt-10" items={faqs} group="about-faq" />
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-balance text-paper">
            The two free classes are the actual evidence
          </h2>
          <p className="mt-5 text-pretty text-body-l text-paper/80">
            Not a demo and not a sales call. Two real lessons with the tutor you would continue
            with, after which you decide. Nothing is charged and no card is taken.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/free-trial" size="lg" withChevron>
              Book two free classes
            </Button>
            <Button
              href={whatsappUrl("Assalamu alaikum, I have a question about the academy.")}
              variant="secondary"
              size="lg"
              className="border-paper/35 text-paper hover:bg-paper/10"
            >
              Ask us a question first
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
