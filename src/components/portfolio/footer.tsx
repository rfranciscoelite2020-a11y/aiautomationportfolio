import { PERSON, CALENDLY_URL, LINKEDIN_URL, FACEBOOK_URL } from "@/lib/portfolio-data";
import { Linkedin, Facebook, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-paper px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="font-display text-2xl text-ink">
            {PERSON.firstName}
            <span className="text-ember-grad font-medium"> {PERSON.lastName}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-mute">
            GoHighLevel &amp; AI Automation Expert. Building CRM systems, AI agents, and automation
            workflows that run your business in the background — while you focus on growth.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper text-ink transition-colors hover:border-ember hover:text-ember"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper text-ink transition-colors hover:border-ember hover:text-ember"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PERSON.email}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper text-ink transition-colors hover:border-ember hover:text-ember"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">Explore</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#services" className="text-ink-mute hover:text-ink">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-ink-mute hover:text-ink">
                  Sample Works
                </a>
              </li>
              <li>
                <a href="#case-study" className="text-ink-mute hover:text-ink">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#about" className="text-ink-mute hover:text-ink">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">Contact</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${PERSON.email}`}
                  className="inline-flex items-center gap-1 text-ink-mute hover:text-ink"
                >
                  Email <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-mute hover:text-ink"
                >
                  Book a call
                </a>
              </li>
              <li className="text-ink-mute">{PERSON.location}</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">Status</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="inline-flex items-center gap-2 text-ink-mute">
                <span className="live-dot h-2 w-2 rounded-full bg-success text-success" />
                Available for work
              </li>
              <li className="text-ink-mute">Reply · &lt; 24h</li>
              <li className="text-ink-mute">Sprint-based</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row">
        <p>© 2026 {PERSON.fullName}, All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#footer" className="hover:text-ink">
            Privacy Policy
          </a>
          <a href="#footer" className="hover:text-ink">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
