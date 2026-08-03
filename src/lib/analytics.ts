/**
 * Conversion event tracking.
 *
 * Deliberately vendor-neutral: events are pushed to `window.dataLayer` (GTM's
 * contract) and mirrored to `gtag` if a direct GA4 tag is present. If neither
 * is installed the calls are inert, so the site works with no analytics at all
 * and nothing needs to be stripped out before launch.
 *
 * Only real conversions are tracked. Page views are the analytics vendor's job.
 */

type EventName =
  | "trial_form_start"
  | "trial_form_step"
  | "trial_form_submit"
  | "whatsapp_click"
  | "phone_click"
  | "email_click";

type EventPayload = Record<string, string | number | boolean | undefined>;

interface AnalyticsWindow extends Window {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (command: string, name: string, params?: Record<string, unknown>) => void;
}

export function track(event: EventName, payload: EventPayload = {}): void {
  if (typeof window === "undefined") return;

  const w = window as AnalyticsWindow;
  const clean = Object.fromEntries(
    Object.entries(payload).filter(([, v]) => v !== undefined && v !== ""),
  );

  try {
    w.dataLayer = w.dataLayer ?? [];
    w.dataLayer.push({ event, ...clean });
    w.gtag?.("event", event, clean);
  } catch {
    // Analytics must never break a booking.
  }
}
