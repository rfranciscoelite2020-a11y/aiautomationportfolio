import { Reveal } from "./reveal";
import { PERSON, HERO_FLOW, MARQUEE, STATS, CALENDLY_URL } from "@/lib/portfolio-data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-obsidian px-5 pb-16 pt-28 text-bone sm:px-8 sm:pb-24 sm:pt-36"
    >
      {/* ambient backdrop */}
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="animate-float-a pointer-events-none absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.665 0.198 38 / 0.5), transparent 65%)",
        }}
      />
      <div
        className="animate-float-b pointer-events-none absolute -right-40 bottom-0 h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.79 0.13 198 / 0.45), transparent 65%)",
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-7 text-center">
        <div
          className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-spark backdrop-blur-sm"
          style={{
            borderColor: "oklch(0.79 0.13 198 / 0.4)",
            background: "oklch(0.79 0.13 198 / 0.12)",
            boxShadow: "0 0 24px oklch(0.79 0.13 198 / 0.3)",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-spark shadow-[0_0_10px_currentColor]" />
          {PERSON.heroEyebrow}
        </div>

        <h1 className="font-display text-balance text-[clamp(2.6rem,8vw,5.6rem)] font-normal leading-[1.02] tracking-[-0.035em] text-bone">
          <span className="block">
            {PERSON.heroTitleTop}{" "}
            <span className="text-spark-grad">{PERSON.heroTitleAccentTop}</span>
          </span>
          <span className="block">
            {PERSON.heroTitleBottom}{" "}
            <span className="text-spark-grad">{PERSON.heroTitleAccentBottom}</span>
          </span>
        </h1>

        <p className="max-w-2xl text-balance text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-bone-soft">
          {PERSON.heroBody}
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <a href="#work" className="btn-primary pulse-cta w-full sm:w-auto">
            View my work
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost btn-ghost-on-dark w-full sm:w-auto"
          >
            Book a free consultation
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-mono text-xs text-bone-soft">
          <span className="inline-flex items-center gap-2">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-success text-success" />
            <span className="text-bone">Available for work &amp; projects</span>
          </span>
          <span>
            <span className="text-bone-soft">Reply</span>{" "}
            <span className="text-bone">· &lt; 24h</span>
          </span>
          <span>
            <span className="text-bone-soft">Engagement</span>{" "}
            <span className="text-bone">· Sprint-based</span>
          </span>
        </div>

        <Reveal className="mt-10 w-full max-w-4xl" delay={120}>
          <div className="rounded-3xl bg-linear-to-br from-ember to-ember-deep p-px shadow-[0_30px_70px_-25px_oklch(0.665_0.198_38_/_0.6)]">
            <div className="grid gap-3 rounded-[calc(1.5rem-1px)] bg-obsidian/90 p-5 backdrop-blur-md sm:grid-cols-3 sm:p-6">
              {HERO_FLOW.map((f) => (
                <div
                  key={f.state}
                  className="flex flex-col gap-2 rounded-2xl border border-bone-line bg-white/[0.03] p-4 text-left backdrop-blur-sm"
                >
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-bone-soft">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background:
                          f.color === "spark"
                            ? "var(--spark)"
                            : f.color === "ember"
                              ? "var(--ember)"
                              : "var(--success)",
                        boxShadow: "0 0 10px currentColor",
                        color:
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
                  <div className="font-mono text-[11px] text-bone-soft">{f.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

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
