# Registro de Cambios y Mejoras — Guía TEE

Documento para referencia de los cambios realizados al sitio web de la Guía de Tecnologías Emergentes Educativas.

---

## 1. Nueva sección: Simulaciones Interactivas

- **Página completa** `/simulaciones/` al mismo nivel que IA, RV y RA
- **10 herramientas** incluidas: PhET, GeoGebra, Scratch, Tinkercad, Algodoo, NetLogo, ChemCollective, Stellarium, Falstad Circuit Simulator, GlowScript/VPython
- Estructura de 3 pestañas: "Qué es", "Herramientas", "Estrategia"
- Estrategia específica: enfocada en brechas de acceso a laboratorios, con caso de ejemplo (rector en escuela rural de Esmeraldas sin laboratorio de ciencias)
- Integrada en navbar, menú móvil, página de inicio, CTAs del plan de implementación y TPACK

## 2. Filtro de herramientas de código abierto

- **Botones de filtro** en las 4 secciones de tecnología (IA, RV, RA, Simulaciones)
- Filtros: "Todas" y "Código Abierto"
- **Herramientas open source agregadas:**
  - IA: Hugging Chat, Jan, LibreChat, Open WebUI
  - RV: A-Frame, OpenSpace, Godot Engine (+ Mozilla Hubs ya era open source)
  - RA: AR.js, model-viewer
  - Simulaciones: PhET, GeoGebra, Scratch, NetLogo, Stellarium, GlowScript/VPython (ya eran open source)
- Badge visual violeta "Open Source" en cada tarjeta correspondiente

## 3. Estrategia de integración mejorada (por sección)

Cada sección de tecnología ahora incluye en su pestaña "Estrategia":

- **Hoja de ruta por fases** (4 pasos): Diagnosticar → Planificar → Implementar → Evaluar
- **Matriz de decisión** contextualizada:
  - IA: por materia y nivel de competencia digital
  - RV: por nivel de infraestructura disponible
  - RA: por tipo de dispositivo (BYOD)
  - Simulaciones: por materia y tema
- **4 indicadores KPI** para medir el impacto
- **Escenario hipotético de implementación** basado en la literatura, describiendo cómo un directivo podría aplicar la tecnología en un contexto educativo específico (sin datos ficticios ni personajes inventados)
- **Conexión con TPACK** explicando los 3 componentes (T, P, C) aplicados a esa tecnología

## 4. Páginas de detalle por herramienta

Cada una de las 41 herramientas tiene ahora una **página dedicada** en `/herramienta/[nombre]/` con:

- **Descripción completa** de la herramienta
- **Enfoque pedagógico:** áreas de aplicación, niveles educativos, tipo de uso
- **Ejemplos por materia:** actividades específicas para Lengua y Literatura, Matemáticas, Ciencias Naturales, Estudios Sociales, etc.
- **Video tutorial en español** embebido de YouTube (validados uno por uno)
- **Información para el directivo:**
  - Tiempo de implementación
  - Requisitos técnicos
  - Costo
  - Consejos de implementación
- **Enlace directo** a la herramienta
- **Herramientas relacionadas** (3 de la misma sección)
- **Breadcrumb jerárquico:** Inicio > Sección > Herramienta

## 5. Mejoras de navegación

### A. Navegación secuencial (prev/next)
- Botones "Anterior" / "Siguiente" al fondo de cada sección
- Orden guiado: TPACK → IA → RV → RA → Simulaciones → Plan
- Permite recorrer toda la guía de forma lineal

### B. Barra de progreso
- Indicador horizontal en la parte superior de cada sección
- Muestra las 6 etapas con iconos y etiquetas cortas
- Resalta la sección actual y marca las anteriores como visitadas
- Funcional en móvil con etiquetas abreviadas (TPACK, IA, RV, RA, Sim, Plan)

### C. "Explora otras tecnologías"
- Sección al final de cada página de tecnología
- Muestra 3 cards compactas de las otras tecnologías (excluyendo la actual)
- Permite saltar entre tecnologías sin volver al inicio

### D. Breadcrumb en páginas de herramienta
- Navegación jerárquica: Inicio > Sección > Herramienta
- Links clickeables a cada nivel

### E. Navbar contextual
- El tab de la sección padre se resalta al navegar una herramienta
- Ejemplo: al ver la página de "Mozilla Hubs", el tab "RV" en el navbar queda activo

### F. Footer mejorado
- 4 columnas: Marca, Tecnologías, Guía, Proyecto
- Links directos a todas las secciones principales
- Reemplaza el footer mínimo anterior (solo tenía 1 link)

## 6. Videos de YouTube validados

- Todos los videos embebidos fueron **validados manualmente** usando la API oEmbed de YouTube
- Se priorizaron tutoriales **en español** enfocados en **educación y docentes**
- IDs fabricados o no disponibles fueron reemplazados por videos reales verificados
- Herramientas sin tutorial disponible en español muestran la sección de video solo cuando hay un video válido

## 7. Cambios de identidad y tono

- **Título principal** cambiado de "La Gestión Directiva en la Integración de Tecnologías Emergentes Educativas" a **"Transforma tu institución educativa con tecnología"** — más directo y motivacional
- **Subtítulo** reescrito en tono conversacional: "Descubre cómo integrar..."
- **"Tesis de maestría"** cambiado a **"Informe de investigación"** en todo el sitio
- Tono general más amigable y orientado a la acción para conectar mejor con directivos

## 8. Datos técnicos

- **49 páginas** generadas (8 secciones + 41 herramientas)
- **4 archivos JSON** de catálogo de herramientas con schema expandido
- **0 dependencias JS externas** — vanilla JS para interactividad (tabs, filtros, menú móvil)
- **Astro v6** con Tailwind CSS v4
- Build time: ~1.5 segundos
- Despliegue: GitHub Pages

## 9. Escenarios hipotéticos (antes "Casos de ejemplo")

- **Reframing completo** de las 4 secciones de "Caso de ejemplo" en IA, RV, RA y Simulaciones
- Se eliminaron **nombres ficticios** (María, Carlos, Lucía, Roberto) e **instituciones inventadas**
- Se eliminaron **datos estadísticos fabricados** (porcentajes, calificaciones, métricas sin fuente)
- Cada sección ahora se titula **"Escenario hipotético de implementación"**
- El tono cambió de narrativa en pasado ("eligió", "subió") a **condicional** ("podría", "permitirían")
- Los resultados ahora referencian **la literatura** en lugar de presentar datos inventados
- **Razón del cambio:** al ser un informe de investigación, presentar casos ficticios como reales comprometía la rigurosidad académica

## 10. Actividades prácticas interactivas por herramienta

Cada una de las **41 herramientas** ahora incluye una **actividad práctica guiada** tipo wizard en su página de detalle:

- **Componente interactivo** con navegación paso a paso (4 pasos por actividad)
- **Indicadores de progreso** clickeables (círculos numerados 1-2-3-4)
- **Botones Anterior / Siguiente** con estado visual de completado
- **Prompts copiables** (herramientas de IA) con botón "Copiar" al portapapeles
- **Tips pedagógicos** en cada paso con consejos prácticos para el docente
- **Vanilla JS** sin dependencias externas (script inline)

### Tipos de actividades por categoría:
- **IA (12 herramientas):** tutoriales con prompts listos para copiar y pegar (ej: crear planificación diferenciada con ChatGPT, investigar con Gemini, diseñar infografías con Canva)
- **RV (10 herramientas):** exploraciones guiadas paso a paso (ej: visita virtual a museo, expedición geográfica, creación de escenas VR con A-Frame)
- **RA (9 herramientas):** experiencias hands-on con dispositivos (ej: escaneo 3D con Qlone, búsqueda del tesoro con Metaverse, marcadores de RA con AR.js)
- **Simulaciones (10 herramientas):** laboratorios virtuales guiados (ej: circuitos con PhET, funciones con GeoGebra, titulación química con ChemCollective)

### Ubicación en la página:
- Aparece entre las secciones "Ejemplos por materia" y "Tutorial en video"
- Título: **"Actividad práctica"**

## 11. Cambio de identidad del proyecto

- **"Proyecto de investigación"** cambiado a **"Informe de investigación"** en todo el sitio (hero, footer)
- **Logo institucional** (Unidad Educativa Particular Francisco Huerta Rendón) agregado al footer junto a la marca

## 12. Rebranding: "Guía TEE" → "Tech in Class"

**Nivel de cambio: Mayor — Identidad del producto**

Se renombró completamente la marca del proyecto de "Guía TEE" a **"Tech in Class"**, reflejando un nombre más profesional, memorable y alineado con estándares internacionales de productos educativos digitales.

### Cambios realizados:
- **Navbar (desktop):** marca "Guía TEE" → **"Tech in Class"** en el encabezado principal
- **Menú móvil (sidebar):** título del panel lateral actualizado a **"Tech in Class"**
- **Footer:** marca y texto legal actualizados a **"Tech in Class"**
- **Título de la página principal (index):** `<title>` cambiado a "Tech in Class — Tecnología para tu Institución Educativa"
- **package.json:** nombre del paquete cambiado a `tech-in-class`

### Justificación:
- Nombre bilingüe que conecta con la audiencia educativa latinoamericana
- Más conciso y profesional para URLs, dominios y referencias externas
- Facilita el posicionamiento como producto digital educativo independiente

## 13. Incorporación de logos institucionales con identificación

**Nivel de cambio: Mayor — Identidad institucional y respaldo académico**

Se agregaron los logos oficiales de las dos instituciones vinculadas al proyecto, con sus respectivos nombres visibles, fortaleciendo la credibilidad y respaldo académico de la guía.

### Logos agregados:
- **Logo de la Unidad Educativa Particular "Francisco Huerta Rendón"** (`logo.png`): institución donde se realizó la investigación de campo y el taller práctico. Se muestra con el nombre completo debajo.
- **Logo de la Universidad de Guayaquil** (`logo-ug.png`): institución académica que respalda el informe de investigación a través del Programa de Maestría en Educación. Se muestra con el nombre completo debajo.

### Ubicación:
- **Footer:** nueva sección superior con los dos logos centrados, antes de las columnas de navegación
- Cada logo tiene fondo blanco, bordes redondeados y el nombre de la institución debajo en texto claro

### Créditos académicos:
- Se agregó una línea de créditos al pie del footer con los nombres de los autores y la directora del trabajo de titulación:
  - Mendoza Rodríguez, Y. E.
  - Soledispa Macías, M. M.
  - Dir. Ph.D. Figueroa Martínez, E. J.

### Justificación:
- Da visibilidad al respaldo institucional del proyecto
- Alinea la guía con la información oficial de la tesis de maestría
- Cumple con los requisitos de identificación institucional para productos académicos
- Agrega valor demostrando que la guía surge de un proceso de investigación riguroso

## 14. Alineación de contenido con la tesis de maestría

**Nivel de cambio: Menor — Consistencia de información**

Se verificó y alineó la información de la guía con el documento oficial de tesis "La Gestión Directiva en la Integración de Tecnologías Emergentes Educativas" (Mendoza & Soledispa, 2026).

### Verificaciones realizadas:
- **Tipo de documento:** "Informe de investigación" — coincide con el tipo de titulación (FICHA DE REGISTRO)
- **Tecnologías cubiertas:** IA, RV, RA, Simulaciones — la guía expande las 3 tecnologías del taller (IA, RA, Simulaciones) agregando RV como valor adicional
- **Marco pedagógico:** TPACK — presente en ambos documentos como fundamento teórico
- **Contexto:** Ecuador, K-12 — coincide
- **Institución de campo:** UE Particular "Francisco Huerta Rendón" — coincide
- **Institución académica:** Universidad de Guayaquil, Facultad de Filosofía, Letras y Ciencias de la Educación — coincide
- **Programa:** Maestría en Educación con mención en Innovación y Liderazgo Educativo — se actualizó la columna "Proyecto" del footer para reflejar esto

### Resultado:
La guía interactiva es consistente con la tesis y sirve como producto digital complementario al informe de investigación.

## 15. Favicon con logo de la Universidad de Guayaquil

**Nivel de cambio: Menor — Identidad visual en el navegador**

Se configuró el logo de la Universidad de Guayaquil (`logo-ug.png`) como **favicon** (icono de pestaña del navegador) en todas las páginas del sitio.

- Agregado en `MainLayout.astro` mediante `<link rel="icon">`
- Compatible con la ruta base dinámica (GitHub Pages y Vercel)
- Refuerza la identidad institucional universitaria al navegar la guía

---

*Documento generado para referencia del equipo de investigación.*
