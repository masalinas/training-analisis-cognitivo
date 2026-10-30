# Proposal

## Why

Las organizaciones modernas precisan evolucionar desde el análisis retrospectivo descriptivo hacia la toma de decisiones predictiva y la explotación cognitiva de datos no estructurados. Se requiere un programa formativo técnico y ejecutivo completo de 15 horas lectivas sobre Analítica Avanzada e Inteligencia Cognitiva basado en el temario oficial, que combine rigor matemático, arquitecturas de datos modernas (Lakehouse, RAG, MLOps), código reproducible en Python y material docente de alta calidad con notas del orador exhaustivas.

## What Changes

- **Generador Modular de Diapositivas:** Creación de una suite en Node.js utilizando `pptxgenjs` para compilar un slide deck de 41 diapositivas en formato panorámico 16:9 con paleta cromática corporativa de alto contraste, diagramas de arquitectura y notas técnicas del orador en cada diapositiva.
- **Estructura Curricular en 6 Módulos (15 Horas):** Reorganización pedagógica del temario oficial en 6 bloques temáticos balanceados con objetivos, contenidos técnicos de bajo nivel y laboratorios prácticos asociados.
- **Kit de 5 Laboratorios Prácticos y Proyecto Integrador:** Implementación de ejercicios guiados en Python que abarcan desde el diagnóstico de datos (EDA) y búsqueda semántica RAG, hasta modelos XGBoost con explicabilidad SHAP, minería de sentimientos con Transformers y dashboards en Streamlit.
- **Documentación Docente Integral:** Elaboración de `GUIA_DEL_DOCENTE.md` con la transcripción íntegra de las diapositivas, notas del instructor, preguntas de interacción para el aula, código fuente de soluciones y rúbrica oficial de evaluación.

## Capabilities

### New Capabilities
- `course-materials`: Generación, validación y empaquetado del material formativo oficial (slide deck 16:9, notas del orador, manual docente y código de laboratorios) para el curso de 15 horas de Analítica Avanzada e Inteligencia Cognitiva.

### Modified Capabilities
*(Ninguna. Se trata de una nueva capacidad formativa en el repositorio).*

## Impact

- **Dependencias y Herramientas:** Incorporación de Node.js con `pptxgenjs` para generación de presentaciones, y Python 3.10+ con `lxml` para validación XML contra esquemas de Microsoft Office.
- **Artefactos del Proyecto:** Generación y mantenimiento de `Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx`, versión vectorial en `PDF`, `GUIA_DEL_DOCENTE.md`, `PROPUESTA_TECNICA_Y_FORMATIVA.md` y la suite `generator/`.
