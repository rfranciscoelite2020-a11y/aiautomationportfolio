import { Reveal } from "./reveal";
import { getIcon } from "./icons";
import { SERVICES, SKILL_GROUPS } from "@/lib/portfolio-data";

export function Services() {
  return (
    <section id="services" className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                // 03 · Services
              </div>
              <h2 className="mt-3 max-w-xl font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-ink">
                What I build for <span className="text-ember-grad italic">service businesses</span>{" "}
                and agencies.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-mute">
              Nine offers that cover the path from a lead's first form fill to the closed deal and
              beyond. Most live inside GoHighLevel; the rest plug straight into it.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = getIcon(s.icon);
            return (
              <Reveal key={s.no} delay={(i % 3) * 70}>
                <article className="lift group flex h-full flex-col rounded-3xl border border-line bg-paper-2/60 p-6 hover:border-ember/40 hover:shadow-[0_20px_40px_-24px_rgba(217,77,42,0.4)]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-paper text-ember ring-1 ring-line transition-colors group-hover:bg-ember group-hover:text-bone">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-ink-soft">{s.no}</span>
                  </div>
                  <h3 className="font-display text-xl text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-mute">{s.body}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-line bg-obsidian px-5 py-20 text-bone sm:px-8 sm:py-28"
    >
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-bone-soft">
                // 04 · Skills &amp; Tools
              </div>
              <h2 className="mt-3 max-w-xl font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-bone">
                The stack I use to <span className="text-spark-grad italic">build and connect</span>{" "}
                your business systems.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-bone-soft">
              Four groups. CRM and automation, AI, integrations, and the development side. Claude
              Code shows up in two of them because it's how I ship faster without cutting corners.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {SKILL_GROUPS.map((g, i) => {
            const Icon = getIcon(g.icon);
            return (
              <Reveal key={g.no} delay={i * 80}>
                <article className="lift flex h-full flex-col gap-5 rounded-3xl border border-bone-line bg-white/[0.02] p-6 backdrop-blur-sm hover:border-spark/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] text-spark ring-1 ring-bone-line">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-bone">{g.title}</h3>
                        <div className="font-mono text-[11px] text-bone-soft">
                          {g.no} · {g.count}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.skills.map((sk) => (
                      <span
                        key={sk}
                        className="rounded-full border border-bone-line bg-white/[0.03] px-2.5 py-1 text-xs text-bone-soft"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
