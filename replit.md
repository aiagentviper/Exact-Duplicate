# FlowForge AI — Workspace

## Overview

pnpm workspace monorepo. Primary artifact is the FlowForge AI portfolio site (`artifacts/viper-site`). Note: the artifact directory/package name remains `viper-site` / `@workspace/viper-site` (internal identifier only) — the user-facing brand is "FlowForge AI".

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5 (api-server artifact)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`

## Key Artifacts

### `artifacts/viper-site` — FlowForge AI Website
- **Stack**: React + Vite + Tailwind v4 + shadcn/ui + framer-motion + wouter
- **Fonts**: Space Grotesk (`.font-grotesk`) + Inter (`.font-inter`) via index.css `@layer utilities`
- **Routing**: wouter, 7 pages (Home, About, Work, Services, Pricing, Blog, Contact)
- **Preview path**: `/`

## Design System

- **Background**: `bg-black` (#000) everywhere, all pages
- **Accent color**: `text-orange-500` / `bg-orange-500` / `border-orange-500` ONLY — zero sky/blue
- **Section label style**: `font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-500`
- **Containers**: `max-w-[1100px] mx-auto px-6` (standard) / `max-w-[1200px]` (feature cards, pricing)
- **Section spacing**: `py-32` standard

## Home Page Section Order (top → bottom)

1. `Navigation` — fixed top bar, scrolled bg blur
2. `Hero` — full-bleed cinematic portrait, orange #01–#04 service tabs at bottom. **DO NOT MODIFY Hero.tsx**
3. `Portfolio` — staggered 3-col masonry, middle col `-translate-y-[100px]`, glassmorphic "View Case Study ↗" pills, grayscale images
4. **Meet Jimoh** — 50/50 split (text left, portrait right), orange border tag pills, inline in `home.tsx`
5. **Journey / Process** — 3 alternating rows, orange "Step 1/2/3" pills, orange CTA buttons, inline in `home.tsx`
6. `Services` — 50/50 split header + 2×2 service cards + dual scrolling marquee
7. **Feature Cards** — 3×2 grid, orange icon circles, orange NEW badges, orange borders, inline in `home.tsx`
8. **Pricing** — 2-col cards, orange glow on highlighted, orange checkmarks, inline in `home.tsx`
9. `Testimonials` — photo left + content right, scrolling marquee, 3-col stats
10. **FAQ** — 50/50, left = heading + image + tags + CTA, right = accordion, inline in `home.tsx`
11. **Plain Black CTA** — massive `LET'S BUILD SOMETHING REAL` headline, white CTA button, inline in `home.tsx`
12. `Footer` — massive headline + 4-col grid (Brand / Navigate / Contact / Socials) + FlowForge AI watermark

## Key Component Files

- `artifacts/viper-site/src/pages/home.tsx` — main landing page (all inline sections)
- `artifacts/viper-site/src/components/sections/Hero.tsx` — ⛔ LOCKED
- `artifacts/viper-site/src/components/sections/Portfolio.tsx` — staggered 3-col grid
- `artifacts/viper-site/src/components/sections/Services.tsx` — service cards + marquee
- `artifacts/viper-site/src/components/sections/Testimonials.tsx` — scrolling marquee + stats
- `artifacts/viper-site/src/components/sections/Footer.tsx` — massive footer
- `artifacts/viper-site/src/components/sections/Navigation.tsx` — fixed nav
- `artifacts/viper-site/src/pages/work.tsx` — portfolio page with filter tabs
- `artifacts/viper-site/src/pages/pricing.tsx` — 3-col pricing + process + FAQ
- `artifacts/viper-site/src/pages/about.tsx` — about / founder page
- `artifacts/viper-site/src/pages/services.tsx` — detailed services page
- `artifacts/viper-site/src/pages/contact.tsx` — contact form + calendly

## Images & Assets

**User-provided images (in `/public/`):**
- `/hero-bg.png` — hero background portrait
- `/photo-process.png` — process step image
- `/photo-faq.png` — FAQ section image
- `/photo-services.jpg` — services/Meet Jimoh portrait
- `/photo-reviews.png` — testimonials / review photo
- `/profile-clean.png` — about page founder photo

**Portfolio images** — in `/public/portfolio/`:
`ai-agent-flow.jpg`, `automation-flow.jpg`, `car-rental-site.jpg`, `crypto-dashboard.jpg`,
`email-sequences.jpg`, `learning-app.jpg`, `make-automation.jpg`, `marketing-slides.jpg`,
`omega-website.jpg`, `smart-home-site.jpg`, `watch-website.jpg`

**Animations**: `@keyframes marquee` + `@keyframes marquee-reverse` in `index.css`

**Contact info**: jimohmalik101@gmail.com · +234 810 731 1900 · calendly.com/malik-designs

## ⛔ CRITICAL — Image Paths

**`@assets/` is a VITE BUILD-TIME ALIAS. It NEVER works in browser `src` attributes.**

The `attached_assets/` directory is NOT served by the web server at all.

CORRECT approach:
1. Copy the file to `artifacts/viper-site/public/filename.ext`
2. Use `/filename.ext` as the browser URL in any `src` attribute

WRONG (will render broken/blank images):
- `src="@assets/Screenshot_xxx.png"` ← NEVER DO THIS
- `src="attached_assets/foo.png"` ← NEVER DO THIS

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/viper-site run dev` — run site locally (handled by workflow)
