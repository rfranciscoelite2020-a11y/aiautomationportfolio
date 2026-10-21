# Randolf Madelo Francisco — Portfolio & Booking Site

A single-page marketing site for a **CRM & AI Automation Expert** (GoHighLevel, AI
agents, automation workflows, and sales funnels). Built on TanStack Start +
React 19, styled with Tailwind CSS v4, and deployed as a static edge build.

> All copy, links, and personal details live in **one data file**
> (`src/lib/portfolio-data.ts`). The full project documentation — design system,
> file map, content model, deploy steps — lives in **[`HANDOFF.md`](./HANDOFF.md)**.

---

## Live

| URL | Purpose |
| --- | --- |
| https://randolf2pointzero.vibepreview.app | Published (stable, shareable) |
| https://preview-1792556145788331050.vibepreview.app | Preview (reflects edits in real time) |

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | TanStack Start v1 (React 19, SSR/SSG) |
| Router | TanStack Router |
| Build | Vite |
| Styling | Tailwind CSS v4 (native `@import` + `@theme`) |
| Icons | `lucide-react` |
| Fonts | Instrument Serif (display), Sora (body), JetBrains Mono (technical) |
| Toasts | `sonner` |

No third-party backend, database, or auth is wired in. The contact form
composes a `mailto:` body and opens the user's email client — no server, no
storage. See `HANDOFF.md` §10 to add a managed backend.

---

## Getting started

Requirements: **Node.js 18+** and **npm** (or `bun`).

```sh
git clone <this-repository-url>
cd <repository-name>
npm install        # or: bun install
npm run dev        # or: bun run dev   →  http://localhost:8080
```

### Scripts

| Task | Command |
| --- | --- |
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Dev build | `npm run build:dev` |
| Preview the build | `npm run preview` |
| Lint | `npm run lint` |
| Format | `npm run format` |

---

## Project structure

```
src/
├── routes/
│   ├── __root.tsx          # Root layout: fonts, <head> meta, 404/error pages
│   └── index.tsx           # The page — composes all sections + SEO head()
├── components/portfolio/
│   ├── nav.tsx             # Adaptive sticky header + mobile sheet
│   ├── hero.tsx            # Hero + live-flow card + marquee; Stats band
│   ├── services.tsx        # Services grid + Skills groups
│   ├── works.tsx           # Service-line cards with metrics
│   ├── case-study.tsx      # Lead→won pipeline; Process; SOPs
│   ├── testimonials.tsx    # Video testimonials; Trusted-by; Certs
│   ├── about.tsx           # About; FAQ accordion; CTA band; Contact form
│   ├── footer.tsx          # Footer + social links
│   ├── chat-widget.tsx     # Floating chat bubble
│   ├── reveal.tsx          # Scroll-reveal wrapper (IntersectionObserver)
│   └── icons.ts            # Icon resolver for services/skills
├── hooks/
│   ├── use-in-view.ts       # InView hook for reveal
│   └── use-mobile.tsx       # Viewport detection
└── lib/
    ├── portfolio-data.ts   # ⭐ ALL content + links live here
    └── utils.ts            # cn() class merge
```

The page composes the sections in `src/routes/index.tsx`:

```
Nav
Hero → Stats → Services → Skills → Works → CaseStudy → Process →
Testimonials → TrustedBy → Certifications → About → FAQ → CTA → Contact
Footer + ChatWidget
```

---

## Editing content

Everything visible is driven by `src/lib/portfolio-data.ts`. Edit the matching
export and the site updates everywhere.

### Change a link

```ts
export const CALENDLY_URL  = "https://calendly.com/…";
export const LINKEDIN_URL = "https://www.linkedin.com/in/…";
export const FACEBOOK_URL = "https://www.facebook.com/…";
```

### Change the profile photo

Edit `PERSON.avatar` in `src/lib/portfolio-data.ts` **and** the `og:image` /
`twitter:image` entries in `src/routes/index.tsx` (both point at the same asset).

### Change copy

Each section pulls from its export (`SERVICES`, `WORKS`, `TESTIMONIALS`,
`FAQS`, `INDUSTRIES`, …). Edit the array/object in
`src/lib/portfolio-data.ts` and save — the dev server hot-reloads.

---

## Design system — "Obsidian & Ember"

Warm **bone-paper** light sections alternate with deep **obsidian** dark bands,
anchored by an **ember-orange** primary and a **cyan spark** accent for the
AI/tech edge. All color tokens are defined in `oklch` inside `src/styles.css`.

> Use **semantic tokens** in components (`bg-paper`, `text-ink`, `text-ember`),
> never raw colors like `text-white` / `bg-black` — that keeps theming and dark
> mode consistent. See `HANDOFF.md` §3 for the full token reference.

Shared component styles: `.btn-primary`, `.btn-ghost`, `.btn-ghost-on-dark`,
`.input`, `.lift`, `.reveal` / `.is-visible`, `.grid-dots`, `.live-dot`,
`.marquee-mask`.

---

## SEO & meta

`src/routes/index.tsx` provides a route-level `head()` with a unique title,
description, `og:title`, `og:description`, `og:type`, `og:image`, and
`twitter:card`. `public/robots.txt` is present. The page has a single H1.

---

## Responsive & accessibility

- **Mobile-first.** Nav collapses to a sheet below `xl`; cards reflow `1 → 2 → 3`
  columns (`sm` / `lg`).
- **Touch targets** ≥ 44px; inputs 16px to prevent iOS zoom-on-focus.
- **`prefers-reduced-motion`** disables reveals, marquee, and pulses.
- **Focus rings** are visible ember on all interactive elements.

---

## Deployment

The static edge build is generated by `npm run build` and served from
`__root.tsx` + `index.tsx`. Publish from the builder to deploy; the live URLs
are listed under **Live** above. For a custom domain, set it in the builder's
publish settings.

---

## Handoff

The complete, maintainer-oriented handoff (design tokens, file map, content
model, Do/Don't, and the optional Cloud backend step) is in
**[`HANDOFF.md`](./HANDOFF.md)**.