# Project Map — Guia Interactiva

## Directory Structure

```
guia-dinamica/
├── docs/
│   ├── guia-interactiva-requirements.md   # Full requirements spec
│   ├── claude-code-prompt.md              # Build instructions reference
│   ├── PHASES.md                          # Development phases tracker
│   └── PROJECT_MAP.md                     # This file
├── CLAUDE.md                              # Claude Code project instructions
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro               # App shell (header, nav, footer, SEO)
│   ├── components/
│   │   ├── Navbar.astro                   # Sticky nav, horizontal desktop
│   │   ├── MobileMenu.astro              # Slide-out sidebar (mobile)
│   │   ├── SectionHeader.astro           # Reusable title + subtitle + icon
│   │   ├── ToolCard.astro                # Tool card (name, desc, link, category)
│   │   ├── TPACKDiagram.astro            # Interactive Venn diagram (SVG/CSS)
│   │   ├── StepCard.astro                # Implementation step card
│   │   ├── Footer.astro                  # Footer with credits + references link
│   │   └── ScrollProgress.astro          # Reading progress bar
│   ├── pages/
│   │   ├── index.astro                   # Landing: hero, objectives, nav cards
│   │   ├── tpack.astro                   # TPACK framework + diagram
│   │   ├── inteligencia-artificial.astro # AI: concept, tools, strategy
│   │   ├── realidad-virtual.astro        # VR: concept, tools, strategy
│   │   ├── realidad-aumentada.astro      # AR: concept, tools, strategy
│   │   ├── plan-implementacion.astro     # 5-phase adoption plan
│   │   └── referencias.astro            # APA 7 bibliography
│   ├── data/
│   │   ├── tools-ia.json                 # AI tools catalog
│   │   ├── tools-vr.json                 # VR tools catalog
│   │   ├── tools-ar.json                 # AR tools catalog
│   │   └── steps.json                    # Implementation plan steps
│   └── styles/
│       └── global.css                    # Tailwind directives + custom vars
├── public/                               # Static assets (favicons, OG images)
├── astro.config.mjs                      # Astro config (site, base, integrations)
├── tailwind.config.mjs                   # Tailwind design tokens
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml                    # GitHub Pages auto-deploy
```

## Key Files

| File | Purpose | Est. Size | Read Priority |
|------|---------|-----------|---------------|
| `src/layouts/MainLayout.astro` | App shell, SEO meta, font loading | ~120 lines | HIGH — read before any page work |
| `src/components/TPACKDiagram.astro` | Most complex component (SVG Venn) | ~150 lines | MEDIUM — Phase 2 only |
| `src/components/Navbar.astro` | Navigation + mobile hamburger | ~80 lines | HIGH — affects all pages |
| `src/components/ToolCard.astro` | Repeated across 3 tech pages | ~60 lines | MEDIUM — Phase 2 |
| `src/pages/index.astro` | Entry point, sets visual tone | ~150 lines | HIGH — Phase 3 |
| `src/data/tools-*.json` | Tool catalogs (3 files) | ~50 lines each | LOW — data only |
| `tailwind.config.mjs` | Design tokens, fonts, colors | ~40 lines | HIGH — Phase 0 |
| `astro.config.mjs` | Build config, GitHub Pages | ~20 lines | LOW — Phase 0, 7 |

## Module Dependency Graph

```
MainLayout.astro
├── Navbar.astro
│   └── MobileMenu.astro (toggled via JS)
├── ScrollProgress.astro
└── Footer.astro

index.astro ← MainLayout
tpack.astro ← MainLayout + SectionHeader + TPACKDiagram
inteligencia-artificial.astro ← MainLayout + SectionHeader + ToolCard + tools-ia.json
realidad-virtual.astro ← MainLayout + SectionHeader + ToolCard + tools-vr.json
realidad-aumentada.astro ← MainLayout + SectionHeader + ToolCard + tools-ar.json
plan-implementacion.astro ← MainLayout + SectionHeader + StepCard + steps.json
referencias.astro ← MainLayout + SectionHeader
```

## External Integrations

| Integration | Purpose | Config Location |
|-------------|---------|-----------------|
| Google Fonts | Merriweather + Source Sans 3 | `MainLayout.astro` `<head>` |
| GitHub Pages | Static hosting | `astro.config.mjs` + `.github/workflows/deploy.yml` |
| GitHub Actions | CI/CD auto-deploy on push | `.github/workflows/deploy.yml` |

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#1e3a5f` | Headers, nav background, primary buttons |
| Accent | `#0ea5e9` | Links, hover states, CTA buttons, highlights |
| Background | `#fafaf9` | Page background |
| Text | `#1c1917` | Body text |
| Heading font | `Merriweather` | h1-h6 |
| Body font | `Source Sans 3` | p, li, labels, nav |
