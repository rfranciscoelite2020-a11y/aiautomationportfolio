# Project Handoff — Randolf Madelo Francisco Portfolio

A single-page marketing site for a **GoHighLevel & AI Automation Expert**.
Built on TanStack Start (React 19) + Tailwind CSS v4, deployed as a static edge
build. All copy, links, and content live in one data file; the design lives in
one CSS file. Everything is documented here so the site can be handed off,
remixed, or maintained by anyone.

---

## 1. The person — one source of truth

| Field | Value |
| --- | --- |
| First name | Randolf |
| Middle name | Madelo |
| Last name | Francisco |
| Full name | Randolf Madelo Francisco |
| Monogram | RF |
| Email | rfranciscoelite2020@gmail.com |
| Location | Manila, PH |
| Working with | US · EU · APAC |
| Experience | 6 years |
| Role line | GoHighLevel · AI Automation · CRM Workflows |

### External links (wired across the site)

| Link | URL | Where it appears |
| --- | --- | --- |
| **Calendly (booking)** | `https://calendly.com/rfranciscoelite2020/new-meeting?month=2026-10` | Nav "Book a call", hero "Book a free consultation", CTA band, contact card, mobile menu |
| **LinkedIn** | `https://www.linkedin.com/in/randolffrancisco/?isSelfProfile=true` | Footer social icon |
| **Facebook** | `https://www.facebook.com/randolf.m.francisco` | Footer social icon |
| **Profile photo** | `https://vibe.filesafe.space/1792556145788331050/attachments/7f3c8349-d939-aaa-ab8d-9578a62c5641.jpg` | About section + OG/Twitter social cards |

> All of the above are centralized in **`src/lib/portfolio-data.ts`** as
> `PERSON`, `CALENDLY_URL`, `LINKEDIN_URL`, `FACEBOOK_URL`. Change them once
> there and they update everywhere. Do not hardcode these in components.

---

## 2. Tech stack

| Layer | Choice |
| --- | --- |
| Framework | TanStack Start v1 (React 19, SSR/SSG) |
| Router | TanStack Router (`src/routes/*`) |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (native CSS `@import` + `@theme`) |
| Icons | `lucide-react` |
| Fonts | Google Fonts — Instrument Serif (display), Sora (body), JetBrains Mono (technical) |
| Toasts | `sonner` |

No third-party backend, database, or auth is wired in. The contact form
submits to the user's email client via `mailto:` — no server, no storage.

---

## 3. Design system — "Obsidian & Ember"

The aesthetic alternates **warm bone-paper light sections** with **deep
obsidian dark bands**, anchored by an **ember-orange** primary and a
**cyan spark** for the AI/tech edge. Display type is an editorial serif;
body and labels are a technical sans + monospace.

### Color tokens (`src/styles.css`, all in `oklch`)

```
Light canvas (bone paper)
  --paper          oklch(0.985 0.005 75)   page background
  --paper-2        oklch(0.963 0.008 72)   subtle raised surface
  --ink            oklch(0.165 0.014 258)  primary text
  --ink-mute       oklch(0.5 0.018 258)    secondary text
  --ink-soft       oklch(0.62 0.018 258)   tertiary / labels
  --line           oklch(0.9 0.009 70)     borders
  --line-soft      oklch(0.935 0.006 72)   faint borders

Accents
  --ember          oklch(0.665 0.198 38)    primary (CTA, gradients)
  --ember-deep     oklch(0.555 0.188 35)   gradient end / hover
  --ember-soft     oklch(0.7 0.2 42 / .16)  glow / focus ring
  --spark          oklch(0.79 0.13 198)    secondary (AI/tech edge)
  --success        oklch(0.72 0.16 152)    status dots

Dark bands
  --obsidian       oklch(0.145 0.016 258)  hero / CTA backgrounds
  --obsidian-2     oklch(0.19 0.02 258)    raised dark surface
  --obsidian-3     oklch(0.235 0.025 258)  higher raised dark

Text on dark
  --bone           oklch(0.982 0.004 75)    primary on dark
  --bone-mute      oklch(0.78 0.014 260)    secondary on dark
  --bone-soft      oklch(0.66 0.014 260)    tertiary on dark
  --bone-line      oklch(1 0 0 / .1)       dark borders
```

A `.dark` class flips the paper/ink/line tokens to the obsidian set, so any
component using semantic tokens adapts automatically.

### Typography

| Token | Family | Use |
| --- | --- | --- |
| `--font-display` | Instrument Serif | Headlines, big numbers, italic accents |
| `--font-sans` | Sora | Body, UI, buttons |
| `--font-mono` | JetBrains Mono | Eyebrows (`// 02 · …`), metadata, tags |

Utility helpers in the CSS:
- `.font-display`, `.font-mono` — apply the families
- `.text-balance` — balanced wrapping for headlines
- `.text-ember-grad` — ember gradient text
- `.text-spark-grad` — spark gradient text (for dark hero)

### Shared component styles

| Class | What it is |
| --- | --- |
| `.btn-primary` | Ember gradient CTA — 2.75rem min height, press scale, focus ring |
| `.btn-ghost` | Outlined button — turns ember on hover |
| `.btn-ghost-on-dark` | Ghost variant for dark backgrounds |
| `.input` | Form fields (16px to prevent iOS zoom, focus ring) |
| `.lift` | Card hover lift (translateY −4px) |
| `.reveal` / `.is-visible` | Scroll-in animation (handled by `Reveal`) |
| `.grid-dots` | Dotted grid texture for dark bands |
| `.live-dot` | Pulsing status dot |
| `.marquee-mask` | Edge fade for the hero marquee |

> Use **semantic tokens** in components (`bg-paper`, `text-ink`, `text-ember`),
> never raw colors like `text-white` / `bg-black` — that keeps theming and dark
> mode consistent.

---

## 4. Architecture & file map

```
src/
├── routes/
│   ├── __root.tsx        # Root layout: fonts, <head> meta, error/404 pages
│   └── index.tsx         # The page — composes all sections + SEO head()
├── components/portfolio/
│   ├── nav.tsx           # Adaptive sticky header + mobile sheet
│   ├── hero.tsx          # Hero + live-flow card + marquee; Stats band
│   ├── services.tsx      # Services grid + Skills groups
│   ├── works.tsx         # 5 service-line cards with metrics
│   ├── case-study.tsx    # 5-step lead→won pipeline; Process; SOPs
│   ├── testimonials.tsx  # Video testimonials; Trusted-by; Certs
│   ├── about.tsx         # About; FAQ accordion; CTA band; Contact form
│   ├── footer.tsx        # Footer + social links
│   ├── chat-widget.tsx   # Floating chat bubble
│   ├── reveal.tsx        # Scroll-reveal wrapper (IntersectionObserver)
│   └── icons.ts          # Icon resolver for services/skills
├── hooks/
│   ├── use-in-view.ts    #InView hook for reveal
│   └── use-mobile.tsx    #Viewport detection
└── lib/
    ├── portfolio-data.ts # ⭐ ALL content + links live here
    └── utils.ts          #cn() class merge
```

### Page composition (`src/routes/index.tsx`)

```
Nav
Hero → Stats → Services → Skills → Works → CaseStudy → Process →
Testimonials → TrustedBy → Certifications → About → FAQ → CTA → Contact
Footer + ChatWidget
```

The header is **adaptive**: bone (light) text on a dark obsidian glass while
over the dark hero, then switches to dark ink on a light glass once you scroll.
On screens below `xl` (1280px) the link bar collapses into a mobile sheet.

---

## 5. Content model — `src/lib/portfolio-data.ts`

This is the only file most edits touch. Each section pulls from here:

| Export | Section | Notes |
| --- | --- | --- |
| `PERSON` | Nav, hero, about, footer, SEO | Name, email, location, role, avatar |
| `CALENDLY_URL` | Nav, hero, CTA, contact, mobile | Booking link |
| `LINKEDIN_URL`, `FACEBOOK_URL` | Footer | Social profiles |
| `HERO_FLOW` | Hero | 3 live-flow states (lead → qualified → follow-up) |
| `MARQUEE` | Hero | Scrolling tech chips |
| `STATS` | Stats band | 4 headline numbers |
| `SERVICES` | Services | 9 services (icon name → `icons.ts`) |
| `SKILL_GROUPS` | Skills | 4 groups, counts, skill lists |
| `WORKS` | Works | 5 service-line cards w/ metrics + accent |
| `CASE_STEPS` | Case Study | 5-step pipeline (lead → won/stalled/lost) |
| `SOPS` | Case Study | 3 industry SOP plans |
| `PROCESS` | Process | 5 phases (discover → optimize) |
| `TESTIMONIALS` | Testimonials | 7 video cards |
| `CLIENTS` | Trusted-by | Client logo/name strip |
| `CERT_BADGES`, `CERT_COURSES` | Certifications | Counts (7 badges, 3 courses) |
| `INDUSTRIES` | About | 6 industry cards |
| `FAQS` | FAQ | 6 Q&A pairs |

### To change copy

1. Open `src/lib/portfolio-data.ts`.
2. Edit the array/object.
3. Save — the dev server hot-reloads; the build regenerates.

### To change a booking/social link

Edit the matching constant at the top of the file:
```ts
export const CALENDLY_URL = "https://calendly.com/…";
export const LINKEDIN_URL = "https://www.linkedin.com/in/…";
export const FACEBOOK_URL = "https://www.facebook.com/…";
```

### To change the profile photo

Edit `PERSON.avatar` (URL) and the `og:image` / `twitter:image` entries in
`src/routes/index.tsx` (both point at the same asset).

---

## 6. SEO & meta

`src/routes/index.tsx` provides the route-level `head()`:
- Unique `<title>` and meta description (not the root default)
- `og:title`, `og:description`, `og:type=website`
- `og:image` + `twitter:card=summary_large_image` pointing at the profile photo
- `src/routes/__root.tsx` adds the font `<link>`s and viewport

`public/robots.txt` is present. Single H1 (the hero headline).

---

## 7. Responsive & accessibility

- **Breakpoints**: mobile-first. Nav link bar collapses to a sheet below `xl`.
  Cards reflow `1 → 2 → 3` columns (`sm` / `lg`).
- **Touch targets**: buttons and form fields are ≥ 2.75rem tall (44px).
- **iOS**: inputs are 16px to prevent zoom-on-focus; tap highlights cleared.
- **Motion**: `prefers-reduced-motion` disables reveals, marquee, pulses.
- **Focus**: visible ember focus rings on all interactive elements.
- **Forms**: contact form composes a `mailto:` body and opens the mail client
  (demo — no backend). A toast confirms.

---

## 8. Running & deploying

| Task | Command |
| --- | --- |
| Install | `bun install` |
| Dev | `bun run dev` (Vite, `http://localhost:8080`) |
| Typecheck | `bun run check` |
| Build | `bun run build` |
| Preview build | `bun run start` |

**Live URLs**
- Preview (live edits): `https://preview-1792556145788331050.vibepreview.app`
- Published (stable): `https://randolf2pointzero.vibepreview.app`

Deploy by publishing from the builder — it runs the static edge build and
serves the route from `__root.tsx` + `index.tsx`.

---

## 9. Do / Don't

| ✅ Do | ❌ Don't |
| --- | --- |
| Edit content in `portfolio-data.ts` | Hardcode links/copy in components |
| Use semantic tokens (`text-ink`, `bg-paper`) | Use `text-white` / `bg-black` |
| Keep `@import`s at the top of `styles.css` | `@import` remote URLs in CSS |
| Add new tokens to `@theme inline` / `:root` | Define colors inline in JSX |
| Keep server functions thin (handler only) | Put runtime helpers at module scope |

---

## 10. Optional next step — Cloud backend

The contact form currently opens the email client. To capture submissions into
a real database (saved leads, accounts, file uploads), enable the managed
backend **Cloud** from the builder's **More → Cloud** tab. It adds real
accounts, a database, and storage without wiring up a third-party service.