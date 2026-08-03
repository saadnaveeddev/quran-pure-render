import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import process from "node:process";

/**
 * Trial booking intake.
 *
 * Forwards the submission to whatever the academy already uses — a Google
 * Apps Script endpoint, a Zapier/Make hook, a CRM inbox — via the
 * `TRIAL_WEBHOOK_URL` environment variable. If that is unset the lead is
 * written to the server log so nothing is silently dropped in development,
 * and the request still succeeds so the visitor is never blocked by our
 * plumbing.
 *
 * Set TRIAL_WEBHOOK_URL in the hosting environment before launch.
 */

interface TrialSubmission {
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

/** Caps every field so a malicious payload cannot fill the log or the CRM. */
function sanitise(raw: unknown): TrialSubmission | null {
  if (typeof raw !== "object" || raw === null) return null;
  const r = raw as Record<string, unknown>;
  const str = (k: string, max = 300) =>
    typeof r[k] === "string" ? (r[k] as string).trim().slice(0, max) : "";

  const submission: TrialSubmission = {
    studentType: str("studentType", 40),
    course: str("course", 40),
    tutorGender: str("tutorGender", 20),
    timezone: str("timezone", 60),
    perWeek: str("perWeek", 4),
    sessionMinutes: str("sessionMinutes", 4),
    window: str("window", 20),
    name: str("name", 120),
    email: str("email", 200),
    whatsapp: str("whatsapp", 40),
    notes: str("notes", 2000),
  };

  if (!submission.name || !submission.email || !submission.whatsapp) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(submission.email)) return null;
  return submission;
}

export const Route = createFileRoute("/api/trial")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "invalid_body" }, { status: 400 });
        }

        const submission = sanitise(body);
        if (!submission) {
          return Response.json({ ok: false, error: "invalid_fields" }, { status: 422 });
        }

        const record = { ...submission, receivedAt: new Date().toISOString() };
        const webhook = process.env.TRIAL_WEBHOOK_URL;

        if (webhook) {
          try {
            const res = await fetch(webhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(record),
            });
            if (!res.ok) throw new Error(`webhook responded ${res.status}`);
          } catch (error) {
            // Log the lead in full before returning, so a webhook outage does
            // not lose an enquiry that a human could still follow up.
            console.error("[trial] webhook failed", error, record);
            return Response.json({ ok: false, error: "delivery_failed" }, { status: 502 });
          }
        } else {
          console.warn("[trial] TRIAL_WEBHOOK_URL is not set; logging submission", record);
        }

        return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
      },
    },
  },
});
