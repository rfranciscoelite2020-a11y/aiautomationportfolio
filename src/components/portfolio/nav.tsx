import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { PERSON, CALENDLY_URL } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Selected work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the dark hero (not scrolled): bone text on a dark glass.
  // Once scrolled onto light sections: ink text on a light glass.
  const overDark = !scrolled && !open;

  return (
    <div className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        aria-label="Main navigation"
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2.5 transition-all duration-300 sm:gap-4 sm:px-5",
          scrolled
            ? "border-line bg-paper/80 shadow-[0_8px_30px_-12px_rgba(9,9,11,0.18)] backdrop-blur-xl"
            : "border-bone-line bg-obsidian/40 backdrop-blur-md",
        )}
      >
        <a
          href="#top"
          className={cn(
            "flex items-center gap-0 font-display text-xl font-normal tracking-tight transition-colors",
            overDark ? "text-bone" : "text-ink",
          )}
        >
          <span>{PERSON.firstName}</span>
          <span
            className={overDark ? "text-spark-grad font-medium" : "text-ember-grad font-medium"}
          >
            {" "}
            {PERSON.lastName}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-colors",
                overDark
                  ? "text-bone-soft hover:bg-white/10 hover:text-bone"
                  : "text-ink-mute hover:bg-paper-2 hover:text-ink",
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary nav-booking-cta h-10 px-5 py-0"
          >
            Book a call
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border transition-colors xl:hidden",
              overDark ? "border-bone-line bg-white/10 text-bone" : "border-line bg-paper text-ink",
            )}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* mobile sheet */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-4 top-20 z-[99] max-h-[80vh] origin-top overflow-y-auto rounded-3xl border bg-paper p-4 shadow-[0_24px_60px_-20px_rgba(9,9,11,0.3)] transition-all duration-200 lg:hidden",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
          "border-line",
        )}
      >
        <div className="grid grid-cols-1 gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-2"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn-primary mt-3 w-full"
        >
          Book a call
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
