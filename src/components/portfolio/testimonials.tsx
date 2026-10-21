import { Reveal } from "./reveal";
import { TESTIMONIALS, CLIENTS, CERT_BADGES, CERT_COURSES } from "@/lib/portfolio-data";
import { Play } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                // 08 · Testimonials
              </div>
              <h2 className="mt-3 max-w-xl font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-ink">
                What my <span className="text-ember-grad italic">satisfied clients</span> have to
                say.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={(i % 3) * 70}>
              <article className="lift group flex min-h-[10rem] cursor-pointer flex-col justify-between rounded-2xl border border-line bg-obsidian p-5 text-bone transition-all hover:border-ember/50 lg:min-h-[12rem]">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-bone-line text-spark">
                    <Play className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] text-bone-soft">{t.count}</span>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-bone-soft">
                    ● Video
                  </div>
                  <div className="mt-1 font-display text-xl text-bone sm:text-2xl">{t.name}</div>
                  <div className="text-xs text-bone-soft">{t.label}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustedBy() {
  return (
    <section className="border-y border-line bg-paper-2/40 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                // 09 · Trusted by
              </div>
              <h2 className="mt-3 max-w-xl font-display text-balance text-[clamp(1.5rem,3vw,2.4rem)] font-normal leading-[1.1] text-ink">
                Built systems for{" "}
                <span className="text-ember-grad italic">brands and entrepreneurs</span> across
                industries.
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="flex items-center justify-center bg-paper px-4 py-6 text-center"
              >
                <span className="font-display text-base text-ink/80 sm:text-lg">{c}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certs" className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                // 10 · Badges &amp; Certifications
              </div>
              <h2 className="mt-3 max-w-xl font-display text-balance text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.08] text-ink">
                GoHighLevel{" "}
                <span className="text-ember-grad italic">badges and certifications</span>,
                officially earned.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-mute">
              Direct from GoHighLevel's certification program. Each one represents a focused area of
              the platform I'm cleared to build on for clients.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                  Official Badges
                </span>
                <span className="rounded-full bg-ember/10 px-2 py-0.5 font-mono text-[11px] text-ember">
                  {CERT_BADGES}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {Array.from({ length: CERT_BADGES }).map((_, i) => (
                  <div
                    key={i}
                    className="lift group aspect-square rounded-2xl border border-line bg-paper-2/60 p-4 hover:border-ember/40"
                  >
                    <div className="grid h-full place-items-center rounded-xl bg-linear-to-br from-ember/15 to-spark/10 text-center">
                      <div>
                        <div className="font-display text-2xl text-ember-grad">★</div>
                        <div className="mt-1 font-mono text-[9px] uppercase tracking-wide text-ink-soft">
                          Badge {i + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                  Course Certificates
                </span>
                <span className="rounded-full bg-spark/15 px-2 py-0.5 font-mono text-[11px] text-spark">
                  {CERT_COURSES}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {Array.from({ length: CERT_COURSES }).map((_, i) => (
                  <div
                    key={i}
                    className="lift flex aspect-[4/3] flex-col justify-between rounded-2xl border border-line bg-paper-2/60 p-4 hover:border-spark/40"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] text-ink-soft">Cert {i + 1}</span>
                      <span className="text-spark">↗</span>
                    </div>
                    <div className="font-display text-lg text-ink">GoHighLevel Course</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
