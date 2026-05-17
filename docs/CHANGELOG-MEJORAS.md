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
- **Razón del cambio:** al ser un proyecto de investigación, presentar casos ficticios como reales comprometía la rigurosidad académica

---

*Documento generado para referencia del equipo de investigación.*
