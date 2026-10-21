import { Reveal } from "./reveal";
import { PERSON, INDUSTRIES, FAQS, CALENDLY_URL } from "@/lib/portfolio-data";
import { useState } from "react";
import { Plus, Minus, Calendar, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function About() {
  return (
    <section id="about" className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
              // 11 · About
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-ink">
              Six years building GoHighLevel systems and{" "}
              <span className="text-ember-grad italic">AI automation</span>, shipped across multiple
              industries.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <Reveal>
            <div className="md:sticky md:top-28">
              <div className="overflow-hidden rounded-3xl border border-line bg-paper-2/60">
                <img
                  src={PERSON.avatar}
                  alt={`Portrait of ${PERSON.fullName}`}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { k: "Experience", v: PERSON.experience },
                  { k: "Industries", v: "Multiple" },
                  { k: "Based in", v: PERSON.location },
                  { k: "Working with", v: PERSON.workingWith },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-line bg-paper p-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                      {s.k}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-ink">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <div className="space-y-4 text-[15px] leading-relaxed text-ink-mute">
                <p>
                  Six years ago I was wiring forms to CRMs like every other freelancer figuring out
                  automation. Over time the work pulled bigger. Full systems built around
                  GoHighLevel and AI that capture leads, qualify them, update the CRM, follow up,
                  book appointments, and keep the operation moving without anyone touching it.
                </p>
                <p>
                  Today the focus is narrower. GoHighLevel and AI automation. The CRM sits at the
                  center. Around it sits n8n, Make, Zapier, and Claude Code where they fit, plus AI
                  handling the parts that used to need a human at a keyboard. The patterns are
                  similar from business to business. The details get tuned to how yours actually
                  runs.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="mb-4 font-display text-xl text-ink">Industries I've built for</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {INDUSTRIES.map((ind) => (
                    <div
                      key={ind.name}
                      className="lift rounded-2xl border border-line bg-paper-2/50 p-4 hover:border-ember/40"
                    >
                      <div className="font-semibold text-ink">{ind.name}</div>
                      <div className="mt-1 text-xs leading-relaxed text-ink-mute">{ind.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-y border-line bg-paper-2/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-10">
            <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
              // 12 · FAQ
            </div>
            <h2 className="mt-3 font-display text-balance text-[clamp(1.8rem,4vw,2.6rem)] font-normal leading-[1.1] text-ink">
              The questions <span className="text-ember-grad italic">most clients</span> ask on the
              first call.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-mute">
              Don't see yours? Drop it in the contact form and I'll answer it before our first call.{" "}
              <a href="#contact" className="font-semibold text-ember">
                Send your question →
              </a>
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-line rounded-3xl border border-line bg-paper">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="font-display text-lg text-ink sm:text-xl">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-mute">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-obsidian px-6 py-16 text-bone sm:px-12 sm:py-20">
          <div className="grid-dots pointer-events-none absolute inset-0 opacity-50" />
          <div
            className="animate-float-a pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, oklch(0.665 0.198 38 / 0.5), transparent 65%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-bone-line bg-white/[0.03] px-4 py-2 font-mono text-xs text-bone-soft">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-spark text-spark" />
              Booking June · 2 sprint slots open
            </div>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,3.6rem)] font-normal leading-[1.05] text-bone">
              Ready to <span className="text-spark-grad italic">automate</span> your business?
            </h2>
            <p className="max-w-xl text-balance text-bone-soft">
              Whether you need a complete GoHighLevel setup, smarter follow-up workflows, or
              AI-powered automation, I can help you build a system that works while you focus on
              growth.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Book a free consultation
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#contact" className="btn-ghost btn-ghost-on-dark w-full sm:w-auto">
                Send me a message
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
              // 13 · Contact
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-ink">
              Tell me about your <span className="text-ember-grad italic">business</span>, I'll show
              you the system.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-mute">
              Send a quick message or grab a free 30-minute call. I reply within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <div className="rounded-2xl border border-line bg-paper-2/50 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-ember/10 text-ember">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                      Email
                    </div>
                    <a
                      href={`mailto:${PERSON.email}`}
                      className="text-sm font-semibold text-ink hover:text-ember"
                    >
                      {PERSON.email}
                    </a>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink-mute">
                  Quickest path for a one-line question or a longer project brief. I read
                  everything.
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-paper-2/50 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-spark/10 text-spark">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                      Book a call
                    </div>
                    <div className="text-sm font-semibold text-ink">30 minutes, free, no deck</div>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink-mute">
                  We trace your current process, find the highest-leverage automation, and decide if
                  it's a fit.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ember hover:translate-x-1"
                >
                  Pick a time <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="rounded-2xl border border-line bg-obsidian p-6 text-bone">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-bone-soft">
                  <MessageSquare className="h-3.5 w-3.5" /> Most useful first message
                </div>
                <p className="mt-3 text-sm leading-relaxed text-bone-soft">
                  What you're trying to fix, what tools you already use, and where you're losing the
                  most time today.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 700));
        setSubmitting(false);
        toast.success("Message ready — opening your email client now.", {
          description: "I reply within 24 hours.",
        });
        const form = e.currentTarget as HTMLFormElement & {
          name: HTMLInputElement;
          email: HTMLInputElement;
          company: HTMLInputElement;
          help: HTMLSelectElement;
          message: HTMLTextAreaElement;
        };
        const body = `Name: ${form.name.value}\nEmail: ${form.email.value}\nCompany: ${form.company.value}\nHelp: ${form.help.value}\n\n${form.message.value}`;
        window.location.href = `mailto:${PERSON.email}?subject=${encodeURIComponent(
          "New project inquiry from the site",
        )}&body=${encodeURIComponent(body)}`;
      }}
      className="rounded-3xl border border-line bg-paper-2/50 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input name="name" required placeholder="Jane Doe" className="input" />
        </Field>
        <Field label="Email">
          <input
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="input"
          />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Company / Business">
          <input name="company" placeholder="Acme Co." className="input" />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="What do you need help with?">
          <select name="help" className="input" defaultValue="Not Sure Yet">
            <option>GoHighLevel Setup</option>
            <option>AI Automation</option>
            <option>Funnel / Landing Page</option>
            <option>CRM Workflow</option>
            <option>Email / SMS Automation</option>
            <option>AI Chatbot</option>
            <option>Custom Integration</option>
            <option>Not Sure Yet</option>
          </select>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Message">
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What are you trying to fix, and where are you losing the most time?"
            className="input resize-none"
          />
        </Field>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-6 w-full disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send message"}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
      <p className="mt-3 inline-flex items-center gap-2 text-xs text-ink-soft">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-success text-success" />
        Replies within 24 hours.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-soft">{label}</span>
      {children}
    </label>
  );
}
