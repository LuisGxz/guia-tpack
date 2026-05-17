# Plan de Mejoras V2 — Guía Interactiva TPACK

## Estado Actual

El sitio tiene 7 páginas: Landing, TPACK, IA, RV, RA, Plan de Implementación, Referencias.
Cada página de tecnología (IA/RV/RA) tiene 3 tabs: **Qué es** | **Herramientas** | **Estrategia**.
Las herramientas se renderizan como cards simples (nombre, descripción, categoría, badge gratis, link externo).
La estrategia es un bloque de texto con TK → TPK → TPACK + 5 pasos para el directivo.

---

## Requerimiento 1: Tab de Herramientas de Código Abierto

### Análisis
Actualmente el tab "Herramientas" muestra todas las herramientas mezcladas. Se necesita distinguir entre herramientas gratuitas/freemium y herramientas **open source** genuinas.

### Propuesta
Agregar un **sub-filtro** dentro del tab "Herramientas" (no un 4to tab, para no saturar la barra):

```
[Qué es] [Herramientas] [Estrategia]
                ↓
   [Todas] [Código Abierto]    ← toggle pills dentro del panel
```

- Agregar campo `"openSource": true/false` al JSON de cada herramienta
- Crear pills/botones de filtro dentro del panel de Herramientas
- Al seleccionar "Código Abierto" se filtran solo las herramientas con `openSource: true`
- Agregar nuevas herramientas open source al catálogo de cada tecnología

### Herramientas Open Source a agregar (investigación)

**IA:**
| Herramienta | Descripción | Licencia |
|-------------|-------------|----------|
| Ollama | Ejecutar LLMs localmente (Llama, Mistral) | MIT |
| Open WebUI | Interfaz web para LLMs locales | MIT |
| LibreChat | Alternativa open source a ChatGPT | MIT |
| H2O LLM Studio | Fine-tuning de modelos sin código | Apache 2.0 |
| Jan | App de escritorio para LLMs privados | AGPL-3.0 |

**RV:**
| Herramienta | Descripción | Licencia |
|-------------|-------------|----------|
| A-Frame | Framework web para crear experiencias VR/AR | MIT |
| Godot Engine | Motor de juegos con soporte VR | MIT |
| OpenSpace | Visualización del universo en 3D | MIT |
| JanusVR | Navegador web inmersivo VR | GPL |

**RA:**
| Herramienta | Descripción | Licencia |
|-------------|-------------|----------|
| AR.js | Realidad aumentada en el navegador | MIT |
| Mind AR | Face/image tracking AR en la web | Apache 2.0 |
| model-viewer | Componente web para modelos 3D | Apache 2.0 |
| A-Frame (AR mode) | Extensión AR del framework A-Frame | MIT |

### Archivos afectados
- `src/data/tools-ia.json` — agregar campo `openSource` + nuevas herramientas
- `src/data/tools-vr.json` — idem
- `src/data/tools-ar.json` — idem
- `src/pages/inteligencia-artificial.astro` — filtro en panel herramientas
- `src/pages/realidad-virtual.astro` — idem
- `src/pages/realidad-aumentada.astro` — idem
- `src/components/ToolCard.astro` — badge "Open Source" si aplica

---

## Requerimiento 2: Sección de Simulaciones Interactivas

### Análisis
Se necesita una nueva sección al mismo nivel que IA, RV y RA. Esto implica:
- Nueva página: `src/pages/simulaciones.astro`
- Nuevo archivo de datos: `src/data/tools-simulaciones.json`
- Entrada en la navegación (Navbar + MobileMenu)
- Card en la landing page

### Propuesta de estructura (misma que IA/RV/RA)

```
/simulaciones/
├── Tab: Qué es
│   ├── Definición de simulaciones interactivas educativas
│   ├── Por qué importan (aprendizaje experiencial, bajo riesgo, repetibilidad)
│   └── Rol del directivo
├── Tab: Herramientas
│   ├── [Todas] [Código Abierto]
│   └── Grid de ToolCards
└── Tab: Estrategia
    └── Integración TPACK
```

### Herramientas candidatas para Simulaciones

| Herramienta | Descripción | Open Source | Gratis |
|-------------|-------------|:-----------:|:------:|
| PhET (Univ. Colorado) | Simulaciones de física, química, biología, matemáticas | ✅ (GPL) | ✅ |
| GeoGebra | Matemáticas dinámicas: geometría, álgebra, cálculo | ✅ (GPL) | ✅ |
| NetLogo | Modelado de sistemas complejos y agentes | ✅ (GPL) | ✅ |
| Scratch | Programación visual y creación de simulaciones | ✅ (BSD) | ✅ |
| Tinkercad | Diseño 3D y simulación de circuitos electrónicos | ❌ | ✅ |
| Algodoo | Simulador de física 2D interactivo | ❌ | ✅ |
| ChemCollective | Laboratorio virtual de química | ✅ | ✅ |
| Falstad Circuit Simulator | Simulación de circuitos eléctricos en el navegador | ✅ (GPL) | ✅ |
| Stellarium | Planetario virtual, astronomía | ✅ (GPL) | ✅ |
| VPython / GlowScript | Simulaciones 3D de física con Python | ✅ | ✅ |

### Archivos afectados
- **Nuevo**: `src/pages/simulaciones.astro`
- **Nuevo**: `src/data/tools-simulaciones.json`
- `src/components/Navbar.astro` — agregar enlace "Simulaciones"
- `src/components/MobileMenu.astro` — agregar enlace
- `src/pages/index.astro` — agregar card de navegación (serían 6 cards)

---

## Requerimiento 3: Mejorar la Sección de Estrategia

### Análisis del problema
La sección actual de Estrategia es demasiado teórica. Un directivo necesita pasos accionables, no solo una explicación del TPACK. Actualmente:
- 3 bloques de texto (TK, TPK, TPACK completo)
- 1 lista de 5 pasos genéricos
- No hay visualización del proceso
- No hay métricas ni indicadores de éxito
- No hay timeline o roadmap visual

### Propuesta: Estrategia rediseñada

Reemplazar el contenido actual con una estructura más práctica y visual:

#### 3.1 — Roadmap visual por fases
Un timeline horizontal/vertical con 4 fases claras:

```
Fase 1: Diagnosticar    → Fase 2: Planificar    → Fase 3: Implementar    → Fase 4: Evaluar
(2 semanas)               (2 semanas)              (4-6 semanas)            (2 semanas)
```

Cada fase con:
- Objetivo claro
- Acciones específicas del directivo
- Herramientas del catálogo que aplican en esta fase
- Indicador de éxito medible
- Checklist descargable (opcional)

#### 3.2 — Matriz de decisión
Una tabla/grid que ayude al directivo a elegir herramientas según:
- Área curricular (Ciencias, Lenguaje, Matemáticas, Arte, etc.)
- Nivel de competencia digital del docente (Básico / Intermedio / Avanzado)
- Objetivo pedagógico (Crear contenido, Evaluar, Gamificar, etc.)

```
                    Competencia Básica      Competencia Intermedia    Competencia Avanzada
Ciencias            Diffit, Kahoot           PhET, ChatGPT            Ollama + curriculum
Lenguaje            Quillbot, Canva          ChatGPT, Curipod         LibreChat personalizado
Matemáticas         GeoGebra, Kahoot         Tinkercad, PhET          NetLogo, Python
```

#### 3.3 — Indicadores de éxito
Sección con KPIs claros para que el directivo mida progreso:
- % de docentes capacitados
- # de herramientas integradas en planificaciones
- Satisfacción docente (encuesta)
- Impacto en aprendizaje (pre/post evaluación)

#### 3.4 — Casos de ejemplo
2-3 mini-escenarios concretos:
> "María, coordinadora de Ciencias, quiere integrar IA. Paso 1: Elige Diffit para adaptar lecturas. Paso 2: Capacita a 3 docentes en un taller de 2 horas. Paso 3: Piloto en 7mo año. Resultado: 40% más engagement."

### Archivos afectados
- `src/pages/inteligencia-artificial.astro` — reescribir panel-estrategia
- `src/pages/realidad-virtual.astro` — idem
- `src/pages/realidad-aumentada.astro` — idem
- `src/pages/simulaciones.astro` — incluir desde el inicio
- Posible nuevo componente: `src/components/StrategyRoadmap.astro`
- Posible nuevo componente: `src/components/DecisionMatrix.astro`

---

## Requerimiento 4: Mejorar Cards de Herramientas con Acordeón de Detalle

### Análisis del problema
El ToolCard actual es un link externo que abre la URL de la herramienta. No hay información interna: ni tutorial, ni enfoque, ni ejemplos por materia. Un directivo/docente no sabe cómo usarla en su contexto.

### Propuesta: ToolCard expandible con acordeón

Al hacer click en la card, en lugar de abrir el link externo, se **expande un acordeón** debajo de la card con secciones detalladas.

#### Estructura del acordeón expandido:

```
┌─────────────────────────────────────┐
│ 🤖 ChatGPT              Gratis     │
│ Asistente de IA conversacional...   │
│ [Creación de contenido] [Open Source]│
│                          ▼ Ver más  │
├─────────────────────────────────────┤ ← Acordeón expandido
│                                     │
│ 📋 ¿Para qué sirve?                │
│ Descripción expandida de la         │
│ herramienta y sus capacidades       │
│ principales en educación.           │
│                                     │
│ 🎯 Enfoque pedagógico              │
│ - Área: Ciencias, Lenguaje, Hist.   │
│ - Nivel: Secundaria, Bachillerato   │
│ - Tipo: Creación de contenido,      │
│   evaluación, investigación         │
│                                     │
│ 📚 Ejemplos por materia             │
│ ┌ Ciencias ──────────────────────┐  │
│ │ • Generar explicaciones de     │  │
│ │   conceptos adaptadas al nivel │  │
│ │ • Crear rúbricas de laboratorio│  │
│ └────────────────────────────────┘  │
│ ┌ Lenguaje ──────────────────────┐  │
│ │ • Ejercicios de redacción con  │  │
│ │   retroalimentación automática │  │
│ └────────────────────────────────┘  │
│ ┌ Matemáticas ───────────────────┐  │
│ │ • Problemas paso a paso        │  │
│ │ • Explicaciones alternativas   │  │
│ └────────────────────────────────┘  │
│                                     │
│ 🎬 Tutorial                        │
│ [Video embebido de YouTube/Loom]    │
│                                     │
│ 👨‍💼 Para el directivo               │
│ Cómo facilitar la adopción de       │
│ esta herramienta en la institución. │
│ Costo, requisitos técnicos,         │
│ tiempo de capacitación estimado.    │
│                                     │
│ 🔗 Ir a la herramienta →           │
└─────────────────────────────────────┘
```

#### Cambios en la estructura de datos JSON

```jsonc
{
  "name": "ChatGPT",
  "description": "Asistente de IA conversacional...",
  "url": "https://chat.openai.com",
  "category": "Creación de contenido",
  "icon": "💬",
  "free": true,
  "openSource": false,
  // --- Nuevos campos ---
  "detail": {
    "fullDescription": "Descripción expandida completa de qué es la herramienta y cómo funciona en el contexto educativo.",
    "approach": {
      "areas": ["Todas las áreas curriculares"],
      "levels": ["Primaria alta", "Secundaria", "Bachillerato"],
      "type": ["Creación de contenido", "Evaluación", "Investigación", "Tutoría"]
    },
    "subjectExamples": [
      {
        "subject": "Ciencias Naturales",
        "examples": [
          "Generar explicaciones de conceptos adaptadas al nivel del estudiante",
          "Crear rúbricas de evaluación para proyectos de laboratorio",
          "Diseñar actividades de indagación guiada"
        ]
      },
      {
        "subject": "Lengua y Literatura",
        "examples": [
          "Ejercicios de redacción con retroalimentación inmediata",
          "Análisis guiado de textos literarios",
          "Generación de prompts creativos para escritura"
        ]
      },
      {
        "subject": "Matemáticas",
        "examples": [
          "Resolución de problemas paso a paso con explicaciones alternativas",
          "Generación de ejercicios diferenciados por nivel"
        ]
      }
    ],
    "videoUrl": "https://www.youtube.com/embed/VIDEO_ID",
    "forDirectors": {
      "implementationTime": "1-2 horas de capacitación inicial",
      "techRequirements": "Navegador web, cuenta gratuita",
      "cost": "Gratis (versión básica), $20/mes (Plus)",
      "tips": "Iniciar con 2-3 docentes piloto. Establecer políticas de uso ético antes de la implementación."
    }
  }
}
```

### Archivos afectados
- `src/data/tools-ia.json` — expandir cada herramienta con `detail`
- `src/data/tools-vr.json` — idem
- `src/data/tools-ar.json` — idem
- `src/data/tools-simulaciones.json` — incluir desde el inicio
- `src/components/ToolCard.astro` — rediseñar como acordeón expandible
- Posible nuevo: `src/components/ToolDetail.astro` — contenido del acordeón
- JS para toggle del acordeón (vanilla JS, consistente con el proyecto)

---

## Orden de Implementación

```
Fase A: Datos y estructura (fundamentos)
├── A1. Expandir esquema JSON de herramientas (todos los archivos de datos)
├── A2. Crear tools-simulaciones.json
└── A3. Agregar campo openSource a herramientas existentes

Fase B: Componentes nuevos
├── B1. Nuevo ToolCard con acordeón expandible + ToolDetail
├── B2. Filtro de herramientas (Todas / Código Abierto) dentro del panel
├── B3. StrategyRoadmap component (timeline visual)
└── B4. DecisionMatrix component (tabla interactiva)

Fase C: Páginas
├── C1. Crear simulaciones.astro (nueva página completa)
├── C2. Actualizar nav (Navbar + MobileMenu + Landing cards)
├── C3. Reescribir panel Estrategia en IA/RV/RA
└── C4. Integrar nuevos componentes en las 4 páginas de tecnología

Fase D: Pulido
├── D1. Responsive testing (375px → 1440px)
├── D2. Accesibilidad (ARIA, keyboard, focus)
├── D3. Performance (Lighthouse ≥ 90)
└── D4. Build y deploy
```

Estimación de complejidad: **Alta** — ~15 archivos tocados, 3-4 componentes nuevos, 1 página nueva, reestructuración de datos JSON.

---

## Preguntas para el Usuario

### Sobre Herramientas Open Source (Req. 1)
1. **¿El filtro debe ser visual (pills dentro del tab) o un 4to tab separado?** Mi propuesta es pills dentro del tab "Herramientas" para no saturar la barra de tabs. ¿De acuerdo?
2. **¿Las herramientas open source que propuse arriba (Ollama, A-Frame, PhET, etc.) te parecen bien?** ¿Tienes otras en mente? Algunas son más técnicas — ¿está bien o prefieres solo herramientas no-code?

### Sobre Simulaciones (Req. 2)
3. **¿Qué emoji/ícono quieres para Simulaciones?** Las otras usan 🤖 (IA), 🥽 (RV), 📱 (RA). Sugerencias: 🧪 (laboratorio), 🔬 (microscopio), ⚡ (experimento), 🎮 (juego interactivo).
4. **¿Simulaciones incluye laboratorios virtuales de ciencias, matemáticas interactivas, y simulaciones de programación?** ¿O solo un tipo específico?
5. **¿Qué color asociamos a Simulaciones?** IA=azul cielo, RV=púrpura, RA=verde. Sugerencia: naranja o ámbar para simulaciones.

### Sobre Estrategia (Req. 3)
6. **¿Cada tecnología tiene su propia estrategia diferente, o la estrategia es universal y se adapta?** Actualmente cada tech tiene su propio panel. ¿Quieres que la estrategia sea más genérica (un framework aplicable a cualquier tech) o siga siendo específica por tecnología?
7. **¿Los "casos de ejemplo" deben ser ficticios o basados en tu experiencia/tesis?** Puedo inventar escenarios realistas, pero si tienes datos reales serían mucho más potentes.
8. **¿La matriz de decisión (herramienta según materia + nivel del docente) te parece útil?** Es el componente más complejo de diseñar.

### Sobre Detalle de Herramientas (Req. 4)
9. **¿De dónde salen los videos tutoriales?** ¿YouTube embeds de canales educativos existentes? ¿O dejas el campo vacío por ahora y lo llenas después?
10. **¿Cuántas materias/áreas curriculares manejas como referencia?** Para los ejemplos por materia necesito saber las áreas. Sugerencia basada en currículo ecuatoriano:
    - Lengua y Literatura
    - Matemáticas
    - Ciencias Naturales
    - Estudios Sociales
    - Educación Artística
    - Educación Física
    - Inglés
    - Informática/Computación
11. **¿La información de "Para el directivo" (costo, requisitos, tiempo) la tengo que investigar yo por cada herramienta, o la proporcionas tú?** Puedo investigar y completar.
12. **¿Al expandir el acordeón de una herramienta, se colapsan las demás?** (comportamiento típico de acordeón) ¿O pueden estar varias abiertas a la vez?

### General
13. **¿Prioridad?** ¿En qué orden quieres que implemente? Mi sugerencia:
    - **Primero**: Req 4 (acordeón herramientas) + Req 1 (open source) — van juntos porque ambos tocan ToolCard y JSONs
    - **Segundo**: Req 2 (simulaciones) — página nueva
    - **Tercero**: Req 3 (estrategia) — rediseño de contenido
14. **¿Quieres que haga todo de un tirón o por requerimiento con review entre cada uno?**
