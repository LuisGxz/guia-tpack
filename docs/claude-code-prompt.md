# Claude Code Prompt — Guía Interactiva: Gestión Directiva + Tecnologías Emergentes

## Context

You are building a static interactive web guide for a master's thesis. The guide helps school administrators (directors, area coordinators) integrate 3 emerging technologies into their institutions: Artificial Intelligence, Virtual Reality, and Augmented Reality. The pedagogical framework is TPACK.

## Read First

Before writing any code, read the full requirements document:

```
cat guia-interactiva-requirements.md
```

This document contains the complete architecture, page specs, component specs, data schemas, design tokens, and deployment strategy.

## Tech Stack

- **Astro** (static site generator)
- **Tailwind CSS** (utility-first styling)
- **Vanilla JS** (minimal interactivity: menu, tabs, accordions, scroll animations)
- **GitHub Pages** (deployment)
- All content in **Spanish**
- All code, comments, and file names in **English**

## Project Setup

```bash
npm create astro@latest guia-tecnologias-educativas -- --template minimal
cd guia-tecnologias-educativas
npx astro add tailwind
```

## What to Build

### Phase 1 — Skeleton

1. Create the project structure as defined in the requirements (layouts, components, pages, data)
2. Implement `MainLayout.astro` with sticky `Navbar` (hamburger on mobile, horizontal on desktop) and `Footer`
3. Implement `ScrollProgress` component (reading progress bar)
4. Create all page files with placeholder content
5. Set up navigation between pages
6. Configure Tailwind with the design tokens from the requirements:
   - Primary: #1e3a5f
   - Accent: #0ea5e9
   - Background: #fafaf9
   - Text: #1c1917
   - Headings font: Merriweather (serif)
   - Body font: Source Sans 3 (sans-serif)

### Phase 2 — Components

1. Build `ToolCard.astro` — clickable card that opens tool URL in new tab. Props: name, description, url, category, icon, free badge. Min 48px touch targets.
2. Build `SectionHeader.astro` — reusable heading with title, subtitle, decorative element
3. Build `TPACKDiagram.astro` — interactive Venn diagram (CSS or SVG). Tap/hover reveals descriptions for each area (TK, PK, CK and intersections). Must work on mobile with tap (no hover-only interactions).
4. Build `StepCard.astro` — numbered phase card with title, description, tools, timeline, outcomes

### Phase 3 — Content & Data

1. Populate `tools-ia.json`, `tools-vr.json`, `tools-ar.json` with real free tools (5-8 per category minimum). Research actual tools with working URLs.
2. Populate `steps.json` with the 5-phase implementation plan
3. Fill each page with real content:
   - `index.astro`: hero, objectives, audience cards, navigation
   - `tpack.astro`: TPACK explanation + interactive diagram
   - Technology pages: definition, educational relevance, administrator's role, tool grid, integration strategy
   - `plan-implementacion.astro`: phased plan with StepCards
   - `referencias.astro`: APA 7 bibliography

### Phase 4 — Polish

1. Add scroll-triggered fade-in animations (IntersectionObserver + CSS keyframes)
2. Tab navigation within technology pages ("Qué es" | "Herramientas" | "Estrategia")
3. Mobile testing: verify all touch targets ≥ 48px, no horizontal scroll, readable text
4. Lighthouse audit: target ≥ 90 on mobile
5. Verify all external links open in new tab and are valid

### Phase 5 — Deploy

1. Configure `astro.config.mjs` for GitHub Pages (set `site` and `base`)
2. Add GitHub Actions workflow for auto-deploy on push to main
3. Test production build locally with `npm run build && npm run preview`

## Design Guidelines

- **Mobile-first**: Design for 375px first, then scale up
- **Professional tone**: This is for school administrators, not students. Clean, authoritative, trustworthy.
- **No generic AI aesthetics**: Avoid purple gradients, Inter font, cookie-cutter layouts
- **Subtle animations**: Fade-ins on scroll, hover elevations on cards. No flashy transitions.
- **Accessibility**: Contrast ratios AA, focus states, semantic HTML, ARIA labels on interactive elements
- **Touch-friendly**: All interactive elements minimum 48px × 48px

## Constraints

- All tools listed must be FREE (no paid tools)
- All content in Spanish
- All code in English
- No external JS libraries (no Alpine.js, no jQuery, no animation libraries)
- Zero client-side framework runtime (Astro islands only if strictly needed)
- Images: use CSS/SVG illustrations, no stock photos (keep bundle light)

## When Client Sends Thesis Content

Once the client shares chapter 2 and the article:
1. Update TPACK section to match their theoretical framework exactly
2. Cross-reference tool selections with any tools mentioned in the thesis
3. Update references page with thesis bibliography
4. Adjust terminology to match their academic voice
