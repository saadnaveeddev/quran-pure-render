import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import process from "node:process";

/**
 * General enquiry intake.
 *
 * Same contract as /api/trial: forwards to `CONTACT_WEBHOOK_URL` if set,
 * otherwise falls back to `TRIAL_WEBHOOK_URL`, otherwise logs. Never fails in
 * a way that loses the message silently.
 */

function sanitise(raw: unknown) {
  if (typeof raw !== "object" || raw === null) return null;
  const r = raw as Record<string, unknown>;
  const str = (k: string, max: number) =>
    typeof r[k] === "string" ? (r[k] as string).trim().slice(0, max) : "";

  const submission = {
    name: str("name", 120),
    email: str("email", 200),
    whatsapp: str("whatsapp", 40),
    message: str("message", 4000),
  };

  if (!submission.name || !submission.email || !submission.message) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(submission.email)) return null;
  return submission;
}

export const Route = createFileRoute("/api/contact")({
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

        const record = { ...submission, kind: "contact", receivedAt: new Date().toISOString() };
        const webhook = process.env.CONTACT_WEBHOOK_URL ?? process.env.TRIAL_WEBHOOK_URL;

        if (webhook) {
          try {
            const res = await fetch(webhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(record),
            });
            if (!res.ok) throw new Error(`webhook responded ${res.status}`);
          } catch (error) {
            console.error("[contact] webhook failed", error, record);
            return Response.json({ ok: false, error: "delivery_failed" }, { status: 502 });
          }
        } else {
          console.warn("[contact] CONTACT_WEBHOOK_URL is not set; logging submission", record);
        }

        return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
      },
    },
  },
});
