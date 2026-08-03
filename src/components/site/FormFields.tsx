import type { ReactNode } from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Form primitives for the trial booking flow.
 *
 * Every control is a real labelled input — no placeholder-as-label, since
 * placeholders vanish on focus and are invisible to most screen readers.
 * Errors are wired with `aria-describedby` + `aria-invalid` and announced
 * politely, so a keyboard user knows what failed without seeing the red.
 */

const controlBase =
  "w-full rounded-[2px] border bg-paper px-3.5 py-2.5 font-sans text-[0.9375rem] text-ink " +
  "placeholder:text-ink-faint transition-colors duration-[120ms] " +
  "focus:border-lapis focus:outline-none focus:ring-2 focus:ring-lapis/25";

const controlValid = "border-rule";
const controlInvalid = "border-error";

function FieldShell({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: ReactNode;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-sans text-[0.875rem] font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-ink-faint" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 font-normal text-ink-faint">(optional)</span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-[0.8125rem] leading-snug text-ink-faint">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[0.8125rem] text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/** Builds the aria-describedby list, skipping absent parts. */
function describedBy(id: string, hint?: ReactNode, error?: string) {
  const ids = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

interface BaseProps {
  label: string;
  name: string;
  hint?: ReactNode;
  error?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export function Field({
  label,
  name,
  hint,
  error,
  required,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
}: BaseProps & {
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
}) {
  const id = `f-${name}`;
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={required}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={cn(controlBase, error ? controlInvalid : controlValid)}
      />
    </FieldShell>
  );
}

export function SelectField({
  label,
  name,
  hint,
  error,
  required,
  value,
  onChange,
  options,
  placeholder = "Choose one",
}: BaseProps & {
  options: ReadonlyArray<{ value: string; label: string }>;
  placeholder?: string;
}) {
  const id = `f-${name}`;
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={required}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={cn(controlBase, "appearance-none pr-9", error ? controlInvalid : controlValid)}
        style={{
          // Inline so the caret inherits the ink colour without a plugin.
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%235a5648' stroke-width='1.5' stroke-linecap='round'%3E%3Cpath d='m4 6.5 4 4 4-4'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.75rem center",
          backgroundSize: "1rem",
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function TextareaField({
  label,
  name,
  hint,
  error,
  required,
  value,
  onChange,
  placeholder,
  rows = 4,
}: BaseProps & { placeholder?: string; rows?: number }) {
  const id = `f-${name}`;
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={required}>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        required={required}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={cn(controlBase, "resize-y", error ? controlInvalid : controlValid)}
      />
    </FieldShell>
  );
}

/**
 * Radio group rendered as selectable cards.
 *
 * A real `<fieldset>` + `<legend>` rather than a div with a heading, so the
 * group name is read out with each option.
 */
export function RadioCards({
  label,
  name,
  hint,
  error,
  required,
  value,
  onChange,
  options,
  columns = 2,
}: BaseProps & {
  options: ReadonlyArray<{ value: string; label: string; description?: string }>;
  columns?: 1 | 2 | 3;
}) {
  const groupId = useId();
  const cols = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3" }[columns];

  return (
    <fieldset aria-describedby={describedBy(groupId, hint, error)}>
      <legend className="font-sans text-[0.875rem] font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-ink-faint" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 font-normal text-ink-faint">(optional)</span>
        )}
      </legend>
      {hint && (
        <p id={`${groupId}-hint`} className="mt-1 text-[0.8125rem] leading-snug text-ink-faint">
          {hint}
        </p>
      )}
      <div className={cn("mt-2.5 grid gap-2.5", cols)}>
        {options.map((o) => {
          const checked = value === o.value;
          return (
            <label
              key={o.value}
              className={cn(
                "flex cursor-pointer gap-2.5 rounded-[2px] border p-3.5 transition-colors duration-[120ms]",
                "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-lapis/35",
                checked ? "border-lapis bg-lapis-wash" : "border-rule bg-paper hover:border-ink/30",
              )}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={checked}
                onChange={onChange ? () => onChange(o.value) : undefined}
                required={required}
                className="mt-0.5 h-4 w-4 shrink-0 accent-lapis"
              />
              <span>
                <span className="block font-sans text-[0.9375rem] font-medium text-ink">
                  {o.label}
                </span>
                {o.description && (
                  <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-faint">
                    {o.description}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id={`${groupId}-error`} className="mt-1.5 text-[0.8125rem] text-error" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
