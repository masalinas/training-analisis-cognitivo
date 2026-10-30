// generator/modules/module6_cases_projects.js
// Module 6: Casos Prácticos, MLOps, Proyecto Integrador y Cierre (Slides 36 - 41)

const { createCoverSlide, createModuleSeparator, createContentSlide, addCard, addStyledTable, addCalloutBox } = require('../helpers');
const config = require('../config');
const colors = config.colors;

function buildModule6(pres, state) {
  // -------------------------------------------------------------
  // SLIDE 36: Separador Módulo 6
  // -------------------------------------------------------------
  state.slideCount++;
  createModuleSeparator(pres, {
    moduleNumber: '6',
    duration: '1.5 HORAS LECTIVAS',
    title: 'Casos Prácticos, Proyectos y Cierre',
    subtitle: 'De la Experimentación a la Operación Real: Arquitecturas End-to-End, MLOps, Ética y Proyecto Integrador',
    topics: [
      'Arquitectura de referencia industrial para soluciones predictivas y cognitivas.',
      'Estudio de caso de éxito: hiperpersonalización y retención 360° con ROI demostrado.',
      'MLOps en producción: monitorización de Data Drift, Concept Drift y gobernanza ética (EU AI Act).',
      'Metodología y rúbrica de evaluación para el Proyecto Final Integrador.',
      'Conclusiones del programa, hoja de ruta del profesional y turno de debate.',
    ],
    labName: 'Proyecto Final Integrador Transversal',
    labGoal: 'Resolución end-to-end de un caso de negocio aplicando los 5 módulos formativos.',
    labDeliverable: 'Repositorio de código completo, pipeline reproducible y presentación ejecutiva.',
    notes: `INTRODUCCIÓN AL MÓDULO 6 (10 minutos)
- Guía del Instructor:
  Llegamos al módulo de consolidación y cierre del curso (1.5 horas). El objetivo pedagógico es integrar todas las piezas del puzzle que hemos ido trabajando por separado:
  1. La ingeniería y calidad de datos (Módulo 1).
  2. Los servicios cognitivos y búsqueda semántica (Módulo 2).
  3. Los algoritmos predictivos y ensambles (Módulo 3).
  4. La extracción semántica y análisis de sentimientos (Módulo 4).
  5. La visualización ejecutiva en dashboards interactivos (Módulo 5).
- Enfoque de Producción:
  Hacer reflexionar a los alumnos sobre el "Valle de la Muerte" del Machine Learning: más del 80% de los modelos desarrollados en cuadernos de ciencia de datos nunca llegan a operar en producción por carecer de una arquitectura robusta de MLOps y gobernanza.`,
  });

  // -------------------------------------------------------------
  // SLIDE 37: Arquitectura End-to-End de una Solución Cognitiva
  // -------------------------------------------------------------
  state.slideCount++;
  const s37 = createContentSlide(pres, {
    category: 'Módulo 6 • Arquitectura Integral',
    title: 'Arquitectura Industrial End-to-End de Analítica e Inteligencia Cognitiva',
    subtitle: 'Blueprint tecnológico completo: desde la ingesta heterogénea hasta la acción automatizada',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `ARQUITECTURA INDUSTRIAL DE REFERENCIA (20 minutos)
- Explicación Técnica para el Docente:
  Analizar detenidamente el diagrama de bloques modular de 4 capas:
  1. Capa de Ingesta & DataOps:
     - Fuentes heterogéneas: streaming en tiempo real (Apache Kafka, Azure Event Hubs) para clicks y eventos de usuario; ingesta batch (Airflow, dbt) para transacciones del ERP/CRM.
     - Aterrizaje en Lakehouse transaccional (Delta Lake sobre S3/ADLS/GCS).
  2. Capa de Modelado y MLOps:
     - Feature Store (Feast / Hopsworks): comparte variables entre offline (entrenamiento) y online (inferencia).
     - CI/CD de Machine Learning: orquestación con MLflow y pipelines automatizados en contenedores (Kubeflow / Vertex AI).
  3. Capa de Inferencia Híbrida:
     - Inferencia Batch nocturna: cálculo masivo de scores de propensión para millones de clientes.
     - Inferencia en Tiempo Real (Serving API): microservicios FastAPI / Triton que reciben solicitudes vía REST/gRPC y devuelven predicciones en < 50 ms.
  4. Capa de Consumo y Observabilidad:
     - Dashboards interactivos (Streamlit / Power BI) para supervisión ejecutiva.
     - Monitor de Drift (Evidently AI): audita continuamente si la distribución de los datos entrantes o el rendimiento del modelo se degradan.`,
  });

  // 4 Horizontal Architectural Layers
  const arcW = 2.05;
  const arcGap = 0.2;
  const startArc = 0.6;
  const arcY = 1.5;
  const arcH = 2.3;

  const archLayers = [
    {
      badge: 'CAPA 1 • INGESTA',
      badgeBg: colors.cardBgAlt,
      badgeColor: colors.textMuted,
      title: 'DataOps & Lakehouse',
      desc: 'Captura y gobierno de datos heterogéneos.',
      items: [
        'Streaming: Kafka / Event Hubs para telemetría.',
        'Batch: Airflow + dbt para transacciones ERP/CRM.',
        'Lakehouse ACID: Delta Lake / Apache Iceberg.',
        'Catálogo de datos unificado y linaje.',
      ],
    },
    {
      badge: 'CAPA 2 • MLOPS',
      badgeBg: colors.purpleBg,
      badgeColor: colors.purple,
      title: 'Plataforma de Modelado',
      desc: 'Entrenamiento, tracking y versionado.',
      items: [
        'Feature Store sincronizado (Online/Offline).',
        'Experiment Tracking con MLflow / Weights&Biases.',
        'Pipelines de CI/CD para reentrenamiento continuo.',
        'Registro de modelos con firmas y metadatos.',
      ],
    },
    {
      badge: 'CAPA 3 • INFERENCIA',
      badgeBg: colors.iceBlue,
      badgeColor: colors.steelBlue,
      title: 'Serving & Servicios',
      desc: 'Inferencia predictiva y cognitiva escalable.',
      items: [
        'Microservicios de baja latencia con FastAPI / Triton.',
        'APIs cognitivas y LLMs orquestados con LangChain.',
        'Bases de datos vectoriales para RAG corporativo.',
        'Balanceo de carga y autoescalado en Kubernetes.',
      ],
    },
    {
      badge: 'CAPA 4 • ACCIÓN',
      badgeBg: colors.emeraldBg,
      badgeColor: colors.emerald,
      title: 'Consumo & Observabilidad',
      desc: 'Decisión automatizada y auditoría.',
      items: [
        'Dashboards ejecutivos en Streamlit / Power BI.',
        'Disparo de webhooks hacia CRM (Next Best Action).',
        'Monitorización de Data Drift con Evidently AI.',
        'Auditoría continua de explicabilidad SHAP.',
      ],
    },
  ];

  archLayers.forEach((layer, idx) => {
    const xPos = startArc + idx * (arcW + arcGap);
    addCard(s37, pres, {
      x: xPos,
      y: arcY,
      w: arcW,
      h: arcH,
      badge: layer.badge,
      badgeBg: layer.badgeBg,
      badgeColor: layer.badgeColor,
      title: layer.title,
      titleSize: 11,
      description: layer.desc,
      descriptionSize: 8.5,
      items: layer.items,
      itemSize: 8,
    });
  });

  // Callout Box explaining Training-Serving Parity
  addCalloutBox(s37, pres, {
    x: 0.6,
    y: 3.95,
    w: 8.8,
    h: 1.1,
    type: 'success',
    title: 'PARIDAD ENTRE ENTRENAMIENTO Y SERVICIO (TRAINING-SERVING SKEW)',
    text: 'El mayor motivo de fallo de modelos en producción es la divergencia entre cómo se calcularon las variables durante la fase de ciencia de datos y cómo se calculan en la API en tiempo real. La adopción de un Feature Store centralizado garantiza que la misma definición matemática de variable (código reutilizado) sirva tanto al entrenamiento sobre terabytes de datos históricos como a la inferencia sobre un único evento HTTP en milisegundos.',
  });

  // -------------------------------------------------------------
  // SLIDE 38: Caso de Éxito Empresarial: Hiperpersonalización y Retención 360°
  // -------------------------------------------------------------
  state.slideCount++;
  const s38 = createContentSlide(pres, {
    category: 'Módulo 6 • Caso de Estudio Real',
    title: 'Caso de Éxito: Hiperpersonalización y Retención de Clientes 360°',
    subtitle: 'Implementación integral en una multinacional de servicios con métricas de retorno cuantificadas',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `ESTUDIO DE CASO REAL: RETENCIÓN 360° (20 minutos)
- Guía para el Instructor:
  Desgranar un caso de implantación real en una operadora de telecomunicaciones / banca digital con 3 millones de clientes activos:
  1. El Desafío Inicial:
     - Tasa de fuga mensual (Churn) del 3.2%, lo que suponía la pérdida de casi 100.000 clientes al año.
     - Quejas crecientes en call centers por ofertas genéricas e inoportunas.
     - Desconexión total entre el departamento de marketing (promociones) y soporte técnico (incidencias).
  2. La Solución Técnica Implantada:
     - Modelo Predictivo de Churn con XGBoost reentrenado semanalmente sobre el Lakehouse corporativo.
     - Análisis de Sentimiento y Detección de Temas con Transformers sobre transcripciones de llamadas y tickets de chat.
     - Motor Cognitivo de "Next Best Action" que cruza el score de Churn con el análisis de sentimiento para sugerir la oferta personalizada óptima.
  3. Los Resultados de Negocio Cuantificados:
     - Reducción del Churn mensual del 3.2% al 2.4% (ahorro neto verificado de 4.2 millones de euros en el primer año).
     - La tasa de aceptación de ofertas de retención subió del 11% al 28%.
     - El tiempo de resolución en call centers se redujo en un 35% gracias al resumen cognitivo automático del historial de quejas.`,
  });

  // 3 Large Structured Cards: Challenge, Solution, Business Impact
  const csW = 2.8;
  const csY = 1.5;
  const csH = 3.5;

  addCard(s38, pres, {
    x: 0.6,
    y: csY,
    w: csW,
    h: csH,
    badge: '1 • EL DESAFÍO DE NEGOCIO',
    badgeBg: colors.roseBg,
    badgeColor: colors.rose,
    title: 'Pérdida de Cartera y Quejas',
    description: 'Compañía de telecomunicaciones con 3M de clientes y fuga acelerada.',
    items: [
      { text: 'Tasa de Churn Mensual:', bold: true },
      '3.2% sostenido (pérdida anual de ~115.000 clientes).',
      { text: 'Saturación Operativa:', bold: true },
      'Incremento del 40% en quejas de clientes en soporte técnico.',
      { text: 'Falta de Contexto:', bold: true },
      'Ofertas de retención genéricas que molestaban al usuario enfadado.',
      { text: 'Coste Financiero:', bold: true },
      'Impacto negativo estimado en 18M€ anuales de facturación.',
    ],
    itemSize: 8.5,
  });

  addCard(s38, pres, {
    x: 3.6,
    y: csY,
    w: csW,
    h: csH,
    badge: '2 • LA SOLUCIÓN COGNITIVA',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Arquitectura Integrada',
    description: 'Fusión de analítica avanzada predictiva con procesamiento cognitivo.',
    items: [
      { text: 'Modelo XGBoost de Churn:', bold: true },
      'Scoring probabilístico diario de la cartera con PR-AUC de 0.88.',
      { text: 'Análisis VoC en Streaming:', bold: true },
      'Clasificación de polaridad y emociones en transcripciones de voz.',
      { text: 'Next Best Action (NBA):', bold: true },
      'Motor de decisión prescriptivo con políticas personalizadas.',
      { text: 'Dashboard Operativo:', bold: true },
      'Interfaz Streamlit conectada al CRM de los teleoperadores.',
    ],
    itemSize: 8.5,
  });

  addCard(s38, pres, {
    x: 6.6,
    y: csY,
    w: csW,
    h: csH,
    badge: '3 • IMPACTO Y RETORNO (ROI)',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Resultados Cuantificados',
    description: 'Retorno de inversión demostrado en los primeros 12 meses de operación.',
    items: [
      { text: 'Reducción Neta de Churn:', bold: true },
      'Bajada del 3.2% al 2.4% (ahorro directo de 4.2M€ anuales).',
      { text: 'Conversión de Campañas:', bold: true },
      'Incremento del 11% al 28% en la aceptación de promociones.',
      { text: 'Eficiencia en Soporte:', bold: true },
      'Reducción del 35% en el tiempo medio de atención por ticket.',
      { text: 'Payback del Proyecto:', bold: true },
      'Recuperación total de la inversión en tecnología en solo 4.5 meses.',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 39: MLOps, Monitorización y Gobernanza Ética
  // -------------------------------------------------------------
  state.slideCount++;
  const s39 = createContentSlide(pres, {
    category: 'Módulo 6 • MLOps y Regulación',
    title: 'MLOps, Monitorización de Deriva (Drift) y Gobernanza Ética',
    subtitle: 'Asegurando la estabilidad operativa y el cumplimiento del marco legal europeo (EU AI Act)',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `MLOPS Y GOBERNANZA ÉTICA EN IA (20 minutos)
- Guía para el Instructor:
  Explicar los dos tipos de degradación que sufre cualquier modelo de Machine Learning en el mundo real:
  1. Data Drift (Deriva de Datos):
     - Cambia la distribución de las variables de entrada $P(X)$, aunque la relación con la etiqueta permanezca.
     - Ejemplo: Una devaluación de la moneda altera bruscamente los importes de las compras o la pirámide de edad de los clientes cambia tras una campaña de marketing.
     - Detección: Pruebas estadísticas de Kolmogorov-Smirnov (variables continuas) o Population Stability Index (PSI).
  2. Concept Drift (Deriva de Concepto):
     - Cambia la relación subyacente entre las variables y el objetivo $P(y|X)$.
     - Ejemplo: Los patrones de fraude mutan de la noche a la mañana porque los atacantes aprenden a evadir las reglas del modelo; o el comportamiento de los consumidores cambia radicalmente tras una pandemia.
  3. El Marco Regulatorio Europeo (EU AI Act & GDPR):
     - Clasificación por niveles de riesgo: Inaceptable (prohibido), Alto Riesgo (exige auditorías rigurosas, supervisión humana, trazabilidad de datos y mitigación de sesgos), Riesgo Limitado (transparencia obligatoria) y Mínimo.
     - Derecho a la Explicación (GDPR Art. 22): Prohibición de decisiones automatizadas que afecten legalmente a una persona sin capacidad de aportar una explicación comprensible (uso de SHAP/LIME).`,
  });

  // 3 Pillars: Data Drift, Concept Drift, Regulatory Governance
  const mloW = 2.8;
  const mloY = 1.5;
  const mloH = 3.5;

  addCard(s39, pres, {
    x: 0.6,
    y: mloY,
    w: mloW,
    h: mloH,
    badge: 'DEGRADACIÓN 1 • ENTRADA',
    badgeBg: colors.amberBg,
    badgeColor: colors.amber,
    title: 'Data Drift (Deriva de Datos)',
    description: 'Variación en la distribución marginal de las variables $P(X)$ sin cambio en la etiqueta.',
    items: [
      { text: 'Causa Habitual:', bold: true },
      'Cambios estacionales, aperturas a nuevos mercados o cambios de comportamiento social.',
      { text: 'Métricas de Detección:', bold: true },
      'Test Kolmogorov-Smirnov (KS), Divergencia KL, Population Stability Index (PSI > 0.25 alerta roja).',
      { text: 'Solución Operativa:', bold: true },
      'Reentrenamiento automatizado con ventanas temporales móviles recientes.',
    ],
    itemSize: 8.5,
  });

  addCard(s39, pres, {
    x: 3.6,
    y: mloY,
    w: mloW,
    h: mloH,
    badge: 'DEGRADACIÓN 2 • RELACIÓN',
    badgeBg: colors.roseBg,
    badgeColor: colors.rose,
    title: 'Concept Drift (Deriva de Concepto)',
    description: 'Transformación de la relación estadística entre variables y objetivo $P(y|X)$.',
    items: [
      { text: 'Causa Habitual:', bold: true },
      'Nuevos patrones de fraude, crisis macroeconómicas, cambios en la competencia.',
      { text: 'Impacto Inmediato:', bold: true },
      'Caída en picado del AUC o F1-score aunque los datos de entrada parezcan normales.',
      { text: 'Solución Operativa:', bold: true },
      'Modelos adaptativos online, detección de puntos de cambio y re-calibración de umbrales.',
    ],
    itemSize: 8.5,
  });

  addCard(s39, pres, {
    x: 6.6,
    y: mloY,
    w: mloW,
    h: mloH,
    badge: 'GOBERNANZA • LEGAL Y ÉTICA',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Marco Regulatorio (EU AI Act)',
    description: 'Auditoría ética, transparencia y cumplimiento normativo estricto.',
    items: [
      { text: 'Clasificación por Riesgo:', bold: true },
      'Sistemas de alto riesgo (scoring crediticio, RRHH, salud) exigen supervisión humana obligatoria.',
      { text: 'Derecho a Explicación (GDPR):', bold: true },
      'Justificación matemática de decisiones denegatorias mediante valores SHAP auditables.',
      { text: 'Control de Sesgos Discriminatorios:', bold: true },
      'Auditorías de disparidad de impacto por género, edad u origen.',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 40: Proyecto Integrador: Guía de Ejecución y Rúbrica
  // -------------------------------------------------------------
  state.slideCount++;
  const s40 = createContentSlide(pres, {
    category: 'Módulo 6 • Evaluación del Curso',
    title: 'Proyecto Final Integrador: Guía de Implementación y Rúbrica',
    subtitle: 'Consolidación transversal de los 5 laboratorios en un caso empresarial aplicable',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `PROYECTO FINAL INTEGRADOR (20 minutos)
- Guía de Evaluación para el Docente:
  Presentar las bases del trabajo final que acreditará las 15 horas de formación:
  1. Opciones de Vertical de Negocio a Elegir por los Alumnos:
     - Vertical Retail / E-commerce: Predicción de churn + análisis de opiniones de producto + dashboard de inventario prescriptivo.
     - Vertical Banca / Fintech: Detección de impago crediticio + extracción semántica de contratos de préstamo + panel de riesgos.
     - Vertical Salud Digital: Predicción de readmisión de pacientes + análisis de notas clínicas médicas + asistente de triaje.
  2. Los 5 Hitos Técnicos Obligatorios:
     - Hito 1: Auditoría de calidad de datos y preprocesamiento con pipelines estancos.
     - Hito 2: Entrenamiento y tuning de un modelo XGBoost con validación cruzada estratificada.
     - Hito 3: Enriquecimiento cognitivo con análisis de sentimiento y modelado de tópicos.
     - Hito 4: Despliegue de un dashboard interactivo en Streamlit con filtros dinámicos y explicabilidad XAI.
     - Hito 5: Presentación ejecutiva de 10 minutos enfocada al impacto financiero y ROI.
  3. Criterios de Calificación:
     - Rigor metodológico y prevención de data leakage: 30%.
     - Calidad del código y reproducibilidad: 25%.
     - Interfaz visual y storytelling: 25%.
     - Justificación de negocio y defensa oral: 20%.`,
  });

  // 2 Large Cards: Hitos & Rubric
  addCard(s40, pres, {
    x: 0.6,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'ESTRUCTURA DEL PROYECTO',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Las 5 Fases del Proyecto Integrador',
    description: 'Flujo de trabajo para resolver un caso de negocio transversal de extremo a extremo:',
    items: [
      { text: 'Fase 1 • DataOps & EDA:', bold: true },
      'Auditoría estadística, imputación y feature engineering en pipelines scikit-learn.',
      { text: 'Fase 2 • Modelado Predictivo:', bold: true },
      'Entrenamiento de XGBoost, tuning con Optuna y fijación de umbral por costes.',
      { text: 'Fase 3 • Inteligencia Cognitiva:', bold: true },
      'Análisis de sentimiento con Hugging Face y extracción de tópicos de clientes.',
      { text: 'Fase 4 • Visualización:', bold: true },
      'Construcción de dashboard interactivo en Streamlit con explicabilidad SHAP.',
      { text: 'Fase 5 • Defensa Ejecutiva:', bold: true },
      'Presentación oral de 10 minutos orientada al impacto económico y plan de MLOps.',
    ],
    itemSize: 8.5,
  });

  addCard(s40, pres, {
    x: 5.15,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'RÚBRICA DE CALIFICACIÓN OFICIAL',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Criterios de Evaluación y Ponderación',
    description: 'Parámetros objetivos para la superación del programa formativo:',
    items: [
      { text: '30% • Rigor Metodológico y Métricas:', bold: true },
      'Ausencia total de data leakage, validación cruzada correcta y justificación de métricas.',
      { text: '25% • Arquitectura y Calidad de Código:', bold: true },
      'Modularidad, reproducibilidad en notebooks, gestión de dependencias y limpieza.',
      { text: '25% • Dashboard y Percepción Visual:', bold: true },
      'Diseño intuitivo, cumplimiento del ratio datos-tinta y fluidez interactiva.',
      { text: '20% • Orientación al Negocio y Storytelling:', bold: true },
      'Capacidad de traducir hallazgos técnicos en planes de acción y retorno de inversión.',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 41: Conclusiones, Próximos Pasos y Cierre
  // -------------------------------------------------------------
  state.slideCount++;
  createCoverSlide(pres, {
    title: 'Conclusiones y Hoja de Ruta\ndel Profesional en IA y Analítica',
    subtitle: 'De la Capacitación Técnica a la Transformación Organizacional Sostenible',
    highlights: [
      { label: 'El Dato como Activo', text: 'La analítica solo genera valor cuando está alineada con decisiones críticas y cuantificables.' },
      { label: 'Sinergia Cuántica', text: 'La combinación de modelos predictivos y capacidades cognitivas es la ventaja competitiva definitiva.' },
      { label: 'Rigor y Ética', text: 'El éxito duradero exige gobernanza continua, observabilidad de MLOps y transparencia explicable.' },
    ],
    notes: `CLAUSURA Y CIERRE DEL CURSO (10 minutos)
- Guía de Despedida para el Instructor:
  1. Agradecimiento formal a todos los participantes por su dedicación y esfuerzo durante las 15 horas lectivas.
  2. Resumen de las Grandes Lecciones del Curso:
     - El Machine Learning no sustituye al criterio de negocio; lo amplifica y lo dota de rigor estadístico.
     - La inteligencia cognitiva permite democratizar el acceso a los datos no estructurados que antes se perdían en repositorios olvidados.
     - Un dashboard no es un adorno: es el volante con el que los directivos conducen la compañía.
  3. Próximos Pasos y Certificaciones Recomendadas:
     - Profundizar en arquitecturas cloud especializadas (Azure AI Engineer, AWS Machine Learning Specialty, Google Professional Data Engineer).
     - Explorar frameworks de agentes avanzados (LangGraph, CrewAI, AutoGen).
  4. Apertura del Turno Abierto de Preguntas y Networking Final.`,
  });
}

module.exports = buildModule6;
