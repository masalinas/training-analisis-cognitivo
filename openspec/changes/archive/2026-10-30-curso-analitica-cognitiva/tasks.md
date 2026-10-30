# Tasks

## 1. Configuración y Arquitectura del Generador

- [x] 1.1 Configurar entorno Node.js con `pptxgenjs` y verificar carga limpia del módulo con script de prueba.
- [x] 1.2 Definir constantes de diseño, layout 16:9 y paleta corporativa de alto contraste en `generator/config.js`.
- [x] 1.3 Desarrollar biblioteca de componentes visuales en `generator/helpers.js` con soporte para tarjetas de flujo unificado (`valign: top`), tablas, scorecards y portadillas.

## 2. Desarrollo de Módulos Didácticos (41 Diapositivas con Notas)

- [x] 2.1 Implementar Módulo 0 (Slides 1 a 3) con portada ejecutiva, objetivos oficiales y tabla del cronograma de 15 horas.
- [x] 2.2 Implementar Módulo 1 (Slides 4 a 9) sobre madurez analítica (Gartner), ciclo CRISP-DM, arquitectura Lakehouse Medallion y ficha del Lab 1.
- [x] 2.3 Implementar Módulo 2 (Slides 10 a 15) cubriendo pilares cognitivos, evolución histórica de la IA, APIs cloud multimodales, arquitectura RAG y ficha del Lab 2.
- [x] 2.4 Implementar Módulo 3 (Slides 16 a 23) abarcando taxonomía del ML, algoritmos de ensamble (XGBoost), feature engineering hermético, evaluación de costes de negocio y Lab 3 con SHAP.
- [x] 2.5 Implementar Módulo 4 (Slides 24 a 29) con pipeline de NLP, evolución a Transformers contextuales (BERT/RoBERTa), ABSA, VoC y Lab 4 con Hugging Face.
- [x] 2.6 Implementar Módulo 5 (Slides 30 a 35) sobre percepción Gestalt, ratio datos-tinta (Tufte), BI vs Data Apps, wireframe de dashboard ejecutivo y Lab 5 en Streamlit.
- [x] 2.7 Implementar Módulo 6 (Slides 36 a 41) integrando blueprint industrial E2E, caso de éxito con ROI de 4.2M€, observabilidad de Drift, marco EU AI Act y proyecto integrador.

## 3. Ensamblado y Exportación de Documentación

- [x] 3.1 Construir script orquestador `generator/build_deck.js` y compilar `Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx`.
- [x] 3.2 Desarrollar script exportador `generator/generate_guide.js` y generar `GUIA_DEL_DOCENTE.md` con transcripción literal, notas de orador y soluciones de código.
- [x] 3.3 Redactar propuesta ejecutiva formal `PROPUESTA_TECNICA_Y_FORMATIVA.md` con justificación académica, rúbrica de calificación e impacto ROI.

## 4. Validación Técnica y Control de Calidad Visual

- [x] 4.1 Ejecutar análisis formal de esquemas XML mediante `validate.py` y verificar conformidad estricta contra estándares Office (`All validations PASSED!`).
- [x] 4.2 Convertir archivo PPTX a PDF con LibreOffice headless y generar imágenes de cada diapositiva para inspección.
- [x] 4.3 Inspeccionar visualmente las 41 diapositivas para comprobar la ausencia de solapamientos, saltos de línea anómalos o desbordamientos fuera de márgenes.
