/**
 * Timezone detection for the trial booking form.
 *
 * The single most common reason a trial booking falls through is a time
 * misunderstanding: the family writes "6pm", the tutor reads it as 6pm PKT, and
 * nobody shows up. So we detect the visitor's zone, show every proposed slot in
 * their own clock, and submit the IANA zone name alongside the choice.
 */

/** Tutors work out of Pakistan Standard Time, which does not observe DST. */
export const TUTOR_TIMEZONE = "Asia/Karachi";
export const TUTOR_TIMEZONE_LABEL = "Pakistan Standard Time (UTC+5)";

/**
 * Resolves the visitor's IANA zone, e.g. "America/New_York".
 *
 * Returns null during SSR and on the rare browser that throws here, so callers
 * must always have a manual fallback rather than assuming a zone.
 */
export function detectTimezone(): string | null {
  if (typeof Intl === "undefined") return null;
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || null;
  } catch {
    return null;
  }
}

/** "America/New_York" -> "New York". Good enough to show back to a human. */
export function prettyZone(timeZone: string): string {
  const city = timeZone.split("/").pop() ?? timeZone;
  return city.replace(/_/g, " ");
}

/**
 * The visitor's current UTC offset in minutes, for the given zone.
 *
 * Derived by formatting one instant in both UTC and the target zone and
 * diffing, which is the only way to get this right across DST without
 * shipping a timezone database.
 */
export function offsetMinutes(timeZone: string, at: Date = new Date()): number | null {
  try {
    const dtf = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const parts = dtf.formatToParts(at);
    const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
    const asUtc = Date.UTC(
      get("year"),
      get("month") - 1,
      get("day"),
      get("hour") % 24,
      get("minute"),
      get("second"),
    );
    return Math.round((asUtc - at.getTime()) / 60_000);
  } catch {
    return null;
  }
}

/** Formats a UTC offset in minutes as "UTC+5:30" / "UTC-4". */
export function formatOffset(minutes: number): string {
  const sign = minutes < 0 ? "-" : "+";
  const abs = Math.abs(minutes);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  return `UTC${sign}${h}${m ? `:${String(m).padStart(2, "0")}` : ""}`;
}

/**
 * Converts an hour-of-day in Pakistan time to the visitor's local hour,
 * returning a label like "8:30 am". Used to render slot suggestions.
 */
export function pktHourInZone(pktHour: number, timeZone: string): string | null {
  const tutor = offsetMinutes(TUTOR_TIMEZONE);
  const local = offsetMinutes(timeZone);
  if (tutor === null || local === null) return null;

  const deltaMinutes = local - tutor;
  const total = (((pktHour * 60 + deltaMinutes) % 1440) + 1440) % 1440;
  const h24 = Math.floor(total / 60);
  const m = total % 60;
  const suffix = h24 < 12 ? "am" : "pm";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}${m ? `:${String(m).padStart(2, "0")}` : ""} ${suffix}`;
}

export interface SlotWindow {
  id: string;
  label: string;
  /** Start hour in Pakistan time, 24h. */
  pktHour: number;
  pktEndHour: number;
}

/**
 * The four windows tutors actually staff, expressed in Pakistan time.
 * Anything outside these is handled case by case over WhatsApp.
 */
export const SLOT_WINDOWS: ReadonlyArray<SlotWindow> = [
  { id: "early", label: "Early morning", pktHour: 5, pktEndHour: 9 },
  { id: "morning", label: "Late morning", pktHour: 9, pktEndHour: 13 },
  { id: "afternoon", label: "Afternoon", pktHour: 13, pktEndHour: 18 },
  { id: "evening", label: "Evening", pktHour: 18, pktEndHour: 23 },
];

/** Renders a window as a local-time range, e.g. "8 pm – 12 am your time". */
export function windowInZone(w: SlotWindow, timeZone: string): string | null {
  const start = pktHourInZone(w.pktHour, timeZone);
  const end = pktHourInZone(w.pktEndHour, timeZone);
  if (!start || !end) return null;
  return `${start} to ${end}`;
}
