# sebabuilds portfolio — CLAUDE.md

## Project Overview
Personal portfolio site for a solo freelance web dev (sebabuilds brand).
The core gimmick: **the page itself morphs into a different visual design as you scroll** — demonstrating versatility without saying a word.

Single-page scroll experience. No routing needed beyond `/`.

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion (scroll-triggered theme transitions)
- `next/font` (multiple font families, one per section)
- Vercel deploy

## Architecture
```
app/
  layout.tsx          # Minimal shell, font loading
  page.tsx            # Composes all sections in order
  globals.css         # CSS custom properties per theme
components/
  sections/
    Hero.tsx          # Dark editorial — hook
    WorkSection.tsx   # Portfolio cards (reusable per project)
    Services.tsx      # Clean minimal — pricing
    BookCall.tsx      # Bold CTA — Calendly link
  ScrollTheme.tsx     # IntersectionObserver theme switcher
public/
  screenshots/        # Client site screenshots (drop in manually)
```

## Scroll Theme System
Each section has a `data-theme` attribute. `ScrollTheme.tsx` uses an `IntersectionObserver` to detect which section is dominant in the viewport and swaps a `data-active-theme` on `<html>`. CSS variables cascade from there.

Themes defined in `globals.css`:
- `[data-theme="editorial"]` — dark bg, white text, serif headline
- `[data-theme="spiritual"]` — soft lavender/cream, flowing serif
- `[data-theme="rugged"]` — earthy greens/browns, bold condensed sans
- `[data-theme="tropical"]` — warm coral/yellow, playful rounded sans
- `[data-theme="minimal"]` — pure white, tight grid, monospace accents
- `[data-theme="cta"]` — single bold accent color, full bleed

## Portfolio Projects
| Project | Theme | Notes |
|---|---|---|
| milocamilo | spiritual | Client site — personal brand |
| ASAP Tree Service | rugged | Client site — local service |
| Dulce Tropical | tropical | Personal project — built for practice, show as portfolio |
| apwh-graphs | minimal | Personal project — study tool |

Each WorkSection card shows: screenshot, project type, tech used, live link.
**Do not mention client names in Hero, Services, or BookCall sections.**

## Framer Motion Usage
- `useScroll` + `useTransform` for parallax within sections
- `motion.div` with `whileInView` for element entrance animations
- Section transitions: opacity + slight Y translate, `duration: 0.6`
- Keep animations tasteful — the theme change IS the wow moment, don't over-animate individual elements

## Fonts (next/font/google)
Load all upfront, apply via CSS variable per theme:
- Editorial: `Playfair Display` (display) + `DM Mono` (body)
- Spiritual: `Cormorant Garamond` (display) + `Lato` (body)
- Rugged: `Bebas Neue` (display) + `Source Sans 3` (body)
- Tropical: `Pacifico` (display) + `Nunito` (body)
- Minimal: `Space Mono` (display + body)
- CTA: `Syne` (display) + `Inter` (body) — only place Inter is OK

## Performance Rules
- Use `next/image` for all screenshots with explicit width/height
- SSG only (no server components needed — fully static)
- Keep bundle lean — no UI libraries, Framer Motion is the only animation dep
- Target Lighthouse 90+ on mobile

## DO NOT
- Use Pages Router
- Hardcode any API keys (Calendly link is just a URL, fine in code)
- Use inline styles — Tailwind + CSS vars only
- Add a nav bar — scroll-only experience, no anchors needed
- Over-animate — one entrance animation per section max

## Calendly
Free tier link format: `https://calendly.com/YOUR_USERNAME/30min`
Embed as a plain `<a>` button — no iframe embed needed for MVP.

## Dev Commands
```bash
npm run dev       # localhost:3000
npm run build     # verify before push
npm run lint      # fix before commit
```

## Commit Style
```
feat(hero): add editorial dark theme with scroll trigger
feat(work): add portfolio cards with theme variants
fix(scroll): smooth theme transition on fast scroll
```
