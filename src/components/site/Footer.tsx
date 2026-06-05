import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-b from-secondary/20 via-background to-secondary/30">
      <div className="pointer-events-none absolute -left-24 -top-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="mb-10 rounded-3xl border border-border/80 bg-gradient-emerald px-6 py-8 text-primary-foreground shadow-card sm:px-8">
          <h3 className="text-balance text-2xl sm:text-3xl">Ready to begin your Quran journey?</h3>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            Join a warm, structured learning environment with certified tutors and flexible timings.
          </p>
          <div className="mt-6">
            <Link
              to="/free-trial"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform duration-300 motion-safe:hover:-translate-y-0.5"
            >
              Book Your 2-Day Free Trial
            </Link>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Quality Quran education, accessible for every student, every family,
              and every new Muslim around the world — from the comfort of home.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={`mailto:${SITE.email}`} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background text-foreground shadow-soft transition-colors hover:text-primary">
                <Mail className="h-4 w-4" />
              </a>
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background text-foreground shadow-soft transition-colors hover:text-primary">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={SITE.facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background text-foreground shadow-soft transition-colors hover:text-primary">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={SITE.instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background text-foreground shadow-soft transition-colors hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/free-trial" className="transition-colors hover:text-primary">
                  Free Trial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-primary">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
              </li>
              <li>Available 24/7 — reply in 1-2 hours</li>
              <li className="flex gap-4 pt-1">
                <Link to="/privacy-policy" className="transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
                <Link to="/terms-conditions" className="transition-colors hover:text-primary">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} My Quran Guide. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
