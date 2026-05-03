# VIPER AI Agency — Workspace

## Overview

pnpm workspace monorepo. Primary artifact is the VIPER AI Agency portfolio site (`artifacts/viper-site`).

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5 (api-server artifact)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`

## Key Artifacts

### `artifacts/viper-site` — VIPER AI Agency Website
- **Stack**: React + Vite + Tailwind v4 + shadcn/ui + framer-motion + wouter
- **Fonts**: Space Grotesk (`.font-grotesk`) + Inter (`.font-inter`) via index.css `@layer utilities`
- **Routing**: wouter, 7 pages (Home, About, Work, Services, Pricing, Blog, Contact)
- **Preview path**: `/`

**Home page section order (top → bottom):**
1. `Hero` — full-screen portrait + service tabs at bottom, LOCKED (do not ever modify Hero.tsx)
2. `Portfolio` — 3-col bento masonry CSS Grid (8 items). Centre column spans rows 1+2. Each cell has "View Casestudy" pill. gridTemplateRows: "280px 280px 280px"
3. `Process` — full-width 50/50 grid: LEFT = `/photo-process.png` (absolute full-bleed), RIGHT = "Design process" label + "Process" heading + 3 numbered step cards
4. `Services` — full-width: LEFT = content + tags + CTAs, RIGHT = `/photo-services.jpg`; then 2×2 service cards below; then dual marquee strip
5. `Testimonials` — full-width: LEFT = `/photo-reviews.png`, RIGHT = content + CTAs; then scrolling testimonial cards marquee; then 3-col stats row (180+, 96%, 15+)
6. `FAQ/Answers` — full-width 50/50: LEFT = "FAQs" label + "Answers" heading + `/photo-faq.png` card (aspect-[4/3]) + tags + CTA; RIGHT = accordion
7. `CtaBand` — full-width CTA with portfolio image mosaic background
8. `Footer`

**Portfolio bento grid cell layout (CSS Grid explicit placement):**
```
Col 1, Row 1:        watch-website.jpg       (280px tall)
Col 2, Rows 1+2:     car-rental-site.jpg     (561px tall, centre-tall spanning 2 rows)
Col 3, Row 1:        crypto-dashboard.jpg    (280px tall)
Col 1, Row 2:        omega-website.jpg       (280px tall)
Col 3, Row 2:        ai-agent-flow.jpg       (280px tall)
Col 1, Row 3:        make-automation.jpg     (280px tall)
Col 2, Row 3:        email-sequences.jpg     (280px tall)
Col 3, Row 3:        learning-app.jpg        (280px tall)
```

**User-provided images (in `/public/`):**
- `/photo-process.png` — B&W sketching hands (Process section left panel)
- `/photo-faq.png` — orange slice visual (FAQ section image card)
- `/photo-services.jpg` — dark pump bottles with wheat/grass (Services right panel)
- `/photo-reviews.png` — dark editorial office/workshop (Testimonials left panel)

**Portfolio images** — in `/public/portfolio/` (all confirmed 200):
`ai-agent-flow.jpg`, `automation-flow.jpg`, `car-rental-site.jpg`, `crypto-dashboard.jpg`,
`email-sequences.jpg`, `learning-app.jpg`, `make-automation.jpg`, `marketing-slides.jpg`,
`omega-website.jpg`, `smart-home-site.jpg`, `watch-website.jpg`

**Animations**: `@keyframes marquee` + `@keyframes marquee-reverse` in `index.css`

**Contact info**: jimohmalik101@gmail.com · +234 810 731 1900 · calendly.com/malik-designs

## ⛔ CRITICAL — Image Paths (read before editing any img src)

**`@assets/` is a VITE BUILD-TIME ALIAS. It NEVER works in browser `src` attributes.**

The `attached_assets/` directory is NOT served by the web server at all.

CORRECT approaches:
1. Copy the file to `artifacts/viper-site/public/filename.ext`
2. Use `/filename.ext` as the browser URL in any `src` attribute

WRONG (will render broken/blank images):
- `src="@assets/Screenshot_xxx.png"` ← NEVER DO THIS
- `src="attached_assets/foo.png"` ← NEVER DO THIS

This mistake has been made 3+ times across sessions. Check twice before writing any img src.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/viper-site run dev` — run site locally (handled by workflow)
