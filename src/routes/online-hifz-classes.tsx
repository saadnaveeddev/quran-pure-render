import { createFileRoute } from "@tanstack/react-router";
import { PageHero, DataTable, CheckList } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQ } from "@/components/site/FAQ";
import {
  buildBreadcrumbSchema,
  buildCourseSchema,
  buildFaqSchema,
  buildPageSeo,
} from "@/lib/seo";

const PATH = "/online-hifz-classes";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Hifz Program", to: PATH },
];

export const Route = createFileRoute("/online-hifz-classes")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Hifz Program — Quran Memorization Classes | My Quran Guide",
      description:
        "Join My Quran Guide's online Hifz program for kids & adults. Memorize the Quran with experienced Huffaz tutors. Structured plan, progress tracking & Hifz certificate. Start free today!",
      path: PATH,
    }),
    scripts: [
      buildFaqSchema(faqs),
      buildCourseSchema({
        name: "Online Hifz Program — Quran Memorization",
        description:
          "Memorize the Quran online with certified Huffaz tutors using the proven Sabaq-Sabaqi-Manzil system, progress tracking and an official Hifz certificate on completion.",
        path: PATH,
        workload: "PT45M",
      }),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: OnlineHifzClassesPage,
});

const overviewRows = [
  ["Course Name", "Online Hifz Program — Quran Memorization"],
  ["Suitable For", "Kids & Adults — All Ages"],
  ["Level", "Intermediate to Advanced"],
  ["Prerequisite", "Ability to read Quran with basic Tajweed"],
  ["Class Duration", "45 minutes per session (recommended)"],
  ["Days Per Week", "2, 3, 4, 5 or 6 days — Student Chooses"],
  ["Format", "One-on-One (strongly recommended for Hifz)"],
  ["Platform", "Zoom, Skype or Google Meet"],
  ["Tutor", "Experienced Hafiz/Hafiza Tutor"],
  ["Estimated Duration", "3 to 5 years full Hifz (flexible — student's own pace)"],
  ["Certificate", "Official Hifz Certificate upon completion"],
  ["Free Trial", "2 Days — 100% Free"],
];

const hifzSystem = [
  {
    title: "Sabaq — New Memorization",
    body: "Each class begins with the student reciting new verses memorized since the last class. The tutor listens carefully, corrects any mistakes, and guides the student through the new portion to be memorized.",
  },
  {
    title: "Sabaqi — Recent Revision",
    body: "The student revises the portions memorized in the last 7 to 10 classes. This keeps recent memorization fresh and prevents forgetting newly learned verses.",
  },
  {
    title: "Manzil — Old Revision",
    body: "The student revises older portions of the Quran previously memorized. This systematic revision ensures the entire memorized portion remains strong and does not fade over time.",
  },
];

const audiences = [
  {
    title: "Children (6-15)",
    body: "The ideal age to begin Hifz. Young minds memorize quickly and retain well. Our child-friendly Huffaz tutors make the journey engaging and motivating.",
  },
  {
    title: "Teenagers (16-18)",
    body: "Teenagers can absolutely complete Hifz with dedication and the right guidance. Many of our teenage students have achieved full Hifz with our program.",
  },
  {
    title: "Adults (18+)",
    body: "It is never too late to memorize the Quran. Adult students at My Quran Guide have successfully memorized partial or full Quran with our structured program.",
  },
];

const whyChoose = [
  "Experienced certified Huffaz tutors — male and female",
  "Proven Sabaq-Sabaqi-Manzil memorization system",
  "One-on-one personalized Hifz sessions",
  "Regular progress tracking and parent updates for child students",
  "Flexible schedule — 2 to 6 days per week",
  "Official Hifz certificate upon successful completion",
  "Supportive, patient, and encouraging tutors",
  "2-day free trial — start before you commit",
];

const faqs = [
  {
    q: "Q1: What is the minimum age to start Hifz?",
    a: "We recommend starting Hifz from age 6 to 7 when the child can comfortably read the Quran. However, students of all ages are welcome in our program.",
  },
  {
    q: "Q2: How long does it take to complete full Hifz?",
    a: "Full Hifz typically takes 3 to 5 years depending on the student's age, frequency of classes, and daily revision habits. Some dedicated students complete it faster. We never rush — quality of memorization is always the priority.",
  },
  {
    q: "Q3: My child has never memorized Quran before — can they start?",
    a: "Yes. Any student who can read the Quran with basic Tajweed can begin our Hifz program. Our tutors will assess the student's readiness at the free trial class and advise accordingly.",
  },
  {
    q: "Q4: Do I need to revise daily outside of class?",
    a: "Yes. Daily revision outside of class is essential for successful Hifz. Our tutors will guide students on how much to revise daily and provide a revision plan tailored to each student's capacity.",
  },
  {
    q: "Q5: Will my child receive a Hifz certificate?",
    a: "Yes. Students who successfully complete the full memorization of the Quran at My Quran Guide receive an official Hifz certificate — a proud milestone for the student and the entire family.",
  },
];

function OnlineHifzClassesPage() {
  return (
    <>
      <PageHero as="p" title="Online Hifz Program" breadcrumbs={breadcrumbs} />

      <Section>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          MY QURAN GUIDE
        </p>
        <h1 className="mx-auto mt-8 max-w-5xl text-balance text-center text-3xl leading-tight text-foreground sm:text-4xl">
          Online Hifz Program — Memorize the Quran with Certified Huffaz Tutors | My Quran Guide
        </h1>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="WHAT IS HIFZ?" title="What Is Hifz?" />
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            Hifz is the Arabic word for memorization — specifically, the memorization of the complete Quran. A person who has memorized the entire Quran is called a Hafiz (male) or Hafiza (female). Completing Hifz is considered one of the greatest achievements and honors in a Muslim&apos;s life, and carries immense reward both in this world and the hereafter.
          </p>
          <p>
            At My Quran Guide, our online Hifz program is guided by experienced Huffaz tutors who use a proven, structured memorization system to help students — both children and adults — memorize the Quran at their own comfortable pace, from the comfort of their home.
          </p>
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/contact" variant="outline" size="lg">
            &gt;&gt;&gt; Contact Us to Discuss Your Hifz Journey &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="COURSE OVERVIEW" title="Course Overview" />
        <div className="mt-10">
          <DataTable head={["Detail", "Information"]} rows={overviewRows} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="OUR HIFZ SYSTEM" title="How We Structure the Hifz Program" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {hifzSystem.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{item.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
          <h3 className="text-lg text-foreground">Why This System Works</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
            The Sabaq-Sabaqi-Manzil system is the most proven and time-tested Hifz method used by traditional Islamic institutions worldwide. At My Quran Guide, we apply this same structure in our online Hifz classes to ensure every student builds strong, lasting memorization.
          </p>
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Hifz Trial &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="WHO IS THIS COURSE FOR?" title="Who Is This Course For?" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{audience.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{audience.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="WHY CHOOSE MY QURAN GUIDE FOR HIFZ?"
          title="Why Choose My Quran Guide For Hifz?"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <CheckList items={whyChoose} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" title="Frequently Asked Questions" />
        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </Section>

      <Section tone="emerald">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            inverted
            eyebrow="FINAL CTA"
            title="Begin the Greatest Journey — Memorize the Quran"
            intro="The memorization of the Quran is a gift that lasts a lifetime — and beyond. Book your 2-day free Hifz trial at My Quran Guide today and take the first step toward becoming a Hafiz or Hafiza with the guidance of our experienced and dedicated tutors."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">
              &gt;&gt;&gt; Book Free Hifz Trial — 100% Free &lt;&lt;&lt;
            </CTAButton>
            <CTAButton
              to="/contact"
              variant="outline"
              size="lg"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            >
              &gt;&gt;&gt; Contact Us to Discuss Your Hifz Journey &lt;&lt;&lt;
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
