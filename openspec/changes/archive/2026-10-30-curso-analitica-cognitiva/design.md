# Design

## Context

El proyecto requiere desarrollar el material técnico y pedagógico completo para un curso de 15 horas lectivas sobre Analítica Avanzada e Inteligencia Cognitiva (ver `proposal.md` y `specs/course-materials/spec.md`). La solución debe ser reproducible, modular y mantenible mediante código para permitir futuras actualizaciones del temario sin depender de herramientas de diseño manual.

## Goals / Non-Goals

**Goals:**
- Implementar un pipeline modular en Node.js que genere el slide deck en PPTX con 41 diapositivas panorámicas 16:9, diseño corporativo de alto contraste y notas técnicas del orador.
- Proveer componentes visuales reutilizables (tarjetas con flujo de texto único, tablas comparativas, diagramas de arquitectura en capas, scorecards de métricas y wireframes de dashboards).
- Validar formalmente la conformidad del archivo generado contra esquemas XML de Microsoft Office y verificar la ausencia de desbordamientos visuales mediante renderizado sin cabeza.
- Exportar la guía didáctica íntegra en Markdown (`GUIA_DEL_DOCENTE.md`) con las 15 horas cronometradas y el código de los 5 laboratorios prácticos en Python.

**Non-Goals:**
- No se desarrollará una plataforma LMS web interactiva propietaria; el material se entrega en estándares abiertos (PPTX, PDF, Markdown y Jupyter Notebooks).
- No se sustituye el entorno de desarrollo del alumno (se asume Python 3.10+ en JupyterLab o Google Colab).

## Decisions

### Decisión 1: Generador en Node.js con `pptxgenjs` vs `python-pptx`
- **Elección:** Utilizar `pptxgenjs` en Node.js para la generación automatizada.
- **Razón:** `pptxgenjs` ofrece un modelo declarativo superior para posicionamiento milimétrico, estilos de tarjetas redondeadas, soporte completo de notas de orador (`addNotes`) y exportación limpia a OOXML.
- **Alternativas consideradas:** `python-pptx` (presenta limitaciones al duplicar diapositivas, colapsa el formateo de párrafos al asignar texto y tiene peor soporte de renderizado visual complejo) o maquetación manual en PowerPoint (nula reproducibilidad y alto coste de mantenimiento).

### Decisión 2: Flujo de texto unificado en tarjetas para prevenir solapamientos
- **Elección:** En el componente `addCard` de `helpers.js`, integrar tanto el párrafo descriptivo como los ítems de viñetas en un único array de *text runs* dentro de un solo contenedor de texto con `valign: top`.
- **Razón:** Al residir en el mismo marco de texto, el motor de PowerPoint gestiona secuencialmente el salto de línea y el espaciado entre párrafos (`paraSpaceAfter`), haciendo físicamente imposible que una viñeta se solape sobre una descripción con varias líneas.
- **Alternativas consideradas:** Múltiples cajas de texto con cálculo manual de offsets verticales (propensas a colisiones ante pequeñas variaciones métricas de fuentes entre sistemas operativos).

### Decisión 3: Paleta cromática corporativa y diseño anti-clichés de IA
- **Elección:** Formato panorámico 16:9 (10.0" × 5.625") con paleta sobria: azul marino oscuro (`#0F1B2E`) para portadillas y cierres; fondo blanco perla (`#F8FAFC`) con tarjetas blancas (`#FFFFFF`) y bordes acero (`#CBD5E1`) para contenido; texto de alto contraste (`#0F172A`) y acentos cian/cielo (`#0284C7`).
- **Razón:** Maximizar la legibilidad en pantallas y proyectores de alta resolución sin recurrir a clichés de presentaciones generadas por IA (se eliminan por diseño líneas decorativas bajo títulos y barras de acento de borde artificiales).

### Decisión 4: Proceso de validación en dos etapas (Esquema XML + Visual QA)
- **Elección:** Ejecutar siempre el analizador oficial `validate.py` (con `lxml` en Python 3.11) seguido de la conversión headless a PDF con LibreOffice (`soffice.py`) e inspección de imágenes renderizadas a 100 DPI con `pdftoppm`.
- **Razón:** Garantizar que no existan caracteres de control inválidos en XML (e.g., caracteres ASCII 8/11/12 provenientes de backslashes no escapados en fórmulas) y asegurar que el texto respete los márgenes de seguridad (> 0.5").

## Risks / Trade-offs

- **[Riesgo] Sustitución de fuentes en entornos Linux sin tipografía propietaria:**
  - *Mitigación:* Se utiliza la fuente segura de catálogo `Calibri` / `Arial`, dotando a los contenedores de texto de holgura dimensional (> 10%) y comprobando el renderizado en LibreOffice.
- **[Riesgo] Caracteres matemáticos inválidos en literales de texto XML:**
  - *Mitigación:* Se sustituyen comandos LaTeX con backslashes por símbolos limpios UTF-8 o notación textual legible (`beta_j`, `L1/L2`, `Delta%`, `sum()`).
- **[Riesgo] Dispersión de la atención del alumnado en sesiones intensivas:**
  - *Mitigación:* Se alternan bloques teóricos conceptuales con esquemas de arquitectura y pausas cada 50 minutos, complementados con 5 laboratorios prácticos ejecutables paso a paso.
