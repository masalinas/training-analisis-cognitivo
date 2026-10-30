# Design

## Context

El proyecto actual genera la presentación `Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx` mediante `generator/build_deck.js` y un archivo `generator/helpers.js` primitivo que utiliza un lienzo compacto (10" x 5.625"), carece de motor de iconos vectoriales, no efectúa cálculos de capacidad tipográfica (`textHeight`) y posiciona elementos con coordenadas absolutas manuales. Como resultado, las diapositivas presentan desbordamientos visuales, solapamientos, textos cortados y una estética distante de los estándares corporativos.

En contraste, el repositorio de referencia `/home/miguel/git/training-sqlserver/` implementa una arquitectura madura en `presentacion/src/layout_helpers.js`:
- Lienzo panorámico Widescreen 16:9 (`LAYOUT_WIDE`, 13.333" x 7.5") con área útil amplia (`CW = 12.133"`, `CH = 5.0"`).
- Sistema de iconos vectoriales precargados y rasterizados en base64 mediante `react-icons/fa` y `sharp`.
- Estimación predictiva de líneas y altura de texto (`lineCount`, `textHeight`, `warn`) con seguimiento de advertencias (`state.warnings`).
- Catálogo de componentes modulares (`titleSlide`, `divider`, `cardsRow`, `cardsGrid`, `cardSide`, `steps`, `table`, `code`, `stat`, `callout`, `closing`).
- Estructuración pedagógica estricta de notas del orador (`Objetivo Pedagógico`, `Guion y Explicación Técnica`, `Puntos de Interacción / Preguntas`, `Instrucciones de Laboratorio`).
- Saneamiento de esquemas XML OOXML mediante `jszip` para suprimir `<a:pPr>` redundantes y exportación desatendida a PDF con LibreOffice.

## Goals / Non-Goals

**Goals:**
- Portar y adaptar el motor de maquetación de `training-sqlserver` a este curso, manteniendo la paleta cromática propia de Analítica e Inteligencia Cognitiva (azul marino corporativo, azul hielo, acento cielo, coral de alerta, púrpura cognitivo/NLP, esmeralda de validación).
- Migrar el 100% de las 41 diapositivas a los componentes modulares (`cardsRow`, `cardsGrid`, `steps`, `code`, `table`, etc.) con iconografía vectorial semántica.
- Eliminar absolutamente todos los desbordamientos de cajas y textos cortados, logrando un reporte de compilación con 0 avisos de maquetación (`state.warnings.length === 0`).
- Añadir resaltado sintáctico específico para Python y SQL en los bloques de código.
- Postprocesar el archivo PPTX con `jszip` para limpiar duplicidades XML OOXML.
- Exportar el documento oficial `Analitica_Avanzada_e_Inteligencia_Cognitiva.pdf` sincronizado.
- Mantener alineado `GUIA_DEL_DOCENTE.md` con las diapositivas y guiones resultantes.

**Non-Goals:**
- No se modifica el temario oficial de 15 horas ni se recortan contenidos conceptuales, matemáticos o prácticos.
- No se altera la estructura general de 41 diapositivas distribuidas en los 6 módulos más el módulo 0.

## Decisions

### Decisión 1: Sustitución de `generator/helpers.js` por `generator/layout_helpers.js`
- **Elección:** Implementar `generator/layout_helpers.js` como copia adaptada y enriquecida de `training-sqlserver/presentacion/src/layout_helpers.js`.
- **Razón:** Proporciona de inmediato el lienzo panorámico 13.333" x 7.5", los componentes visuales avanzados, el sistema de rasterización de iconos y el control de warnings tipográficos.
- **Alternativas consideradas:** Mantener `helpers.js` y parchear manualmente dimensiones; descartado por ser frágil, propenso a regresiones y sin soporte para iconos react-icons.

### Decisión 2: Dimensionamiento y sistema de coordenadas Widescreen 16:9
- **Elección:**
  - Lienzo: `W = 13.333"`, `H = 7.5"` (`LAYOUT_WIDE`).
  - Margen lateral: `MX = 0.6"`, dando un ancho útil `CW = 12.133"`.
  - Cabecera: Pill badge en `y = 0.4"`, Título en `y = 0.8", h = 0.75"`, fuente 34pt bold.
  - Área de contenido: `CY = 1.75"`, altura útil `CH = 5.0"`.
  - Pie de diapositiva: `y = 7.0", h = 0.3"`.
- **Razón:** Estándar nativo de PowerPoint para pantallas 16:9 modernas. Ofrece suficiente holgura vertical y horizontal para que listas de 4-5 viñetas y descripciones complejas no colisionen.

### Decisión 3: Pipeline de Iconografía Vectorial (`react-icons` + `sharp`)
- **Elección:** Inspeccionar el código fuente en tiempo de compilación para extraer todos los nombres de iconos (`Fa[A-Z0-9]+`), renderizarlos con `ReactDOMServer` y rasterizarlos mediante `sharp` a 256x256 px a 300 DPI con fondo transparente en formato PNG base64.
- **Razón:** Independencia de archivos estáticos en disco, portabilidad absoluta, nitidez perfecta en proyectores 4K/FullHD.

### Decisión 4: Resaltador Sintáctico para Python y SQL
- **Elección:** Enriquecer la función `highlightLine()` para reconocer palabras clave de Python (`def`, `class`, `import`, `from`, `as`, `return`, `with`, `yield`, `lambda`, `if`, `elif`, `else`, `try`, `except`), tipos comunes (`int`, `str`, `float`, `list`, `dict`), decoradores (`@...`), comentarios (`#...`) y cadenas literales, además de palabras clave de SQL (`SELECT`, `FROM`, `WHERE`, `JOIN`, `GROUP BY`, etc.).

### Decisión 5: Saneamiento OOXML y Exportación a PDF
- **Elección:** Tras generar la presentación en memoria, cargar el buffer con `jszip`, ejecutar regex para sanear párrafos con `<a:pPr>` duplicados, escribir `Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx`, y compilar a PDF con `libreoffice --headless --convert-to pdf`.
- **Razón:** Previene cuadros de diálogo de reparación al abrir el PPTX en Microsoft PowerPoint de escritorio y provee el entregable PDF listo para consulta.

## Risks / Trade-offs

- **[Riesgo] Dependencia de `sharp` y `react-icons`**: Podría requerir dependencias nativas en Linux.
  - *Mitigación*: `sharp` cuenta con prebuilt binaries para linux-x64 (`@img/sharp-linux-x64`). En caso de cualquier incidencia de compilación, se verifica la instalación con `npm install`.
- **[Riesgo] Ajuste milimétrico de textos en diapositivas densas**: Diapositivas con mucho texto podrían disparar avisos de desbordamiento.
  - *Mitigación*: El compilador registrará advertencias específicas (p. ej. `slide 14 [card]: necesita ~2.10" y hay 1.80"`). Al contar con el reporte de warnings, se recalibrarán tamaños de fuente (p. ej. 13pt en lugar de 14pt) o se sintetizarán viñetas hasta obtener 0 warnings.
- **[Riesgo] Disponibilidad de LibreOffice**: Si LibreOffice no estuviera en PATH, la compilación de PDF fallaría.
  - *Mitigación*: Validar la presencia de `libreoffice` o `soffice` en el sistema y añadir el script `npm run build:pdf` con comprobación previa.
