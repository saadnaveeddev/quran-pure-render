import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/site/Button";
import { Field, RadioCards, SelectField, TextareaField } from "@/components/site/FormFields";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { COURSE_LIST } from "@/content/courses";
import { track } from "@/lib/analytics";
import { SITE, whatsappUrl } from "@/lib/site";
import {
  SLOT_WINDOWS,
  TUTOR_TIMEZONE_LABEL,
  detectTimezone,
  formatOffset,
  offsetMinutes,
  prettyZone,
  windowInZone,
} from "@/lib/timezone";
import { cn } from "@/lib/utils";

/**
 * Three-step trial booking form.
 *
 * The old form asked for ten free-text fields in one screen, including
 * "Preferred Class Timing" as a text box, which produced unusable answers and
 * a long back-and-forth before anything could be scheduled. This version asks
 * the easy, low-commitment questions first, keeps contact details until last,
 * and resolves timing against the visitor's detected timezone so the slot is
 * already agreed by the time the form is submitted.
 */

const STEPS = [
  { id: 1, label: "The student" },
  { id: 2, label: "Timing" },
  { id: 3, label: "Contact" },
] as const;

interface FormState {
  studentType: string;
  course: string;
  tutorGender: string;
  timezone: string;
  perWeek: string;
  sessionMinutes: string;
  window: string;
  name: string;
  email: string;
  whatsapp: string;
  notes: string;
}

const EMPTY: FormState = {
  studentType: "",
  course: "",
  tutorGender: "",
  timezone: "",
  perWeek: "3",
  sessionMinutes: "30",
  window: "",
  name: "",
  email: "",
  whatsapp: "",
  notes: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(step: number, s: FormState): Errors {
  const e: Errors = {};
  if (step === 1) {
    if (!s.studentType) e.studentType = "Let us know who the classes are for.";
    if (!s.course) e.course = "Pick a course. You can change it after the trial.";
  }
  if (step === 2) {
    if (!s.timezone.trim()) e.timezone = "We need your timezone to propose a time.";
    if (!s.window) e.window = "Choose roughly when you are free.";
  }
  if (step === 3) {
    if (!s.name.trim()) e.name = "Please tell us your name.";
    if (!s.email.trim()) e.email = "We send the class link by email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.email.trim()))
      e.email = "That email address does not look right.";
    if (!s.whatsapp.trim()) e.whatsapp = "We confirm the booking on WhatsApp.";
    else if (s.whatsapp.replace(/\D/g, "").length < 8)
      e.whatsapp = "Include your country code, e.g. +1 555 123 4567.";
  }
  return e;
}

export function TrialForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);
  const [zoneDetected, setZoneDetected] = useState(false);
  const startedRef = useRef(false);
  const headingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tz = detectTimezone();
    if (tz) {
      setForm((f) => (f.timezone ? f : { ...f, timezone: tz }));
      setZoneDetected(true);
    }
  }, []);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
    if (!startedRef.current) {
      startedRef.current = true;
      track("trial_form_start");
    }
  }

  function goNext() {
    const found = validate(step, form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    const next = step + 1;
    setStep(next);
    track("trial_form_step", { step: next });
    // Move focus to the new step so a screen reader announces the change.
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(3, form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    setFailed(false);
    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("trial_form_submit", { course: form.course, student_type: form.studentType });
      navigate({ to: "/thank-you" });
    } catch {
      setFailed(true);
      setSubmitting(false);
    }
  }

  const zone = form.timezone.trim();
  const zoneOffset = zone ? offsetMinutes(zone) : null;

  return (
    <div className="jadwal p-6 shadow-page sm:p-8">
      <ol className="flex items-center gap-2" aria-label="Booking progress">
        {STEPS.map((s) => {
          const state = s.id === step ? "current" : s.id < step ? "done" : "todo";
          return (
            <li key={s.id} className="flex flex-1 flex-col gap-1.5">
              <span className={cn("h-0.5 w-full", state === "todo" ? "bg-rule" : "bg-lapis")} />
              <span
                className={cn(
                  "text-[0.8125rem] font-medium",
                  state === "current" ? "text-lapis" : "text-ink-faint",
                )}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>

      <p
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 text-caption text-gold-ink focus:outline-none"
        aria-live="polite"
      >
        Step {step} of 3
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-6" noValidate>
        {step === 1 && (
          <>
            <RadioCards
              label="Who are the classes for?"
              name="studentType"
              required
              value={form.studentType}
              onChange={(v) => set("studentType", v)}
              error={errors.studentType}
              options={[
                { value: "child", label: "My child", description: "Roughly ages 4 to 15" },
                { value: "teen", label: "A teenager", description: "Ages 15 to 18" },
                { value: "adult", label: "Myself, as an adult", description: "Any starting point" },
                {
                  value: "new-muslim",
                  label: "A new Muslim",
                  description: "Starting from the alphabet",
                },
              ]}
            />

            <SelectField
              label="Which course would you like to try?"
              name="course"
              required
              value={form.course}
              onChange={(v) => set("course", v)}
              error={errors.course}
              hint="Not sure? Pick the closest one. The tutor will assess and advise in the trial."
              options={COURSE_LIST.map((c) => ({ value: c.key, label: c.navLabel }))}
            />

            <RadioCards
              label="Do you have a tutor preference?"
              name="tutorGender"
              value={form.tutorGender}
              onChange={(v) => set("tutorGender", v)}
              columns={3}
              options={[
                { value: "female", label: "Female tutor" },
                { value: "male", label: "Male tutor" },
                { value: "either", label: "No preference" },
              ]}
            />
          </>
        )}

        {step === 2 && (
          <>
            <Field
              label="Your timezone"
              name="timezone"
              required
              value={form.timezone}
              onChange={(v) => set("timezone", v)}
              error={errors.timezone}
              hint={
                zone && zoneOffset !== null
                  ? `Detected as ${prettyZone(zone)} (${formatOffset(zoneOffset)}). Edit it if that is wrong.`
                  : zoneDetected
                    ? "Edit this if it is wrong."
                    : "For example: America/New_York, Europe/London, Australia/Sydney."
              }
            />

            <RadioCards
              label="When are you usually free?"
              name="window"
              required
              value={form.window}
              onChange={(v) => set("window", v)}
              error={errors.window}
              hint={`Times below are shown in your own clock. Our tutors teach from ${TUTOR_TIMEZONE_LABEL}.`}
              options={SLOT_WINDOWS.map((w) => {
                const local = zone ? windowInZone(w, zone) : null;
                return {
                  value: w.id,
                  label: w.label,
                  description: local ? `${local} your time` : undefined,
                };
              })}
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                label="Classes per week"
                name="perWeek"
                value={form.perWeek}
                onChange={(v) => set("perWeek", v)}
                options={[
                  { value: "2", label: "2 days a week" },
                  { value: "3", label: "3 days a week" },
                  { value: "4", label: "4 days a week" },
                  { value: "5", label: "5 days a week" },
                  { value: "6", label: "6 days a week" },
                ]}
              />
              <SelectField
                label="Class length"
                name="sessionMinutes"
                value={form.sessionMinutes}
                onChange={(v) => set("sessionMinutes", v)}
                options={[
                  { value: "30", label: "30 minutes" },
                  { value: "45", label: "45 minutes" },
                ]}
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <Field
              label="Your name"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={(v) => set("name", v)}
              error={errors.name}
            />
            <Field
              label="Email address"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              value={form.email}
              onChange={(v) => set("email", v)}
              error={errors.email}
              hint="Your class link and tutor introduction go here."
            />
            <Field
              label="WhatsApp number"
              name="whatsapp"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="+1 555 123 4567"
              value={form.whatsapp}
              onChange={(v) => set("whatsapp", v)}
              error={errors.whatsapp}
              hint="Include your country code. We use this to confirm the time, nothing else."
            />
            <TextareaField
              label="Anything we should know"
              name="notes"
              rows={3}
              value={form.notes}
              onChange={(v) => set("notes", v)}
              placeholder="Where the student is up to, a learning need, a fixed constraint on timing."
            />

            {failed && (
              <p className="text-[0.875rem] text-error" role="alert">
                That did not send. Please try again, or message us on WhatsApp and we will book the
                trial for you directly.
              </p>
            )}

            <p className="text-[0.8125rem] leading-relaxed text-ink-faint">
              We use your details only to arrange your classes. We do not sell them or add you to a
              marketing list. See our{" "}
              <a href="/privacy-policy" className="text-lapis underline underline-offset-2">
                privacy policy
              </a>
              .
            </p>
          </>
        )}

        <div className="flex flex-wrap items-center gap-3 border-t border-rule pt-5">
          {step > 1 && (
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button onClick={goNext} withChevron>
              Continue
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? "Sending" : "Request my free trial"}
            </Button>
          )}
          <span className="text-[0.8125rem] text-ink-faint">
            {step === 3 ? "No card required." : `${4 - step} short steps left.`}
          </span>
        </div>
      </form>

      <div className="mt-6 border-t border-rule pt-5">
        <p className="text-[0.875rem] text-ink-soft">
          Would rather not fill in a form? Message us and we will book it for you.
        </p>
        <a
          href={whatsappUrl("Assalamu alaikum, I would like to book the two free trial classes.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "trial_form" })}
          className="mt-2.5 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-lapis underline-offset-4 hover:underline"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp {SITE.whatsappE164}
        </a>
      </div>
    </div>
  );
}
