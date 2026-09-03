import { Section } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { RosetteDivider } from "@/components/manuscript/Rosette";
import { whatsappUrl } from "@/lib/site";

/**
 * The page's single closing CTA. There is no second banner and no repeated
 * footer band — three near-identical asks in a row produce banner blindness
 * and push the boilerplate-to-content ratio the wrong way.
 */
export function HomeClosing() {
  return (
    <Section tone="ink">
      <div className="mx-auto max-w-2xl text-center">
        <RosetteDivider className="mb-10 [&>span]:bg-gold/40" />
        <h2 className="text-h2 text-balance text-paper">
          Start Your Quran Learning Journey Today — 2 Days Completely Free
        </h2>
        <p className="mt-5 text-pretty text-body-l text-paper/80">
          Certified tutors, flexible timings, one-on-one or group classes, and a 2-day free trial
          with zero risk. Join the families who've already chosen My Quran Guide as their online
          Quran academy.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/free-trial" size="lg" withChevron>
            Start My Free Trial Now
          </Button>
          <Button
            href={whatsappUrl("Assalamu alaikum — I'd like to book a free trial class.")}
            variant="secondary"
            size="lg"
            className="border-paper/35 text-paper hover:bg-paper/10"
          >
            Book on WhatsApp instead
          </Button>
        </div>
      </div>
    </Section>
  );
}
