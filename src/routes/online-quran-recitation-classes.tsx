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

const PATH = "/online-quran-recitation-classes";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Quran Recitation", to: PATH },
];

export const Route = createFileRoute("/online-quran-recitation-classes")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Quran Recitation Classes for All Ages | My Quran Guide",
      description:
        "Learn to read the Quran fluently with certified tutors at My Quran Guide. Online Quran recitation classes for kids, teenagers & adults — all levels. Book your 2-day free trial today!",
      path: PATH,
    }),
    scripts: [
      buildFaqSchema(faqs),
      buildCourseSchema({
        name: "Online Quran Recitation Classes",
        description:
          "Structured online Quran recitation classes for all ages and levels — from reading short Surahs to fluent recitation of full Juz with correct pronunciation.",
        path: PATH,
        workload: "PT45M",
      }),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: OnlineQuranRecitationClassesPage,
});

const overviewRows = [
  ["Course Name", "Online Quran Recitation Classes"],
  ["Suitable For", "Kids, Teenagers, Adults — All Ages"],
  ["Level", "All Levels — Beginner to Advanced"],
  ["Prerequisite", "Basic Arabic letters (Noorani Qaida or equivalent)"],
  ["Class Duration", "30 or 45 minutes — Student Chooses"],
  ["Days Per Week", "2, 3, 4, 5 or 6 days — Student Chooses"],
  ["Format", "One-on-One or Group — Student Chooses"],
  ["Platform", "Zoom, Skype or Google Meet"],
  ["Tutor", "Certified Male or Female — Student Chooses"],
  ["Estimated Duration", "6 to 18 months (flexible — student's own pace)"],
  ["Free Trial", "2 Days — 100% Free"],
];

const syllabusStages = [
  {
    title: "Stage 1 — Foundation Recitation (Beginners)",
    points: [
      "Reading short Surahs from Juz Amma with correct pronunciation",
      "Applying basic Harakat — Fatha, Kasra, Damma, Sukoon",
      "Introduction to Waqf (stopping) and Ibtida (starting) rules",
    ],
  },
  {
    title: "Stage 2 — Intermediate Recitation",
    points: [
      "Reading longer Surahs and Ayahs fluently",
      "Basic Tajweed rules applied during recitation",
      "Improving reading speed and flow",
    ],
  },
  {
    title: "Stage 3 — Advanced Recitation",
    points: [
      "Reading full Juz from the Quran fluently",
      "Consistent application of all Tajweed rules",
      "Building confidence for recitation in Salah and beyond",
    ],
  },
];

const whoIsThisCourseFor = [
  {
    title: "Complete Beginners",
    body: "Students who have completed Noorani Qaida and are ready to start reading directly from the Quran for the first time.",
  },
  {
    title: "Intermediate Students",
    body: "Students who can read the Quran but want to improve their fluency, speed, and pronunciation.",
  },
  {
    title: "Adults Returning to Quran",
    body: "Adults who learned to read the Quran in childhood but have lost fluency and want to reconnect with their recitation.",
  },
  {
    title: "Kids & Teenagers",
    body: "Young students progressing from Noorani Qaida into full Quran recitation with structured guidance.",
  },
];

const faqs = [
  {
    q: "Q1: Do I need to complete Noorani Qaida first?",
    a: "If you are a complete beginner who does not know the Arabic alphabet, yes — Noorani Qaida is the recommended starting point. If you already know the Arabic letters, you can join Quran Recitation classes directly.",
  },
  {
    q: "Q2: How long does it take to read the full Quran?",
    a: "This depends on the student's starting level, frequency of classes, and pace. On average, a beginner student reading 3-5 days per week can complete the full Quran recitation in 12 to 18 months. Advanced students may do it faster.",
  },
  {
    q: "Q3: Will my tutor correct my mistakes during recitation?",
    a: "Yes. Your tutor will listen carefully to your recitation during every class and provide real-time correction of pronunciation and recitation mistakes. This personalized feedback is one of the key benefits of one-on-one online classes.",
  },
  {
    q: "Q4: Can I learn Quran recitation as an adult?",
    a: "Absolutely. Many of our students are adults who are learning or relearning Quran recitation. Our tutors are experienced in teaching adults and create a comfortable, judgment-free environment.",
  },
  {
    q: "Q5: Can my child and I take classes together?",
    a: "Yes. My Quran Guide offers both individual and family-friendly scheduling. Contact us to discuss the best arrangement for you and your family.",
  },
];

function OnlineQuranRecitationClassesPage() {
  return (
    <>
      <PageHero
        as="p"
        title="Online Quran Recitation (Reading) Classes"
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          MY QURAN GUIDE
        </p>
        <h1 className="mx-auto mt-8 max-w-5xl text-balance text-center text-3xl leading-tight text-foreground sm:text-4xl">
          Online Quran Recitation Classes for Kids, Teenagers & Adults — All Levels | My Quran Guide
        </h1>
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            Reading the Quran is one of the most rewarding acts a Muslim can perform. Whether you are reading for the first time or want to improve your existing recitation, My Quran Guide offers structured online Quran recitation classes for students of all ages and all levels — taught by certified and experienced tutors who are passionate about helping every student connect with the Words of Allah.
          </p>
          <p>
            Our online Quran recitation classes are available via Zoom, Skype, or Google Meet at flexible timings that fit your schedule. Choose your preferred tutor, choose your pace, and begin your Quran recitation journey today with a 2-day free trial — completely free.
          </p>
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Quran Recitation Trial — 100% Free &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="COURSE OVERVIEW" title="Course Overview" />
        <div className="mt-10">
          <DataTable head={["Detail", "Information"]} rows={overviewRows} />
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/contact" variant="outline">
            &gt;&gt;&gt; Contact Us to Learn More &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="COURSE OUTLINE"
          title="What You Will Learn — Quran Recitation Syllabus"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {syllabusStages.map((stage) => (
            <article key={stage.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{stage.title}</h3>
              <div className="mt-4">
                <CheckList items={stage.points} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="WHO IS THIS COURSE FOR?" title="Who Is This Course For?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whoIsThisCourseFor.map((group) => (
            <article key={group.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{group.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{group.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Quran Recitation Trial — 100% Free &lt;&lt;&lt;
          </CTAButton>
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
            title="Start Reading the Quran with Confidence — 2 Days Free"
            intro="The Quran is waiting to be read by you — fluently, correctly, and beautifully. Book your 2-day free Quran Recitation trial at My Quran Guide today and take the next step on your Quran journey with a certified tutor by your side."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">
              &gt;&gt;&gt; Book Free Quran Recitation Trial &lt;&lt;&lt;
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
