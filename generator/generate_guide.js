// generator/generate_guide.js
// Script to generate the comprehensive GUIA_DEL_DOCENTE.md handbook

const fs = require('fs');
const path = require('path');

console.log('📖 Generando GUIA_DEL_DOCENTE.md...');

const guideContent = `# GUÍA COMPLETA DEL DOCENTE
## Analítica Avanzada e Inteligencia Cognitiva (15 Horas Lectivas)

---

### FICHA TÉCNICA Y ENCUADRE DEL CURSO

- **Denominación Oficial:** Analítica Avanzada e Inteligencia Cognitiva
- **Duración Total:** 15 Horas Lectivas
- **Modalidad:** Formación Técnica y Ejecutiva Presencial / Aula Virtual Interactiva
- **Metodología Pedagógica:** 60% Exposición Teórico-Conceptual con Arquitecturas de Sistemas y 40% Laboratorios Prácticos Guiados en Python (*Hands-on Coding*)
- **Estructura Formativa:** 6 Módulos Temáticos, 5 Laboratorios Prácticos y 1 Proyecto Integrador Transversal
- **Entorno Técnico:** Python 3.10+, JupyterLab / Google Colab, scikit-learn, XGBoost, Optuna, SHAP, Hugging Face Transformers, ChromaDB, Streamlit, Plotly Express
- **Material de Apoyo Incluido:**
  1. Slide Deck Panorámico 16:9 (\`Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx\`) con 41 diapositivas ejecutivas y notas del orador.
  2. Documento maestro en PDF generado para proyección y lectura.
  3. Repositorio de scripts generadores modulares en Node.js (\`pptxgenjs\`).
  4. La presente Guía del Docente (\`GUIA_DEL_DOCENTE.md\`) con el texto íntegro, notas del orador y resolución de casos.

---

### CRONOGRAMA HORARIO RECOMENDADO (15 HORAS)

Para una impartición óptima, se propone una de las siguientes dos planificaciones temporales:

#### Opción A: Formato Intensivo de 3 Jornadas (5 Horas / Día)
- **Jornada 1 (5.0 Horas):**
  - 09:00 - 09:30: Módulo 0 • Bienvenida, Objetivos y Arquitectura de Entornos (0.5 h)
  - 09:30 - 12:00: Módulo 1 • Introducción a la Analítica Avanzada + Lab 1 EDA (2.5 h)
  - 12:00 - 12:30: Pausa / Café
  - 12:30 - 14:30: Módulo 2 • Fundamentos de la Inteligencia Cognitiva (2.0 h de 2.5 h)
- **Jornada 2 (5.0 Horas):**
  - 09:00 - 09:30: Módulo 2 • Lab 2 RAG y Vectorización Semántica (0.5 h restantes)
  - 09:30 - 13:00: Módulo 3 • Modelos Predictivos y Machine Learning + Lab 3 XGBoost/SHAP (3.5 h)
  - 13:00 - 13:30: Pausa / Café
  - 13:30 - 14:30: Módulo 4 • Fundamentos de NLP y Preprocesamiento (1.0 h de 2.5 h)
- **Jornada 3 (5.0 Horas):**
  - 09:00 - 10:30: Módulo 4 • Sentimiento, VoC y Lab 4 Transformers (1.5 h restantes)
  - 10:30 - 12:30: Módulo 5 • Visualización Avanzada y Lab 5 Streamlit (2.0 h)
  - 12:30 - 13:00: Pausa / Café
  - 13:00 - 14:30: Módulo 6 • Casos de Éxito, MLOps, Presentación Proyecto Integrador y Cierre (1.5 h)

#### Opción B: Formato Modular de 5 Sesiones (3 Horas / Sesión)
- **Sesión 1:** Módulo 0 (0.5 h) + Módulo 1 (2.5 h con Lab 1).
- **Sesión 2:** Módulo 2 (2.5 h con Lab 2) + Introducción Módulo 3 (0.5 h).
- **Sesión 3:** Módulo 3 (3.0 h restantes con Lab 3).
- **Sesión 4:** Módulo 4 (2.5 h con Lab 4) + Introducción Módulo 5 (0.5 h).
- **Sesión 5:** Módulo 5 (1.5 h restantes con Lab 5) + Módulo 6 y Cierre (1.5 h).

---

### MAPEO DETALLADO DE CONTENIDOS Y NOTAS DEL ORADOR (SLIDES 1 A 41)

---

#### MÓDULO 0: BIENVENIDA, ENCUADRE Y HOJA DE RUTA (0.5 HORAS)

##### Diapositiva 1: Portada Principal
- **Título:** Analítica Avanzada e Inteligencia Cognitiva
- **Subtítulo:** Programa Formativo Técnico y Estratégico para la Toma de Decisiones Basada en Datos
- **Elementos Visuales:** Fondo corporativo azul marino oscuro (\`#0F1B2E\`), distintivo superior de programa ejecutivo de 15 horas, tres bloques de características (Temario oficial 15H, 5 laboratorios hands-on, enfoque ejecutivo y técnico de Lakehouse y MLOps).
- **Notas Íntegras del Orador:**
  > **Bienvenida y Apertura del Curso (10 minutos):**
  > Buenos días a todos y bienvenidos al curso de "Analítica Avanzada e Inteligencia Cognitiva". Mi nombre es [Nombre del Instructor] y durante las próximas 15 horas lectivas os acompañaré en este recorrido técnico y metodológico.
  > 
  > **Propósito del Curso:**
  > El objetivo central de este programa no es únicamente aprender la sintaxis de librerías de machine learning o invocar APIs cognitivas, sino adquirir una comprensión arquitectónica y holística de cómo los datos no estructurados y estructurados se transforman en ventajas competitivas sostenibles para la organización.
  > 
  > **Perfil de los Participantes:**
  > Contamos con perfiles multidisciplinares: ingenieros de datos, analistas de negocio, desarrolladores de software y científicos de datos. Esta diversidad enriquecerá los debates en clase y las dinámicas de grupo durante los laboratorios prácticos.
  > 
  > **Dinámica Pedagógica:**
  > El programa se divide en 60% exposición conceptual con esquemas técnicos de bajo nivel y 40% resolución práctica interactiva en notebooks de Python y herramientas de visualización. Os animo a intervenir activamente con dudas y casos reales de vuestras organizaciones.

##### Diapositiva 2: Objetivos Oficiales y Competencias a Desarrollar
- **Título:** Objetivos Oficiales y Competencias a Desarrollar
- **Subtítulo:** Desarrollo de capacidades avanzadas para extraer valor estratégico de grandes volúmenes de datos
- **Elementos Visuales:** Tres tarjetas con pilares de competencia (Pilar 1: Modelado Predictivo & ML; Pilar 2: Inteligencia Cognitiva & NLP; Pilar 3: Visualización & Storytelling) y cuadro inferior de compromiso formativo.
- **Notas Íntegras del Orador:**
  > **Objetivos y Competencias Oficiales (15 minutos):**
  > Esta diapositiva traslada fielmente los objetivos del documento oficial del curso, estructurándolos en 3 pilares de competencia técnica y de negocio:
  > 1. Capacidad de Modelado: Pasar de métricas retrospectivas a algoritmos predictivos supervisados y no supervisados que estimen probabilidades con rigor estadístico.
  > 2. Inteligencia Cognitiva y NLP: Explotar el 80% de la información corporativa que hoy reside latente en texto libre, audios y documentos no estructurados.
  > 3. Comunicación y Visualización de Alto Impacto: El mejor modelo analítico carece de valor si los decisores no lo comprenden o desconfían de él. La visualización interactiva es el puente hacia la adopción.
  > 
  > **Pregunta de Interacción con la Clase:**
  > *"¿En vuestras empresas, cuál es hoy el principal freno para explotar la IA: la calidad/gobierno de los datos, la falta de modelos predictivos o la desconexión con los comités de dirección?"*
  > 
  > **Clave Pedagógica:**
  > Hacer hincapié en que el curso conecta las matemáticas y el código con el impacto financiero de cada decisión (ROI, retención de clientes, optimización de costes).

##### Diapositiva 3: Estructura Modular del Programa y Cronograma (15 Horas)
- **Título:** Estructura Modular del Programa y Cronograma (15 Horas)
- **Subtítulo:** Distribución equilibrada entre fundamentos conceptuales, arquitecturas y laboratorios de código
- **Elementos Visuales:** Tabla comparativa estructurada con los 6 módulos, su enfoque técnico, laboratorio asociado y duración exacta sumando 15.0 horas.
- **Notas Íntegras del Orador:**
  > **Estructura y Cronograma de las 15 Horas (10 minutos):**
  > Distribución Temporal del Programa:
  > • Módulo 1 (2.5h): De los datos a las decisiones y ciclo de vida de proyectos (CRISP-DM).
  > • Módulo 2 (2.5h): Fundamentos cognitivos, APIs multimodales y arquitecturas RAG.
  > • Módulo 3 (3.5h): El núcleo del machine learning supervisado y no supervisado. Es el módulo de mayor carga horaria por su peso en el temario oficial.
  > • Módulo 4 (2.5h): Procesamiento de lenguaje natural y análisis de sentimientos.
  > • Módulo 5 (2.0h): Visualización avanzada y diseño de dashboards ejecutivos.
  > • Módulo 6 (1.5h): Casos de uso de referencia, MLOps, ética y proyecto final integrador.
  > 
  > **Metodología en el Aula:**
  > Cada módulo concluye con un laboratorio práctico específico. Los alumnos dispondrán de los notebooks con código esqueleto y soluciones guiadas para garantizar que nadie se quede atrás por problemas de entorno.

---

#### MÓDULO 1: INTRODUCCIÓN A LA ANALÍTICA AVANZADA (2.5 HORAS)

##### Diapositiva 4: Separador Módulo 1
- **Título:** Módulo 1: Introducción a la Analítica Avanzada
- **Subtítulo:** Conceptos Clave, Continuo de Madurez y Ciclo de Vida de los Proyectos de Datos
- **Elementos Visuales:** Portadilla oscura con insignia \`MÓDULO 1 • 2.5 HORAS LECTIVAS\`, lista de temas teóricos y ficha del Laboratorio 1.
- **Notas Íntegras del Orador:**
  > **Introducción al Módulo 1 (15 minutos):**
  > Iniciamos el Módulo 1 sentando las bases terminológicas y metodológicas del curso. Muchas iniciativas de ciencia de datos fracasan no por debilidades matemáticas en los algoritmos, sino por una mala formulación del problema y una infraestructura de datos deficiente.
  > 
  > **Mensaje Central:**
  > La analítica no es un fin en sí mismo; es un habilitador de decisiones óptimas. Debemos enseñar a los alumnos a categorizar cualquier necesidad de negocio en el continuo analítico adecuado (descriptivo, diagnóstico, predictivo o prescriptivo).

##### Diapositiva 5: El Continuo de Madurez Analítica (Gartner Framework)
- **Título:** El Continuo de Madurez Analítica (Gartner Framework)
- **Subtítulo:** Evolución desde la retrospectiva histórica hasta la toma de decisiones autónoma y optimizada
- **Elementos Visuales:** 4 tarjetas secuenciales (01 Descriptiva, 02 Diagnóstica, 03 Predictiva, 04 Prescriptiva) con preguntas clave, enfoque y técnicas, más un callout inferior sobre el aumento exponencial del valor y la dificultad técnica.
- **Notas Íntegras del Orador:**
  > **El Continuo de Madurez Analítica (20 minutos):**
  > Presentamos las cuatro etapas clásicas del modelo de Gartner, haciendo énfasis en dos ejes vectoriales:
  > 1. Eje horizontal: Valor aportado al negocio (desde el mero reporte hasta la generación directa de ingresos o ahorro).
  > 2. Eje vertical: Dificultad técnica y requerimientos de gobernanza y automatización.
  > 
  > **Puntos Críticos a Explicar:**
  > • Descriptiva: Responde a "¿Qué pasó?". Muy madura en la mayoría de empresas mediante BI (Power BI, Tableau, SQL).
  > • Diagnóstica: "¿Por qué pasó?". Requiere análisis de correlación, drill-down y segmentación causal.
  > • Predictiva: "¿Qué pasará?". Entramos en Machine Learning. Estimación de probabilidades futuras basadas en patrones históricos.
  > • Prescriptiva: "¿Qué debemos hacer?". La cúspide analítica. Combina predicciones con investigación operativa (optimización con restricciones, simulaciones de Monte Carlo y árboles de decisión automatizados).
  > 
  > **Pregunta de Debate:**
  > *"¿Por qué tantas empresas con millones invertidos en Data Lakes siguen atrapadas en la analítica descriptiva? ¿Qué falta para dar el salto predictivo?"*

##### Diapositiva 6: Matriz Comparativa de Enfoques Analíticos
- **Título:** Matriz Comparativa de Enfoques Analíticos
- **Subtítulo:** Diferencias técnicas, metodológicas y de impacto empresarial en los 4 niveles de madurez
- **Elementos Visuales:** Tabla de alta legibilidad con 5 columnas: Nivel Analítico, Horizonte Temporal, Herramientas Clave, Caso Empresarial (Retail) e Impacto en Negocio.
- **Notas Íntegras del Orador:**
  > **Matriz Comparativa de Niveles Analíticos (20 minutos):**
  > Utilizar la tabla estructurada para recorrer cada dimensión de análisis. Detallar un ejemplo transversal para que los alumnos vean la evolución en una misma vertical de negocio:
  > 
  > **Ejemplo Transversal: Sector Sanitario / Hospitalario:**
  > • Descriptiva: "¿Cuántos reingresos de pacientes tuvimos el mes pasado en cardiología?" (Métrica histórica = 14.2%).
  > • Diagnóstica: "¿Por qué reingresaron más pacientes de cardiología que de neurología?" (Análisis causal = falta de seguimiento farmacológico ambulatorio).
  > • Predictiva: "¿Qué probabilidad tiene el paciente Martínez de reingresar en los próximos 30 días?" (Modelo de scoring ML = 78% de probabilidad).
  > • Prescriptiva: "¿Qué plan de intervención médica minimiza el riesgo de reingreso al menor coste para el hospital?" (Motor prescriptivo = asignar teleconsulta obligatoria a las 48h y ajuste automático de dosis).

##### Diapositiva 7: Ciclo de Vida de Proyectos de Datos: De CRISP-DM a TDSP
- **Título:** Ciclo de Vida de Proyectos de Datos: De CRISP-DM a TDSP
- **Subtítulo:** El proceso iterativo estándar de la industria para garantizar el éxito y la gobernanza de modelos
- **Elementos Visuales:** Cuadrícula de 6 fases metodológicas numeradas (Fase 1: Comprensión Negocio, Fase 2: Comprensión Datos, Fase 3: Preparación, Fase 4: Modelado, Fase 5: Evaluación, Fase 6: Despliegue y MLOps).
- **Notas Íntegras del Orador:**
  > **Ciclo de Vida de Proyectos Analíticos (25 minutos):**
  > Presentamos el estándar CRISP-DM (Cross-Industry Standard Process for Data Mining) y su evolución moderna en entornos cloud como TDSP (Team Data Science Process de Microsoft) y frameworks ágiles de MLOps.
  > 
  > **El Gran Error en la Industria:**
  > El 80% del tiempo de un científico de datos se invierte en las fases 2 (Data Understanding) y 3 (Data Preparation). Quien comience a programar modelos (Fase 4) sin haber comprendido las restricciones de negocio (Fase 1) o la calidad de los datos generará un modelo inútil que nunca pasará a producción.
  > 
  > **La Flecha de Retorno:**
  > Destacar el carácter circular e iterativo. Tras evaluar el modelo en la Fase 5, frecuentemente descubrimos que debemos volver a la Fase 1 (redefinir la métrica de éxito) o a la Fase 3 (crear nuevas variables de mayor poder predictivo).
  > 
  > **Pregunta para la Clase:**
  > *"¿Por qué un modelo con un 95% de precisión técnica puede ser rechazado por el área de negocio en la Fase 5?"*

##### Diapositiva 8: Arquitectura Moderna de Datos: El Paradigma Lakehouse
- **Título:** Arquitectura Moderna de Datos: El Paradigma Lakehouse
- **Subtítulo:** La convergencia de la flexibilidad del Data Lake con el gobierno ACID del Data Warehouse
- **Elementos Visuales:** Tres columnas representando la arquitectura Medallion (Capa Bronce / Cruda, Capa Plata / Estructurada, Capa Oro / Especializada) y cuadro inferior explicando el Feature Store.
- **Notas Íntegras del Orador:**
  > **Arquitectura de Datos Moderna (20 minutos):**
  > Explicar la evolución técnica del almacenamiento analítico:
  > 1. Data Warehouse tradicional (1990-2010): Estructurado, esquemas en estrella, costoso de escalar, incapaz de gestionar texto no estructurado o imágenes.
  > 2. Data Lake (2010-2020): Almacenamiento barato en HDFS/S3, pero se convertía en un "Data Swamp" (pantano de datos sin gobernanza, esquemas rotos y falta de transaccionalidad).
  > 3. Lakehouse (2020-Actualidad): Capa de almacenamiento abierta sobre Object Storage con transacciones ACID (Delta Lake, Apache Iceberg, Apache Hudi).
  > 
  > **La Arquitectura Medallion:**
  > • Bronze: Ingesta pura en formato raw (histórico inmutable).
  > • Silver: Datos limpios, tipados, deduplicados y enriquecidos.
  > • Gold: Tablas agregadas listas para consumo de negocio y Feature Stores optimizados para inferencia ML de baja latencia.
  > 
  > **Feature Stores:**
  > Concepto fundamental para MLOps. Garantiza que la lógica de cálculo de una variable sea idéntica en el entrenamiento (offline) y en la predicción en producción (online).

##### Diapositiva 9: Laboratorio 1: Diagnóstico y Auditoría de Datos Empresariales
- **Título:** Laboratorio 1: Diagnóstico y Auditoría de Datos Empresariales
- **Subtítulo:** Auditoría estadística rigurosa, detección de multicolinealidad y preparación de un dataset comercial
- **Elementos Visuales:** Ficha técnica del laboratorio a la izquierda (dataset de 50.000 clientes, herramientas, tiempo de 45 min) y checklist de 6 pasos obligatorios a la derecha.
- **Notas Íntegras del Orador:**
  > **Laboratorio Práctico 1 (45 minutos):**
  > **Guía de Ejecución para el Instructor:**
  > 1. Abrir el notebook \`lab1_data_profiling_and_eda.ipynb\` en Google Colab o Jupyter.
  > 2. Dataset de Trabajo: Conjunto de datos bancario/telecom con 50.000 clientes, 25 variables numéricas y categóricas, y presencia deliberada de nulos, valores atípicos y problemas de formato.
  > 
  > **Pasos Prácticos a Guiar en el Aula:**
  > • Paso 1: Generación de reporte automático con \`ydata-profiling\` para obtener una radiografía rápida del dataset.
  > • Paso 2: Análisis profundo de valores ausentes. Distinguir entre MCAR (Missing Completely at Random), MAR y MNAR.
  > • Paso 3: Identificación de multicolinealidad mediante matriz de correlación de Pearson y cálculo del Factor de Inflación de Varianza (VIF). Variables con VIF > 10 deben ser analizadas para posible eliminación o combinación.
  > • Paso 4: Detección multivariante de outliers con Isolation Forest.
  > 
  > **Entregable Requerido:**
  > El alumno debe exportar el dataframe limpio \`clientes_curados.parquet\` y justificar en tres párrafos las decisiones de imputación tomadas.

---

#### MÓDULO 2: FUNDAMENTOS DE LA INTELIGENCIA COGNITIVA (2.5 HORAS)

##### Diapositiva 10: Separador Módulo 2
- **Título:** Módulo 2: Fundamentos de la Inteligencia Cognitiva
- **Subtítulo:** Sistemas Capaces de Percibir, Comprender el Contexto, Razonar e Interactuar
- **Notas Íntegras del Orador:**
  > **Introducción al Módulo 2 (15 minutos):**
  > El Módulo 2 aborda la segunda gran pata del curso: la Inteligencia Cognitiva. Mientras que la analítica tradicional y el ML se centran en datos numéricos y categóricos tabulares, la inteligencia cognitiva expande las capacidades del software hacia datos que imitan las capacidades sensoriales e interpretativas humanas.
  > 
  > **Cambio de Paradigma:**
  > Explicar que la computación clásica es determinista (siempre produce la misma salida ante la misma entrada mediante código imperativo). Los sistemas cognitivos son probabilísticos y contextualmente conscientes; manejan ambigüedad, lenguaje figurado, imágenes imperfectas y razonamiento inductivo.

##### Diapositiva 11: ¿Qué es la Inteligencia Cognitiva? Los 4 Pilares Fundamentales
- **Título:** ¿Qué es la Inteligencia Cognitiva? Los 4 Pilares Fundamentales
- **Subtítulo:** Capacidades bio-inspiradas para procesar información no estructurada a escala masiva
- **Elementos Visuales:** Cuadrícula 2x2 con los 4 pilares: Comprensión Multimodal (Understand), Razonamiento e Inferencia (Reason), Aprendizaje Continuo (Learn) e Interacción en Lenguaje Natural (Interact).
- **Notas Íntegras del Orador:**
  > **Los 4 Pilares Cognitivos (20 minutos):**
  > La computación cognitiva fue conceptualizada originalmente para superar el "cuello de botella de Von Neumann" y la rigidez de los sistemas basados en reglas. Desarrollar cada pilar con ejemplos empresariales concretos:
  > 1. Comprensión (Understand): Capacidad de ingerir texto libre, correos electrónicos, imágenes radiológicas o audios y extraer entidades, relaciones, polaridad y significado profundo.
  > 2. Razonamiento (Reason): A partir de premisas y evidencias incompletas, el sistema puede formular hipótesis, ponderar probabilidades y deducir conclusiones lógicas.
  > 3. Aprendizaje Continuo (Learn): El sistema no es estático; se adapta mediante reentrenamiento continuo, fine-tuning y feedback humano (RLHF / Reinforcement Learning from Human Feedback).
  > 4. Interacción Natural (Interact): Comunicación multimodal fluida en lenguaje humano, contextualizada, que se adapta al tono y nivel técnico del interlocutor.
  > 
  > **Pregunta de Reflexión:**
  > *"¿Por qué un sistema cognitivo no busca sustituir al experto humano, sino crear 'Inteligencia Aumentada'?"*

##### Diapositiva 12: Evolución Tecnológica: Del Código Basado en Reglas a los LLMs
- **Título:** Evolución Tecnológica: Del Código Basado en Reglas a los LLMs
- **Subtítulo:** La transformación arquitectónica que habilitó el procesamiento del lenguaje y la percepción
- **Elementos Visuales:** 4 etapas cronológicas (Sistemas Expertos, ML Estadístico, Deep Learning, Modelos Fundacionales) y cuadro explicativo sobre la fórmula de autoatención.
- **Notas Íntegras del Orador:**
  > **Evolución Arquitectónica de la IA (20 minutos):**
  > Explicar cómo hemos pasado de sistemas inflexibles a arquitecturas fundacionales:
  > 1. Era de las Reglas (Sistemas Expertos, 1970-1990): Si A y B entonces C. Imposibles de mantener; no generalizan ante imprevistos.
  > 2. Era del ML Estadístico (2000-2012): SVM, Random Forest, Naive Bayes. Éxito rotundo en datos tabulares, pero exigían diseñar variables a mano (manual feature engineering).
  > 3. Era del Deep Learning (2012-2017): Redes neuronales convolucionales (CNN) para visión y recurrentes (LSTM) para texto. El modelo aprende las representaciones internamente, pero las LSTM sufrían el problema del gradiente desvanecido y la lentitud por procesamiento estrictamente secuencial.
  > 4. Era de los Transformers y Modelos Fundacionales (2017-Actualidad): El hito "Attention is All You Need" (Vaswani et al.). El mecanismo de autoatención procesa todas las palabras en paralelo, capturando relaciones complejas de largo alcance.

##### Diapositiva 13: El Catálogo de Servicios y APIs Cognitivas Empresariales
- **Título:** El Catálogo de Servicios y APIs Cognitivas Empresariales
- **Subtítulo:** Capacidades cognitivas preentrenadas listas para consumir mediante interfaces REST y SDKs
- **Elementos Visuales:** 4 columnas (Visión Artificial, Lenguaje y Texto, Voz y Audio, Búsqueda y Decisión) con casos prácticos y mapeo de proveedores cloud (Azure, Google Cloud, AWS).
- **Notas Íntegras del Orador:**
  > **Ecosistema de Servicios Cognitivos (25 minutos):**
  > Analizar el panorama de servicios cognitivos de los tres grandes proveedores de nube (Microsoft Azure AI Services, Google Cloud Vertex AI, AWS Bedrock & Comprehend).
  > 
  > **La Decisión Clave de Arquitectura: ¿Consumir API o Entrenar Modelo Propio?**
  > • Cuándo usar APIs cognitivas preentrenadas:
  >   - Time-to-market urgente (días en lugar de meses).
  >   - Casos de uso estándar (OCR de facturas, análisis de sentimiento de reviews, transcripción de llamadas).
  >   - No se dispone de un equipo masivo de científicos de datos ni clústeres de GPUs.
  > • Cuándo entrenar o hacer fine-tuning interno:
  >   - Requisitos estrictos de soberanía y privacidad de datos.
  >   - Vocabularios técnicos extremadamente cerrados.
  >   - Coste a escala masiva (cuando millones de llamadas a la API resultan más caras que mantener infraestructura propia).

##### Diapositiva 14: Arquitectura Cognitiva Empresarial: RAG & Agentes Autónomos
- **Título:** Arquitectura Cognitiva Empresarial: RAG & Agentes Autónomos
- **Subtítulo:** Integración de modelos fundacionales con bases de conocimiento privadas mediante recuperación vectorial
- **Elementos Visuales:** Diagrama de bloques secuencial (Paso 1: Ingesta & Chunking, Paso 2: Vectorización Densa, Paso 3: Recuperación Híbrida, Paso 4: Generación Aumentada) y callout sobre búsqueda híbrida BM25.
- **Notas Íntegras del Orador:**
  > **Arquitectura RAG Empresarial (25 minutos):**
  > Retrieval-Augmented Generation (RAG) es hoy el estándar de facto para aplicar IA generativa y cognitiva en empresas. Detallar el flujo de extremo a extremo:
  > 1. Fase Offline (Indexación): Ingesta de documentos no estructurados, chunking semántico (400-500 tokens con overlap de 50 tokens), vectorización con embeddings densos e inserción en Vector Database (Pinecone, Qdrant, ChromaDB, pgvector).
  > 2. Fase Online (Recuperación y Generación): Vectorización de la consulta del usuario, búsqueda K-NN por similitud coseno combinada con búsqueda léxica BM25 (Hybrid Search), inyección de fragmentos en el prompt del LLM con instrucciones de no alucinación y generación de respuesta fundamentada con citas.
  > 
  > **Pregunta para la Clase:**
  > *"¿Por qué el RAG es preferible al Fine-Tuning para actualizar el conocimiento de una empresa?"* (RAG permite actualizar documentos en milisegundos sin coste de reentrenamiento y respeta permisos de seguridad por usuario).

##### Diapositiva 15: Laboratorio 2: Extracción Semántica y Enriquecimiento con APIs/LLM
- **Título:** Laboratorio 2: Extracción Semántica y Enriquecimiento con APIs/LLM
- **Subtítulo:** Construcción de un pipeline en Python para vectorizar documentos y ejecutar consultas RAG
- **Elementos Visuales:** Especificación del entorno con ChromaDB, \`all-MiniLM-L6-v2\` y checklist de 6 pasos de implementación.
- **Notas Íntegras del Orador:**
  > **Laboratorio Práctico 2 (45 minutos):**
  > **Guía de Ejecución para el Instructor:**
  > 1. Abrir \`lab2_cognitive_enrichment_rag.ipynb\`.
  > 2. Dataset de Entrada: Conjunto de 200 documentos contractuales y políticas de empresa en formato texto/PDF.
  > 
  > **Pasos Guiados:**
  > • Paso 1: Configurar el cliente de embeddings (utilizaremos un modelo open source ligero de Hugging Face \`all-MiniLM-L6-v2\` para ejecución local rápida y reproducible sin coste).
  > • Paso 2: Implementar un splitter de texto con \`RecursiveCharacterTextSplitter\` (chunk_size=400, chunk_overlap=50).
  > • Paso 3: Crear e inicializar una base de datos vectorial local con \`ChromaDB\`.
  > • Paso 4: Indexar los chunks y metadatos (título del documento, departamento, fecha de vigencia).
  > • Paso 5: Implementar una función de consulta que reciba preguntas complejas en lenguaje natural, recupere los 3 fragmentos más cercanos y formule el prompt contextualizado.

---

#### MÓDULO 3: MODELOS PREDICTIVOS Y MACHINE LEARNING (3.5 HORAS)

##### Diapositiva 16: Separador Módulo 3
- **Título:** Módulo 3: Modelos Predictivos y Machine Learning
- **Subtítulo:** De la Teoría Estadística a los Algoritmos de Producción: Supervisado, No Supervisado y Validación
- **Notas Íntegras del Orador:**
  > **Introducción al Módulo 3 (15 minutos):**
  > Llegamos al módulo con mayor carga horaria del programa (3.5 horas). El Machine Learning constituye el motor cuantitativo de la analítica avanzada. Aquí los alumnos deben adquirir tanto el rigor conceptual (entender qué optimiza cada algoritmo) como la destreza práctica para resolver problemas reales.
  > 
  > **Énfasis Pedagógico:**
  > Insistir en que no existe un "algoritmo mágico universal" (teorema No Free Lunch). La clave del éxito de un científico de datos radica en:
  > 1. Un preprocesamiento e ingeniería de variables impecables (garbage in, garbage out).
  > 2. Una validación cruzada estricta sin fugas de información (Data Leakage).
  > 3. Elegir la métrica de evaluación alineada con el coste financiero del error en el negocio.

##### Diapositiva 17: Taxonomía del Machine Learning: Los 3 Grandes Paradigmas
- **Título:** Taxonomía del Machine Learning: Los 3 Grandes Paradigmas
- **Subtítulo:** Estructuración matemática según la naturaleza de la señal de entrenamiento disponible
- **Elementos Visuales:** 3 columnas anchas detallando Aprendizaje Supervisado, No Supervisado y Por Refuerzo con sus problemas, algoritmos y retos principales.
- **Notas Íntegras del Orador:**
  > **Taxonomía del Machine Learning (25 minutos):**
  > Presentar los tres grandes paradigmas del aprendizaje automático:
  > 1. Supervisado: El dataset contiene pares (X, y). La función de pérdida mide la discrepancia entre la predicción y_estimada y la etiqueta real y. Regresión (y continuo) vs Clasificación (y discreto).
  > 2. No Supervisado: El dataset solo contiene X. Descubrimiento de estructuras latentes: clustering, reducción de dimensionalidad, detección de anomalías.
  > 3. Aprendizaje por Refuerzo (RL): Agente interactuando con un entorno mediante estados, acciones y recompensas para maximizar el retorno acumulado.
  > 
  > **Pregunta para la Clase:**
  > *"En vuestros proyectos, ¿con qué tipo de datos os encontráis más a menudo: etiquetados o no etiquetados? ¿Cuánto cuesta etiquetar 100.000 registros y cómo puede ayudar el aprendizaje no supervisado?"*

##### Diapositiva 18: Algoritmos Supervisados: De Modelos Lineales a Gradient Boosting
- **Título:** Algoritmos Supervisados: De Modelos Lineales a Gradient Boosting
- **Subtítulo:** Mapeo de técnicas, interpretabilidad vs capacidad predictiva y fundamentos matemáticos
- **Elementos Visuales:** Cuadrícula 2x2: Modelos Lineales (Ridge/Lasso), Random Forest (Bagging), XGBoost/LightGBM (Boosting), SVM y Redes Neuronales MLP.
- **Notas Íntegras del Orador:**
  > **Algoritmos Supervisados y Boosting (30 minutos):**
  > Explicar por qué los modelos basados en árboles y ensamblados dominan las competiciones de datos tabulares (Kaggle) y los sistemas empresariales:
  > 1. Modelos Lineales & Regularizados (Ridge L2, Lasso L1): Máxima interpretabilidad. Lasso anula coeficientes seleccionando variables.
  > 2. Árboles de Decisión (CART): Particiones ortogonales del espacio. Reducen impureza (Gini/Entropía).
  > 3. Bagging (Random Forest): Paralelo con submuestreo de filas (bootstrap) y columnas. Reduce la varianza sin sesgo adicional.
  > 4. Gradient Boosting (XGBoost / LightGBM): Construcción secuencial donde cada árbol corrige los errores residuales del anterior mediante optimización de segundo orden (gradiente y hessiano analítico).

##### Diapositiva 19: Aprendizaje No Supervisado: Clustering y Reducción Dimensional
- **Título:** Aprendizaje No Supervisado: Clustering y Reducción Dimensional
- **Subtítulo:** Segmentación de observaciones y compresión de espacios multivariantes sin etiquetas
- **Elementos Visuales:** Dos grandes bloques: Columna de Clustering (K-Means, DBSCAN, Jerárquico) y Columna de Reducción de Dimensionalidad (PCA, scree plot, t-SNE/UMAP).
- **Notas Íntegras del Orador:**
  > **Clustering y Reducción de Dimensionalidad (25 minutos):**
  > 1. K-Means: Particionamiento por centroides. Minimiza la inercia. Requiere fijar K (método del codo y Silhouette Score). Asume clusters esféricos y es sensible al escalado.
  > 2. DBSCAN: Basado en densidad espacial (radio epsilon y MinPts). Descubre geometrías complejas no convexas y aisla ruido/outliers de forma nativa.
  > 3. Reducción de Dimensionalidad:
  >    - PCA: Proyección lineal ortogonal que maximiza la varianza explicada.
  >    - t-SNE / UMAP: Métodos no lineales para proyectar espacios de 50 o 100 dimensiones a 2D/3D para visualización exploratoria.

##### Diapositiva 20: Ingeniería de Características y Prevención de Data Leakage
- **Título:** Ingeniería de Características y Prevención de Data Leakage
- **Subtítulo:** El factor más determinante en el rendimiento de los modelos en producción
- **Elementos Visuales:** 4 fases de feature engineering (Imputación, Codificación categórica, Escalado y Variables de Negocio) con un cuadro de alerta roja sobre la prevención de Data Leakage.
- **Notas Íntegras del Orador:**
  > **Ingeniería de Variables y Data Leakage (25 minutos):**
  > "Applied machine learning is basically feature engineering" (Andrew Ng). Las 4 familias:
  > 1. Agregaciones temporales (móviles de 7d, 30d, 90d).
  > 2. Variables de interacción y ratios financieros.
  > 3. Transformación matemática (logaritmo / Box-Cox).
  > 4. Codificación categórica: One-Hot (baja cardinalidad) vs Target Encoding regularizado.
  > 
  > **DATA LEAKAGE (Fuga de Información):**
  > El error más destructivo. Ocurre cuando el modelo aprende de variables o estadísticas que no existirán en el momento de la inferencia en tiempo real. Todos los transformadores DEBEN ajustarse únicamente con Train y aplicarse a Test/Producción.

##### Diapositiva 21: Evaluación de Clasificación: Más Allá de la Trampa del Accuracy
- **Título:** Evaluación de Clasificación: Más Allá de la Trampa del Accuracy
- **Subtítulo:** Métricas robustas para clases desbalanceadas y alineación con la matriz de costes de negocio
- **Elementos Visuales:** 4 tarjetas scorecard superiores (Precisión, Recall/Sensibilidad, F1-Score, ROC & PR-AUC) y tabla inferior de matriz de confusión con impacto económico directo en Churn.
- **Notas Íntegras del Orador:**
  > **Evaluación de Clasificación (30 minutos):**
  > La trampa del Accuracy: En un problema con 99% de clase mayoritaria, un clasificador tonto que siempre diga 0 tiene 99% de exactitud pero cero utilidad.
  > 
  > **Métricas Clave:**
  > • Precisión = TP / (TP + FP): Minimiza Falsos Positivos. Clave si alertar erróneamente tiene alto coste.
  > • Recall = TP / (TP + FN): Minimiza Falsos Negativos. Crítico si dejar escapar un caso real es fatal (salud, fraude, fuga VIP).
  > • F1-Score: Media armónica de Precisión y Recall.
  > • Curva Precision-Recall (PR-AUC): Esencial en desbalanceos severos (< 5% de positivos).
  > 
  > **Matriz de Costes:**
  > Traducir la matriz de confusión a euros: perder a un cliente cuesta 600€; retenerlo preventivamente cuesta 15€. El umbral de probabilidad debe ajustarse para minimizar el coste financiero total, no para maximizar un accuracy ciego.

##### Diapositiva 22: Validación Cruzada y el Dilema Sesgo-Varianza (Bias-Variance)
- **Título:** Validación Cruzada y el Dilema Sesgo-Varianza (Bias-Variance)
- **Subtítulo:** Cómo garantizar que el modelo generalice ante datos futuros nunca vistos
- **Elementos Visuales:** Dos grandes paneles comparativos: El dilema Sesgo-Varianza a la izquierda y las estrategias de validación (Stratified K-Fold, TimeSeriesSplit) a la derecha.
- **Notas Íntegras del Orador:**
  > **Sesgo-Varianza y Validación Cruzada (25 minutos):**
  > 1. Dilema Sesgo-Varianza:
  >    - Subajuste (High Bias): Modelo demasiado simple. Error alto en train y test.
  >    - Sobreajuste (High Variance): Modelo memoriza el ruido. Error mínimo en train, se dispara en test.
  > 2. Partición Robusta:
  >    - Stratified K-Fold: Conserva la proporción de clases en cada pliegue.
  >    - TimeSeriesSplit: Prohibido entrenar con el futuro para predecir el pasado. Ventanas móviles walk-forward.
  > 3. Control de Complejidad: Regularización, podado de profundidad en árboles (max_depth) y early stopping.

##### Diapositiva 23: Laboratorio 3: Predicción de Churn con XGBoost y Valores SHAP
- **Título:** Laboratorio 3: Predicción de Churn con XGBoost y Valores SHAP
- **Subtítulo:** Construcción, optimización con Optuna e interpretabilidad con XAI para comités directivos
- **Elementos Visuales:** Ficha técnica con XGBClassifier, Optuna y SHAP a la izquierda, e hitos de ejecución y tuning a la derecha.
- **Notas Íntegras del Orador:**
  > **Laboratorio Práctico 3 (60 minutos):**
  > **Dinámica del Taller en \`lab3_xgboost_churn_shap.ipynb\`:**
  > 1. Cargar el dataset preparado en el Lab 1.
  > 2. Construir el \`Pipeline\` con \`ColumnTransformer\` para garantizar hermetismo.
  > 3. Establecer un baseline con Regresión Logística.
  > 4. Optimización bayesiana de hiperparámetros de XGBoost con \`Optuna\` (learning_rate, max_depth, subsample, colsample_bytree).
  > 5. Calibración de probabilidades y selección del umbral de corte óptimo según la matriz de costes de negocio.
  > 6. Generación del gráfico resumen de SHAP (\`shap.summary_plot\`) y explicabilidad local con Waterfall plot para justificar qué palancas comerciales activan la probabilidad de fuga en clientes concretos.

---

#### MÓDULO 4: ANÁLISIS DE SENTIMIENTOS Y NLP (2.5 HORAS)

##### Diapositiva 24: Separador Módulo 4
- **Título:** Módulo 4: Análisis de Sentimientos y NLP
- **Subtítulo:** Desbloqueando el Valor del Texto: De la Sintaxis Lingüística a la Semántica Contextual de los Transformers
- **Notas Íntegras del Orador:**
  > **Introducción al Módulo 4 (15 minutos):**
  > El Módulo 4 conecta las técnicas de analítica avanzada con el dominio lingüístico. El 80% de la información crítica de una compañía (reclamaciones, transcripciones de call centers, chats de soporte, comentarios en redes sociales y contratos) reside en formato de texto no estructurado.
  > 
  > **Propósito:** Enseñar a los participantes a construir pipelines capaces de transformar texto ruidoso e informal en señales estructuradas y cuantificables.

##### Diapositiva 25: El Pipeline de Preprocesamiento en Procesamiento del Lenguaje Natural
- **Título:** El Pipeline de Preprocesamiento en Procesamiento del Lenguaje Natural
- **Subtítulo:** De cadenas de caracteres crudas a secuencias de tokens estructuradas
- **Elementos Visuales:** 4 cajas secuenciales (Paso 1: Limpieza, Paso 2: Tokenización por subpalabras BPE, Paso 3: Lematización, Paso 4: Extracción de secuencias) y callout sobre por qué en Transformers NO deben eliminarse las stopwords.
- **Notas Íntegras del Orador:**
  > **Pipeline de Preprocesamiento en NLP (25 minutos):**
  > Explicar la diferencia entre preprocesamiento clásico y moderno:
  > 1. Normalización: Limpieza de caracteres, URLs, emojis (mapeo a tokens semánticos).
  > 2. Tokenización: Clásica (espacios) vs Moderna (Byte-Pair Encoding / WordPiece). Las subpalabras resuelven el 100% del vocabulario desconocido (OOV).
  > 3. Lematización vs Stemming: Stemming corta sufijos de forma heurística; lematización busca el lema formal según la categoría gramatical (POS).
  > 4. El dilema de las Stopwords: En TF-IDF se eliminan para no inflar dimensiones; en Transformers NUNCA se eliminan porque la atención las utiliza para inferir sintaxis y negación ("no es bueno" vs "es bueno").

##### Diapositiva 26: Representación Vectorial: De la Bolsa de Palabras a Embeddings
- **Título:** Representación Vectorial: De la Bolsa de Palabras a Embeddings
- **Subtítulo:** La transición de vectores dispersos sin semántica a espacios densos de atención contextual
- **Elementos Visuales:** Tres columnas cronológicas: Generación 1 (BoW & TF-IDF), Generación 2 (Word2Vec & GloVe), Generación 3 (Transformers BERT/RoBERTa).
- **Notas Íntegras del Orador:**
  > **Representaciones Vectoriales del Texto (25 minutos):**
  > 1. Dispersas (BoW / TF-IDF): Vectores de 50.000 dimensiones ortogonales. Sin semántica ("coche" y "automóvil" son perpendiculares).
  > 2. Densas Estáticas (Word2Vec / GloVe): Vectores continuos de 300 dimensiones por coocurrencia. Capturan analogías (Rey - Hombre + Mujer ≈ Reina). Límite: la polisemia no se resuelve ("banco" financiero vs "banco" de parque tienen el mismo vector).
  > 3. Contextuales (Transformers / BERT): El vector de cada token muta dinámicamente según todas las palabras de la frase gracias a la autoatención bidireccional.

##### Diapositiva 27: Técnicas de Análisis de Sentimientos: Del Léxico al Fine-Tuning
- **Título:** Técnicas de Análisis de Sentimientos: Del Léxico al Fine-Tuning
- **Subtítulo:** Comparativa metodológica para clasificar la polaridad y las emociones en opiniones de usuarios
- **Elementos Visuales:** 3 metodologías (Léxicos VADER, TF-IDF + Clasificadores, Transformers finetuneados) y cuadro destacado sobre Aspect-Based Sentiment Analysis (ABSA).
- **Notas Íntegras del Orador:**
  > **Análisis de Sentimientos (25 minutos):**
  > Comparativa entre enfoques de léxico (rápidos, sin entrenamiento, fallan en sarcasmo), modelos supervisados y Transformers preentrenados en español (BETO, pysentimiento).
  > 
  > **Aspect-Based Sentiment Analysis (ABSA):**
  > Más allá de la polaridad binaria (+/-). ABSA desglosa el sentimiento por atributo: [Batería: +0.9 (Dura dos días)], [Cámara: -0.8 (Pésima de noche)]. Esto permite a los directores de producto actuar de forma quirúrgica sobre los fallos de diseño.

##### Diapositiva 28: Aplicaciones Empresariales de NLP: Voice of Customer y Marketing
- **Título:** Aplicaciones Empresariales de NLP: Voice of Customer y Marketing
- **Subtítulo:** Casos reales de explotación de texto no estructurado para maximizar retención y captación
- **Elementos Visuales:** Cuadrícula 2x2: Monitorización de Marca, Triaje de Tickets, Inteligencia Competitiva de Producto y Prevención de Bajas en Call Centers.
- **Notas Íntegras del Orador:**
  > **Casos de Negocio en NLP y VoC (20 minutos):**
  > Cuatro aplicaciones industriales:
  > 1. Detección temprana de crisis reputacionales en redes sociales (< 15 min).
  > 2. Triaje inteligente de soporte: derivación prioritaria de clientes frustrados a operadores senior (ahorro del 40% en tiempos de gestión).
  > 3. Minería de reviews de competidores en Amazon/Trustpilot para identificar gaps de producto.
  > 4. Call centers: transcripción speech-to-text en tiempo real con alertas automáticas de retención.

##### Diapositiva 29: Laboratorio 4: Clasificación de Sentimiento y Minería de Tópicos
- **Título:** Laboratorio 4: Clasificación de Sentimiento y Minería de Tópicos
- **Subtítulo:** Implementación comparativa entre modelos estadísticos y Transformers en español
- **Elementos Visuales:** Ficha técnica con 10.000 reseñas de e-commerce, stack de Hugging Face y BERTopic, e hitos de implementación.
- **Notas Íntegras del Orador:**
  > **Laboratorio Práctico 4 (45 minutos):**
  > En \`lab4_sentiment_nlp_spanish.ipynb\`:
  > 1. Cargar 10.000 reseñas de e-commerce en español.
  > 2. Ajustar un baseline con \`TfidfVectorizer\` y \`LogisticRegression\`.
  > 3. Ejecutar inferencia con el modelo Transformer \`pysentimiento/robertuito-sentiment-analysis\`.
  > 4. Evaluar matrices de confusión y comprobar cómo el Transformer resuelve sarcasmos y dobles negaciones.
  > 5. Extraer con \`BERTopic\` los temas recurrentes en quejas para alimentar el dashboard del Módulo 5.

---

#### MÓDULO 5: VISUALIZACIÓN DE DATOS AVANZADA Y DASHBOARDS (2.0 HORAS)

##### Diapositiva 30: Separador Módulo 5
- **Título:** Módulo 5: Visualización de Datos Avanzada
- **Subtítulo:** Comunicar con Impacto: Principios de Percepción, Arquitectura de Dashboards y Storytelling con Datos
- **Notas Íntegras del Orador:**
  > **Introducción al Módulo 5 (15 minutos):**
  > Aborda la última milla de cualquier proyecto analítico: la comunicación y la interactividad con los decisores.
  > Filosofía: *"Un modelo de Machine Learning con un 98% de ROC-AUC es completamente estéril si sus conclusiones se presentan en una tabla incomprensible de 50 columnas que genera rechazo en la dirección"*.

##### Diapositiva 31: Principios de Percepción Visual y Gramática de Gráficos
- **Título:** Principios de Percepción Visual y Gramática de Gráficos
- **Subtítulo:** Cómo procesa el cerebro humano la información visual antes del razonamiento consciente
- **Elementos Visuales:** 3 pilares: Atributos Preatentivos (jerarquía de percepción), Leyes de la Gestalt (proximidad, cerramiento, continuidad) y Ratio Datos-Tinta de Edward Tufte.
- **Notas Íntegras del Orador:**
  > **Principios de Percepción Visual (20 minutos):**
  > 1. Atributos Preatentivos: El cerebro procesa posición espacial y longitud en < 200 ms. El color solo debe usarse para resaltar estados o categorías clave.
  > 2. Leyes Gestalt: Agrupamiento natural de métricas mediante proximidad y tarjetas limpias.
  > 3. Ratio Datos-Tinta (Tufte): Erradicar la basura gráfica ("Chartjunk"), efectos 3D engañosos y líneas de cuadrícula invasivas.
  > 
  > **Pregunta para la Clase:**
  > *"¿Por qué los gráficos circulares (pie charts) están fuertemente desaconsejados cuando hay más de 3 categorías?"* (El ojo humano compara longitudes alineadas con mucha mayor precisión que ángulos y áreas).

##### Diapositiva 32: Ecosistema Tecnológico: Plataformas BI vs Data Apps en Código
- **Título:** Ecosistema Tecnológico: Plataformas BI vs Data Apps en Código
- **Subtítulo:** Criterios de selección arquitectónica entre herramientas de autoservicio y frameworks de desarrollo
- **Elementos Visuales:** Tabla comparativa entre plataformas de BI (Power BI, Tableau) y frameworks de Data Apps en Python (Streamlit, Plotly Dash).
- **Notas Íntegras del Orador:**
  > **BI Corporativo vs Data Apps en Código (20 minutos):**
  > Comparativa estratégica:
  > • BI Corporativo: Gobierno impecable, seguridad RLS masiva en Azure AD, autoservicio para usuarios no técnicos.
  > • Data Apps en Python (Streamlit): Integración nativa de modelos en tiempo real, sliders para simulaciones what-if complejas y prototipado ágil sin necesidad de frontend web.

##### Diapositiva 33: Anatomía y Arquitectura de un Dashboard Ejecutivo de Impacto
- **Título:** Anatomía y Arquitectura de un Dashboard Ejecutivo de Impacto
- **Subtítulo:** Estructuración visual en cuadrículas jerárquicas basada en patrones naturales de lectura
- **Elementos Visuales:** Wireframe interactivo con Barra de Control superior, 4 Scorecards de KPIs clave, gráfico temporal macro con bandas de confianza y tabla de detalle accionable.
- **Notas Íntegras del Orador:**
  > **Anatomía de un Dashboard Ejecutivo (20 minutos):**
  > Patrón de lectura en "Z" o "F":
  > 1. Encabezado y Filtros Globales (Zona Superior).
  > 2. Banda de KPIs Estratégicos: El número grande, la variación porcentual vs objetivo y la tendencia.
  > 3. Visión Macro y Proyecciones: Gráfico temporal con intervalo de predicción del modelo.
  > 4. Tabla de Detalle Accionable: Clientes priorizados por riesgo con botón de acción directa.
  > 
  > **Reglas de Oro:**
  > • Regla de los 5 Segundos: El decisor debe entender la salud del negocio en 5 segundos.
  > • Regla de los 3 Clics: Cualquier dato de auditoría debe alcanzarse en menos de 3 clics.

##### Diapositiva 34: Integración de Modelos Predictivos y Sentimiento en Paneles
- **Título:** Integración de Modelos Predictivos y Sentimiento en Paneles
- **Subtítulo:** Cómo presentar probabilidades complejas e inferencias de NLP de forma transparente y accionable
- **Elementos Visuales:** 3 reglas de integración: Semántica (probabilidades a lenguaje de negocio), Explicabilidad (XAI embebida con SHAP) y Confianza (semáforo de drift y frescura).
- **Notas Íntegras del Orador:**
  > **Integración Predictiva y Cognitiva en Dashboards (20 minutos):**
  > 1. Traducción semántica: Transformar "P(y=1) = 0.832" en "Riesgo de Fuga: MUY ALTO".
  > 2. Micro-XAI: Gráficos de cascada al hacer clic sobre una cuenta mostrando los 3 factores causales de la alerta.
  > 3. Bucle de feedback (Human-in-the-Loop): Botones para que los operadores confirmen o refuten la predicción, retroalimentando la capa Silver del Lakehouse para futuros reentrenamientos.

##### Diapositiva 35: Laboratorio 5: Construcción de un Dashboard con Streamlit / Plotly
- **Título:** Laboratorio 5: Construcción de un Dashboard con Streamlit / Plotly
- **Subtítulo:** Desarrollo de una Data App interactiva completa integrando predicciones de Churn y VoC
- **Elementos Visuales:** Ficha técnica con componentes de Streamlit y Plotly Express, y checklist de los 6 módulos a implementar.
- **Notas Íntegras del Orador:**
  > **Laboratorio Práctico 5 (60 minutos):**
  > En \`app_dashboard_streamlit.py\`:
  > Los alumnos unen los outputs de los laboratorios previos: dataset curado (Lab 1), probabilidades de Churn y SHAP (Lab 3), y análisis de sentimiento (Lab 4).
  > Construcción de filtros reactivos (\`st.sidebar\`), tarjetas de métricas (\`st.metric\`), scatter plot interactivo con burbujas de clientes (\`px.scatter\`) y tabla filtrable descargable en CSV.
  > Uso obligatorio de \`@st.cache_data\` para latencias inferiores a 200 ms.

---

#### MÓDULO 6: CASOS PRÁCTICOS, MLOPS, PROYECTO INTEGRADOR Y CIERRE (1.5 HORAS)

##### Diapositiva 36: Separador Módulo 6
- **Título:** Módulo 6: Casos Prácticos, Proyectos y Cierre
- **Subtítulo:** De la Experimentación a la Operación Real: Arquitecturas End-to-End, MLOps, Ética y Proyecto Integrador
- **Notas Íntegras del Orador:**
  > **Introducción al Módulo 6 (10 minutos):**
  > Consolidación y cierre del curso (1.5 horas). Unificación de todas las disciplinas: calidad de datos, servicios cognitivos, algoritmos predictivos, NLP y visualización interactiva.
  > El "Valle de la Muerte" del ML: el 80% de los modelos nunca llega a producción por falta de MLOps y gobierno.

##### Diapositiva 37: Arquitectura Industrial End-to-End de Analítica e Inteligencia Cognitiva
- **Título:** Arquitectura Industrial End-to-End de Analítica e Inteligencia Cognitiva
- **Subtítulo:** Blueprint tecnológico completo: desde la ingesta heterogénea hasta la acción automatizada
- **Elementos Visuales:** Diagrama de 4 capas industriales: Capa 1 DataOps & Lakehouse (Kafka, Delta Lake), Capa 2 MLOps (Feature Store, MLflow), Capa 3 Inferencia (FastAPI, Vector DB), Capa 4 Consumo (Dashboards, Evidently AI).
- **Notas Íntegras del Orador:**
  > **Arquitectura Industrial de Referencia (20 minutos):**
  > Recorrido del dato desde la telemetría hasta la acción comercial:
  > • Ingesta streaming y batch en Lakehouse ACID.
  > • Plataforma de modelado con Feature Store sincronizado (Online/Offline) para evitar el Training-Serving Skew.
  > • Serving híbrido: microservicios de baja latencia con FastAPI / Triton e inferencia batch masiva.
  > • Observabilidad continua de Data Drift con Evidently AI.

##### Diapositiva 38: Caso de Éxito: Hiperpersonalización y Retención de Clientes 360°
- **Título:** Caso de Éxito: Hiperpersonalización y Retención de Clientes 360°
- **Subtítulo:** Implementación integral en una multinacional de servicios con métricas de retorno cuantificadas
- **Elementos Visuales:** Tres paneles estructurados: El Desafío (Churn 3.2%, 18M€ en riesgo), La Solución Cognitiva (XGBoost + VoC + Next Best Action) y los Resultados ROI (Ahorro de 4.2M€, subida de conversión del 11% al 28%, payback en 4.5 meses).
- **Notas Íntegras del Orador:**
  > **Estudio de Caso Real: Retención 360° (20 minutos):**
  > Caso real en operadora de telecomunicaciones con 3M de clientes:
  > La combinación de scoring de Churn con análisis de sentimiento en tiempo real sobre transcripciones de soporte técnico permitió al motor de Next Best Action sugerir la compensación adecuada en pantalla al teleoperador, reduciendo el Churn en 0.8 puntos porcentuales y ahorrando 4.2 millones de euros en el primer año.

##### Diapositiva 39: MLOps, Monitorización de Deriva (Drift) y Gobernanza Ética
- **Título:** MLOps, Monitorización de Deriva (Drift) y Gobernanza Ética
- **Subtítulo:** Asegurando la estabilidad operativa y el cumplimiento del marco legal europeo (EU AI Act)
- **Elementos Visuales:** 3 pilares de degradación y cumplimiento: Data Drift (Kolmogorov-Smirnov, PSI), Concept Drift (mutación de relaciones P(y|X)) y Marco Regulatorio (clasificación por riesgo del AI Act de la UE y derecho a explicación de GDPR).
- **Notas Íntegras del Orador:**
  > **MLOps y Gobernanza Ética en IA (20 minutos):**
  > 1. Data Drift: Cambia la distribución de entrada P(X). Detección con PSI (> 0.25 alerta roja) y reentrenamiento con ventanas móviles.
  > 2. Concept Drift: Cambia la relación P(y|X) (patrones de fraude que mutan). Caída brusca del AUC en producción.
  > 3. Marco Regulatorio (EU AI Act): Clasificación de modelos por riesgo. Sistemas de alto riesgo exigen supervisión humana y explicabilidad matemática con SHAP (GDPR Art. 22).

##### Diapositiva 40: Proyecto Final Integrador: Guía de Implementación y Rúbrica
- **Título:** Proyecto Final Integrador: Guía de Implementación y Rúbrica
- **Subtítulo:** Consolidación transversal de los 5 laboratorios en un caso empresarial aplicable
- **Elementos Visuales:** Panel con las 5 fases del proyecto (EDA, Modelado, NLP, Dashboard, Defensa) y Rúbrica de Calificación oficial ponderada (30% Rigor, 25% Código, 25% Dashboard, 20% Negocio).
- **Notas Íntegras del Orador:**
  > **Proyecto Final Integrador (20 minutos):**
  > Presentación del caso de acreditación formativa:
  > Opciones de negocio a elegir por los alumnos: Retail, Fintech o Salud Digital.
  > Los alumnos forman equipos de 2-3 personas combinando perfiles analíticos y de negocio. Cada equipo defenderá su solución durante 10 minutos demostrando el ROI proyectado y la arquitectura de MLOps implementada.

##### Diapositiva 41: Conclusiones y Hoja de Ruta del Profesional en IA y Analítica
- **Título:** Conclusiones y Hoja de Ruta del Profesional en IA y Analítica
- **Subtítulo:** De la Capacitación Técnica a la Transformación Organizacional Sostenible
- **Elementos Visuales:** Portadilla oscura de cierre con los tres mensajes finales (El dato como activo, Sinergia cuántica analítica + cognitiva, Rigor y ética continua) y apertura del debate.
- **Notas Íntegras del Orador:**
  > **Clausura y Cierre del Curso (10 minutos):**
  > 1. Agradecimiento formal a todos los participantes por su dedicación y esfuerzo durante las 15 horas lectivas.
  > 2. Resumen de las Grandes Lecciones del Curso:
  >    - El Machine Learning no sustituye al criterio de negocio; lo amplifica y lo dota de rigor estadístico.
  >    - La inteligencia cognitiva permite democratizar el acceso a los datos no estructurados que antes se perdían en repositorios olvidados.
  >    - Un dashboard no es un adorno: es el volante con el que los directivos conducen la compañía.
  > 3. Próximos Pasos y Certificaciones Recomendadas (Cloud AI, MLOps, Data Science).
  > 4. Apertura del Turno Abierto de Preguntas y Networking Final.

---

### GUÍA DE RESOLUCIÓN DE LABORATORIOS PRÁCTICOS

#### LABORATORIO 1: AUDITORÍA Y PERFILADO DE DATOS (EDA)
- **Archivo:** \`notebooks/lab1_data_profiling.ipynb\`
- **Objetivo:** Identificar valores anómalos, tipos incorrectos, correlaciones espurias y missing values.
- **Solución y Snippet de Código Clave:**
\`\`\`python
import pandas as pd
import numpy as np
from ydata_profiling import ProfileReport
from sklearn.ensemble import IsolationForest

# Carga de datos
df = pd.read_parquet('clientes_raw.parquet')

# 1. Auditoría de valores nulos
null_summary = df.isnull().mean() * 100
print("Columnas con > 20% nulos:", null_summary[null_summary > 20])

# 2. Imputación robusta
df['ingresos_anuales'] = df.groupby('segmento')['ingresos_anuales'].transform(
    lambda x: x.fillna(x.median())
)

# 3. Detección multivariante de anomalías
iso = IsolationForest(contamination=0.03, random_state=42)
df['es_outlier'] = iso.fit_predict(df[['antiguedad_meses', 'gasto_total', 'num_incidencias']])
df_clean = df[df['es_outlier'] == 1].drop(columns=['es_outlier'])
df_clean.to_parquet('clientes_curados.parquet', compression='snappy')
\`\`\`

---

#### LABORATORIO 2: ENRIQUECIMIENTO COGNITIVO Y RAG LOCAL
- **Archivo:** \`notebooks/lab2_rag_cognitive.ipynb\`
- **Objetivo:** Vectorizar documentos corporativos en una base de datos vectorial ligera y ejecutar búsquedas semánticas.
- **Solución y Snippet de Código Clave:**
\`\`\`python
import chromadb
from chromadb.utils import embedding_functions

# Inicializar cliente persistente local
client = chromadb.PersistentClient(path="./chroma_db")
embed_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="all-MiniLM-L6-v2"
)

collection = client.get_or_create_collection(
    name="politicas_empresa", 
    embedding_function=embed_fn,
    metadata={"hnsw:space": "cosine"}
)

# Inserción de documentos con metadatos
collection.add(
    documents=[
        "La indemnización por rotura de stock en clientes VIP es del 15% adicional.",
        "El plazo máximo de resolución de incidencias graves según el SLA es de 4 horas."
    ],
    metadatas=[{"categoria": "ventas", "año": 2024}, {"categoria": "soporte", "año": 2024}],
    ids=["doc_001", "doc_002"]
)

# Consulta semántica
results = collection.query(
    query_texts=["¿Cómo compensamos a un cliente prioritario si no hay existencias?"],
    n_results=1
)
print("Fragmento recuperado:", results['documents'][0][0])
\`\`\`

---

#### LABORATORIO 3: MODELADO PREDICTIVO CON XGBOOST Y SHAP
- **Archivo:** \`notebooks/lab3_xgboost_churn.ipynb\`
- **Objetivo:** Construir un clasificador de abandono calibrado con explicabilidad XAI.
- **Solución y Snippet de Código Clave:**
\`\`\`python
import xgboost as xgb
import shap
from sklearn.model_selection import StratifiedKFold
from sklearn.metrics import precision_recall_curve, auc

# Pipeline y entrenamiento de XGBoost
model = xgb.XGBClassifier(
    n_estimators=300,
    max_depth=5,
    learning_rate=0.03,
    subsample=0.8,
    colsample_bytree=0.8,
    scale_pos_weight=4.5, # Compensación del desbalanceo
    random_state=42
)
model.fit(X_train, y_train)

# Explicabilidad con SHAP
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values, X_test, plot_type="bar")
\`\`\`

---

#### LABORATORIO 4: PIPELINE DE SENTIMIENTO EN ESPAÑOL
- **Archivo:** \`notebooks/lab4_sentiment_nlp.ipynb\`
- **Objetivo:** Clasificar opiniones con Transformers preentrenados y extraer tópicos.
- **Solución y Snippet de Código Clave:**
\`\`\`python
from transformers import pipeline
import pandas as pd

# Carga de pipeline optimizado en español
classifier = pipeline(
    "text-classification",
    model="pysentimiento/robertuito-sentiment-analysis",
    return_all_scores=False
)

df_reviews = pd.read_csv('reviews_ecommerce.csv')
res = classifier(df_reviews['texto'].tolist()[:500], batch_size=32, truncation=True)
df_reviews['sentimiento'] = [r['label'] for r in res]
df_reviews['score_confianza'] = [r['score'] for r in res]
print(df_reviews['sentimiento'].value_counts(normalize=True))
\`\`\`

---

#### LABORATORIO 5: DASHBOARD INTERACTIVO EN STREAMLIT
- **Archivo:** \`src/app_dashboard.py\`
- **Objetivo:** Data App en Python con filtros reactivos, scorecards y visualización de riesgo.
- **Solución y Snippet de Código Clave:**
\`\`\`python
import streamlit as st
import plotly.express as px
import pandas as pd

st.set_page_config(page_title="Dashboard Ejecutivo de Clientes e IA", layout="wide")

@st.cache_data
def load_data():
    return pd.read_parquet("datos_consolidados.parquet")

df = load_data()

# Barra lateral de filtros
st.sidebar.header("Filtros de Control")
segmento_sel = st.sidebar.multiselect("Segmento", df['segmento'].unique(), default=df['segmento'].unique())
df_fil = df[df['segmento'].isin(segmento_sel)]

# Fila superior de KPIs
col1, col2, col3, col4 = st.columns(4)
col1.metric("Tasa de Abandono", f"{df_fil['churn'].mean()*100:.2f}%", "-0.4%")
col2.metric("Sentimiento Medio", f"{df_fil['polaridad'].mean():.2f}", "+0.08")
col3.metric("Cuentas en Riesgo", f"{len(df_fil[df_fil['prob_churn'] > 0.7])}")
col4.metric("Valor en Riesgo", f"{df_fil[df_fil['prob_churn'] > 0.7]['arr'].sum():,.0f} €")

# Gráfica interactiva de dispersión
fig = px.scatter(
    df_fil, x="antiguedad_meses", y="gasto_total", color="prob_churn",
    size="arr", hover_data=["cliente_id", "sentimiento"],
    color_continuous_scale="Blues"
)
st.plotly_chart(fig, use_container_width=True)
\`\`\`

---

### GLOSARIO TÉCNICO DE REFERENCIA

- **ABSA (Aspect-Based Sentiment Analysis):** Minería de opiniones que desacopla la polaridad global en atributos o entidades específicas.
- **Accuracy (Exactitud):** Ratio de aciertos totales sobre el total de casos. Peligroso en datasets con clases fuertemente desbalanceadas.
- **Concept Drift:** Degradación del rendimiento de un modelo producida por el cambio en la relación matemática entre las variables de entrada y el objetivo ($P(y|X)$).
- **Data Drift:** Variación en la distribución marginal de las variables predictoras ($P(X)$) a lo largo del tiempo.
- **Embeddings Densos:** Vectores numéricos continuos de dimensión fija que representan conceptos en un espacio semántico continuo.
- **Feature Store:** Repositorio centralizado que gestiona, versiona y sirve variables para entrenamiento masivo (offline) e inferencia en tiempo real (online) con paridad matemática estricta.
- **Lakehouse:** Arquitectura de datos que implementa transacciones ACID, linaje y gobierno sobre almacenamiento de objetos de bajo coste (S3/ADLS).
- **PR-AUC:** Área bajo la curva Precision-Recall. Métrica de referencia para evaluar clasificadores sobre clases raras o minoritarias (< 5%).
- **RAG (Retrieval-Augmented Generation):** Patrón arquitectónico que combina la recuperación de fragmentos documentales privados mediante búsqueda vectorial con la capacidad generativa de un LLM.
- **SHAP (SHapley Additive exPlanations):** Método de teoría de juegos cooperativos que calcula la contribución marginal de cada variable a una predicción individual.
- **Training-Serving Skew:** Divergencia en el cálculo o distribución de variables entre la fase de entrenamiento y la fase de producción en tiempo real.
`;

const outputPath = path.resolve(__dirname, '..', 'GUIA_DEL_DOCENTE.md');
fs.writeFileSync(outputPath, guideContent, 'utf-8');
console.log(`✅ GUIA_DEL_DOCENTE.md creada exitosamente en: ${outputPath}`);
