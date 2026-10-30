# Spec Delta

## Purpose

Define los requisitos de formato, contenido pedagógico, interactividad práctica y validación de esquemas para el ecosistema de materiales formativos del curso oficial de 15 horas sobre Analítica Avanzada e Inteligencia Cognitiva.

## ADDED Requirements

### Requirement: Formato panorámico y estructuración en 6 módulos didácticos
El sistema SHALL proveer una presentación técnica completa en formato panorámico 16:9 estructurada en 6 módulos pedagógicos que cubran la totalidad de las 15 horas lectivas del temario oficial.

#### Scenario: Compilación del slide deck completo
- **WHEN** el pipeline de generación ejecuta la compilación del material
- **THEN** se genera el archivo `Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx` compuesto por 41 diapositivas ordenadas secuencialmente desde el Módulo 0 al Módulo 6 con paleta corporativa de alto contraste.

### Requirement: Notas exhaustivas del orador en cada diapositiva
El sistema SHALL incorporar notas de orador completas (`addNotes`) en el 100% de las diapositivas con explicaciones técnicas de bajo nivel, preguntas de interacción socrática para el aula y pautas pedagógicas.

#### Scenario: Inspección en modo moderador
- **WHEN** el instructor abre cualquier diapositiva en la vista de moderador de PowerPoint o consulta los metadatos XML
- **THEN** visualiza un bloque estructurado con guía para el docente, profundización técnica, pregunta para dinamizar la clase y advertencias operativas.

### Requirement: Integración de 5 laboratorios prácticos y proyecto integrador
El sistema SHALL proveer especificaciones, datos y código fuente reproducible en Python para 5 laboratorios prácticos guiados y un proyecto integrador transversal con rúbrica de calificación.

#### Scenario: Ejecución de prácticas por los alumnos
- **WHEN** los participantes acceden a los cuadernos de trabajo guiados
- **THEN** disponen de pipelines ejecutables para profilado estadístico (EDA), vectorización semántica (RAG), clasificación de Churn (XGBoost/SHAP), minería de opinión (Transformers) y cuadro de mando interactivo (Streamlit).

### Requirement: Documentación complementaria del docente en Markdown
El sistema SHALL exportar un documento complementario consolidado (`GUIA_DEL_DOCENTE.md`) que contenga el texto íntegro de diapositivas, notas del orador, cronograma horario sugerido y soluciones de código.

#### Scenario: Seguimiento en el aula mediante guía docente
- **WHEN** el docente consulta el archivo `GUIA_DEL_DOCENTE.md` durante la sesión
- **THEN** cuenta con una referencia textual completa, sincronizada con el slide deck, para la exposición y la resolución de dudas técnicas.

### Requirement: Validación estricta contra esquemas de Microsoft Office
El sistema SHALL asegurar que la presentación generada cumpla estrictamente los estándares OOXML sin caracteres inválidos, desbordamientos visuales o defectos estructurales.

#### Scenario: Verificación automatizada de conformidad
- **WHEN** se ejecuta el analizador de esquemas `validate.py` sobre el archivo PPTX generado
- **THEN** la verificación concluye con éxito reportando conformidad absoluta de esquemas y relaciones (`All validations PASSED!`).
