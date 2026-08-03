import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Faq } from "@/components/site/Disclosure";
import { SpecStrip } from "@/components/site/Spec";
import { TutorsSection } from "@/components/site/Trust";
import { RosetteList, RosetteNumeral } from "@/components/manuscript/Rosette";
import { Reveal } from "@/components/site/Reveal";
import { IconIjazah, IconFemaleClasses, IconOneToOne } from "@/components/manuscript/icons";
import { TUTORS, tutorsArePublishable } from "@/content/people";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageSeo, buildPersonSchema } from "@/lib/seo";
import { ORG_FACTS, whatsappUrl } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Tutors", to: "/tutors" },
];

/**
 * The vetting process, stated as steps we can actually evidence.
 *
 * This page carries most of the site's E-E-A-T weight. Describing a real
 * process is both more persuasive and more defensible than adjectives like
 * "highly qualified", which every competing site also claims.
 */
const vetting = [
  {
    n: 1,
    title: "Recitation assessment",
    body: "Every applicant recites for a senior tutor before anything else happens. Tajweed accuracy, makharij and fluency are judged by ear, because a certificate cannot tell you how someone actually sounds.",
  },
  {
    n: 2,
    title: "Credential check",
    body: "We ask to see the ijazah or degree itself, not a claim of one, and where an ijazah carries a chain we look at who it runs through. Anything we cannot verify is not something we will repeat to you.",
  },
  {
    n: 3,
    title: "Teaching trial",
    body: "Reciting well and teaching well are different skills. Applicants take observed lessons with real students, because a tutor who cannot hold a seven-year-old's attention is no use to you regardless of their qualification.",
  },
  {
    n: 4,
    title: "Ongoing observation",
    body: "Classes are observed periodically after hiring, and we act on parent feedback. A tutor who stops preparing does not stay on the roster.",
  },
];

const safeguards = [
  {
    icon: IconOneToOne,
    title: "Parents may observe any class",
    body: "No notice needed, no permission asked, no exceptions. If a class cannot be observed by a parent then it is not a class we would run.",
  },
  {
    icon: IconIjazah,
    title: "Credentials before the trial, not after",
    body: "Ask and we send the specific tutor's name and qualification before your first free class, so you decide with the information in front of you.",
  },
  {
    icon: IconFemaleClasses,
    title: "Tutor gender is honoured absolutely",
    body: "If you ask for a female tutor, every class is with a female tutor, including cover for absences. This is not something we quietly work around when scheduling is tight.",
  },
];

const askThese = [
  "What is your ijazah in, and in which riwayah?",
  "Who did you study under, and where?",
  "How long have you taught students of this age online?",
  "How would you handle it if my child falls behind the plan?",
  "What will you expect us to do between classes?",
];

const faqs = [
  {
    q: "Where are the tutors based?",
    a: `Our teaching staff are based in ${ORG_FACTS.tutorsBasedIn} and the administrative office is in ${ORG_FACTS.officeBasedIn}. Tutors teach in ${ORG_FACTS.teachingLanguages.join(", ")}, and all instruction with international students is delivered in English unless you ask otherwise.`,
  },
  {
    q: "Will my child have the same tutor every week?",
    a: "Yes. The tutor who takes your free trial is the tutor you continue with. Consistency matters more than almost anything else in Quran teaching, so we only change a tutor if you ask us to or if there is an unavoidable absence, in which case we tell you in advance.",
  },
  {
    q: "Can I ask for a female tutor?",
    a: "Yes, and it is honoured without exception, including for cover classes. Many families ask for this for daughters, for adult women, or as a household preference, and no explanation is ever required.",
  },
  {
    q: "What if the tutor is not the right fit?",
    a: "Tell us and we reassign, at no cost and without an awkward conversation. A mismatch of temperament is common and is nobody's fault; it is far better to change early than to let a child lose interest.",
  },
  {
    q: "Are the tutors DBS-checked or background-checked?",
    a: "DBS is a UK-specific scheme and does not apply to staff based outside the UK, so any provider claiming it for overseas tutors is misrepresenting what it is. What we do instead is verify identity and credentials directly, observe classes, and guarantee that a parent can watch any session at any time.",
  },
  {
    q: "Do tutors teach in English or Urdu?",
    a: `Both, plus Punjabi with some tutors. Tell us which you prefer when you book and we match accordingly. For children growing up outside ${ORG_FACTS.tutorsBasedIn}, we would normally recommend English-medium teaching so that explanations land properly.`,
  },
];

export const Route = createFileRoute("/tutors")({
  head: () => ({
    ...buildPageSeo({
      title: "Our Quran tutors and how we vet them | My Quran Guide",
      description:
        "How we assess, verify and observe every Quran tutor before they teach, what safeguards parents get, and the questions worth asking before you book a trial.",
      path: "/tutors",
    }),
    scripts: [
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
      buildFaqSchema(faqs),
      // Person entities are emitted only once the profiles are real. Marking up
      // placeholder people would be structured-data spam.
      ...(tutorsArePublishable
        ? TUTORS.map((t) =>
            buildPersonSchema({
              name: t.name,
              jobTitle: "Quran tutor",
              description: t.bio,
              credentials: t.credentials,
              knowsLanguage: t.languages,
              image: t.photo ?? undefined,
            }),
          )
        : []),
    ],
  }),
  component: TutorsPage,
});

function TutorsPage() {
  return (
    <>
      <PageHero
        label="Four checks before anyone teaches"
        title="Our tutors, and how we choose them"
        intro="You are being asked to hand your child, or your own recitation, to someone you have never met. This page explains exactly how we decide who teaches and what you are entitled to ask for."
        breadcrumbs={breadcrumbs}
        actions={
          <>
            <Button to="/free-trial" withChevron>
              Book two free classes
            </Button>
            <Button
              variant="secondary"
              href={whatsappUrl("Please send me the credentials of the tutor for my course.")}
            >
              Ask for credentials first
            </Button>
          </>
        }
      />

      <Section>
        <SectionHeading
          label="Every applicant, in order"
          title="How a tutor gets onto the roster"
          intro="Most applicants do not. The bar is recitation you would be happy for a child to imitate, plus the patience to teach it."
        />
        <ol className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
          {vetting.map((v) => (
            <Reveal key={v.n} as="li" className="flex gap-5">
              <RosetteNumeral value={v.n} className="shrink-0" />
              <div>
                <h3 className="text-h3 text-ink">{v.title}</h3>
                <p className="mt-2 text-pretty text-ink-soft">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="warm" ruled>
        <SectionHeading
          label="Three commitments"
          title="What you are entitled to, in every class"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {safeguards.map(({ icon: Icon, title, body }) => (
            <Reveal key={title} className="jadwal p-6">
              <Icon className="h-9 w-9 text-gold-ink" />
              <h3 className="text-h3 mt-4 text-ink">{title}</h3>
              <p className="mt-2 text-pretty text-[0.9375rem] text-ink-soft">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ruled>
        <SectionHeading
          title="The teaching staff"
          intro="Tell us the course and we will tell you who would teach it, before you commit to anything."
        />
        <TutorsSection />
      </Section>

      <Section tone="warm" ruled>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Five questions"
              title="What to ask any Quran tutor, including ours"
              intro="These are the questions that separate a trained teacher from someone who recites well. Ask them of us and of anyone else you are considering."
            />
            <RosetteList className="mt-8 text-ink-soft" items={askThese} />
            <p className="measure mt-6 text-pretty text-ink-soft">
              If a provider cannot answer the first two plainly, that is your answer. A real ijazah
              has a named riwayah and a named teacher behind it, and anyone who holds one is glad to
              say so.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-ink">The practical details</h2>
            <SpecStrip
              className="mt-6"
              columns={1}
              items={[
                { label: "Tutors based in", value: ORG_FACTS.tutorsBasedIn },
                { label: "Office and support", value: ORG_FACTS.officeBasedIn },
                {
                  label: "Teaching languages",
                  value: ORG_FACTS.teachingLanguages.join(", "),
                },
                { label: "Class format", value: "One-to-one, never grouped" },
                { label: "Platforms", value: ORG_FACTS.platforms.join(", ") },
                { label: "Tutor changes", value: "On request, at no cost" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section ruled>
        <SectionHeading label="Six questions" title="Questions parents ask us most" />
        <Faq className="mt-10" items={faqs} group="tutors-faq" />
      </Section>
    </>
  );
}
