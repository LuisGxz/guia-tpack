# Guia Interactiva — Claude Code Instructions

## What This Is
Interactive web guide for school administrators to integrate AI, VR, and AR into educational institutions using the TPACK framework. Master's thesis project.

## Tech Stack
- **Astro** — static site generator (zero JS by default)
- **Tailwind CSS** — utility-first styling
- **Vanilla JS** — minimal interactivity (menus, tabs, accordions, IntersectionObserver)
- **JSON data files** — tool catalogs and implementation steps
- **GitHub Pages** — deployment via GitHub Actions

## Commands
```bash
npm run dev        # Start dev server
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

## Project Conventions

### Language
- **Content**: Spanish (all user-facing text)
- **Code**: English (variables, comments, file names)

### Design
- Mobile-first (375px → 1440px)
- Colors: primary `#1e3a5f`, accent `#0ea5e9`, bg `#fafaf9`, text `#1c1917`
- Fonts: Merriweather (headings), Source Sans 3 (body)
- No external JS libraries — vanilla JS only
- No stock photos — CSS/SVG illustrations only
- Touch targets ≥ 48px

### Code Style
- Astro components use `.astro` extension
- Data lives in `src/data/*.json`
- One layout: `MainLayout.astro` wraps all pages
- Component props typed inline in frontmatter

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML (headings hierarchy, landmarks)
- ARIA labels on interactive elements
- Focus states on all interactive elements
- Color contrast ratios meeting AA

### Performance
- Lighthouse mobile ≥ 90
- Load time < 2s on 3G
- Minimal JS (island architecture)

## Key References
- **Requirements**: `docs/guia-interactiva-requirements.md`
- **Phase tracker**: `docs/PHASES.md` — check this first on session start
- **Project map**: `docs/PROJECT_MAP.md` — file structure and dependencies
- **Build prompt**: `docs/claude-code-prompt.md` — detailed build instructions

## Content Status
- TPACK framework content: complete
- Tool catalogs: complete (41 tools across 4 categories with validated YouTube tutorials)
- References: complete (APA 7th edition)
- All content is finalized — this is the final version of the project
