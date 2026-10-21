import { Reveal } from "./reveal";
import { PERSON, HERO_FLOW, MARQUEE, STATS, CALENDLY_URL } from "@/lib/portfolio-data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-obsidian px-5 pb-12 pt-28 text-bone sm:px-8 sm:pb-16 sm:pt-36"
    >
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="animate-float-a pointer-events-none absolute -left-48 top-12 h-[34rem] w-[34rem] rounded-full opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.665 0.198 38 / 0.5), transparent 65%)",
        }}
      />
      <div
        className="animate-float-b pointer-events-none absolute -right-40 top-20 h-[40rem] w-[40rem] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.79 0.13 198 / 0.45), transparent 65%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.82fr] lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <div
            className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-spark backdrop-blur-sm sm:text-[11px]"
            style={{
              borderColor: "oklch(0.79 0.13 198 / 0.4)",
              background: "oklch(0.79 0.13 198 / 0.12)",
              boxShadow: "0 0 24px oklch(0.79 0.13 198 / 0.2)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-spark shadow-[0_0_10px_currentColor]" />
            {PERSON.heroEyebrow}
          </div>
          <h1 className="max-w-3xl font-display text-balance text-[clamp(2.9rem,6.7vw,5.8rem)] font-normal leading-[0.98] tracking-[-0.045em] text-bone">
            {PERSON.heroTitleTop}{" "}
            <span className="text-spark-grad">{PERSON.heroTitleAccentTop}</span>
            <br />
            {PERSON.heroTitleBottom}{" "}
            <span className="text-spark-grad italic">{PERSON.heroTitleAccentBottom}</span>
          </h1>

          <p className="max-w-xl text-balance text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.85] text-bone-soft">
            I build GoHighLevel CRM systems, AI agents, and follow-up workflows that turn more
            inquiries into booked appointments and paying customers.
          </p>

          <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row">
            <a href="#work" className="btn-primary pulse-cta w-full sm:w-auto">
              Explore selected work
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-ghost-on-dark w-full sm:w-auto"
            >
              Book a consultation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-bone-line pt-5 font-mono text-[11px] text-bone-soft">
            <span className="inline-flex items-center gap-2">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-success text-success" />
              Available for select projects
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-bone-soft sm:block" />
            <span>Manila, Philippines · Working worldwide</span>
          </div>
        </div>

        <Reveal className="relative mx-auto w-full max-w-[26rem] lg:mr-0" delay={120}>
          <div className="absolute -inset-5 rounded-[2.5rem] bg-linear-to-br from-spark/20 via-transparent to-ember/20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-bone-line bg-white/[0.04] p-2 shadow-[0_35px_100px_-40px_rgba(0,0,0,0.8)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-obsidian-2">
              <img
                src={PERSON.avatar}
                alt={`Portrait of ${PERSON.fullName}`}
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/5 to-obsidian/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-bone-line bg-obsidian/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-bone backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Systems built for people
                </div>
                <div className="font-display text-3xl text-bone">
                  {PERSON.firstName} {PERSON.lastName}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-soft">
                  CRM · AI · Automation
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 px-3 py-4 sm:px-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-bone-soft">
                  Experience
                </div>
                <div className="mt-1 text-sm font-semibold text-bone">{PERSON.experience}</div>
              </div>
              <div className="h-8 w-px bg-bone-line" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-bone-soft">
                  Focus
                </div>
                <div className="mt-1 text-sm font-semibold text-bone">Systems that convert</div>
              </div>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-spark/30 bg-spark/10 font-display text-lg text-spark">
                {PERSON.monogram}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="relative mx-auto mt-14 w-full max-w-6xl sm:mt-20" delay={180}>
        <div className="overflow-hidden rounded-2xl border border-bone-line bg-white/[0.035] backdrop-blur-md">
          <div className="flex flex-col gap-4 border-b border-bone-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-spark">
                A better lead journey
              </div>
              <p className="mt-1 text-sm text-bone-soft">
                From first inquiry to meaningful follow-up, without the busywork.
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-bone-soft">
              Always-on automation
            </span>
          </div>
          <div className="grid sm:grid-cols-3">
            {HERO_FLOW.map((f, index) => (
              <div
                key={f.state}
                className="flex items-start gap-3 border-b border-bone-line px-5 py-4 last:border-b-0 sm:border-b-0 sm:px-6 sm:py-5 [&:not(:last-child)]:sm:border-r"
              >
                <span className="font-mono text-[10px] text-bone-soft">0{index + 1}</span>
                <div className="min-w-0">
                  <div className="mb-1 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-bone-soft">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background:
                          f.color === "spark"
                            ? "var(--spark)"
                            : f.color === "ember"
                              ? "var(--ember)"
                              : "var(--success)",
                      }}
                    />
                    {f.state}
                  </div>
                  <div className="text-sm font-semibold text-bone">{f.title}</div>
                  <div className="mt-1 font-mono text-[10px] text-bone-soft">{f.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative mt-16 overflow-hidden border-y border-bone-line py-5">
      <div className="marquee-mask">
        <div className="animate-marquee flex w-max items-center gap-10 pr-10">
          {items.map((m, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-10 font-display text-2xl italic text-bone"
            >
              <span className={i % 3 === 1 ? "text-spark-grad" : "text-bone/90"}>{m}</span>
              <span className="font-mono text-sm not-italic text-bone-soft">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="border-b border-line bg-paper px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                // 02 · By the numbers
              </div>
              <h2 className="mt-3 font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-ink">
                Real systems, shipped to{" "}
                <span className="text-ember-grad italic">real businesses</span>.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-mute">
              A mix of full GoHighLevel builds, AI automations, custom workflows, and integrations
              shipped for service businesses, agencies, and coaches.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-paper">
              <div className="flex h-full flex-col gap-1 p-6 sm:p-8">
                <div className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-normal leading-none text-ember-grad">
                  {s.value}
                </div>
                <div className="text-sm text-ink-mute">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
