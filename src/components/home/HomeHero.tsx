import { Button } from "@/components/site/Button";
import { Rosette } from "@/components/manuscript/Rosette";
import { SITE, whatsappUrl } from "@/lib/site";

/**
 * Three proof chips, each one checkable. Nothing here asserts a student count
 * or a rating, because we cannot yet evidence either.
 */
const PROOF = [
  "Certified tutors, 8+ years of experience",
  "You set the schedule — morning, evening or weekend",
  "2-day free trial, no card required",
];

export function HomeHero() {
  return (
    <section className="border-b border-rule bg-paper-warm">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          {/* The one place the rosette animates. */}
          <Rosette animate className="h-12 w-12 text-gold" />

          <h1 className="text-display-xl mt-7 text-balance text-ink">
            Online Quran Classes for Kids, Adults & New Muslims — Learn From Home, Live With a Real
            Tutor
          </h1>

          <p className="measure mt-6 text-pretty text-body-l text-ink-soft">
            My Quran Guide makes learning the Quran simple and flexible — for kids, teenagers,
            adults, and new Muslims alike. Whether you're starting from zero or refining your
            Tajweed, our tutors are certified from Pakistan's top Quran-teaching institutes, with
            8+ years of teaching experience, split evenly between male and female instructors.
            Classes run live on Zoom, Skype, or Google Meet, on a schedule you set — not one we
            assign. Start with a 2-day free trial. No payment details, no commitment.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/free-trial" size="lg" withChevron>
              Start Your 2-Day Free Trial
            </Button>
            <Button to="/courses" variant="secondary" size="lg">
              View All Courses
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-rule pt-6">
            {PROOF.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.875rem] text-ink-soft">
                <Rosette className="h-3.5 w-3.5 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="jadwal p-3">
          <img
            src={SITE.heroImagePath}
            alt="An open Quran resting on a wooden rehal in front of a carved arch"
            width={1536}
            height={1152}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* WhatsApp offered at equal weight — for this audience it converts better
          than a form, and it should not be buried in the footer. */}
      <div className="border-t border-rule bg-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <p className="text-[0.9375rem] text-ink-soft">
            Would rather ask a question first? Message us and we reply{" "}
            <span className="text-ink">within one to two hours</span>.
          </p>
          <Button
            href={whatsappUrl("Assalamu alaikum — I have a question about your Quran classes.")}
            variant="secondary"
          >
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
