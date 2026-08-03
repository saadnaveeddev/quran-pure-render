import { Link } from "@tanstack/react-router";
import { COURSE_ICONS } from "@/components/manuscript/icons";
import { Rosette } from "@/components/manuscript/Rosette";
import { COURSES, type Course, type CourseKey } from "@/content/courses";
import { formatPrice, type CurrencyCode } from "@/content/pricing";
import type { Testimonial, Tutor } from "@/content/people";
import { cn } from "@/lib/utils";

/**
 * The jadwal frame is reserved for defined units of study — the seven course
 * cards and the pricing cards — so that the ruled border keeps meaning
 * something rather than becoming a generic card style.
 */
export function CourseCard({
  course,
  currency = "USD",
  className,
}: {
  course: Course;
  currency?: CurrencyCode;
  className?: string;
}) {
  const Icon = COURSE_ICONS[course.icon];

  return (
    <article className={cn("jadwal flex flex-col p-7 sm:p-8", className)}>
      <Icon className="h-7 w-7 text-lapis" />
      <h3 className="text-h3 mt-5 text-ink">
        <Link to={course.path} className="hover:text-lapis hover:underline underline-offset-4">
          {course.navLabel}
        </Link>
      </h3>
      <p className="mt-3 text-pretty text-[0.9375rem] text-ink-soft">{course.summary}</p>

      <dl className="mt-6 space-y-1.5 border-t border-rule pt-5 text-[0.875rem]">
        <div className="flex justify-between gap-4">
          <dt className="text-ink-soft">Level</dt>
          <dd className="text-right text-ink">{course.level}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-soft">Ages</dt>
          <dd className="text-right text-ink">{course.ages}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-soft">From</dt>
          <dd className="text-data text-right text-ink">
            {formatPrice(course.usdPerClass, currency, "half")} a class
          </dd>
        </div>
      </dl>

      <div className="mt-auto pt-6">
        <Link
          to={course.path}
          className="group/link inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-lapis underline-offset-4 hover:underline"
        >
          See the {course.navLabel.toLowerCase()} syllabus
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-[120ms] motion-safe:group-hover/link:translate-x-0.5"
          >
            <path d="m6 3.5 4.5 4.5L6 12.5" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export function TutorCard({ tutor, className }: { tutor: Tutor; className?: string }) {
  // Initials keep the card's shape when a tutor has no photograph yet, without
  // reaching for the rosette — it is a signature device, not a spare icon.
  const initials =
    tutor.name
      .replace(/[[\]]/g, "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("") || "?";

  return (
    <article className={cn("border border-rule bg-paper-warm p-6", className)}>
      {tutor.photo ? (
        <img
          src={tutor.photo}
          alt={`${tutor.name}, Quran tutor at My Quran Guide`}
          width={96}
          height={96}
          loading="lazy"
          className="h-24 w-24 rounded-[2px] object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-24 w-24 items-center justify-center border border-dashed border-rule"
        >
          <span className="font-display text-2xl font-bold text-gold-ink">{initials}</span>
        </div>
      )}
      <h3 className="text-h3 mt-5 text-ink">{tutor.name}</h3>
      <p className="text-caption mt-1 text-gold-ink">
        {tutor.yearsTeaching > 0 ? `${tutor.yearsTeaching} years teaching` : "[Years teaching]"}
      </p>
      <p className="mt-3 text-[0.9375rem] text-ink-soft">{tutor.bio}</p>
      <ul className="mt-4 space-y-1.5 border-t border-rule pt-4 text-[0.875rem] text-ink-soft">
        {tutor.credentials.map((credential) => (
          <li key={credential} className="flex items-start gap-2.5">
            <Rosette className="mt-[0.35em] h-3 w-3 shrink-0 text-gold" />
            {credential}
          </li>
        ))}
        <li className="flex items-start gap-2.5">
          <Rosette className="mt-[0.35em] h-3 w-3 shrink-0 text-gold" />
          Teaches in {tutor.languages.join(", ")}
        </li>
      </ul>
    </article>
  );
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const course = COURSES[testimonial.course as CourseKey];
  const dateLabel = new Date(testimonial.date).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <figure className={cn("border border-rule bg-paper-warm p-6", className)}>
      <span aria-hidden="true" className="font-display block text-4xl leading-none text-gold">
        &ldquo;
      </span>
      <blockquote className="mt-2 text-pretty text-[0.9375rem] text-ink-soft">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-5 border-t border-rule pt-4 text-[0.875rem]">
        <span className="font-semibold text-ink">{testimonial.name}</span>
        <span className="text-ink-soft">
          {" "}
          · {testimonial.country} · {course ? course.navLabel : testimonial.course}
        </span>
        <span className="mt-1 block text-ink-soft">
          <time dateTime={testimonial.date}>{dateLabel}</time>
        </span>
      </figcaption>
    </figure>
  );
}
