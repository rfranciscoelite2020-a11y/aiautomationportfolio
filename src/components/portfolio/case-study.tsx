import { Reveal } from "./reveal";
import { CASE_STEPS, SOPS, PROCESS } from "@/lib/portfolio-data";

export function CaseStudy() {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden border-y border-line bg-obsidian px-5 py-20 text-bone sm:px-8 sm:py-28"
    >
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-bone-soft">
                // 06 · Case study
              </div>
              <h2 className="mt-3 max-w-xl font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-bone">
                The <span className="text-spark-grad italic">Leads Journey</span>, end to end.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-bone-soft">
              One connected system. GoHighLevel plus AI. Captures leads from a funnel, lets the AI
              qualify and book them, then keeps them moving with reminders, nurture, and
              reactivation.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {CASE_STEPS.map((s, i) => (
            <Reveal key={s.no} delay={(i % 2) * 90}>
              <article className="lift flex h-full flex-col gap-4 rounded-3xl border border-bone-line bg-white/[0.02] p-6 backdrop-blur-sm hover:border-spark/30 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-spark">{s.no}</span>
                  <span className="rounded-full border border-bone-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-bone-soft">
                    {s.pipeline}
                  </span>
                </div>
                <h3 className="font-display text-xl text-bone sm:text-2xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-bone-soft">{s.body}</p>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {s.tags.split("·").map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-bone-soft"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>

                <div className="rounded-xl border border-bone-line bg-white/[0.02] p-3 text-xs leading-relaxed text-bone-soft">
                  <span className="font-mono text-spark">How it works · </span>
                  {s.how}
                </div>

                {s.sub && (
                  <div className="mt-1 space-y-2">
                    {s.sub.map((sub) => (
                      <div
                        key={sub.label}
                        className="rounded-xl border-l-2 border-spark/50 bg-white/[0.02] px-3.5 py-2.5"
                      >
                        <div className="font-mono text-[11px] text-spark">{sub.label}</div>
                        <div className="mt-1 text-xs leading-relaxed text-bone-soft">
                          {sub.body}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <SopGrid />
      </div>
    </section>
  );
}

function SopGrid() {
  return (
    <div className="mt-14">
      <Reveal>
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-bone-soft">
            Sample SOPs
          </span>
          <span className="h-px flex-1 bg-bone-line" />
        </div>
        <h3 className="mb-6 font-display text-2xl text-bone sm:text-3xl">
          Full SOPs from real builds
        </h3>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {SOPS.map((s, i) => (
          <Reveal key={s.no} delay={i * 80}>
            <article className="lift group flex h-full flex-col rounded-2xl border border-bone-line bg-white/[0.02] p-5 backdrop-blur-sm hover:border-spark/40">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[11px] text-bone-soft">
                  {s.no} · {s.industry}
                </span>
              </div>
              <h4 className="font-display text-lg text-bone">{s.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-bone-soft">{s.body}</p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-bone-soft">
                    <span className="mt-0.5 text-spark">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-bone-line bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-bone-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                // 07 · How I work
              </div>
              <h2 className="mt-3 max-w-xl font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-ink">
                Five steps from your <span className="text-ember-grad italic">messy ops</span> to a
                working system.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-mute">
              No 30-page decks. No months of scoping calls. Map the system, build the smallest
              version that helps, then improve it based on how real users actually move through it.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.no} delay={i * 70}>
              <article className="lift flex h-full flex-col gap-3 rounded-2xl border border-line bg-paper-2/50 p-5 hover:border-ember/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ember">{p.no}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                    STEP
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink-mute">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
