# Development Phases — Guia Interactiva

> Track progress here. Each phase is a vertical slice delivering working value.
> Symbols: ⬜ pending | 🔄 in progress | ✅ completed

---

## Phase 0: Project Setup & Scaffolding ✅
**Goal**: Initialize Astro project with Tailwind, configure design tokens, create empty file structure
**Depends on**: None
**Files to read**: `docs/guia-interactiva-requirements.md` (sections 2, 3, 6)
**Files to create**:
  - `package.json` (via `npm create astro`)
  - `astro.config.mjs`
  - `tailwind.config.mjs`
  - `src/styles/global.css`
  - `src/data/tools-ia.json` (empty array)
  - `src/data/tools-vr.json` (empty array)
  - `src/data/tools-ar.json` (empty array)
  - `src/data/steps.json` (empty array)
  - All empty page/component/layout files per architecture
**Estimated tokens**: ~1,500 (read) + ~3,000 (write)
**Model recommendation**: Sonnet — standard scaffolding
**Acceptance criteria**:
  - [x] `npm run dev` starts without errors
  - [x] Tailwind configured with custom colors (#1e3a5f, #0ea5e9, #fafaf9, #1c1917)
  - [x] Google Fonts loaded (Merriweather + Source Sans 3)
  - [x] All files from architecture section exist (empty placeholders OK)
  - [x] Project builds successfully with `npm run build`

**Completion notes**: Astro v6.1.10 + Tailwind v4 (via @tailwindcss/vite). Design tokens in global.css @theme block. All 7 pages, 8 components, 4 data files, 1 layout created. Build: 7 pages in 1.96s.

---

## Phase 1: Layout & Navigation ✅
**Goal**: Build the app shell — MainLayout, Navbar (sticky + hamburger), Footer, ScrollProgress
**Depends on**: Phase 0 (project runs)
**Files to read**: `docs/guia-interactiva-requirements.md` (sections 5, 6)
**Files to create/modify**:
  - `src/layouts/MainLayout.astro`
  - `src/components/Navbar.astro`
  - `src/components/MobileMenu.astro`
  - `src/components/Footer.astro`
  - `src/components/ScrollProgress.astro`
  - `src/pages/index.astro` (apply layout, placeholder content)
**Estimated tokens**: ~1,000 (read) + ~4,000 (write)
**Model recommendation**: Sonnet — standard component work
**Acceptance criteria**:
  - [x] Navbar is sticky, shows horizontal links on desktop (≥768px)
  - [x] Hamburger icon toggles slide-out MobileMenu on mobile (<768px)
  - [x] Active page highlighted in nav
  - [x] Footer renders with references link and credits
  - [x] ScrollProgress bar visible at top of viewport during scroll
  - [x] All nav links navigate to correct pages
  - [x] No horizontal overflow on 375px viewport

**Completion notes**: Navbar with 7 links (desktop horizontal, mobile hamburger→slide-out sidebar). MobileMenu with backdrop, Escape key close, ARIA attributes. ScrollProgress with passive scroll listener. Footer with references link + year. All integrated in MainLayout. Index has hero + 5 nav cards.

---

## Phase 2: Reusable Components ✅
**Goal**: Build ToolCard, SectionHeader, StepCard, and TPACKDiagram components
**Depends on**: Phase 1 (layout exists to preview components)
**Files to read**: `docs/guia-interactiva-requirements.md` (section 5)
**Files to create**:
  - `src/components/ToolCard.astro`
  - `src/components/SectionHeader.astro`
  - `src/components/StepCard.astro`
  - `src/components/TPACKDiagram.astro`
**Estimated tokens**: ~800 (read) + ~4,500 (write)
**Model recommendation**: Sonnet — TPACKDiagram is the most complex (SVG/CSS Venn), but within Sonnet's range
**Acceptance criteria**:
  - [x] ToolCard: clickable, opens URL in new tab, hover elevation, free badge, ≥48px touch target
  - [x] SectionHeader: renders title + subtitle + decorative element
  - [x] StepCard: numbered phase card with title, description, tools, timeline, outcomes
  - [x] TPACKDiagram: 3 overlapping circles (TK, PK, CK), tap/hover reveals descriptions
  - [x] TPACKDiagram works on mobile (tap toggles, no hover-only)
  - [x] All components render correctly on 375px–1440px

**Completion notes**: 4 components built. ToolCard: emoji icon, category color map, external link icon, line-clamp-2. StepCard: timeline vertical line + numbered circles, tools as pills, outcomes with checkmarks. TPACKDiagram: SVG Venn with 7 interactive regions (3 main + 3 intersections + center), highlight active circles, keyboard accessible. SectionHeader: accent bar + title + optional subtitle.

---

## Phase 3: Landing Page + TPACK Page ✅
**Goal**: Build index.astro (hero, objectives, audience, navigation cards) and tpack.astro with full content
**Depends on**: Phase 2 (SectionHeader, TPACKDiagram available)
**Files to read**: `docs/guia-interactiva-requirements.md` (sections 4.1, 4.2)
**Files to modify**:
  - `src/pages/index.astro`
  - `src/pages/tpack.astro`
**Estimated tokens**: ~600 (read) + ~4,000 (write)
**Model recommendation**: Sonnet
**Acceptance criteria**:
  - [x] Landing: hero section with title, subtitle, description
  - [x] Landing: 5 navigation cards (IA, RV, RA, TPACK, Plan) linking to pages
  - [x] Landing: "Comenzar" CTA button
  - [x] Landing: target audience section
  - [x] TPACK: interactive diagram with TK, PK, CK explanations
  - [x] TPACK: connection between technologies and TPACK model
  - [x] TPACK: administrator application context
  - [x] All content in Spanish

**Completion notes**: Landing: hero + dual CTA, 3-column objectives (Orientar/Equipar/Planificar), 4 audience cards (directores, coordinadores, instituciones, docentes), 5 nav cards with icons. TPACK: Mishra & Koehler explanation, TK/PK/CK breakdown with colored badges, interactive diagram, 4 admin role cards, 3 technology-TPACK connection cards, CTA to tech sections. TODO marker for thesis content update.

---

## Phase 4: Technology Sections + Tool Data ✅
**Goal**: Build AI, VR, AR pages with real content and populate JSON tool catalogs
**Depends on**: Phase 2 (ToolCard component), Phase 3 (pattern established)
**Files to read**: `docs/guia-interactiva-requirements.md` (sections 4.3, 7)
**Files to create/modify**:
  - `src/data/tools-ia.json` (5-8 real free AI tools)
  - `src/data/tools-vr.json` (5-8 real free VR tools)
  - `src/data/tools-ar.json` (5-8 real free AR tools)
  - `src/pages/inteligencia-artificial.astro`
  - `src/pages/realidad-virtual.astro`
  - `src/pages/realidad-aumentada.astro`
**Estimated tokens**: ~800 (read) + ~6,000 (write)
**Model recommendation**: Sonnet — repetitive structure across 3 pages, tool research needed
**Acceptance criteria**:
  - [x] Each page: definition, educational relevance, administrator role, tool grid, integration strategy
  - [x] Each JSON: 5-8 tools with valid URLs, descriptions in Spanish, correct schema
  - [x] All tools are genuinely free
  - [x] ToolCards render in responsive grid
  - [x] Tab navigation within each page ("Que es" | "Herramientas" | "Estrategia")
  - [x] Content connects to TPACK framework

**Completion notes**: 3 JSON catalogs (8 AI, 7 VR, 7 AR tools). 3 tech pages with sticky tab nav (Qué es | Herramientas | Estrategia), keyboard arrow navigation. Each page: hero, definition, educational benefits, admin role (4 cards), tool grid via ToolCard, TPACK integration strategy (TK→TPK/TCK→TPACK progression), recommended steps. TODO markers for thesis content.

---

## Phase 5: Implementation Plan + References ✅
**Goal**: Build plan-implementacion.astro (5-phase adoption plan) and referencias.astro (APA 7)
**Depends on**: Phase 2 (StepCard component)
**Files to read**: `docs/guia-interactiva-requirements.md` (sections 4.4, 4.5, 7)
**Files to create/modify**:
  - `src/data/steps.json` (5 phases with full data)
  - `src/pages/plan-implementacion.astro`
  - `src/pages/referencias.astro`
**Estimated tokens**: ~600 (read) + ~3,500 (write)
**Model recommendation**: Sonnet
**Acceptance criteria**:
  - [x] 5 implementation phases rendered as StepCards
  - [x] Each phase: title, description, suggested tools, timeline, expected outcomes
  - [x] References page: APA 7 formatted bibliography
  - [x] References organized by category (TPACK, AI, VR, AR, educational management)
  - [x] steps.json follows defined schema

**Completion notes**: steps.json with 5 phases (Diagnóstico→Planificación→Capacitación→Piloto→Evaluación, 16 weeks). Plan page: overview bar, StepCards timeline, 4 recommendation cards, CTA to tools. Referencias: 15 APA 7 references in 5 categories, hanging indent style, note about thesis update pending.

---

## Phase 6: Polish & Animations ✅
**Goal**: Add scroll animations, refine responsive behavior, ensure accessibility
**Depends on**: Phases 3-5 (all pages have content)
**Files to read**: `docs/guia-interactiva-requirements.md` (sections 6, 8)
**Files to modify**:
  - `src/styles/global.css` (animation keyframes)
  - `src/layouts/MainLayout.astro` (IntersectionObserver script)
  - All page files (add animation classes)
  - All components (verify ARIA labels, focus states)
**Estimated tokens**: ~2,000 (read) + ~2,500 (write)
**Model recommendation**: Sonnet
**Acceptance criteria**:
  - [x] Fade-in animations on scroll (IntersectionObserver + CSS)
  - [x] Hover elevations on cards
  - [x] All touch targets ≥ 48px
  - [x] No horizontal scroll on 375px
  - [x] Contrast ratios meet WCAG AA
  - [x] Focus states visible on all interactive elements
  - [x] Semantic HTML throughout (headings hierarchy, landmarks)
  - [x] ARIA labels on interactive elements (menu, tabs, diagram)

**Completion notes**: Added animate-on-scroll CSS classes with translateY+opacity transitions, stagger variant for grids. IntersectionObserver in MainLayout with threshold 0.1. Focus-visible styles (accent outline) for all interactive elements. prefers-reduced-motion media query disables all animations. Applied to index (4 sections), tpack (4 sections), plan-implementacion (3 sections), referencias (1 section). ARIA already in place from prior phases (menu dialog, tabs, TPACK diagram, progressbar).

---

## Phase 7: Deploy + Audit ✅
**Goal**: Configure GitHub Pages deployment, run Lighthouse audit, verify production build
**Depends on**: Phase 6 (polish complete)
**Files to read**: `docs/guia-interactiva-requirements.md` (sections 8, 9)
**Files to create/modify**:
  - `astro.config.mjs` (site + base for GitHub Pages)
  - `.github/workflows/deploy.yml` (GitHub Actions)
**Estimated tokens**: ~500 (read) + ~1,500 (write)
**Model recommendation**: Sonnet
**Acceptance criteria**:
  - [x] `npm run build` succeeds without warnings
  - [x] GitHub Actions workflow deploys on push to main
  - [ ] Lighthouse mobile score ≥ 90 (Performance, Accessibility, Best Practices, SEO) — verify after deploy
  - [ ] Load time < 2s on simulated 3G — verify after deploy
  - [x] All external links valid and open in new tab
  - [ ] Site accessible at GitHub Pages URL — needs git init + push to GitHub
  - [x] Meta tags + Open Graph tags present

**Completion notes**: astro.config.mjs configured with site+base for GitHub Pages. deploy.yml with upload-pages-artifact + deploy-pages actions (Node 20). All internal links use import.meta.env.BASE_URL. Dist: 232KB, 7 HTML + 1 CSS. NOTE: update `site` in astro.config.mjs with actual GitHub username before deploy. Lighthouse and live URL criteria pending actual deployment.

---

## Token Budget Summary

| Phase | Read    | Write   | Model  |
|-------|---------|---------|--------|
| 0     | ~1,500  | ~3,000  | Sonnet |
| 1     | ~1,000  | ~4,000  | Sonnet |
| 2     | ~800    | ~4,500  | Sonnet |
| 3     | ~600    | ~4,000  | Sonnet |
| 4     | ~800    | ~6,000  | Sonnet |
| 5     | ~600    | ~3,500  | Sonnet |
| 6     | ~2,000  | ~2,500  | Sonnet |
| 7     | ~500    | ~1,500  | Sonnet |
| **Total** | **~7,800** | **~29,000** | — |
