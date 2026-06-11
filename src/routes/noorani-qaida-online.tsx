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

const PATH = "/noorani-qaida-online";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Noorani Qaida", to: PATH },
];

export const Route = createFileRoute("/noorani-qaida-online")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Noorani Qaida Classes for Kids & Beginners | My Quran Guide",
      description:
        "Learn Noorani Qaida online with certified tutors at My Quran Guide. Perfect for kids, beginners & new Muslims. Flexible timings, male & female tutors. Start your 2-day free trial today!",
      path: PATH,
    }),
    scripts: [
      buildFaqSchema(faqs),
      buildCourseSchema({
        name: "Online Noorani Qaida Classes",
        description:
          "Beginner Noorani Qaida course teaching the Arabic alphabet, letter sounds, joining of letters, vowels and basic pronunciation — the foundation for reading the Quran.",
        path: PATH,
        workload: "PT45M",
      }),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: NooraniQaidaOnlinePage,
});

const overviewRows = [
  ["Course Name", "Online Noorani Qaida Classes"],
  ["Suitable For", "Kids (5+), Adult Beginners, New Muslims"],
  ["Level", "Complete Beginner"],
  ["Class Duration", "30 or 45 minutes — Student Chooses"],
  ["Days Per Week", "2, 3, 4, 5 or 6 days — Student Chooses"],
  ["Format", "One-on-One or Group — Student Chooses"],
  ["Platform", "Zoom, Skype or Google Meet"],
  ["Tutor", "Certified Male or Female — Student Chooses"],
  ["Estimated Duration", "3 to 6 months (flexible — at student's own pace)"],
  ["Free Trial", "2 Days — 100% Free"],
];

const syllabusLevels = [
  {
    title: "Level 1 — Arabic Alphabet",
    points: [
      "Recognition of all 29 Arabic letters",
      "Individual letter sounds and pronunciation",
      "Letter forms — beginning, middle, and end",
    ],
  },
  {
    title: "Level 2 — Joining Letters",
    points: [
      "Joining two and three letters together",
      "Basic word formation in Arabic",
      "Reading short Arabic words",
    ],
  },
  {
    title: "Level 3 — Harakat (Vowels)",
    points: [
      "Fatha, Kasra, and Damma — short vowels",
      "Tanween — double vowels",
      "Sukoon — letters without vowels",
    ],
  },
  {
    title: "Level 4 — Madd (Long Vowels)",
    points: [
      "Alif Madd, Waw Madd, Ya Madd",
      "Reading words with long vowels",
    ],
  },
  {
    title: "Level 5 — Shaddah & Advanced Rules",
    points: [
      "Shaddah — doubled letters",
      "Qalqalah letters — basic introduction",
      "Practice with short Quranic words and phrases",
    ],
  },
];

const whoIsThisCourseFor = [
  {
    title: "Kids (Age 5-12)",
    body: "Perfect starting point for young children. Our tutors use child-friendly teaching methods that make learning Arabic letters fun and engaging.",
  },
  {
    title: "Adult Beginners",
    body: "Never too late to start. Our patient tutors guide adult beginners step by step without any pressure or judgment.",
  },
  {
    title: "New Muslims",
    body: "If you have recently accepted Islam and want to begin learning the Quran from scratch, Noorani Qaida is your ideal starting point.",
  },
  {
    title: "Returning Students",
    body: "If you learned the Arabic alphabet years ago but want to revisit and correct your pronunciation, this course will refresh and strengthen your foundation.",
  },
];

const faqs = [
  {
    q: "Q1: What age can my child start Noorani Qaida?",
    a: "Children can start Noorani Qaida from as young as 4 to 5 years old. Our tutors are experienced in teaching very young children and use age-appropriate methods to make learning enjoyable and effective.",
  },
  {
    q: "Q2: How long does it take to complete Noorani Qaida?",
    a: "On average, students complete Noorani Qaida in 3 to 6 months depending on their age, frequency of classes, and pace of learning. We do not rush students — progress is always at the student's own comfortable pace.",
  },
  {
    q: "Q3: Do I need any prior knowledge of Arabic to join?",
    a: "No prior knowledge is required. Noorani Qaida is designed specifically for complete beginners. We start from the very first Arabic letter and build up gradually.",
  },
  {
    q: "Q4: Can adults learn Noorani Qaida online?",
    a: "Absolutely. Many adults at My Quran Guide have successfully learned Noorani Qaida and moved on to Quran recitation. Our tutors adjust their teaching style to suit both children and adults.",
  },
  {
    q: "Q5: What happens after I finish Noorani Qaida?",
    a: "After completing Noorani Qaida, students naturally progress to Quran Recitation classes where they begin reading directly from the Quran with proper pronunciation and Tajweed rules.",
  },
];

function NooraniQaidaOnlinePage() {
  return (
    <>
      <PageHero as="p" title="Online Noorani Qaida Classes" breadcrumbs={breadcrumbs} />

      <Section>
        <h1 className="mx-auto max-w-5xl text-balance text-center text-3xl leading-tight text-foreground sm:text-4xl">
          Online Noorani Qaida Classes for Kids, Beginners & New Muslims | My Quran Guide
        </h1>
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            Noorani Qaida is the very first step on the journey of learning to read the Quran. Before a student can recite even a single verse, they must master the Arabic alphabet, its sounds, and basic pronunciation rules — and that is exactly what our online Noorani Qaida classes are designed to do.
          </p>
          <p>
            At My Quran Guide, our certified and experienced tutors make learning Noorani Qaida simple, engaging, and effective — for young children as young as 5, for adult beginners, and for new Muslims taking their very first steps in Islam. Classes are available online via Zoom, Skype, or Google Meet at timings that suit your schedule.
          </p>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="WHAT IS NOORANI QAIDA?"
          title="Understanding the Foundation of Quran Learning"
        />
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            Noorani Qaida is a structured beginner&apos;s guide to reading the Arabic language used in the Quran. Developed as a step-by-step learning system, it teaches students the Arabic alphabet, letter sounds, joining of letters, short and long vowels, and basic rules of pronunciation — all before moving on to actual Quran recitation.
          </p>
          <p>
            Think of Noorani Qaida as the ABC of Quranic Arabic. Without it, students cannot read the Quran correctly. With it, they build a solid foundation that makes every future step in their Quran learning journey much easier and more confident.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="COURSE OVERVIEW"
          title="What You Will Learn in Our Online Noorani Qaida Course"
        />
        <div className="mt-10">
          <DataTable head={["Detail", "Information"]} rows={overviewRows} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="COURSE OUTLINE" title="Basic Noorani Qaida Syllabus" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {syllabusLevels.map((level) => (
            <article key={level.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{level.title}</h3>
              <div className="mt-4">
                <CheckList items={level.points} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="WHO IS THIS COURSE FOR?" title="Who Is This Course For?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whoIsThisCourseFor.map((group) => (
            <article key={group.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{group.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{group.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Noorani Qaida Online — Common Questions"
        />
        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </Section>

      <Section tone="emerald">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            inverted
            eyebrow="FINAL CTA"
            title="Start Your Noorani Qaida Journey Today — 2 Days Free"
            intro="Every great Quran reciter started exactly where you are right now — with the very first Arabic letter. Book your 2-day free Noorani Qaida trial at My Quran Guide today and take the most important first step on your Quran learning journey."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">
              &gt;&gt;&gt; Book Free Noorani Qaida Trial — 100% Free &lt;&lt;&lt;
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
