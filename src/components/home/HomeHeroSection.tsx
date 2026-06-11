import { CheckCircle2 } from "lucide-react";
import { CTAButton } from "@/components/site/CTAButton";
import { SITE } from "@/lib/site";

export function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute -left-28 top-6 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-gold/25 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up lg:pr-4">
          <h1 className="text-balance text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.2rem]">
            Online Quran Classes for Kids, Adults &amp; New Muslims
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn with certified male and female tutors in one-on-one or group sessions, on your schedule. Start with a
            2-day free trial and experience a structured, supportive Quran learning journey from home.
          </p>
          <ul className="mt-6 grid max-w-xl gap-2.5">
            <li className="flex items-center gap-2.5 text-sm text-foreground/90">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Flexible timings for all time zones
            </li>
            <li className="flex items-center gap-2.5 text-sm text-foreground/90">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Tajweed, Hifz, Noorani Qaida, Arabic and Islamic Studies
            </li>
            <li className="flex items-center gap-2.5 text-sm text-foreground/90">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Live classes via Zoom, Skype or Google Meet
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton to="/free-trial" size="lg">
              Start Your 2-Day Free Trial Now
            </CTAButton>
            <CTAButton to="/courses" size="lg" variant="outline">
              View Our Courses
            </CTAButton>
          </div>
        </div>
        <div className="animate-fade-in lg:pl-4">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3 shadow-card">
            <div className="pointer-events-none absolute left-6 top-6 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground shadow-soft">
              Trusted by Families
            </div>
            <div className="pointer-events-none absolute bottom-6 right-6 rounded-xl bg-background/85 px-3 py-2 text-xs font-medium text-foreground shadow-soft">
              Free trial in 24h
            </div>
            <img
              src={SITE.heroImagePath}
              alt="An open Quran resting on a wooden stand with a soft geometric Islamic arch behind it"
              width={1536}
              height={1152}
              fetchPriority="high"
              className="h-full w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
