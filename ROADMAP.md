# sebabuilds-portfolio — Build Roadmap

## Model Recommendation
| Prompt | Model | Why |
|---|---|---|
| 1 — Scaffold | **claude-opus-4-5** | Architectural decisions, theme system, font setup. Get it right once. |
| 2 — Hero + Work sections | **claude-sonnet-4-5** | Creative but structured. Faster iteration. |
| 3 — Services + BookCall | **claude-sonnet-4-5** | Straightforward layout work. |
| 4 — Polish + animations | **claude-opus-4-5** | Framer Motion orchestration needs careful reasoning. |
| 5 — Performance + deploy | **claude-sonnet-4-5** | Lighthouse fixes, image optimization, env check. |

---

## Prompt Sequence

### Prompt 1 — Scaffold + Theme System ✅ (ready)
**Model: Opus**
- Next.js project init
- All 6 CSS themes in globals.css
- Font loading in layout.tsx
- ScrollTheme.tsx with IntersectionObserver
- Section placeholder components
- Clean build confirmed

### Prompt 2 — Hero + Portfolio Sections
**Model: Sonnet**
- Hero: dark editorial, your name/tagline, no client names
- WorkMilo: spiritual theme, screenshot, description, live link
- WorkASAP: rugged theme, screenshot, description, live link
- WorkDulce: tropical theme, labeled "Personal Project", live link
- Real copy, real layout, real Framer Motion entrance animations

### Prompt 3 — Services + BookCall
**Model: Sonnet**
- Services: pricing table in minimal theme ($750 / $1,500 / $99/mo)
- BookCall: full-bleed CTA, Calendly link, bold typography
- Optional: subtle scroll progress indicator (thin line, top of page)

### Prompt 4 — Animation Polish
**Model: Opus**
- Smooth section entrance animations (whileInView)
- Parallax on hero background
- Staggered card reveals in work sections
- Theme transition feel — make the morph itself feel intentional
- Test on mobile (scroll behavior differs)

### Prompt 5 — Deploy + Performance
**Model: Sonnet**
- `next/image` for all screenshots
- Lighthouse audit, fix anything under 85
- Add OG image + meta tags
- Push to GitHub, confirm Vercel auto-deploy
- Set custom domain when ready

---

## Assets to prep before Prompt 2
Drop these into `public/screenshots/` before running Prompt 2:
- `milo.png` — screenshot of milocamilo.vercel.app
- `asap.png` — screenshot of asap-tree-service.vercel.app
- `dulce.png` — screenshot of dulce-tropical-restaurant-caf.vercel.app
- `apwh.png` — screenshot of apwh-graphs.lcidk.xyz

Use a full-page screenshot tool (e.g. GoFullPage Chrome extension) at 1440px width.

---

## Copy to write before Prompt 2
Just need a tagline and one-liner per project:

**Hero tagline:** (your call — something like "Websites that work as hard as you do" or keep it techy)

**Project one-liners:**
- Milo Camilo: ___
- ASAP Tree Service: ___
- Dulce Tropical: ___
- apwh-graphs: ___
