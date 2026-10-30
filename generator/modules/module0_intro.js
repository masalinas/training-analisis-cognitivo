// generator/modules/module0_intro.js
// Module 0: Bienvenida, Encuadre y Hoja de Ruta (Slides 1 - 3)

const { createCoverSlide, createContentSlide, addCard, addStyledTable, addCalloutBox } = require('../helpers');
const config = require('../config');
const colors = config.colors;

function buildModule0(pres, state) {
  // -------------------------------------------------------------
  // SLIDE 1: Portada Principal
  // -------------------------------------------------------------
  state.slideCount++;
  createCoverSlide(pres, {
    title: 'Analítica Avanzada e\nInteligencia Cognitiva',
    subtitle: 'Programa Formativo Técnico y Estratégico para la Toma de Decisiones Basada en Datos',
    highlights: [
      { label: 'Temario Oficial 15H', text: '6 Módulos exhaustivos de fundamentos, modelado predictivo, NLP y visualización.' },
      { label: '5 Laboratorios Hands-on', text: 'Prácticas reales en Python con scikit-learn, XGBoost, Transformers y Streamlit.' },
      { label: 'Enfoque Ejecutivo & Técnico', text: 'Arquitecturas de datos Lakehouse, pipelines de MLOps y casos de negocio ROI-driven.' },
    ],
    notes: `BIENVENIDA Y APERTURA DEL CURSO (10 minutos)
- Guía del Instructor:
  Buenos días a todos y bienvenidos al curso de "Analítica Avanzada e Inteligencia Cognitiva". Mi nombre es [Nombre del Instructor] y durante las próximas 15 horas lectivas os acompañaré en este recorrido técnico y metodológico.
- Propósito del Curso:
  El objetivo central de este programa no es únicamente aprender la sintaxis de librerías de machine learning o invocar APIs cognitivas, sino adquirir una comprensión arquitectónica y holística de cómo los datos no estructurados y estructurados se transforman en ventajas competitivas sostenibles para la organización.
- Perfil de los Participantes:
  Contamos con perfiles multidisciplinares: ingenieros de datos, analistas de negocio, desarrolladores de software y científicos de datos. Esta diversidad enriquecerá los debates en clase y las dinámicas de grupo durante los laboratorios prácticos.
- Dinámica Pedagógica:
  El programa se divide en 60% exposición conceptual con esquemas técnicos de bajo nivel y 40% resolución práctica interactiva en notebooks de Python y herramientas de visualización. Os animo a intervenir activamente con dudas y casos reales de vuestras organizaciones.`,
  });

  // -------------------------------------------------------------
  // SLIDE 2: Objetivos Pedagógicos y Competencias Oficiales
  // -------------------------------------------------------------
  state.slideCount++;
  const s2 = createContentSlide(pres, {
    category: 'Módulo 0 • Encuadre Pedagógico',
    title: 'Objetivos Oficiales y Competencias a Desarrollar',
    subtitle: 'Desarrollo de capacidades avanzadas para extraer valor estratégico de grandes volúmenes de datos',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `OBJETIVOS Y COMPETENCIAS OFICIALES (15 minutos)
- Explicación Técnica para el Docente:
  Esta diapositiva traslada fielmente los objetivos del documento oficial del curso, estructurándolos en 3 pilares de competencia técnica y de negocio:
  1. Capacidad de Modelado: Pasar de métricas retrospectivas a algoritmos predictivos supervisados y no supervisados que estimen probabilidades con rigor estadístico.
  2. Inteligencia Cognitiva y NLP: Explotar el 80% de la información corporativa que hoy reside latente en texto libre, audios y documentos no estructurados.
  3. Comunicación y Visualización de Alto Impacto: El mejor modelo analítico carece de valor si los decisores no lo comprenden o desconfían de él. La visualización interactiva es el puente hacia la adopción.
- Pregunta de Interacción con la Clase:
  "¿En vuestras empresas, cuál es hoy el principal freno para explotar la IA: la calidad/gobierno de los datos, la falta de modelos predictivos o la desconexión con los comités de dirección?"
- Clave Pedagógica:
  Hacer hincapié en que el curso conecta las matemáticas y el código con el impacto financiero de cada decisión (ROI, retención de clientes, optimización de costes).`,
  });

  // 3 Competency Pillars (Cards)
  const colW = 2.8;
  const colY = 1.5;
  const colH = 2.45;

  addCard(s2, pres, {
    x: 0.6,
    y: colY,
    w: colW,
    h: colH,
    badge: 'PILAR 1 • PREDICTIVO',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Modelado Predictivo & ML',
    description: 'Diseño, entrenamiento y validación de algoritmos supervisados y no supervisados.',
    items: [
      'Ingeniería de variables y preprocesamiento riguroso.',
      'Algoritmos de regresión y ensamble (XGBoost / LightGBM).',
      'Segmentación no supervisada (K-Means / PCA).',
      'Validación cruzada y métricas orientadas al negocio.',
    ],
  });

  addCard(s2, pres, {
    x: 3.6,
    y: colY,
    w: colW,
    h: colH,
    badge: 'PILAR 2 • COGNITIVO',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Inteligencia Cognitiva & NLP',
    description: 'Extracción de conocimiento semántico a partir de lenguaje natural y fuentes complejas.',
    items: [
      'Pipelines de preprocesamiento y tokenización moderna.',
      'Representaciones densas (Embeddings & Transformers).',
      'Análisis de sentimiento y Voice of the Customer (VoC).',
      'Integración de APIs cognitivas y arquitecturas RAG.',
    ],
  });

  addCard(s2, pres, {
    x: 6.6,
    y: colY,
    w: colW,
    h: colH,
    badge: 'PILAR 3 • VISUALIZACIÓN',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Visualización & Storytelling',
    description: 'Traducción de hallazgos analíticos complejos en paneles de toma de decisiones.',
    items: [
      'Principios de percepción visual y gramática de gráficos.',
      'Arquitectura de dashboards analíticos interactivos.',
      'Presentación transparente de incertidumbre y riesgo.',
      'Diseño de interfaces en Streamlit y Power BI.',
    ],
  });

  // Bottom callout
  addCalloutBox(s2, pres, {
    x: 0.6,
    y: 4.1,
    w: 8.8,
    h: 0.95,
    type: 'info',
    title: 'COMPROMISO FORMATIVO: DEL CONCEPTO AL PROYECTO OPERATIVO',
    text: 'Al finalizar las 15 horas, cada participante no solo dominará el corpus teórico del temario oficial, sino que habrá construido un repositorio de código funcional con 5 laboratorios prácticos y un proyecto transversal integrador listo para su adaptación en entornos profesionales.',
  });

  // -------------------------------------------------------------
  // SLIDE 3: Cronograma y Estructura en 6 Módulos (15 Horas)
  // -------------------------------------------------------------
  state.slideCount++;
  const s3 = createContentSlide(pres, {
    category: 'Módulo 0 • Organización del Curso',
    title: 'Estructura Modular del Programa y Cronograma (15 Horas)',
    subtitle: 'Distribución equilibrada entre fundamentos conceptuales, arquitecturas y laboratorios de código',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `ESTRUCTURA Y CRONOGRAMA DE LAS 15 HORAS (10 minutos)
- Distribución Temporal del Programa:
  • Módulo 1 (2.5h): De los datos a las decisiones y ciclo de vida de proyectos (CRISP-DM).
  • Módulo 2 (2.5h): Fundamentos cognitivos, APIs multimodales y arquitecturas RAG.
  • Módulo 3 (3.5h): El núcleo del machine learning supervisado y no supervisado. Es el módulo de mayor carga horaria por su peso en el temario oficial.
  • Módulo 4 (2.5h): Procesamiento de lenguaje natural y análisis de sentimientos.
  • Módulo 5 (2.0h): Visualización avanzada y diseño de dashboards ejecutivos.
  • Módulo 6 (1.5h): Casos de uso de referencia, MLOps, ética y proyecto final integrador.
- Metodología en el Aula:
  Cada módulo concluye con un laboratorio práctico específico. Los alumnos dispondrán de los notebooks con código esqueleto y soluciones guiadas para garantizar que nadie se quede atrás por problemas de entorno.
- Preguntas Frecuentes:
  Los materiales y notebooks se ejecutan en Google Colab o Jupyter local con Python 3.10+. No se requieren GPUs avanzadas para los ejercicios básicos del curso.`,
  });

  // Structured Table of Modules
  addStyledTable(s3, pres, {
    x: 0.6,
    y: 1.5,
    w: 8.8,
    h: 3.5,
    colW: [1.1, 2.3, 1.8, 2.4, 1.2],
    headers: ['Módulo', 'Denominación Temática', 'Enfoque Técnico', 'Laboratorio Práctico Incluido', 'Duración'],
    alignCols: ['left', 'left', 'left', 'left', 'center'],
    rows: [
      ['Módulo 1', 'Introducción a la Analítica Avanzada', 'Madurez analítica, CRISP-DM, Lakehouse', 'Lab 1: Diagnóstico y Calidad de Datos (EDA)', '2.5 h'],
      ['Módulo 2', 'Fundamentos de Inteligencia Cognitiva', 'Sistemas cognitivos, APIs, Embeddings, RAG', 'Lab 2: Extracción Semántica con APIs/LLM', '2.5 h'],
      ['Módulo 3', 'Modelos Predictivos y Machine Learning', 'Supervisado/No supervisado, XGBoost, CrossVal', 'Lab 3: Modelo Predictivo de Churn con SHAP', '3.5 h'],
      ['Módulo 4', 'Análisis de Sentimientos y NLP', 'Preprocesamiento, Transformers, VoC', 'Lab 4: Pipeline de Sentimiento con Hugging Face', '2.5 h'],
      ['Módulo 5', 'Visualización de Datos Avanzada', 'Gestalt, Dashboards ejecutivos, Streamlit', 'Lab 5: Construcción de Dashboard Interactivo', '2.0 h'],
      ['Módulo 6', 'Casos Prácticos, MLOps y Proyecto', 'Arquitectura E2E, Drift, XAI, Retención 360°', 'Proyecto Final Integrador Transversal', '1.5 h'],
    ],
  });
}

module.exports = buildModule0;
