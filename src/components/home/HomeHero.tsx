import { Button } from "@/components/site/Button";
import { Rosette } from "@/components/manuscript/Rosette";
import { SITE, whatsappUrl } from "@/lib/site";

/**
 * Three proof chips, each one checkable. Nothing here asserts a student count
 * or a rating, because we cannot yet evidence either.
 */
const PROOF = [
  "Two free trial classes",
  "Male or female tutor, your choice",
  "Every time zone, seven days a week",
];

export function HomeHero() {
  return (
    <section className="border-b border-rule bg-paper-warm">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          {/* The one place the rosette animates. */}
          <Rosette animate className="h-12 w-12 text-gold" />

          <h1 className="text-display-xl mt-7 text-balance text-ink">
            Learn to read the Quran properly, wherever you are
          </h1>

          <p className="measure mt-6 text-pretty text-body-l text-ink-soft">
            One-to-one online classes with certified male and female tutors, for children from five
            and for adults starting from nothing. Your first two classes are free, and nothing is
            charged until you have decided.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/free-trial" size="lg" withChevron>
              Book a free trial class
            </Button>
            <Button to="/courses" variant="secondary" size="lg">
              See the seven courses
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
