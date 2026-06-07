# Prompt y Contexto Completo del Proyecto — Para Claude Chat

> **Instrucción**: Copia TODO este documento y pégalo en Claude Chat (claude.ai) para que genere el documento de demostración. También puedes adjuntar capturas de pantalla de cada página de la guía web para que Claude Chat las describa visualmente.

---

## PROMPT SUGERIDO PARA CLAUDE CHAT

```
Eres un experto en tecnología educativa y desarrollo web. Con la información que te proporciono a continuación, genera un documento académico de demostración (en español, normas APA 7ma edición) que explique:

1. Cómo se realizó la página web virtual (guía interactiva)
2. Qué tecnologías se usaron y por qué
3. Cómo se insertó cada aplicación/herramienta en la guía
4. Capturas de pantalla y descripción visual de cada sección (si se adjuntan imágenes)
5. El proceso de desarrollo fase por fase
6. Los resultados obtenidos

El documento debe tener:
- Portada con título, autor, universidad, fecha
- Índice
- Introducción
- Desarrollo (con subsecciones por cada página y herramienta)
- Conclusiones
- Referencias en formato APA 7

Título del proyecto: "Guía Interactiva: La Gestión Directiva en la Integración de Tecnologías Emergentes Educativas"
Autor: [Tu nombre]
Universidad: [Tu universidad]
Programa: Maestría en [tu programa]

Aquí está toda la información del proyecto:
```

---

## 1. CONTEXTO DEL PROYECTO

### Qué es
Guía interactiva web para directivos escolares (rectores, vicerrectores, coordinadores de área) que facilita la integración de tecnologías emergentes (Inteligencia Artificial, Realidad Virtual, Realidad Aumentada y Simulaciones) en instituciones educativas, utilizando el marco pedagógico TPACK (Technological Pedagogical Content Knowledge).

### Para qué sirve
- Guiar a directivos en la selección de herramientas tecnológicas educativas
- Proporcionar un plan de implementación de 5 fases con 12 sesiones de capacitación
- Ofrecer ejemplos prácticos reales de uso de herramientas
- Fundamentar las decisiones con el marco TPACK de Mishra y Koehler (2006)

### Contexto académico
- **Tipo de proyecto**: Trabajo de titulación de Maestría
- **Público objetivo**: Directivos de instituciones educativas K-12 en Ecuador
- **Marco teórico**: TPACK (Technological Pedagogical Content Knowledge)
- **Contenido**: Todo en español, contextualizado al sistema educativo ecuatoriano

### URL de la guía desplegada
- **Principal**: https://tech-in-class.vercel.app
- **Alternativa**: https://LuisGxz.github.io/guia-tpack/
- **Repositorio GitHub**: https://github.com/LuisGxz/guia-tpack

---

## 2. TECNOLOGÍAS UTILIZADAS (Stack Tecnológico)

### Framework: Astro v6.1.10
- **Qué es**: Generador de sitios estáticos que produce HTML puro sin JavaScript innecesario
- **Por qué se eligió**: Rendimiento superior (carga < 2 segundos en 3G), cero dependencias de framework en el navegador, ideal para contenido estático educativo
- **Cómo funciona**: Los archivos `.astro` se compilan a HTML estático durante el build. No hay React, Vue, ni Angular — solo HTML, CSS y JavaScript vanilla

### Estilos: Tailwind CSS v4.2.4
- **Qué es**: Framework de CSS basado en clases utilitarias
- **Por qué se eligió**: Desarrollo rápido, diseño responsivo mobile-first, sin CSS personalizado extenso
- **Paleta de colores**:
  - Primario: `#1e3a5f` (azul profundo — confianza, profesionalismo)
  - Acento: `#0ea5e9` (azul cielo/teal — modernidad, tecnología)
  - Fondo: `#fafaf9` (blanco cálido — limpieza, legibilidad)
  - Texto: `#1c1917` (casi negro — alto contraste)

### Tipografía
- **Títulos**: Merriweather (serif) — transmite autoridad y seriedad académica
- **Cuerpo**: Source Sans 3 (sans-serif) — máxima legibilidad en pantalla

### Interactividad: JavaScript Vanilla
- **Qué es**: JavaScript puro sin bibliotecas externas
- **Por qué**: Rendimiento máximo, sin dependencias, menor tamaño de carga
- **Usos**: Menú hamburguesa móvil, pestañas de navegación, acordeones desplegables, animaciones al scroll (IntersectionObserver)

### Datos: Archivos JSON
- **Qué es**: Catálogos de herramientas almacenados en archivos JSON
- **Por qué**: Fácil de mantener, no requiere base de datos, se integra directamente con Astro
- **Archivos**: `tools-ia.json` (14 herramientas IA), `tools-vr.json` (10 VR), `tools-ar.json` (9 RA), `tools-simulaciones.json` (8 simulaciones), `steps.json` (5 fases del plan)

### Despliegue: GitHub Pages + Vercel
- **GitHub Pages**: Despliegue automático con GitHub Actions al hacer push
- **Vercel**: Despliegue paralelo como respaldo
- **Resultado**: Sitio 100% estático, sin servidor, gratuito, siempre disponible

### Herramienta de desarrollo: Claude Code (CLI de Anthropic)
- **Qué es**: Herramienta de inteligencia artificial para desarrollo de software
- **Cómo se usó**: Asistente en todas las fases de desarrollo — desde scaffolding hasta despliegue
- **Proceso**: Se le proporcionó un prompt detallado con requisitos, y fase por fase construyó la guía completa

---

## 3. ESTRUCTURA DE LA PÁGINA WEB

### Arquitectura de archivos
```
guia-dinamica/
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro          ← Plantilla base que envuelve todas las páginas
│   ├── components/                    ← 12 componentes reutilizables
│   │   ├── Navbar.astro              ← Barra de navegación fija
│   │   ├── MobileMenu.astro          ← Menú lateral para móviles
│   │   ├── Footer.astro              ← Pie de página
│   │   ├── ScrollProgress.astro      ← Barra de progreso de lectura
│   │   ├── SectionHeader.astro       ← Encabezado reutilizable de secciones
│   │   ├── ToolCard.astro            ← Tarjeta de herramienta tecnológica
│   │   ├── TPACKDiagram.astro        ← Diagrama interactivo de Venn (TPACK)
│   │   ├── StepCard.astro            ← Tarjeta de fase del plan
│   │   ├── SectionNav.astro          ← Navegación entre secciones
│   │   ├── GuideProgress.astro       ← Indicador de progreso
│   │   ├── OtherTechnologies.astro   ← Enlaces a otras tecnologías
│   │   └── SuggestionBox.astro       ← Buzón de sugerencias flotante
│   ├── pages/                         ← 8 páginas + páginas dinámicas
│   │   ├── index.astro               ← Página de inicio
│   │   ├── tpack.astro               ← Marco TPACK
│   │   ├── inteligencia-artificial.astro ← Sección IA (14 herramientas)
│   │   ├── realidad-virtual.astro    ← Sección RV (10 herramientas)
│   │   ├── realidad-aumentada.astro  ← Sección RA (9 herramientas)
│   │   ├── simulaciones.astro        ← Sección Simulaciones (8 herramientas)
│   │   ├── plan-implementacion.astro ← Plan de 5 fases
│   │   ├── ejemplos-practicos.astro  ← 9 ejemplos prácticos reales
│   │   ├── referencias.astro         ← Bibliografía APA 7
│   │   └── herramienta/[slug].astro  ← Páginas dinámicas por herramienta
│   ├── data/                          ← Catálogos JSON
│   │   ├── tools-ia.json             ← 14 herramientas de IA
│   │   ├── tools-vr.json             ← 10 herramientas de RV
│   │   ├── tools-ar.json             ← 9 herramientas de RA
│   │   ├── tools-simulaciones.json   ← 8 herramientas de simulación
│   │   └── steps.json                ← 5 fases del plan de implementación
│   └── styles/
│       └── global.css                ← Estilos globales + tokens de diseño
├── docs/                              ← Documentación del proyecto
├── CLAUDE.md                          ← Instrucciones para Claude Code
├── astro.config.mjs                   ← Configuración de Astro
├── package.json                       ← Dependencias npm
└── tailwind.config.js                 ← Configuración de Tailwind
```

---

## 4. PÁGINAS DE LA GUÍA — DESCRIPCIÓN DETALLADA

### 4.1 Página de Inicio (`index.astro`)
- **Sección Hero**: Título principal con fondo azul profundo, subtítulo explicativo
- **Objetivos**: Tarjetas con los objetivos de la guía
- **Público objetivo**: A quién va dirigida
- **Tarjetas de navegación**: 5 tarjetas interactivas que llevan a cada sección (IA, RV, RA, TPACK, Plan)
- **Botón CTA**: "Comenzar" que inicia el recorrido

### 4.2 Marco TPACK (`tpack.astro`)
- **Diagrama de Venn interactivo**: 3 círculos SVG (TK, PK, CK) con 7 regiones interactivas
- **Al hacer tap/hover**: Se revela la descripción de cada intersección (TPK, TCK, PCK, TPACK)
- **Explicación teórica**: Qué es TPACK según Mishra & Koehler (2006)
- **Rol del directivo**: Cómo aplica TPACK en la gestión
- **Conexión con tecnologías**: Cómo IA, RV y RA se mapean al modelo TPACK
- **Video explicativo**: Enlace a video de la Universidad del Bío-Bío sobre TPACK

### 4.3 Inteligencia Artificial (`inteligencia-artificial.astro`)
**Estructura de 3 pestañas (tabs)**:
1. **"Qué es"**: Definición accesible de IA, relevancia educativa, rol del directivo
2. **"Herramientas"**: Grid de 14 ToolCards (ChatGPT, Gemini, Canva IA, Kahoot!, Diffit, Curipod, HuggingChat, Jan, LibreChat, Open WebUI, Quillbot, Formative)
3. **"Estrategia TPACK"**: Cómo integrar IA usando el marco TPACK

**Cada ToolCard muestra**: Nombre, icono/emoji, descripción breve, categoría, badge "Gratuito", enlace externo

**Al hacer clic en una herramienta**: Se abre la página de detalle (`herramienta/[slug].astro`) con:
- Descripción completa
- Guía de uso para directivos
- Requisitos técnicos, costo, tiempo de implementación
- Actividad práctica paso a paso
- Video tutorial embebido de YouTube
- Vinculación con TPACK

### 4.4 Realidad Virtual (`realidad-virtual.astro`)
- Misma estructura de 3 pestañas que IA
- **10 herramientas**: Google Arts & Culture, Google Earth VR, Mozilla Hubs, CoSpaces Edu, Sketchfab, ThingLink, Tour Creator, A-Frame, OpenSpace, Godot Engine
- Cada herramienta con página de detalle completa

### 4.5 Realidad Aumentada (`realidad-aumentada.astro`)
- Misma estructura de 3 pestañas
- **9 herramientas**: Merge EDU, QuiverVision, Google Lens, Assemblr EDU, JigSpace, Metaverse Studio, Qlone, AR.js, model-viewer
- Cada herramienta con página de detalle completa

### 4.6 Simulaciones (`simulaciones.astro`)
- Misma estructura de 3 pestañas
- **8 herramientas**: PhET, GeoGebra, Scratch, Tinkercad, Algodoo, NetLogo, ChemCollective, Stellarium
- Cada herramienta con página de detalle completa

### 4.7 Plan de Implementación (`plan-implementacion.astro`)
**5 fases con 12 sesiones**:

| Fase | Sesiones | Contenido |
|------|----------|-----------|
| 1. Diagnóstico Institucional | 1-2 | Evaluación de infraestructura, competencias digitales, necesidades |
| 2. Planificación Estratégica | 3-4 | Selección de tecnologías, objetivos, cronograma |
| 3. Capacitación Docente | 5-8 | Talleres prácticos de IA, RV, RA, simulaciones |
| 4. Implementación Piloto | 9-10 | Ejecución controlada en aulas seleccionadas |
| 5. Evaluación y Escalamiento | 11-12 | Análisis de resultados, plan de escala institucional |

**Fase 3 detallada** (4 sesiones de capacitación):
- Sesión 5: Sensibilización y marco teórico TPACK
- Sesión 6: Taller práctico de herramientas de IA
- Sesión 7: Taller práctico de RA, RV y Simulaciones
- Sesión 8: Planificación integrada y selección de pilotos

### 4.8 Ejemplos Prácticos (`ejemplos-practicos.astro`)
**9 ejemplos reales** creados por directivos escolares usando herramientas de la guía:

| # | Herramienta | Ejemplo | Tipo |
|---|-------------|---------|------|
| 1 | Canva | Flyer para minga escolar | Comunicación institucional |
| 2 | Canva | Formato de CV docente | Gestión documental |
| 3 | Canva | Invitación feria escolar | Eventos institucionales |
| 4 | Padlet | Tablero institucional Dr. Francisco Huerta Rendón | Organización institucional |
| 5 | Gemini | Invitación elección Consejo Ejecutivo | Gestión administrativa |
| 6 | ChatGPT | Planificación ERCA (CN.4.2.7) | Planificación didáctica |
| 7 | ChatGPT | Planificación ERCA + DUA | Planificación didáctica |
| 8 | ChatGPT | Formato planificación microcurricular | Planificación didáctica |
| 9 | FlipbookPDF | Documento institucional interactivo | Publicación digital |

**Prompts de ChatGPT utilizados**:
1. "En base al siguiente destreza: CN.4.2.7. Describir las características de los virus, indagar las formas de transmisión y comunicar las medidas preventivas, por diferentes medios. Elabora una planificación didáctica con el modelo ERCA para estudiantes del noveno grado de EGB."
2. "A esa planificación agregarle el MODELO DUA con todas sus representaciones."
3. "Construya un formato para esa planificación."

**Prompt de Gemini**: "Elabora una invitación para elección del Consejo Ejecutivo"

### 4.9 Referencias (`referencias.astro`)
- Bibliografía completa en formato APA 7ma edición
- Organizada por categorías: TPACK, IA, RV, RA, Gestión Educativa

---

## 5. PROCESO DE DESARROLLO — FASE POR FASE

### Fase 0: Scaffolding del Proyecto
- Se instaló Astro v6.1.10 con `npm create astro@latest`
- Se configuró Tailwind CSS v4.2.4 como plugin de Vite
- Se definieron los tokens de diseño (colores, fuentes) en `global.css`
- Se crearon todos los archivos vacíos: 7 páginas, 8 componentes, 4 archivos JSON, 1 layout

### Fase 1: Layout y Navegación
- **MainLayout.astro**: Plantilla base con `<head>`, meta tags, Google Fonts, Navbar, Footer
- **Navbar.astro**: Barra de navegación fija (sticky) con logo/título, enlaces horizontales en desktop, botón hamburguesa en móvil
- **MobileMenu.astro**: Menú lateral deslizable para pantallas < 768px
- **Footer.astro**: Pie de página con enlace a referencias, créditos
- **ScrollProgress.astro**: Barra de progreso de lectura en la parte superior

### Fase 2: Componentes Reutilizables
- **ToolCard.astro**: Tarjeta clickeable para cada herramienta con nombre, descripción, categoría, badge gratuito, enlace externo. Áreas de toque mínimo 48×48px
- **SectionHeader.astro**: Encabezado con título, subtítulo opcional, línea decorativa de acento
- **StepCard.astro**: Tarjeta numerada para cada fase del plan con título, descripción, herramientas, cronograma, resultados esperados
- **TPACKDiagram.astro**: Diagrama de Venn SVG interactivo con 3 círculos (TK, PK, CK) y 7 regiones clicables

### Fase 3: Landing + TPACK
- Se construyó la página de inicio con hero, objetivos, tarjetas de navegación
- Se implementó la página TPACK con diagrama interactivo, explicación teórica, tarjetas de rol del directivo

### Fase 4: Secciones de Tecnología + Catálogos
- Se crearon las 4 páginas de tecnología (IA, RV, RA, Simulaciones)
- Cada página tiene navegación por pestañas: "Qué es" | "Herramientas" | "Estrategia TPACK"
- Se poblaron los archivos JSON con 41 herramientas (8 IA + 7 RV + 7 RA + 7 Sim inicialmente)
- Se creó la página dinámica `herramienta/[slug].astro` para páginas de detalle individuales

### Fase 5: Plan de Implementación + Referencias
- Se implementó el plan de 5 fases con StepCards
- Se agregaron las sesiones detalladas (12 sesiones de capacitación)
- Se completó la página de referencias con bibliografía APA 7

### Fase 6: Pulido y Animaciones
- Animaciones de aparición al scroll con IntersectionObserver
- Efectos hover con elevación sutil en tarjetas
- Cumplimiento WCAG 2.1 AA (contraste, ARIA labels, focus states)
- Soporte para `prefers-reduced-motion`

### Fase 7: Despliegue
- Configuración de GitHub Pages con GitHub Actions
- Configuración dual Vercel + GitHub Pages
- Build final: 232KB de archivos estáticos
- Verificación de accesibilidad y rendimiento

---

## 6. CÓMO SE INSERTÓ CADA APLICACIÓN/HERRAMIENTA

### Proceso general para insertar una herramienta
1. **Datos en JSON**: Se agregó la herramienta al archivo JSON correspondiente (`tools-ia.json`, `tools-vr.json`, etc.) con todos sus campos: nombre, slug, descripción, URL oficial, categoría, precio, requisitos, video tutorial, actividades, vinculación TPACK
2. **Componente ToolCard**: El componente `ToolCard.astro` lee los datos y genera una tarjeta visual con colores según la categoría
3. **Página de detalle**: La página dinámica `herramienta/[slug].astro` genera automáticamente una página completa por cada herramienta
4. **Navegación**: Los enlaces en el catálogo llevan a la página de detalle; la página de detalle tiene botón para volver al catálogo

### Estructura de datos de cada herramienta (ejemplo)
```json
{
  "name": "ChatGPT",
  "slug": "chatgpt",
  "description": "Asistente de IA conversacional...",
  "url": "https://chat.openai.com",
  "category": "Creación de contenido",
  "icon": "🤖",
  "free": true,
  "forDirectors": {
    "implementationTime": "1-2 horas de configuración",
    "techRequirements": "Navegador web, conexión a internet",
    "cost": "Gratuito (GPT-3.5), Premium $20/mes (GPT-4)",
    "tips": ["Usar para generar borradores...", "..."]
  },
  "activity": {
    "title": "Crear una planificación didáctica",
    "steps": ["Paso 1...", "Paso 2...", "..."],
    "duration": "30 minutos"
  },
  "video": {
    "title": "Tutorial de ChatGPT para educadores",
    "url": "https://youtube.com/watch?v=..."
  },
  "tpiackConnection": {
    "TK": "Dominio técnico de la herramienta",
    "PK": "Estrategias pedagógicas que potencia",
    "CK": "Contenidos disciplinares que aborda"
  }
}
```

### Inserción de herramientas específicas por sección

**Canva (3 ejemplos en Ejemplos Prácticos)**:
- Se creó un array `canvaExamples` con título, descripción, URL del recurso y tipo
- Se renderiza como grid de 3 columnas con tarjetas de gradiente violeta-fucsia
- Cada tarjeta tiene botón "Ver recurso" que abre el enlace de Canva en nueva pestaña

**Padlet (1 ejemplo)**:
- Tarjeta individual con gradiente rosa-naranja
- Enlace directo al tablero de Padlet público

**Google Gemini (1 ejemplo)**:
- Tarjeta individual con gradiente azul-cian
- Muestra el prompt utilizado en una caja con fondo azul claro

**ChatGPT (3 ejemplos encadenados)**:
- Secuencia numerada de 3 prompts
- Cada prompt en un acordeón expandible (`<details>`)
- Resumen de resultados obtenidos con checkmarks

**FlipbookPDF (1 ejemplo)**:
- Tarjeta individual con gradiente ámbar-naranja
- Enlace directo al flipbook interactivo

---

## 7. COMPONENTES TÉCNICOS CLAVE

### Cómo funciona el Layout (MainLayout.astro)
```
Cada página importa MainLayout y se envuelve:

<MainLayout title="Título" activeSection="seccion">
  <!-- Contenido de la página -->
</MainLayout>

MainLayout incluye automáticamente:
├── <head> con meta tags, fonts, estilos
├── Navbar (navegación fija)
├── ScrollProgress (barra de lectura)
├── {slot} ← Aquí se inyecta el contenido de cada página
├── SuggestionBox (buzón de sugerencias flotante)
├── Footer
└── <script> con IntersectionObserver para animaciones
```

### Cómo funcionan las animaciones al scroll
```javascript
// IntersectionObserver detecta cuando un elemento entra al viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible'); // Activa la animación
    }
  });
});

// Se aplica a todos los elementos con clase 'animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### Cómo funciona la navegación por pestañas
```javascript
// Tabs: "Qué es" | "Herramientas" | "Estrategia"
// Al hacer clic en una pestaña:
// 1. Se remueve la clase activa de todas las pestañas
// 2. Se ocultan todos los paneles de contenido
// 3. Se activa la pestaña clickeada y se muestra su panel
```

---

## 8. ACCESIBILIDAD Y DISEÑO RESPONSIVO

### WCAG 2.1 AA
- **Contraste de color**: Ratio mínimo 4.5:1 para texto normal
- **Etiquetas ARIA**: En todos los elementos interactivos
- **Estados de foco**: Outline de 2px en color acento con offset de 2px
- **HTML semántico**: Jerarquía de encabezados (h1→h2→h3), landmarks (`<main>`, `<nav>`, `<footer>`)
- **Movimiento reducido**: Media query `prefers-reduced-motion` desactiva todas las animaciones

### Responsivo Mobile-First
- **375px**: Diseño base (móviles)
- **768px (md:)**: Tablets — grids de 2-3 columnas
- **1024px (lg:)**: Desktop — diseño completo
- **1440px**: Ancho máximo
- **Áreas de toque**: Mínimo 48×48px en todos los botones y enlaces

---

## 9. RENDIMIENTO

- **Build estático**: 232KB total (sin JavaScript de framework)
- **Lighthouse Mobile objetivo**: ≥ 90
- **Tiempo de carga objetivo**: < 2 segundos en 3G
- **Sin dependencias externas de JS**: Solo Astro + Tailwind en compilación
- **Imágenes**: No se usan fotografías stock — solo CSS, SVG y emojis
- **Fuentes**: Google Fonts cargadas con `display=swap` para no bloquear renderizado

---

## 10. CATÁLOGO COMPLETO DE 41 HERRAMIENTAS

### Inteligencia Artificial (14)
1. ChatGPT — Asistente conversacional IA (OpenAI)
2. Google Gemini — IA con integración Google Workspace
3. Canva con IA — Diseño gráfico con herramientas de IA
4. Quillbot — Parafraseo y corrección gramatical
5. Kahoot! — Quizzes gamificados con generación IA
6. Formative — Evaluación formativa en tiempo real
7. Diffit — Materiales diferenciados por nivel
8. Curipod — Presentaciones interactivas con IA
9. HuggingChat — Chat IA open-source sin registro
10. Jan — Aplicación de IA offline para escritorio
11. LibreChat — Plataforma open-source multi-modelo
12. Open WebUI — Interfaz web para modelos locales con RAG
13. Falstad Circuit Simulator — Simulación de circuitos en tiempo real
14. GlowScript/VPython — Simulaciones 3D en Python

### Realidad Virtual (10)
1. Google Arts & Culture — Tours virtuales a +2,000 museos
2. Google Earth VR — Exploración geográfica 3D
3. Mozilla Hubs — Espacios 3D colaborativos en navegador
4. CoSpaces Edu — Crear mundos 3D con programación visual
5. Sketchfab — Biblioteca de modelos 3D educativos
6. ThingLink — Imágenes/videos 360° interactivos
7. Tour Creator — Recorridos Street View con anotaciones
8. A-Frame — Framework web para experiencias VR en HTML
9. OpenSpace — Software NASA para visualización del universo
10. Godot Engine — Motor de juegos open-source con soporte VR

### Realidad Aumentada (9)
1. Merge EDU — RA educativa con modelos 3D y Merge Cube
2. QuiverVision — App que anima dibujos de estudiantes en 3D
3. Google Lens — Reconocimiento visual para investigación
4. Assemblr EDU — Creación de contenido RA sin programar
5. JigSpace — Visualizaciones 3D paso a paso en RA
6. Metaverse Studio — Experiencias RA gamificadas
7. Qlone — Escaneo 3D de objetos reales
8. AR.js — RA en navegador, open-source
9. model-viewer — Componente web de Google para modelos 3D

### Simulaciones (8)
1. PhET Interactive Simulations — 160+ simulaciones de ciencias
2. GeoGebra — Matemáticas dinámicas interactivas
3. Scratch — Programación visual por bloques
4. Tinkercad — Diseño 3D + simulación de circuitos
5. Algodoo — Simulador de física 2D
6. NetLogo — Modelado de sistemas complejos
7. ChemCollective — Laboratorio virtual de química
8. Stellarium — Planetario virtual con 600,000+ estrellas

---

## 11. MARCO TPACK — FUNDAMENTACIÓN TEÓRICA

### Definición
TPACK (Technological Pedagogical Content Knowledge) es un marco desarrollado por Mishra y Koehler (2006) que describe los tipos de conocimiento que un educador necesita para integrar tecnología efectivamente:

- **TK (Technological Knowledge)**: Conocimiento de herramientas tecnológicas
- **PK (Pedagogical Knowledge)**: Conocimiento de métodos de enseñanza
- **CK (Content Knowledge)**: Conocimiento disciplinar
- **TPK**: Intersección tecnología + pedagogía
- **TCK**: Intersección tecnología + contenido
- **PCK**: Intersección pedagogía + contenido
- **TPACK**: Intersección de los tres — el punto óptimo de integración

### Aplicación en la guía
Cada herramienta incluye su conexión TPACK:
- Qué conocimiento técnico requiere (TK)
- Qué estrategias pedagógicas potencia (PK)
- Qué contenidos disciplinares aborda (CK)
- Cómo se integra todo (TPACK)

---

## 12. REFERENCIAS BIBLIOGRÁFICAS PRINCIPALES

- Mishra, P., & Koehler, M. J. (2006). Technological pedagogical content knowledge: A framework for teacher knowledge. *Teachers College Record*, 108(6), 1017-1054.
- Koehler, M. J., & Mishra, P. (2009). What is technological pedagogical content knowledge (TPACK)?. *Contemporary Issues in Technology and Teacher Education*, 9(1), 60-70.
- [Incluir las 15+ referencias APA 7 de la página de referencias del sitio]

---

## NOTAS PARA CLAUDE CHAT

### Sobre las imágenes/capturas de pantalla
- **Sí puedes adjuntar imágenes**: Toma capturas de pantalla de cada página de la guía web y adjúntalas al chat de Claude. Claude Chat puede analizar imágenes y describirlas en el documento.
- **No necesitas dar acceso al repo**: Claude Chat no puede navegar repositorios de GitHub. En su lugar, toma screenshots y adjúntalos directamente.
- **Capturas sugeridas**:
  1. Página de inicio completa (hero + tarjetas de navegación)
  2. Página TPACK con el diagrama de Venn
  3. Página de IA mostrando el catálogo de herramientas
  4. Página de detalle de una herramienta (ej. ChatGPT)
  5. Plan de implementación con las 5 fases
  6. Página de ejemplos prácticos
  7. Página de referencias
  8. Vista móvil del menú hamburguesa
  9. Vista de las animaciones al scroll

### Qué puede hacer Claude Code vs Claude Chat
| Capacidad | Claude Code (CLI) | Claude Chat (web) |
|-----------|-------------------|-------------------|
| Leer/escribir archivos del proyecto | Sí | No |
| Ejecutar comandos (npm, git, etc.) | Sí | No |
| Analizar imágenes adjuntas | No | Sí |
| Generar documentos largos | Limitado | Sí (mejor) |
| Navegar repos de GitHub | Sí (via gh CLI) | No |
| Formato APA académico | Puede pero no es su fuerza | Sí (mejor) |
| Editar código directamente | Sí | No |
| Contexto del proyecto completo | Sí (lee archivos) | No (necesita este MD) |

### Recomendación
1. **Claude Code** (este) para: modificar la página web, agregar herramientas, corregir código, hacer deploys
2. **Claude Chat** con este MD para: generar el documento de demostración con formato académico, normas APA, estructura de tesis

---

*Documento generado el 2026-06-07 para facilitar la creación del documento de demostración del proyecto.*
