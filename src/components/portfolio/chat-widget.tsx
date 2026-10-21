import { useEffect, useState } from "react";
import { MessageCircle, X, Send, Mail } from "lucide-react";
import { PERSON } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-5 right-5 z-[120] grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_14px_34px_-10px_rgba(217,77,42,0.6)] transition-all duration-300",
          open ? "rotate-90 bg-ink/90" : "bg-linear-to-br from-ember to-ember-deep hover:scale-105",
        )}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="live-dot absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-success text-success" />
        )}
      </button>

      <div
        className={cn(
          "fixed bottom-24 right-5 z-[120] w-[min(92vw,360px)] origin-bottom-right rounded-3xl border border-line bg-paper shadow-[0_24px_60px_-20px_rgba(9,9,11,0.35)] transition-all duration-300",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-90 opacity-0",
        )}
      >
        <div className="flex items-start gap-3 border-b border-line p-4">
          <img
            src={PERSON.avatar}
            alt={`${PERSON.fullName} portrait`}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-ember/30"
          />
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-ink">{PERSON.fullName}</div>
            <div className="inline-flex items-center gap-1.5 text-xs text-ink-soft">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-success text-success" />
              Typically replies within a few hours
            </div>
          </div>
        </div>

        <div className="space-y-3 p-4">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-paper-2 px-3.5 py-2.5 text-sm leading-relaxed text-ink">
            Hi, I'm {PERSON.firstName}! 👋 Have a project in mind or need help with GoHighLevel or
            automation? Send me a quick message about what you need, and I'll personally get back to
            you with how I can help.
          </div>

          <a href={`mailto:${PERSON.email}`} className="btn-primary w-full">
            <Mail className="h-4 w-4" />
            Send an email
          </a>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const msg = String(data.get("message") ?? "").trim();
              if (!msg) return;
              window.location.href = `mailto:${PERSON.email}?subject=Project%20inquiry&body=${encodeURIComponent(msg)}`;
              setOpen(false);
            }}
            className="flex items-center gap-2 rounded-full border border-line bg-paper-2 px-3 py-1.5"
          >
            <input
              name="message"
              placeholder="Your message"
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ember text-white transition-transform hover:scale-105"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>

      <Backdrop open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function Backdrop({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  return null;
}
