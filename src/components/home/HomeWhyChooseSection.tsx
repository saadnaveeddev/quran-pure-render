import { BadgeCheck, CalendarClock, Users, Video, Gift } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";

const whyChoose = [
  {
    icon: BadgeCheck,
    title: "Certified & Experienced Tutors",
    body: "Every tutor at My Quran Guide is both certified and experienced. Our male and female teachers hold Islamic certifications and have years of hands-on teaching experience — so your child or family member learns the Quran the right way from day one.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling — You Choose Your Time",
    body: "We understand that every student has a different routine. That is why we offer fully flexible class timings — you pick the day, you pick the time. Morning, evening, or weekend — we fit into your schedule, not the other way around.",
  },
  {
    icon: Users,
    title: "One-on-One & Group Classes Available",
    body: "Whether you prefer personalized attention through one-on-one sessions or enjoy learning in a group environment, My Quran Guide has you covered. Both formats are available for all age groups and levels.",
  },
  {
    icon: Video,
    title: "Learn via Zoom, Skype or Google Meet",
    body: "No app restrictions. No complicated setup. Our classes run on Zoom, Skype, and Google Meet — whichever platform you and your family are most comfortable with. All you need is a device and an internet connection.",
  },
  {
    icon: Gift,
    title: "2-Day Free Trial — Zero Risk",
    body: "We are so confident in the quality of our teaching that we offer a 2-day free trial to every new student. No credit card. No commitment. Just two full classes to experience My Quran Guide for yourself.",
  },
];

export function HomeWhyChooseSection() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Why Choose My Quran Guide?"
        title="Why My Quran Guide Is the Right Choice for Your Family"
        intro="Finding a trustworthy and qualified Quran tutor online can be overwhelming. At My Quran Guide, we have made it easy. Here is what makes us different from other online Quran academies:"
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.map((item) => (
          <div
            key={item.title}
            className="group card-sweep rounded-2xl p-7 motion-safe:hover:-translate-y-1"
          >
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground">
              <item.icon className="h-6 w-6" />
            </span>
            <h3 className="relative z-10 mt-5 text-xl text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
              {item.title}
            </h3>
            <p className="relative z-10 mt-3 text-[0.95rem] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/88">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
