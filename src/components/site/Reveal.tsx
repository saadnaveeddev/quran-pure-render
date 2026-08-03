import { useEffect, useRef, type ReactNode } from "react";

/**
 * One-shot fade-and-rise as an element enters the viewport.
 *
 * The hiding rule keys off a `data-reveal` attribute that this effect applies
 * on mount, so a visitor without JavaScript sees the content immediately
 * rather than a blank page. Motion is skipped entirely under
 * `prefers-reduced-motion: reduce`.
 */
export function Reveal({
  children,
  delayMs = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  /** Set to "li" inside a list so the markup stays valid. */
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    el.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={className}
      style={{ "--reveal-delay": `${delayMs}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
