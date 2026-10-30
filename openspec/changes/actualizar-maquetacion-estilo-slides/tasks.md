# Tasks

## 1. Dependencias y Fundamentos del Motor de Maquetación

- [x] 1.1 Instalar dependencias requeridas (`react`, `react-dom`, `react-icons`, `sharp`, `jszip`) en `package.json` y verificar ejecución limpia de `npm install`
- [x] 1.2 Implementar `generator/layout_helpers.js` basado en el motor de referencia de `training-sqlserver` con lienzo panorámico Widescreen 16:9 (`13.333" x 7.5"`), paleta cromática del curso, funciones de medición tipográfica predictiva (`lineCount`, `textHeight`, `warn`), motor de renderizado de iconos vectoriales base64 con `sharp` y componentes modulares (`titleSlide`, `divider`, `cardsRow`, `cardsGrid`, `cardSide`, `steps`, `table`, `code`, `stat`, `callout`, `closing`)
- [x] 1.3 Adaptar el resaltador sintáctico en `code()` para soportar Python, SQL y formatos de datos con coloreado léxico estructurado

## 2. Refactorización de Diapositivas: Módulo 0 y Módulos 1-3

- [x] 2.1 Refactorizar `generator/modules/module0_intro.js` (Slides 1 a 3: Portada ejecutiva con halos concéntricos, pilares temáticos con `cardsRow` e iconografía, y tabla de cronograma sin desbordamiento)
- [x] 2.2 Refactorizar `generator/modules/module1_advanced_analytics.js` (Slides 4 a 10: Separador de módulo con tópicos e iconos, cuadrículas de madurez analítica, diagramas de etapas CRISP-DM con `steps`, tablas y bloques de código)
- [x] 2.3 Refactorizar `generator/modules/module2_cognitive_ai.js` (Slides 11 a 17: Separador, arquitecturas RAG con flujos, comparación de APIs cognitivas, embeddings y vectores semánticos en `cardsGrid` y callouts)
- [x] 2.4 Refactorizar `generator/modules/module3_predictive_ml.js` (Slides 18 a 25: Separador, pipelines de ML supervisado/no supervisado, matrices de confusión, explicabilidad SHAP y bloques de código Python)

## 3. Refactorización de Diapositivas: Módulos 4-6 y Cierre

- [x] 3.1 Refactorizar `generator/modules/module4_nlp_sentiment.js` (Slides 26 a 31: Separador, pipelines NLP con Transformers, Voice of Customer y métricas de sentimiento en tarjetas con badges e iconos)
- [x] 3.2 Refactorizar `generator/modules/module5_visualization.js` (Slides 32 a 36: Separador, principios de Gestalt, visualización ejecutiva vs analítica y arquitectura Streamlit en componentes modulares)
- [x] 3.3 Refactorizar `generator/modules/module6_cases_projects.js` (Slides 37 a 41: Separador, caso integral de Retención 360°, MLOps con monitoreo de drift, proyecto final y diapositiva de cierre con pilares)

## 4. Pipeline de Ensamblado, Validación y Entregables

- [x] 4.1 Actualizar `generator/build_deck.js` con precarga de iconos detectados en código, compilación secuencial, verificación estricta de 0 warnings de maquetación (`state.warnings.length === 0`), y postprocesamiento OOXML con `jszip`
- [x] 4.2 Compilar `Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx` ejecutando `npm run build` y verificar que el reporte final concluya sin avisos de maquetación
- [x] 4.3 Exportar `Analitica_Avanzada_e_Inteligencia_Cognitiva.pdf` mediante LibreOffice headless (`libreoffice --headless --convert-to pdf`) y verificar correspondencia visual de las 41 páginas panorámicas
- [x] 4.4 Sincronizar `generator/generate_guide.js` y regenerar `GUIA_DEL_DOCENTE.md` comprobando alineación de diapositivas y notas pedagógicas completas
