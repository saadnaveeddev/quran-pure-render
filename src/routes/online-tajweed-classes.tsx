import { createFileRoute } from "@tanstack/react-router";
import { PageHero, DataTable, CheckList } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQ } from "@/components/site/FAQ";
import { buildFaqSchema, buildPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/online-tajweed-classes")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Tajweed Classes — Learn Quran with Proper Rules | My Quran Guide",
      description:
        "Master Tajweed online with certified tutors at My Quran Guide. Learn Makharij, Sifaat, Madd & Ghunna rules for correct Quran recitation. All levels. Book your 2-day free trial today!",
      path: "/online-tajweed-classes",
    }),
    scripts: [buildFaqSchema(faqs)],
  }),
  component: OnlineTajweedClassesPage,
});

const overviewRows = [
  ["Course Name", "Online Tajweed Classes"],
  ["Suitable For", "Kids, Teenagers & Adults"],
  ["Level", "Beginner to Advanced"],
  ["Prerequisite", "Ability to read basic Arabic (Noorani Qaida or Quran Recitation)"],
  ["Class Duration", "30 or 45 minutes — Student Chooses"],
  ["Days Per Week", "2, 3, 4, 5 or 6 days — Student Chooses"],
  ["Format", "One-on-One or Group — Student Chooses"],
  ["Platform", "Zoom, Skype or Google Meet"],
  ["Tutor", "Certified Tajweed Tutor — Male or Female"],
  ["Estimated Duration", "6 to 12 months for basic Tajweed (flexible pace)"],
  ["Free Trial", "2 Days — 100% Free"],
];

const modules = [
  {
    title: "Module 1 — Makharij Al-Huroof (Points of Articulation)",
    points: [
      "17 points of articulation for all Arabic letters",
      "Correct tongue, lip, and throat placement for each letter",
      "Practice with similar-sounding letters",
    ],
  },
  {
    title: "Module 2 — Sifaat Al-Huroof (Characteristics of Letters)",
    points: [
      "Essential characteristics — Hams, Jahr, Shiddah, Tawassut, Rakhawah",
      "Non-essential characteristics — Tafkheem, Tarqeeq, Qalqalah, Leen",
    ],
  },
  {
    title: "Module 3 — Noon Sakinah & Tanween Rules",
    points: [
      "Idhhar — clear pronunciation",
      "Idghaam — merging of letters",
      "Iqlaab — conversion of sound",
      "Ikhfaa — hidden pronunciation",
    ],
  },
  {
    title: "Module 4 — Meem Sakinah Rules",
    points: [
      "Ikhfaa Shafawi, Idghaam Shafawi, Idhhar Shafawi",
    ],
  },
  {
    title: "Module 5 — Madd (Prolongation) Rules",
    points: [
      "Natural Madd — 2 counts",
      "Connected Madd, Separate Madd",
      "Obligatory Madd, Permissible Madd",
    ],
  },
  {
    title: "Module 6 — Waqf & Ibtida (Stopping & Starting)",
    points: [
      "Rules of stopping at the end of Ayahs",
      "Where it is permissible and impermissible to stop",
    ],
  },
];

const audiences = [
  {
    title: "Students Who Can Read Arabic",
    body: "If you can already read Arabic but want to perfect your Tajweed rules, this course will transform your recitation.",
  },
  {
    title: "Adults Wanting to Improve",
    body: "Many adults recite the Quran daily but have never formally learned Tajweed. This course corrects and elevates their recitation.",
  },
  {
    title: "Kids & Teenagers",
    body: "Learning Tajweed at a young age builds lifelong correct recitation habits. Our tutors use engaging methods for young learners.",
  },
  {
    title: "Imams & Community Leaders",
    body: "Those who lead prayers or recite the Quran publicly benefit greatly from formal Tajweed training.",
  },
];

const whyChoose = [
  "Certified Tajweed tutors with Ijazah and teaching experience",
  "Live one-on-one correction of every mistake",
  "Structured progression from beginner to advanced Tajweed",
  "English-speaking tutors for clear rule explanation",
  "Flexible class timings — you choose your schedule",
  "2-day free trial — experience the quality before enrolling",
];

const faqs = [
  {
    q: "Q1: Do I need to know Arabic to learn Tajweed?",
    a: "You need to be able to read basic Arabic letters before starting Tajweed. If you cannot read Arabic yet, we recommend starting with our Noorani Qaida course first.",
  },
  {
    q: "Q2: How long does it take to learn Tajweed?",
    a: "Basic Tajweed rules can be learned in 6 to 12 months with regular classes. Mastering all Tajweed rules and applying them consistently during recitation is an ongoing journey that improves over time.",
  },
  {
    q: "Q3: Can I learn Tajweed while also reading the Quran?",
    a: "Yes. Most of our students learn Tajweed rules and simultaneously apply them during their Quran recitation. Our tutors integrate both seamlessly.",
  },
  {
    q: "Q4: Is Tajweed only for advanced students?",
    a: "No. Tajweed classes at My Quran Guide are available for beginners, intermediate, and advanced students. We start from the very basics and progress at your pace.",
  },
  {
    q: "Q5: Will I receive a certificate after completing Tajweed?",
    a: "Upon completing the full Tajweed course, you will receive a tutor-verified progress certificate from My Quran Guide recognizing your achievement.",
  },
];

function OnlineTajweedClassesPage() {
  return (
    <>
      <PageHero title="Online Tajweed Classes" />

      <Section>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          MY QURAN GUIDE
        </p>
        <h2 className="mt-3 text-center text-2xl text-foreground sm:text-3xl">
          Online Tajweed Classes
        </h2>
        <p className="mt-3 text-center text-base font-medium text-secondary-foreground">
          Learn Proper Quran Recitation Rules | All Levels | My Quran Guide
        </p>
        <h1 className="mx-auto mt-10 max-w-5xl text-balance text-center text-3xl leading-tight text-foreground sm:text-4xl">
          Online Tajweed Classes — Learn to Recite the Quran Correctly | My Quran Guide
        </h1>
        <div className="mt-8 text-center">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Tajweed Trial &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="WHAT IS TAJWEED?" title="What Is Tajweed?" />
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            Tajweed is the science and art of reciting the Quran with proper rules of pronunciation, rhythm, and articulation — exactly as it was revealed to the Prophet Muhammad (PBUH). The word Tajweed comes from the Arabic root meaning &apos;to do well&apos; or &apos;to improve.&apos;
          </p>
          <p>
            Reciting the Quran with Tajweed is not just recommended — it is obligatory for every Muslim who reads the Quran. Every letter of the Quran has a specific point of articulation (Makharij) and characteristics (Sifaat) that must be observed to recite it correctly. Our online Tajweed classes at My Quran Guide teach you exactly that — in a clear, structured, and easy-to-understand way.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="COURSE OVERVIEW" title="Course Overview" />
        <div className="mt-10">
          <DataTable head={["Detail", "Information"]} rows={overviewRows} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="COURSE OUTLINE" title="Tajweed Syllabus — Basic Outline" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {modules.map((module) => (
            <article key={module.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{module.title}</h3>
              <div className="mt-4">
                <CheckList items={module.points} />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Tajweed Trial — 100% Free &lt;&lt;&lt;
          </CTAButton>
          <CTAButton to="/contact" variant="outline" size="lg">
            &gt;&gt;&gt; Contact Us to Learn More &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section>
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

      <Section tone="muted">
        <SectionHeading
          eyebrow="WHY CHOOSE MY QURAN GUIDE FOR TAJWEED?"
          title="Why Choose My Quran Guide For Tajweed?"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <CheckList items={whyChoose} className="space-y-4" />
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
            title="Perfect Your Quran Recitation — Start with 2 Free Classes"
            intro="Every word of the Quran deserves to be recited exactly as it was revealed. Book your 2-day free Tajweed trial at My Quran Guide today and begin your journey toward beautiful, correct, and confident Quran recitation."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">
              &gt;&gt;&gt; Book Free Tajweed Trial — 100% Free &lt;&lt;&lt;
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
