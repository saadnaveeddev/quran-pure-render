import { createFileRoute } from "@tanstack/react-router";
import { PageHero, DataTable, CheckList } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQ } from "@/components/site/FAQ";
import { coursesFaqs } from "@/content/faqs";
import { buildFaqSchema, buildPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/courses")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Quran Courses | Tajweed, Hifz, Arabic & More — My Quran Guide",
      description:
        "Explore all online Quran courses at My Quran Guide — Tajweed, Hifz, Noorani Qaida, Arabic, Islamic Studies & Female Quran Classes. Flexible timings, certified tutors, 2-day free trial. Enroll today!",
      path: "/courses",
    }),
    scripts: [buildFaqSchema([...coursesFaqs])],
  }),
  component: CoursesPage,
});

const overview = [
  ["Noorani Qaida", "Kids & Beginners", "Beginner", "30-45 min"],
  ["Quran Recitation", "All Ages", "All Levels", "30-45 min"],
  ["Tajweed Classes", "Kids & Adults", "Beginner-Adv", "30-45 min"],
  ["Hifz Program", "Kids & Adults", "Intermediate+", "45 min"],
  ["Islamic Studies", "All Ages", "All Levels", "30-45 min"],
  ["Arabic Language", "All Ages", "Beginner-Adv", "30-45 min"],
  ["Female Quran Classes", "Sisters Only", "All Levels", "30-45 min"],
];

const courseList = [
  {
    emoji: "📖",
    title: "Noorani Qaida Online Classes",
    meta: "For: Kids (5+), Beginners, New Muslims | Level: Beginner",
    body: "Noorani Qaida is the very first step in learning to read the Quran. Our online Noorani Qaida course is designed for complete beginners — especially young children aged 5 and above, adults starting fresh, and new Muslims. Our certified tutors teach Arabic letters, pronunciation, and basic reading sounds in a simple, step-by-step way.",
    points: [
      "Learn all Arabic letters and their sounds",
      "Correct pronunciation from day one",
      "Simple and engaging lessons for young kids",
      "Patient certified tutor — male or female",
      "Progress at your own pace",
      "2-day free trial included",
    ],
    duration: "30 or 45 minutes — Student Chooses",
    days: "2, 3, 4 or 5 days/week — Student Chooses",
  },
  {
    emoji: "🕌",
    title: "Online Quran Recitation Classes",
    meta: "For: Kids, Teenagers, Adults — All Ages | Level: All Levels",
    body: "Our online Quran Recitation course helps students of all ages learn to read the Quran fluently, correctly, and confidently. Whether you are reading for the first time or want to improve your existing recitation, our certified tutors will guide you at your own pace with personalized attention.",
    points: [
      "Fluent and accurate Quran reading",
      "Suitable for all ages and all levels",
      "One-on-one or group sessions available",
      "Certified male and female tutors",
      "Flexible 2-5 days per week",
      "2-day free trial included",
    ],
    duration: "30 or 45 minutes — Student Chooses",
    days: "2, 3, 4 or 5 days/week — Student Chooses",
  },
  {
    emoji: "✨",
    title: "Online Tajweed Classes",
    meta: "For: Kids, Teenagers & Adults | Level: Beginner to Advanced",
    body: "Tajweed is the art and science of reciting the Quran with proper rules, pronunciation, and rhythm. Our online Tajweed course teaches Makharij, Sifaat, Madd, Ghunna and more — in a clear and structured way for both beginners and advanced learners.",
    points: [
      "Complete Tajweed rules — Makharij, Sifaat, Madd, Ghunna",
      "Correct recitation just like it was revealed",
      "Beginner to advanced levels covered",
      "Certified Tajweed tutors — male and female",
      "One-on-one personalized correction",
      "2-day free trial included",
    ],
    duration: "30 or 45 minutes — Student Chooses",
    days: "2, 3, 4 or 5 days/week — Student Chooses",
  },
  {
    emoji: "🏆",
    title: "Online Hifz Program — Quran Memorization",
    meta: "For: Kids & Adults | Level: Intermediate to Advanced",
    body: "Memorizing the Quran is one of the greatest achievements in a Muslim's life. Our online Hifz program is structured and guided by experienced Huffaz tutors. Upon successful completion of the full Hifz, students receive an official certificate from My Quran Guide.",
    points: [
      "Structured Hifz plan — Sabaq, Sabaqi, Manzil system",
      "Experienced Huffaz tutors — male and female",
      "Suitable for children and adults",
      "Regular revision and progress tracking",
      "Official Hifz Certificate upon completion",
      "2-day free trial included",
    ],
    duration: "45 minutes per session",
    days: "2, 3, 4 or 5 days/week — Student Chooses",
  },
  {
    emoji: "☪",
    title: "Online Islamic Studies Classes",
    meta: "For: Kids, Teenagers, Adults & New Muslims | Level: All Levels",
    body: "Our online Islamic Studies course gives students a complete foundation in Islamic knowledge — covering the basics of Islam, acts of worship, Seerah, Fiqh, and Islamic ethics. Perfect for new Muslims, young children, and families wanting complete Islamic education from home.",
    points: [
      "Basics of Islam — Pillars, Beliefs, Acts of Worship",
      "Seerah of the Prophet (PBUH)",
      "Islamic ethics and values for daily life",
      "Fiqh — practical Islamic rulings",
      "Perfect for new Muslims and young kids",
      "2-day free trial included",
    ],
    duration: "30 or 45 minutes — Student Chooses",
    days: "2, 3, 4 or 5 days/week — Student Chooses",
  },
  {
    emoji: "🌙",
    title: "Online Arabic Language Classes",
    meta: "For: Kids, Teenagers & Adults — All Ages | Level: Beginner to Advanced",
    body: "Understanding the Quran in its original language deepens your connection with every word of Allah. Our online Arabic Language course teaches Quranic Arabic from scratch — helping students understand what they recite. Taught in English for maximum clarity.",
    points: [
      "Quranic Arabic — understand what you recite",
      "Arabic grammar basics — Nahw and Sarf",
      "Taught in English for easy understanding",
      "Beginner to advanced levels",
      "Certified and experienced Arabic tutors",
      "2-day free trial included",
    ],
    duration: "30 or 45 minutes — Student Chooses",
    days: "2, 3, 4 or 5 days/week — Student Chooses",
  },
  {
    emoji: "🌸",
    title: "Female Quran Classes Online",
    meta: "For: Sisters, Girls & Female New Muslims | Level: All Levels",
    body: "Our dedicated Female Quran Classes are taught exclusively by certified and experienced female tutors — covering all courses including Noorani Qaida, Quran Recitation, Tajweed, Hifz, Islamic Studies, and Arabic in a safe and comfortable environment.",
    points: [
      "Exclusively female certified tutors",
      "All courses available — Tajweed, Hifz, Arabic & more",
      "Safe, comfortable and focused learning environment",
      "For girls, sisters and female new Muslims",
      "Flexible timings — you choose your schedule",
      "2-day free trial included",
    ],
    duration: "30 or 45 minutes — Student Chooses",
    days: "2, 3, 4 or 5 days/week — Student Chooses",
  },
];

const schedule = [
  ["Class Duration", "30 minutes OR 45 minutes — Student Chooses"],
  ["Days Per Week", "2, 3, 4 or 5 days — Student Chooses"],
  ["Class Format", "One-on-One OR Group — Student Chooses"],
  ["Platform", "Zoom, Skype OR Google Meet"],
  ["Tutor Gender", "Male OR Female — Student Chooses"],
  ["Timing", "Any time — Morning, Evening or Weekend"],
  ["Availability", "24/7 — Flexible for all time zones"],
];

function CoursesPage() {
  return (
    <>
      <PageHero title="Courses" />

      <Section>
        <p className="mx-auto max-w-3xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
          Every course at My Quran Guide is taught by certified and experienced male and female tutors from Pakistan, fluent in English. Classes are available 2 to 5 days per week — you choose — with sessions of 30 or 45 minutes depending on your preference. Start any course with our 2-day free trial. No payment required.
        </p>
        <div className="mt-12">
          <SectionHeading title="All Online Quran Courses at a Glance" />
          <div className="mt-8">
            <DataTable head={["Course", "For", "Level", "Duration"]} rows={overview} />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-7 lg:grid-cols-2">
          {courseList.map((c) => (
            <article key={c.title} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl">
                  {c.emoji}
                </span>
                <div>
                  <h2 className="text-xl text-foreground">{c.title}</h2>
                  <p className="mt-1 text-sm font-medium text-primary">{c.meta}</p>
                </div>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">{c.body}</p>
              <div className="mt-5">
                <CheckList items={c.points} />
              </div>
              <div className="mt-6 space-y-1.5 rounded-2xl bg-secondary/50 p-4 text-sm text-secondary-foreground">
                <p><span className="font-semibold">Duration:</span> {c.duration}</p>
                <p><span className="font-semibold">Days/Week:</span> {c.days}</p>
              </div>
              <div className="mt-6">
                <CTAButton to="/free-trial" className="w-full">Enroll Now — 2 Days Free Trial</CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Flexible Class Schedule"
          title="You Choose — Your Days, Your Duration, Your Pace"
        />
        <div className="mt-10">
          <DataTable head={["Schedule Feature", "Details"]} rows={schedule} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions About Our Courses"
        />
        <div className="mt-12">
          <FAQ items={coursesFaqs} />
        </div>
      </Section>

      <Section tone="emerald">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            inverted
            title="Start Any Course Today — 2 Days Free, No Payment"
            intro="Choose any course from My Quran Guide and start with a 2-day free trial — completely free, no credit card, no commitment. Our certified male and female tutors are ready to guide you or your child on the path of the Quran."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">Book My 2-Day Free Trial Now</CTAButton>
            <CTAButton to="/contact" size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us to Choose the Right Course
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
