# Guía Interactiva: La Gestión Directiva en la Integración de Tecnologías Emergentes Educativas

## Project Overview

Interactive web-based guide for a master's thesis project. The guide serves as a practical tool for school administrators (principals, area coordinators) to integrate emerging technologies (AI, Virtual Reality, Augmented Reality) into educational institutions, grounded in the TPACK pedagogical framework.

---

## 1. Target Audience

- **Primary:** School directors and area coordinators (gestión directiva)
- **Secondary:** Teachers (as indirect beneficiaries of the integration strategy)
- **Context:** Ecuadorian educational institutions (K-12 level assumed until confirmed)
- **Tech literacy:** Moderate — the UI must be extremely intuitive and friendly

---

## 2. Tech Stack

| Layer         | Technology                    | Rationale                                              |
|---------------|-------------------------------|--------------------------------------------------------|
| Framework     | Astro                         | Static site generation, zero JS by default, components |
| Styling       | Tailwind CSS                  | Utility-first, mobile-first responsive design          |
| Interactivity | Vanilla JS (island architecture) | Minimal JS only where needed (menu, tabs, accordions) |
| Data          | JSON files in `src/data/`     | Tool catalog, sections metadata — easy to update       |
| Deployment    | GitHub Pages                  | Free, static hosting, simple CI/CD with GitHub Actions |
| Citations     | APA 7th edition               | University requirement                                 |

---

## 3. Site Architecture

```
src/
├── layouts/
│   └── MainLayout.astro            # App shell: header, nav, footer, SEO meta
├── components/
│   ├── Navbar.astro                 # Sticky header + hamburger menu (mobile)
│   ├── MobileMenu.astro            # Slide-out sidebar navigation
│   ├── SectionHeader.astro         # Reusable section title + subtitle + icon
│   ├── ToolCard.astro              # Card component for each tool (name, desc, link, category)
│   ├── TPACKDiagram.astro          # Interactive/visual TPACK model diagram
│   ├── StepCard.astro              # Step-by-step implementation card
│   ├── Footer.astro                # Footer with references link + credits
│   └── ScrollProgress.astro        # Reading progress bar (top of viewport)
├── pages/
│   ├── index.astro                 # Landing: hero, objectives, audience, navigation cards
│   ├── tpack.astro                 # TPACK framework explanation + visual diagram
│   ├── inteligencia-artificial.astro   # AI section: concept, tools, integration strategies
│   ├── realidad-virtual.astro          # VR section: concept, tools, integration strategies
│   ├── realidad-aumentada.astro        # AR section: concept, tools, integration strategies
│   ├── plan-implementacion.astro       # Step-by-step adoption plan for administrators
│   └── referencias.astro              # APA 7 bibliography
├── data/
│   ├── tools-ia.json               # AI tools catalog
│   ├── tools-vr.json               # VR tools catalog
│   ├── tools-ar.json               # AR tools catalog
│   └── steps.json                  # Implementation plan steps
└── styles/
    └── global.css                  # Tailwind directives + custom CSS variables
```

---

## 4. Page-by-Page Specification

### 4.1 Landing Page (`index.astro`)

- **Hero section:** Title, subtitle, brief description of what the guide offers
- **Objective:** Clear statement of the guide's purpose
- **Target audience:** Who this guide is for and why
- **Navigation cards:** 3 cards (IA, RV, RA) linking to each technology section + 1 card for TPACK + 1 card for implementation plan
- **CTA:** "Comenzar" button scrolling or navigating to first section

### 4.2 TPACK Framework (`tpack.astro`)

- **Visual diagram:** Interactive TPACK Venn diagram (3 circles: TK, PK, CK with intersections)
- **Explanation:** What TPACK is, its components, why it matters for gestión directiva
- **Application context:** How administrators use TPACK to evaluate and support technology integration
- **Connection:** How the 3 technologies (AI, VR, AR) map onto the TPACK model

### 4.3 Technology Sections (`inteligencia-artificial.astro`, `realidad-virtual.astro`, `realidad-aumentada.astro`)

Each section follows the same structure:

1. **What is it?** — Clear, jargon-free definition
2. **Why does it matter for education?** — Benefits and relevance
3. **Role of the administrator** — What the director/coordinator specifically does to enable adoption
4. **Tool catalog** — Grid of `ToolCard` components, each with:
   - Tool name
   - Brief description (1-2 sentences)
   - Direct link to the tool (opens in new tab)
   - Category tag (e.g., "Creación de contenido", "Evaluación", "Capacitación")
   - Icon or screenshot placeholder
   - "Free" badge
5. **Integration strategy** — Concrete steps tied to TPACK

### 4.4 Implementation Plan (`plan-implementacion.astro`)

- **Phase-based approach** with numbered steps:
  - Phase 1: Diagnosis (assess current tech readiness)
  - Phase 2: Planning (select tools, define goals)
  - Phase 3: Capacity building (teacher training)
  - Phase 4: Pilot implementation
  - Phase 5: Evaluation and scaling
- Each phase is a `StepCard` with: title, description, suggested tools, timeline estimate, expected outcomes

### 4.5 References (`referencias.astro`)

- APA 7 formatted bibliography
- Organized by category (TPACK, AI, VR, AR, educational management)

---

## 5. Component Specifications

### ToolCard

```
Props:
  - name: string            # Tool name (e.g., "ChatGPT")
  - description: string     # 1-2 sentence description
  - url: string             # Direct link to the tool
  - category: string        # Category tag
  - icon: string            # Icon identifier or image path
  - free: boolean           # Always true for this project

Behavior:
  - Entire card is clickable, opens URL in new tab
  - Hover: subtle elevation + color accent
  - Mobile: tap-friendly (min 48px touch target)
```

### TPACKDiagram

```
Type: Interactive SVG or CSS-based Venn diagram
Behavior:
  - 3 overlapping circles (TK, PK, CK)
  - Tap/hover on each area reveals a tooltip or expanded text
  - Intersection areas show combined knowledge descriptions
  - Mobile: tap to toggle, no hover dependency
```

### Navbar

```
Behavior:
  - Desktop: horizontal nav links
  - Mobile: hamburger icon → slide-out sidebar with all sections
  - Sticky on scroll
  - Active section highlighted
```

---

## 6. Design Direction

### Visual Identity

- **Tone:** Professional, modern, trustworthy — targeting educational administrators
- **Palette:** Deep blue primary (#1e3a5f), teal accent (#0ea5e9), warm white background (#fafaf9), dark text (#1c1917)
- **Typography:**
  - Headings: `Playfair Display` or `Merriweather` (serif, authoritative)
  - Body: `Source Sans 3` or `Lato` (sans-serif, highly readable)
- **Visual elements:** Subtle geometric patterns, rounded cards, clear iconography
- **Mobile-first:** All designs start from 375px viewport and scale up

### Interaction Design

- Smooth scroll between sections
- Subtle fade-in animations on scroll (CSS `@keyframes` + `IntersectionObserver`)
- Tab interfaces within technology sections (e.g., tabs for "Qué es", "Herramientas", "Estrategia")
- Accordion for FAQ or additional details (mobile-friendly)
- No external JS libraries — vanilla JS only

---

## 7. Data Schema

### tools-ia.json (same structure for VR and AR)

```json
[
  {
    "name": "ChatGPT",
    "description": "Asistente de IA para generar contenido educativo, rúbricas y planificaciones.",
    "url": "https://chat.openai.com",
    "category": "Creación de contenido",
    "icon": "chatgpt",
    "free": true
  }
]
```

### steps.json

```json
[
  {
    "phase": 1,
    "title": "Diagnóstico institucional",
    "description": "Evaluar la infraestructura tecnológica actual...",
    "tools": ["Google Forms", "SWOT Analysis"],
    "timeline": "Semana 1-2",
    "outcomes": ["Informe de diagnóstico", "Inventario tecnológico"]
  }
]
```

---

## 8. Non-Functional Requirements

| Requirement     | Target                                                    |
|-----------------|-----------------------------------------------------------|
| Performance     | Lighthouse score ≥ 90 on mobile                          |
| Accessibility   | WCAG 2.1 AA (contrast, focus states, alt texts, ARIA)    |
| Responsive      | 375px → 1440px fluid layout                              |
| Load time       | < 2s on 3G connection (static assets, no heavy JS)       |
| Browser support | Chrome, Firefox, Safari, Edge (latest 2 versions)        |
| SEO             | Meta tags, Open Graph, semantic HTML                      |
| Offline         | Not required                                              |
| Language        | Spanish (all content)                                     |

---

## 9. Deployment Flow

```
Developer pushes to main
        ↓
GitHub Actions triggers astro build
        ↓
Build output goes to /dist
        ↓
GitHub Pages serves from /dist (or gh-pages branch)
        ↓
Live at: https://<username>.github.io/<repo-name>/
```

---

## 10. Content Status

| Content                | Status      | Notes                                         |
|------------------------|-------------|-----------------------------------------------|
| TPACK framework        | Pending     | Waiting for chapter 2 of thesis               |
| AI tools catalog       | Can start   | Research free tools independently              |
| VR tools catalog       | Can start   | Research free tools independently              |
| AR tools catalog       | Can start   | Research free tools independently              |
| Implementation plan    | Can start   | Generic structure, refine with thesis content  |
| References             | Pending     | Depends on thesis bibliography                 |
| Article from client    | Pending     | Client will share                              |

---

## 11. Milestones

| Milestone                          | Target Date   |
|------------------------------------|---------------|
| Architecture + skeleton pages      | Apr 30        |
| Tool catalogs researched + filled  | May 3         |
| All sections with content          | May 6         |
| Design polish + mobile testing     | May 8         |
| Final review + deploy              | May 10        |

---

## 12. Open Questions (Waiting on Client)

1. Article the client mentioned — needed for content alignment
2. Chapter 2 of thesis (TPACK framework) — needed for theoretical grounding
3. Specific educational level (K-12 assumed)
4. Any tutor observations about the guide
