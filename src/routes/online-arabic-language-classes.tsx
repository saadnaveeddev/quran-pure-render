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

const PATH = "/online-arabic-language-classes";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Arabic Language", to: PATH },
];

export const Route = createFileRoute("/online-arabic-language-classes")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Arabic Language Classes — Learn Quranic Arabic | My Quran Guide",
      description:
        "Learn Arabic online at My Quran Guide. Quranic Arabic classes for kids, teenagers & adults — taught in English. Beginner to advanced. Book your 2-day free trial today!",
      path: PATH,
    }),
    scripts: [
      buildFaqSchema(faqs),
      buildCourseSchema({
        name: "Online Arabic Language Classes",
        description:
          "Learn Quranic Arabic online from scratch — alphabet, Nahw grammar, Sarf morphology and Quranic vocabulary — taught in English to help you understand the Quran directly.",
        path: PATH,
        workload: "PT45M",
      }),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: OnlineArabicLanguageClassesPage,
});

const overviewRows = [
  ["Course Name", "Online Arabic Language Classes"],
  ["Suitable For", "Kids, Teenagers & Adults — All Ages"],
  ["Level", "Beginner to Advanced"],
  ["Focus", "Quranic Arabic — Language of the Quran"],
  ["Class Duration", "30 or 45 minutes — Student Chooses"],
  ["Days Per Week", "2, 3, 4, 5 or 6 days — Student Chooses"],
  ["Format", "One-on-One or Group — Student Chooses"],
  ["Platform", "Zoom, Skype or Google Meet"],
  ["Tutor", "Certified Arabic Tutor — Male or Female"],
  ["Teaching Language", "English — with Arabic explanation"],
  ["Estimated Duration", "6 to 24 months depending on level (flexible pace)"],
  ["Free Trial", "2 Days — 100% Free"],
];

const levels = [
  {
    title: "Level 1 — Arabic Alphabet & Sounds (Beginner)",
    points: [
      "Arabic alphabet — reading and writing",
      "Short and long vowels — Harakat",
      "Basic Arabic word structure",
    ],
  },
  {
    title: "Level 2 — Basic Arabic Grammar (Nahw)",
    points: [
      "Nouns, verbs, and particles in Arabic",
      "Masculine and feminine in Arabic",
      "Singular, dual, and plural forms",
      "Basic sentence construction in Arabic",
    ],
  },
  {
    title: "Level 3 — Arabic Morphology (Sarf)",
    points: [
      "Root word system in Arabic",
      "Verb patterns and conjugation",
      "Deriving words from roots — key to understanding Quran vocabulary",
    ],
  },
  {
    title: "Level 4 — Quranic Vocabulary",
    points: [
      "Most frequently used words in the Quran",
      "Understanding common Quranic phrases and Ayahs",
      "Reading and understanding short Surahs in Arabic",
    ],
  },
  {
    title: "Level 5 — Advanced Quranic Arabic",
    points: [
      "Understanding longer Surahs and Juz of the Quran",
      "Arabic grammar applied directly to Quranic text",
      "Building towards independent Quran understanding",
    ],
  },
];

const audiences = [
  {
    title: "Quran Readers Who Want to Understand",
    body: "Students who can recite the Quran but want to understand its meaning directly in Arabic without relying on translation.",
  },
  {
    title: "Complete Arabic Beginners",
    body: "Students with no prior knowledge of Arabic who want to learn from scratch in a structured and supportive environment.",
  },
  {
    title: "Kids & Teenagers",
    body: "Young learners who want to connect with the language of the Quran from an early age.",
  },
  {
    title: "New Muslims",
    body: "New Muslims who want to understand the Quran and daily Islamic prayers in their original Arabic language.",
  },
];

const whyChoose = [
  "Certified Arabic language tutors — male and female",
  "Quranic Arabic focus — understand the Quran directly",
  "Taught entirely in English for maximum clarity",
  "Structured progression from beginner to advanced",
  "Flexible timings and class frequency",
  "One-on-one or group classes available",
  "2-day free trial — start before you commit",
];

const faqs = [
  {
    q: "Q1: Do I need to know how to read Arabic before joining?",
    a: "Not necessarily. If you are a complete beginner, we start from the Arabic alphabet in Level 1. If you can already read Arabic, we assess your level and place you in the appropriate module.",
  },
  {
    q: "Q2: Will learning Arabic help me understand the Quran?",
    a: "Yes — significantly. Even learning the most common words and basic grammar structures in Quranic Arabic transforms your understanding of the Quran during recitation and prayer.",
  },
  {
    q: "Q3: How long does it take to understand the Quran in Arabic?",
    a: "With regular classes and daily practice, students can build a strong foundation in Quranic Arabic in 12 to 18 months. Understanding the majority of the Quran independently typically takes 2 to 3 years.",
  },
  {
    q: "Q4: Is this spoken Arabic or Quranic Arabic?",
    a: "Our primary focus is Quranic Arabic — the classical Arabic of the Quran. While the foundations overlap with Modern Standard Arabic, our lessons are specifically designed around Quranic vocabulary and grammar.",
  },
  {
    q: "Q5: Can children learn Arabic language online?",
    a: "Absolutely. We teach Arabic to children from age 5 and above using age-appropriate, engaging methods. Learning Arabic at a young age is especially effective for long-term retention.",
  },
];

function OnlineArabicLanguageClassesPage() {
  return (
    <>
      <PageHero
        as="p"
        title="Online Arabic Language Classes"
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          MY QURAN GUIDE
        </p>
        <h1 className="mx-auto mt-8 max-w-5xl text-balance text-center text-3xl leading-tight text-foreground sm:text-4xl">
          Online Arabic Language Classes — Learn Quranic Arabic from Scratch | My Quran Guide
        </h1>
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            The Quran was revealed in the Arabic language — and understanding even a portion of it in its original language transforms the experience of recitation entirely. When you understand what you are reciting, every prayer becomes more meaningful, every verse more powerful, and every word of Allah more personal.
          </p>
          <p>
            My Quran Guide offers online Arabic Language classes focused on Quranic Arabic — the language of the Quran — taught in English by certified and experienced tutors. Whether you are a complete beginner or have some basic Arabic knowledge, our structured Arabic program will help you understand and connect with the Quran on a deeper level.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Arabic Language Trial — 100% Free &lt;&lt;&lt;
          </CTAButton>
          <CTAButton to="/contact" variant="outline" size="lg">
            &gt;&gt;&gt; Contact Us to Learn More &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="COURSE OVERVIEW" title="Course Overview" />
        <div className="mt-10">
          <DataTable head={["Detail", "Information"]} rows={overviewRows} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="COURSE OUTLINE" title="Arabic Language Syllabus — Basic Outline" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {levels.map((level) => (
            <article key={level.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{level.title}</h3>
              <div className="mt-4">
                <CheckList items={level.points} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="WHO IS THIS COURSE FOR?" title="Who Is This Course For?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {audiences.map((audience) => (
            <article key={audience.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{audience.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{audience.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="WHY CHOOSE MY QURAN GUIDE FOR ARABIC?"
          title="Why Choose My Quran Guide For Arabic?"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <CheckList items={whyChoose} />
        </div>
      </Section>

      <Section tone="muted">
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
            title="Understand the Quran in Its Own Language — 2 Days Free"
            intro="Imagine understanding every word you recite in Salah. Imagine reading the Quran and knowing exactly what Allah is saying to you. Book your 2-day free Arabic Language trial at My Quran Guide today and begin the beautiful journey of connecting with the Quran in its original language."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">
              &gt;&gt;&gt; Book Free Arabic Language Trial — 100% Free &lt;&lt;&lt;
            </CTAButton>
            <CTAButton
              to="/contact"
              variant="outline"
              size="lg"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            >
              &gt;&gt;&gt; Contact Us to Learn More &lt;&lt;&lt;
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
