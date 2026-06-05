import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/site";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 py-3">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-border/70 bg-background/82 px-5 shadow-soft backdrop-blur-xl sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-1.5 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  active
                    ? "bg-secondary text-secondary-foreground shadow-soft"
                    : "text-muted-foreground hover:bg-background/80 hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <CTAButton to="/free-trial">Free Trial</CTAButton>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-card/70 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden rounded-b-2xl border-x border-b border-border bg-background/95 shadow-soft transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden motion-reduce:transition-none",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-secondary/60",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <CTAButton to="/free-trial" className="mt-2 w-full">
              Book My Free Trial
            </CTAButton>
          </nav>
        </div>
      </div>
    </header>
  );
}
