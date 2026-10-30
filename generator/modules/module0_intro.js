// generator/modules/module0_intro.js
// Module 0: Bienvenida, Encuadre y Hoja de Ruta (Slides 1 - 3)

module.exports = async function buildModule0(pres, H) {
  // -------------------------------------------------------------
  // SLIDE 1: Portada Principal
  // -------------------------------------------------------------
  H.titleSlide(pres, {
    title: 'Analítica Avanzada e\nInteligencia Cognitiva',
    subtitle: 'De los Datos a la Decisión Automatizada: Machine Learning, NLP y Dashboards Estratégicos',
    tag: 'PROGRAMA FORMATIVO EJECUTIVO · 15 HORAS',
    mainIcon: 'FaBrain',
    satIcons: [
      ['FaProjectDiagram', 8.2, 1.25],
      ['FaRobot', 12.0, 1.55],
      ['FaChartLine', 8.55, 5.15],
      ['FaDatabase', 11.85, 5.05],
    ],
    notes: {
      obj: 'Establecer el encuadre pedagógico, las expectativas formativas y la relevancia estratégica de la analítica avanzada y los sistemas cognitivos en el entorno empresarial.',
      guion: [
        'Buenos días y bienvenidos al curso de Especialización en Analítica Avanzada e Inteligencia Cognitiva. Durante las próximas 15 horas lectivas abordaremos la transición desde el análisis descriptivo tradicional hacia sistemas autónomos de recomendación y toma de decisiones.',
        'El programa conecta las matemáticas y los algoritmos con su impacto directo en la cuenta de resultados: reducción del churn, optimización de márgenes y automatización de procesos no estructurados.',
        'Metodología activa 60/40: 60% de arquitectura y rigor analítico, 40% de implementación práctica directa en cuadernos de Python con librerías líderes del ecosistema (scikit-learn, XGBoost, Hugging Face, SHAP y Streamlit).',
      ],
      preguntas: [
        '¿En qué nivel de madurez analítica situaríais actualmente a vuestra organización: descriptiva, predictiva o cognitiva?',
        '¿Cuál es el mayor cuello de botella en vuestros pipelines: la calidad de datos, la latencia de inferencia o la adopción ejecutiva?',
      ],
    },
  });

  // -------------------------------------------------------------
  // SLIDE 2: Objetivos Pedagógicos y Competencias Oficiales
  // -------------------------------------------------------------
  const s2 = H.slide(pres, {
    mod: 0,
    badge: 'Encuadre Pedagógico',
    title: 'Objetivos Oficiales y Competencias a Desarrollar',
    notes: {
      obj: 'Presentar los tres pilares competenciales del curso y el valor profesional diferencial adquirido al finalizar el programa.',
      guion: [
        'Estructuramos el curso sobre tres ejes fundamentales que cubren la cadena completa del dato inteligente.',
        'Pilar 1 (Predictivo): Dominio de técnicas supervisadas y no supervisadas, validación cruzada y métricas de coste económico.',
        'Pilar 2 (Cognitivo): Extracción de información latente en lenguaje natural mediante embeddings y modelos del lenguaje.',
        'Pilar 3 (Visualización): Construcción de interfaces ejecutivas que traduzcan la incertidumbre probabilística en decisiones de negocio seguras.',
      ],
      preguntas: [
        '¿Cómo presentáis hoy la incertidumbre de un modelo a un comité de dirección que solo pide respuestas binarias (sí/no)?',
      ],
    },
  });

  H.cardsRow(
    s2,
    [
      {
        title: 'Modelado Predictivo & ML',
        icon: 'FaCogs',
        tone: 'light',
        bullets: [
          { lead: 'Modelos avanzados:', text: 'Regresión, ensembles (XGBoost) y clusterización.' },
          { lead: 'Preprocesamiento:', text: 'Imputación, escalado e ingeniería de variables.' },
          { lead: 'Validación robusta:', text: 'Estratificación temporal, ROC/PR y matriz de confusión.' },
          { lead: 'Explicabilidad:', text: 'Interpretación de caja negra mediante valores SHAP.' },
        ],
      },
      {
        title: 'Inteligencia Cognitiva & NLP',
        icon: 'FaBrain',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Procesamiento:', text: 'Tokenización, limpieza y lematización multicapa.' },
          { lead: 'Espacios densos:', text: 'Embeddings y Transformers preentrenados.' },
          { lead: 'Minería de opinión:', text: 'Análisis de sentimiento y Voice of Customer (VoC).' },
          { lead: 'Arquitectura RAG:', text: 'Recuperación semántica y generación asistida.' },
        ],
      },
      {
        title: 'Visualización & Storytelling',
        icon: 'FaChartLine',
        tone: 'light',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Gramática visual:', text: 'Principios perceptivos Gestalt para paneles analíticos.' },
          { lead: 'Dashboards ágiles:', text: 'Cuadros de mando interactivos con Streamlit.' },
          { lead: 'Gestión del riesgo:', text: 'Incertidumbre, intervalos de confianza y alertas.' },
          { lead: 'Impacto ejecutivo:', text: 'Traducción de métricas a euros de negocio.' },
        ],
      },
    ],
    { y: 1.75, h: 3.5, size: 12, titleSize: 15 }
  );

  H.callout(s2, {
    x: H.CX,
    y: 5.45,
    w: H.CW,
    h: 1.05,
    kind: 'info',
    lead: 'COMPROMISO FORMATIVO:',
    text: 'Al concluir las 15 horas lectivas, cada participante dispondrá de un repositorio funcional con 5 laboratorios prácticos en Python y un proyecto transversal integrador listo para su adaptación corporativa.',
    size: 12.5,
  });

  // -------------------------------------------------------------
  // SLIDE 3: Cronograma y Estructura en 6 Módulos (15 Horas)
  // -------------------------------------------------------------
  const s3 = H.slide(pres, {
    mod: 0,
    badge: 'Organización del Curso',
    title: 'Estructura Modular y Cronograma del Curso (15 h)',
    notes: {
      obj: 'Detallar la distribución horaria, el alcance técnico de cada módulo y los laboratorios prácticos asociados.',
      guion: [
        'El temario está distribuido en 6 bloques temáticos progresivos que suman las 15 horas lectivas oficiales.',
        'El Módulo 3 concentra 3.5 horas lectivas por ser el corazón del modelado matemático y la selección algorítmica.',
        'Todos los módulos combinan fundamentación conceptual con un laboratorio práctico guiado con notebooks interactivos.',
      ],
      preguntas: [
        '¿Tenéis ya configurado vuestro entorno de ejecución (Jupyter local, Colab o contenedor Docker)?',
      ],
    },
  });

  H.table(
    s3,
    [
      ['Módulo', 'Denominación Temática', 'Enfoque Técnico', 'Laboratorio Práctico Incluido', 'Duración'],
      ['Módulo 1', 'Introducción a la Analítica Avanzada', 'Madurez analítica, ciclo CRISP-DM y Lakehouse moderno', 'Lab 1: Profilado y Calidad de Datos (EDA)', '2.5 h'],
      ['Módulo 2', 'Fundamentos de Inteligencia Cognitiva', 'Sistemas cognitivos, APIs multimodales, Embeddings y RAG', 'Lab 2: Extracción Semántica y Embeddings', '2.5 h'],
      ['Módulo 3', 'Modelos Predictivos y Machine Learning', 'Supervisado/No supervisado, XGBoost, Validación y SHAP', 'Lab 3: Modelo Predictivo de Churn con XAI', '3.5 h'],
      ['Módulo 4', 'Análisis de Sentimientos y NLP', 'Preprocesamiento, Transformers, Voice of Customer', 'Lab 4: Pipeline de Sentimiento con Hugging Face', '2.5 h'],
      ['Módulo 5', 'Visualización de Datos Avanzada', 'Percepción Gestalt, Storytelling y Dashboards Streamlit', 'Lab 5: Cuadro de Mando Interactivo con KPIs', '2.0 h'],
      ['Módulo 6', 'Casos Prácticos, MLOps y Proyecto', 'Arquitectura E2E, Monitorización de Drift y Ética IA', 'Proyecto Final Integrador Transversal', '1.5 h'],
    ],
    {
      y: 1.85,
      w: H.CW,
      colW: [1.8, 3.4, 2.7, 3.0, 1.2],
      size: 11.5,
      headSize: 12.5,
      maxH: 4.8,
    }
  );
};
