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

const PATH = "/female-quran-classes-online";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Female Quran Classes", to: PATH },
];

export const Route = createFileRoute("/female-quran-classes-online")({
  head: () => ({
    ...buildPageSeo({
      title: "Quran Classes Online for ladies & Sister's  | My Quran Guide",
      description:
        "Learn Quran online with certified female tutors at My Quran Guide. Female Quran classes for sisters, girls & new Muslim women. All courses available. Book your 2-day free trial today!",
      path: PATH,
    }),
    scripts: [
      buildFaqSchema(faqs),
      buildCourseSchema({
        name: "Female Quran Classes Online",
        description:
          "Online Quran classes taught exclusively by certified female tutors — Noorani Qaida, Recitation, Tajweed, Hifz, Islamic Studies and Arabic — in a safe, comfortable environment for sisters and girls.",
        path: PATH,
        workload: "PT45M",
      }),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: FemaleQuranClassesOnlinePage,
});

const coursesWithFemaleTutors = [
  ["Noorani Qaida", "For beginners, young girls & new Muslim women"],
  ["Quran Recitation", "Learn to read Quran fluently — all levels"],
  ["Tajweed Classes", "Correct Quran recitation rules — beginner to advanced"],
  ["Hifz Program", "Quran memorization — kids & adult sisters"],
  ["Islamic Studies", "Pillars of Islam, Seerah, Fiqh & Islamic ethics"],
  ["Arabic Language", "Quranic Arabic from scratch — taught in English"],
];

const overviewRows = [
  ["Course Type", "All Quran & Islamic Courses"],
  ["Tutor", "Certified Female Tutors — Only Female"],
  ["Suitable For", "Sisters, Girls (5+), Female New Muslims, Women of All Ages"],
  ["Level", "All Levels — Beginner to Advanced"],
  ["Class Duration", "30 or 45 minutes — Student Chooses"],
  ["Days Per Week", "2, 3, 4, 5 or 6 days — Student Chooses"],
  ["Format", "One-on-One or Group — Student Chooses"],
  ["Platform", "Zoom, Skype or Google Meet"],
  ["Free Trial", "2 Days — 100% Free — Female Tutor Guaranteed"],
];

const audiences = [
  {
    title: "Young Girls (Age 5-17)",
    body: "Parents who want their daughters to learn Quran with a female tutor in a safe and appropriate environment.",
  },
  {
    title: "Adult Sisters (18+)",
    body: "Women who prefer to learn Quran and Islamic Studies with a female teacher for personal or religious reasons.",
  },
  {
    title: "New Muslim Women",
    body: "Sisters who have recently accepted Islam and want to begin their Quran and Islamic education with a supportive female tutor who understands their journey.",
  },
  {
    title: "Mothers Learning with Children",
    body: "Mothers who want to learn Quran alongside their daughters in a comfortable, family-friendly environment.",
  },
];

const femaleTutors = [
  "All female tutors hold recognized Islamic teaching certifications",
  "Experienced in online Quran teaching for sisters and young girls",
  "Fluent in English — clear and effective communication",
  "Patient, encouraging, and understanding teaching style",
  "Trained in all major Quran and Islamic courses",
  "Available at flexible timings that suit sisters worldwide",
];

const whyChoose = [
  "100% female tutors — no male tutors assigned to female students who request female tutors",
  "All courses available — Noorani Qaida to Hifz and Arabic",
  "Safe, private, and comfortable online learning environment",
  "Flexible timings — morning, afternoon, evening, or weekend",
  "One-on-one or group sessions — sister chooses",
  "English-speaking female tutors from Pakistan",
  "2-day free trial with a female tutor — guaranteed",
];

const faqs = [
  {
    q: "Q1: Are all tutors for these classes female?",
    a: "Yes — absolutely. When you request a female tutor at My Quran Guide, only certified female tutors are assigned to your classes. We guarantee this without exception.",
  },
  {
    q: "Q2: Can my young daughter take female Quran classes online?",
    a: "Yes. Our female Quran classes are available for girls from as young as 5 years old. Our female tutors are experienced in teaching young girls and use child-friendly, engaging methods.",
  },
  {
    q: "Q3: Are all courses available with female tutors?",
    a: "Yes. All courses at My Quran Guide — Noorani Qaida, Quran Recitation, Tajweed, Hifz, Islamic Studies, and Arabic Language — are available with certified female tutors.",
  },
  {
    q: "Q4: Can new Muslim sisters join Ladies Quran classes?",
    a: "Absolutely. We especially welcome new Muslim sisters. Our female tutors are patient, understanding, and experienced in supporting women who are new to Islam on their Quran and Islamic learning journey.",
  },
  {
    q: "Q5: Can I take the free trial with a female tutor?",
    a: "Yes. When booking your 2-day free trial, simply mention that you require a female tutor and we will assign a certified female tutor for your trial classes — guaranteed.",
  },
];

function FemaleQuranClassesOnlinePage() {
  return (
    <>
      <PageHero
        as="p"
        title="Female Quran Classes Online"
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          MY QURAN GUIDE
        </p>
        <h1 className="mx-auto mt-8 max-w-5xl text-balance text-center text-3xl leading-tight text-foreground sm:text-4xl">
          Female Quran Classes Online — Learn with Certified Female Tutors | My Quran Guide
        </h1>
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            At My Quran Guide, we understand that many sisters, young girls, and female new Muslims feel more comfortable and focused when learning with a female tutor. That is why we offer dedicated Female Quran Classes — taught exclusively by certified, experienced, and qualified female tutors in a safe, comfortable, and supportive online learning environment.
          </p>
          <p>
            Our female tutors cover all Quran and Islamic courses — from Noorani Qaida for complete beginners to advanced Tajweed, Hifz, Islamic Studies, and Arabic Language. Every female tutor at My Quran Guide is both certified in Islamic teaching and experienced in online Quran education, ensuring the highest quality of learning for every sister.
          </p>
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Female Quran Class Trial — 100% Free &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="COURSES AVAILABLE WITH FEMALE TUTORS"
          title="Courses Available with Female Tutors"
        />
        <div className="mt-10">
          <DataTable head={["Course", "Details"]} rows={coursesWithFemaleTutors} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="COURSE OVERVIEW" title="Course Overview" />
        <div className="mt-10">
          <DataTable head={["Detail", "Information"]} rows={overviewRows} />
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/free-trial" size="lg">
            &gt;&gt;&gt; Book Free Female Quran Class Trial — 100% Free &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="WHY FEMALE QURAN CLASSES?"
          title="The Importance of a Comfortable Learning Environment"
        />
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            Islam places great importance on modesty and the appropriate interaction between unrelated men and women. Many sisters, parents of young girls, and new Muslim women prefer — and in some cases require — a female tutor for their Quran and Islamic education. This is a completely valid and respected preference.
          </p>
          <p>
            At My Quran Guide, we fully support this choice and have specifically recruited a team of certified female tutors to ensure that every sister who wants to learn the Quran with a female teacher can do so — with the same level of quality, dedication, and expertise as any of our male tutors.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="WHO IS THIS FOR?" title="Who Is This For?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {audiences.map((audience) => (
            <article key={audience.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{audience.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{audience.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/contact" variant="outline" size="lg">
            &gt;&gt;&gt; Contact Us — We Will Match You with a Female Tutor &lt;&lt;&lt;
          </CTAButton>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="OUR FEMALE TUTORS" title="Certified, Experienced & Dedicated" />
        <div className="mx-auto mt-10 max-w-3xl">
          <CheckList items={femaleTutors} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="WHY CHOOSE MY QURAN GUIDE FOR FEMALE QURAN CLASSES?"
          title="Why Choose My Quran Guide For Female Quran Classes?"
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
            title="Learn Quran with a Certified Female Tutor — 2 Days Free"
            intro="Every sister deserves to learn the Quran in an environment that is comfortable, safe, and truly supportive. Book your 2-day free Female Quran Class trial at My Quran Guide today — a certified female tutor is ready and waiting to guide you on your Quran learning journey."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">
              &gt;&gt;&gt; Book Free Female Quran Class Trial — 100% Free &lt;&lt;&lt;
            </CTAButton>
            <CTAButton
              to="/contact"
              variant="outline"
              size="lg"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            >
              &gt;&gt;&gt; Contact Us — We Will Match You with a Female Tutor &lt;&lt;&lt;
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
