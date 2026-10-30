# Proposal

## Why

Las transparencias actuales de `Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx` presentan defectos notables de maquetación: cajas de texto desbordadas, contenidos cortados, espaciados comprimidos y una presentación visual sin la riqueza iconográfica ni la sofisticación compositiva exhibida en la presentación de referencia `training-sqlserver/curso_sql_server_dba_20h.pdf`.

El origen del problema radica en el uso de un lienzo restringido (10" x 5.625" en lugar de 13.333" x 7.5" panorámico Widescreen), la ausencia de un motor de medición tipográfica predictiva que alerte de desbordamientos (`lineCount` / `textHeight`), la falta de renderizado de iconos vectoriales nítidos (`react-icons` / `sharp`), y la dependencia de coordenadas manuales rígidas. Es necesario refactorizar la suite de diapositivas adoptando exactamente la misma arquitectura de maquetación, estándares visuales y pipeline de generación de `training-sqlserver`.

## What Changes

- **Migración a lienzo panorámico Widescreen 16:9 estándar (13.333" x 7.5")**: Se adopta `LAYOUT_WIDE` en lugar del layout reducido, proporcionando un área útil de trabajo amplia (CW = 12.133", CH = 5.0") idéntica a la presentación de referencia.
- **Integración de motor de iconos vectoriales (`react-icons/fa` + `sharp`)**: Rasterización dinámica en compilación de iconos SVG a PNG transparentes (256x256 px en base64) para su inserción en insignias circulares (`iconCircle`), tarjetas (`card`), pasos (`steps`), divisores y llamadas.
- **Sistema predictivo de ajuste tipográfico y control de desbordamientos**: Funciones de estimación de líneas y altura en pulgadas (`lineCount`, `textHeight`, `warn`) que registran alertas en `state.warnings`, garantizando que ninguna caja desborde su contenedor ni corte texto (meta: 0 warnings de maquetación).
- **Catálogo de componentes modulares de maquetación (estilo `training-sqlserver`)**:
  - `titleSlide`: Portada oscura de alto impacto con halos elípticos concéntricos, icono temático central y satélites de apoyo.
  - `divider`: Diapositiva de transición de módulo con identificador numérico gigante ("01", "02"...), píldora de duración, título, subtítulo y grilla de temas con iconos.
  - `cardsRow` y `cardsGrid`: Distribución automática de tarjetas con esquinas redondeadas, sombra suave, badges de iconos, encabezados calibrados y viñetas con leads en negrita.
  - `steps`: Diagramas secuenciales de etapas horizontales o verticales con numeradores circulares y flechas de transición.
  - `code`: Bloques de código con fondo diferenciado, etiqueta superior y resaltado de palabras clave para Python, SQL y formatos de datos.
  - `table`: Tablas estructuradas con cálculo dinámico de altura por fila, cabeceras contrastadas y filas alternadas.
  - `stat` y `callout`: Destacados numéricos de gran escala y cajas de aviso contextual (tip, warning, info) con iconos dedicados.
  - `closing`: Diapositiva de resumen y cierre con tres pilares temáticos e iconografía representativa.
- **Refactorización integral de los módulos (Módulo 0 al Módulo 6)**: Reescribir las 41 diapositivas del curso empleando los nuevos componentes, manteniendo íntegro el rigor técnico del temario oficial, 100% de notas del orador estructuradas pedagógicamente (`Objetivo Pedagógico`, `Guion y Explicación Técnica`, `Puntos de Interacción / Preguntas`, `Instrucciones de Laboratorio`).
- **Sanitización OOXML y exportación a PDF**: Postprocesamiento con `jszip` para limpiar duplicidades en etiquetas `<a:pPr>` emitidas por pptxgenjs, y generación del entregable `Analitica_Avanzada_e_Inteligencia_Cognitiva.pdf` con LibreOffice headless.
- **Actualización de dependencias y scripts**: Incorporación a `package.json` de `react`, `react-dom`, `react-icons`, `sharp`, `jszip` y scripts `build:pdf`.

## Capabilities

### Modified Capabilities
- `course-materials`: Modifica los requisitos de formato visual panorámico (13.333" x 7.5"), control estricto de desbordamiento (0 warnings de maquetación con medición predictiva), inclusión sistemática de iconos vectoriales en todos los módulos y exportación sincronizada del slide deck a PDF.

## Impact

- **Código fuente**:
  - `package.json`: Inclusión de dependencias de diseño e iconografía (`react-icons`, `sharp`, `react`, `react-dom`, `jszip`).
  - `generator/layout_helpers.js`: Módulo central de layout inspirado en `training-sqlserver/presentacion/src/layout_helpers.js`.
  - `generator/build_deck.js`: Pipeline de ensamblado con precarga de iconos, cálculo de warnings y postprocesado ZIP.
  - `generator/modules/module[0-6]*.js`: Adaptación completa de todas las diapositivas al nuevo sistema de layout.
- **Entregables del proyecto**:
  - `Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx`: Slide deck recompilado con el nuevo estándar de diseño.
  - `Analitica_Avanzada_e_Inteligencia_Cognitiva.pdf`: Documento PDF regenerado a partir del nuevo slide deck.
  - `GUIA_DEL_DOCENTE.md`: Sincronización continua de contenidos y notas pedagógicas.
