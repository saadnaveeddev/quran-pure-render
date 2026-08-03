import { Link } from "@tanstack/react-router";
import { Button } from "./Button";
import { TestimonialCard, TutorCard } from "./Cards";
import { RosetteList } from "@/components/manuscript/Rosette";
import {
  TESTIMONIALS,
  TUTORS,
  showPlaceholderPeople,
  testimonialsArePublishable,
  tutorsArePublishable,
} from "@/content/people";
import { whatsappUrl } from "@/lib/site";

/**
 * Tutor and testimonial sections, gated on whether the underlying content has
 * actually been verified. See src/content/people.ts.
 *
 * When it hasn't, production shows an honest alternative rather than
 * placeholder people. Offering to send a tutor's real credentials on request
 * is a stronger signal than a stock photo and an invented bio anyway.
 */

/** Visible only on preview/local builds, so the client can spot unfinished data. */
function PlaceholderNotice({ what }: { what: string }) {
  return (
    <p className="mb-8 border border-dashed border-gold bg-gold-wash px-4 py-3 text-[0.875rem] text-ink">
      <strong>Preview only.</strong> These {what} are layout placeholders, not real people. Replace
      them in <code>src/content/people.ts</code> and set the verification flag before launch.
      Production shows a fallback instead.
    </p>
  );
}

export function TutorsSection({ limit }: { limit?: number }) {
  const tutors = limit ? TUTORS.slice(0, limit) : TUTORS;

  if (tutorsArePublishable) {
    return (
      <>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.slug} tutor={tutor} />
          ))}
        </div>
        {limit && (
          <div className="mt-10 text-center">
            <Button to="/tutors" variant="secondary" withChevron>
              Meet every tutor
            </Button>
          </div>
        )}
      </>
    );
  }

  if (showPlaceholderPeople) {
    return (
      <div className="mt-12">
        <PlaceholderNotice what="tutor profiles" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.slug} tutor={tutor} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-12 max-w-3xl border border-rule bg-paper-warm p-7 sm:p-8">
      <h3 className="text-h3 text-ink">Ask for your tutor's credentials before you book</h3>
      <p className="measure mt-4 text-ink-soft">
        We don't publish tutor profiles on the site. Instead, tell us which course you want and we
        will send you the name, qualification and teaching history of the specific tutor we would
        assign — before your free trial, not after it.
      </p>
      <RosetteList
        className="mt-6 text-[0.9375rem] text-ink-soft"
        items={[
          "The tutor who takes your trial class is the tutor you continue with.",
          "Ask for a male or female tutor and that is who is assigned, without exception.",
          "If the match is wrong, tell us and we will reassign at no cost.",
        ]}
      />
      <div className="mt-7 flex flex-wrap gap-3">
        <Button href={whatsappUrl("Please send me the credentials of the tutor for my course.")}>
          Request tutor credentials
        </Button>
        <Button to="/free-trial" variant="secondary" withChevron>
          Book a free trial
        </Button>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  if (testimonialsArePublishable) {
    return (
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.name + testimonial.date} testimonial={testimonial} />
        ))}
      </div>
    );
  }

  if (showPlaceholderPeople) {
    return (
      <div className="mt-12">
        <PlaceholderNotice what="testimonials" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name + testimonial.date} testimonial={testimonial} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-12 max-w-3xl border border-rule bg-paper-warm p-7 sm:p-8">
      <h3 className="text-h3 text-ink">
        We would rather show you nothing than show you invented reviews
      </h3>
      <p className="measure mt-4 text-ink-soft">
        Published reviews here will carry a real first name, country, course and date, used with the
        family's written permission. Until we have those, this space stays empty — because an
        unattributed five-star quote is not evidence of anything, and you are being asked to trust
        us with your child.
      </p>
      <p className="measure mt-4 text-ink-soft">
        In the meantime, the two free trial classes are the evidence. They are real lessons with the
        tutor you would continue with, and nothing is charged until you decide.
      </p>
      <div className="mt-7">
        <Link
          to="/free-trial"
          className="text-[0.9375rem] font-semibold text-lapis underline-offset-4 hover:underline"
        >
          Book the two free classes and judge for yourself
        </Link>
      </div>
    </div>
  );
}
