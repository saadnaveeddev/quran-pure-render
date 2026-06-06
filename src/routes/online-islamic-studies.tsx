import { createFileRoute } from "@tanstack/react-router";
import { PageHero, DataTable, CheckList } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQ } from "@/components/site/FAQ";
import { buildFaqSchema, buildPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/online-islamic-studies")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Islamic Studies Classes for Kids, Adults & New Muslims | My Quran Guide",
      description:
        "Learn Islam online at My Quran Guide. Islamic Studies classes covering Pillars of Islam, Seerah, Fiqh & Islamic ethics. For kids, adults & new Muslims. Book your 2-day free trial!",
      path: "/online-islamic-studies",
    }),
    scripts: [buildFaqSchema(faqs)],
  }),
  component: OnlineIslamicStudiesPage,
});

const overviewRows = [
  ["Course Name", "Online Islamic Studies Classes"],
  ["Suitable For", "Kids, Teenagers, Adults & New Muslims"],
  ["Level", "All Levels — Beginner to Advanced"],
  ["Class Duration", "30 or 45 minutes — Student Chooses"],
  ["Days Per Week", "2, 3, 4, 5 or 6 days — Student Chooses"],
  ["Format", "One-on-One or Group — Student Chooses"],
  ["Platform", "Zoom, Skype or Google Meet"],
  ["Tutor", "Certified Male or Female — Student Chooses"],
  ["Language", "English (with Arabic terms explained)"],
  ["Estimated Duration", "Ongoing — module by module at student's pace"],
  ["Free Trial", "2 Days — 100% Free"],
];

const modules = [
  {
    title: "Module 1 — Basics of Islam",
    points: [
      "The Six Pillars of Iman (Faith)",
      "The Five Pillars of Islam",
      "Tawheed — Oneness of Allah",
      "Angels, Prophets, Books, and the Day of Judgment",
    ],
  },
  {
    title: "Module 2 — Acts of Worship (Ibadah)",
    points: [
      "Salah — how to pray correctly",
      "Wudu and Ghusl — purification",
      "Sawm — fasting in Ramadan",
      "Zakat and Hajj — basics",
    ],
  },
  {
    title: "Module 3 — Seerah of the Prophet (PBUH)",
    points: [
      "Life of the Prophet Muhammad (PBUH) from birth to prophethood",
      "Key events — Hijrah, battles, and the final sermon",
      "Lessons from the Seerah for daily Muslim life",
    ],
  },
  {
    title: "Module 4 — Islamic Ethics & Daily Life",
    points: [
      "Islamic manners and etiquette",
      "Rights of parents, neighbors, and community",
      "Halal and Haram in daily life",
    ],
  },
  {
    title: "Module 5 — Basic Fiqh",
    points: [
      "Islamic rulings for everyday matters",
      "Fiqh of worship, food, dress, and social interactions",
    ],
  },
];

const audiences = [
  {
    title: "Kids & Teenagers",
    body: "Building a strong Islamic foundation from a young age. Our tutors use engaging, age-appropriate teaching methods for young learners.",
  },
  {
    title: "Adults",
    body: "Deepening their Islamic knowledge and understanding of daily Islamic rulings and ethics.",
  },
  {
    title: "New Muslims",
    body: "Learning the basics of Islam in a supportive, clear, and welcoming environment taught entirely in English.",
  },
  {
    title: "Muslim Reverts",
    body: "Reconnecting with Islamic knowledge and building confidence in their practice of Islam.",
  },
];

const whyChoose = [
  "Certified and knowledgeable Islamic Studies tutors — male and female",
  "Taught entirely in English for clear understanding",
  "Age-appropriate content for kids, teenagers, and adults",
  "Especially welcoming for new Muslims with no prior knowledge",
  "Flexible timings and pace — no pressure or rushing",
  "One-on-one or group classes available",
  "2-day free trial — start before you pay",
];

const faqs = [
  {
    q: "Q1: Can new Muslims join Islamic Studies classes?",
    a: "Absolutely. Our Islamic Studies program is especially designed to welcome new Muslims with no prior knowledge of Islam. Classes are taught in English and our tutors are patient, supportive, and understanding.",
  },
  {
    q: "Q2: Can my child join Islamic Studies alongside Quran classes?",
    a: "Yes. Many families at My Quran Guide combine Quran classes with Islamic Studies for a complete Islamic education. Contact us to arrange a suitable schedule for both.",
  },
  {
    q: "Q3: Is there a set curriculum or can I choose what to study?",
    a: "We have a structured curriculum but also accommodate individual preferences. If you have specific topics you want to focus on — such as Salah, Seerah, or Fiqh — let your tutor know and they will tailor the classes accordingly.",
  },
  {
    q: "Q4: How long does it take to complete Islamic Studies?",
    a: "Islamic Studies is an ongoing journey. Our course is structured in modules that can each be completed in a few months. Students can continue for as long as they want — there is always more to learn.",
  },
  {
    q: "Q5: Are the classes suitable for non-Arabic speakers?",
    a: "Yes. All Islamic Studies classes at My Quran Guide are taught in English. Arabic terms are always explained clearly in English so students understand every concept fully.",
  },
];

function OnlineIslamicStudiesPage() {
  return (
    <>
      <PageHero title="Online Islamic Studies Classes" />

      <Section>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          MY QURAN GUIDE
        </p>
        <h2 className="mt-3 text-center text-2xl text-foreground sm:text-3xl">
          Online Islamic Studies Classes
        </h2>
        <p className="mt-3 text-center text-base font-medium text-secondary-foreground">
          For Kids, Adults & New Muslims | My Quran Guide
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Islamic Studies Trial &lt;&lt;&lt;
          </CTAButton>
          <CTAButton to="/contact" variant="outline" size="lg">
            &gt;&gt;&gt; Contact Us to Learn More &lt;&lt;&lt;
          </CTAButton>
        </div>
        <h1 className="mx-auto mt-10 max-w-5xl text-balance text-center text-3xl leading-tight text-foreground sm:text-4xl">
          Online Islamic Studies Classes for Kids, Adults & New Muslims | My Quran Guide
        </h1>
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            Islam is more than just reciting the Quran — it is a complete way of life. Understanding the fundamentals of Islam, the life of the Prophet (PBUH), Islamic rulings, and ethical values is essential for every Muslim seeking to live according to the teachings of Allah and His Messenger.
          </p>
          <p>
            My Quran Guide offers comprehensive online Islamic Studies classes for children, teenagers, adults, and new Muslims — taught in English by certified and knowledgeable tutors from Pakistan. Whether you are just beginning your Islamic education or want to deepen your existing knowledge, our Islamic Studies program has a course for you.
          </p>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="COURSE OVERVIEW" title="Course Overview" />
        <div className="mt-10">
          <DataTable head={["Detail", "Information"]} rows={overviewRows} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="COURSE OUTLINE"
          title="Islamic Studies Syllabus — Basic Outline"
        />
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
        <div className="mt-8 text-center">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Islamic Studies Trial &lt;&lt;&lt;
          </CTAButton>
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
          eyebrow="WHY CHOOSE MY QURAN GUIDE FOR ISLAMIC STUDIES?"
          title="Why Choose My Quran Guide For Islamic Studies?"
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
            title="Strengthen Your Islamic Knowledge — 2 Days Free"
            intro="Islam is a complete way of life — and understanding it deeply changes everything. Book your 2-day free Islamic Studies trial at My Quran Guide today and begin building the Islamic knowledge and confidence that will serve you and your family for a lifetime."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">
              &gt;&gt;&gt; Book Free Islamic Studies Trial — 100% Free &lt;&lt;&lt;
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
