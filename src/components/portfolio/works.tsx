import { Reveal } from "./reveal";
import { WORKS, type Work } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

const ACCENT: Record<Work["accent"], { grad: string; text: string; chip: string; bar: string }> = {
  ember: {
    grad: "from-ember to-ember-deep",
    text: "text-ember-grad",
    chip: "border-ember/40 text-ember bg-ember/10",
    bar: "from-ember to-ember-deep",
  },
  spark: {
    grad: "from-spark to-ember",
    text: "text-spark-grad",
    chip: "border-spark/40 text-spark bg-spark/10",
    bar: "from-spark to-ember",
  },
  violet: {
    grad: "from-[oklch(0.62_0.22_300)] to-ember",
    text: "text-spark-grad",
    chip: "border-[oklch(0.62_0.22_300_/_0.4)] text-bone bg-white/[0.04]",
    bar: "from-[oklch(0.62_0.22_300)] to-ember",
  },
  amber: {
    grad: "from-[oklch(0.78_0.16_72)] to-ember",
    text: "text-ember-grad",
    chip: "border-[oklch(0.78_0.16_72_/_0.4)] text-ember bg-ember/10",
    bar: "from-[oklch(0.78_0.16_72)] to-ember",
  },
};

export function Works() {
  return (
    <section id="work" className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                // 05 · Sample works
              </div>
              <h2 className="mt-3 max-w-xl font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-ink">
                Five service lines I've shipped at{" "}
                <span className="text-ember-grad italic">scale</span>, across industries.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-mute">
              Each card opens a deeper view of the build. Real systems, not mockups — shipped for
              service businesses, agencies, and coaches.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {WORKS.map((w, i) => {
            const a = ACCENT[w.accent];
            return (
              <Reveal key={w.code} delay={(i % 2) * 90}>
                <article className="lift group grid gap-6 rounded-3xl border border-line bg-paper-2/50 p-6 transition-all hover:border-ember/30 hover:shadow-[0_24px_50px_-30px_rgba(9,9,11,0.3)] md:grid-cols-[1.1fr_1fr] md:p-8">
                  <div className="flex flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-xs text-ink-soft">{w.code}</span>
                      <span
                        className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wide ${a.chip}`}
                      >
                        {w.category}
                      </span>
                    </div>
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-normal leading-tight text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-mute">{w.body}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink">
                      <span className="font-mono text-xs text-ember">Business benefit · </span>
                      {w.benefit}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {w.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-semibold text-ember transition-transform hover:translate-x-1"
                    >
                      View build
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="flex flex-col justify-center gap-3 rounded-2xl border border-line bg-paper p-5">
                    {w.metrics.map((m) => (
                      <div key={m.label} className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-ink-mute">{m.label}</span>
                        <span className={`font-display text-3xl ${a.text}`}>{m.value}</span>
                      </div>
                    ))}
                    <div className={`h-1 w-full rounded-full bg-linear-to-r ${a.bar}`} />
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
