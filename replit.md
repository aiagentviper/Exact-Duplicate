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
1. `Hero` — full-screen portrait, LOCKED (do not modify Hero.tsx)
2. `Portfolio` — full-width 5-col thumbnail strip, edge-to-edge, no container
3. `Process` — full-width 50/50 grid: LEFT = `/photo-process.png` (full-bleed), RIGHT = step cards with rounded borders
4. `Services` — full-width: LEFT = content + tags + CTAs, RIGHT = `/photo-services.jpg`; then 2×2 service cards; then dual marquee
5. `Testimonials` — full-width: LEFT = `/photo-reviews.png`, RIGHT = content; then scrolling cards marquee; then 3-col stats row
6. FAQ/Answers — full-width 50/50: LEFT = label + heading + `/photo-faq.png` card + tags, RIGHT = accordion
7. `CtaBand` — full-width portfolio image grid background with CTA
8. `Footer`

**User-provided images (in `/public/`):**
- `/photo-process.png` — B&W sketching hands (Process section left panel)
- `/photo-faq.png` — orange slice on white pedestal (FAQ section image card)
- `/photo-services.jpg` — dark pump bottles with wheat/grass (Services right panel)
- `/photo-reviews.png` — dark editorial office/workshop (Testimonials left panel)

**Portfolio images** — in `/public/portfolio/`:
`ai-agent-flow.jpg`, `automation-flow.jpg`, `car-rental-site.jpg`, `crypto-dashboard.jpg`,
`email-sequences.jpg`, `learning-app.jpg`, `make-automation.jpg`, `marketing-slides.jpg`,
`omega-website.jpg`, `smart-home-site.jpg`, `watch-website.jpg`

**Animations**: `@keyframes marquee` + `@keyframes marquee-reverse` in `index.css`

**Contact info**: jimohmalik101@gmail.com · +234 810 731 1900 · calendly.com/malik-designs

**CRITICAL — Image paths**: The `attached_assets/` directory is NOT served by the web server. Always copy files to `public/` and use root-relative `/filename` URLs in `src` attributes. Never use `@assets/` paths in JSX src attributes.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/viper-site run dev` — run site locally (handled by workflow)
