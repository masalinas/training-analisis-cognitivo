// generator/modules/module6_cases_projects.js
// Module 6: Casos Prácticos, MLOps, Proyecto Integrador y Cierre (Slides 36 - 41)

module.exports = async function buildModule6(pres, H) {
  // -------------------------------------------------------------
  // SLIDE 36: Separador Módulo 6
  // -------------------------------------------------------------
  H.divider(pres, {
    mod: 6,
    title: 'Casos Prácticos, Proyectos y Cierre',
    subtitle: 'De la Experimentación a la Operación Real: MLOps, Ética, Proyecto Integrador y Hoja de Ruta',
    hours: '1.5 HORAS LECTIVAS',
    topics: [
      { icon: 'FaNetworkWired', text: 'Arquitectura industrial de referencia para analítica e IA' },
      { icon: 'FaChartLine', text: 'Caso de éxito: hiperpersonalización y retención 360° con ROI' },
      { icon: 'FaShieldAlt', text: 'MLOps en producción: Data Drift, Concept Drift y EU AI Act' },
      { icon: 'FaProjectDiagram', text: 'Metodología y rúbrica oficial del Proyecto Final Integrador' },
      { icon: 'FaAward', text: 'Conclusiones del programa, hoja de ruta y debate de cierre' },
    ],
    notes: {
      obj: 'Consolidar transversalmente los conocimientos del curso, analizando la transición a producción, gobernanza de modelos y el proyecto final.',
      guion: [
        'Llegamos al módulo de integración y cierre (1.5 horas). Unimos las piezas trabajadas: calidad de datos, servicios cognitivos, machine learning, NLP y dashboards.',
        'El 80% de los modelos no llegan a producción por falta de MLOps y gobernanza; analizaremos cómo superar este obstáculo.',
        'Presentaremos la rúbrica del proyecto integrador y las conclusiones estratégicas.',
      ],
      preguntas: [
        '¿Cuál es hoy el principal reto en vuestro equipo para mantener modelos actualizados tras su despliegue inicial?',
      ],
    },
  });

  // -------------------------------------------------------------
  // SLIDE 37: Arquitectura End-to-End de una Solución Cognitiva
  // -------------------------------------------------------------
  const s37 = H.slide(pres, {
    mod: 6,
    badge: 'Arquitectura Integral',
    title: 'Arquitectura Industrial End-to-End de Analítica e IA',
    notes: {
      obj: 'Conocer las cuatro capas arquitectónicas necesarias para operar soluciones analíticas y cognitivas a escala empresarial.',
      guion: [
        '1. Ingesta & DataOps: Streaming con Kafka y batch con dbt/Airflow sobre Lakehouse ACID.',
        '2. Modelado & MLOps: Feature Store centralizado y tracking de experimentos con MLflow.',
        '3. Inferencia Híbrida: Batch masivo nocturno y microservicios en tiempo real con FastAPI/Triton.',
        '4. Consumo & Observabilidad: Paneles Streamlit/BI y monitorización continua de deriva con Evidently AI.',
      ],
      preguntas: [
        '¿Qué mecanismos utilizáis para alertar si la distribución de variables entrantes difiere de la muestra de entrenamiento?',
      ],
    },
  });

  H.steps(
    s37,
    [
      {
        title: '1 · DataOps / Ingesta',
        body: 'Lakehouse Unificado\n\n• Streaming (Kafka / Event Hubs)\n• Ingesta batch con dbt y Airflow\n• Soporte ACID (Delta Lake / Iceberg)',
      },
      {
        title: '2 · MLOps / Modelado',
        body: 'Plataforma ML\n\n• Feature Store (Online/Offline)\n• Tracking con MLflow y W&B\n• Pipelines de CI/CD reproducibles',
      },
      {
        title: '3 · Serving / Inferencia',
        body: 'Inferencia Híbrida\n\n• Microservicios REST (FastAPI)\n• Inferencia batch masiva periódica\n• Orquestación RAG y Vector DB',
      },
      {
        title: '4 · Acción / Vigilancia',
        body: 'Consumo y Gobierno\n\n• Dashboards ejecutivos Streamlit\n• Detección de drift (Evidently AI)\n• Auditoría de explicabilidad SHAP',
      },
    ],
    {
      dir: 'h',
      gap: 0.3,
      size: 11,
      accent: H.COL.COBALT,
      h: 3.55,
    }
  );

  H.callout(s37, {
    x: H.CX,
    y: 5.4,
    w: H.CW,
    h: 1.1,
    kind: 'info',
    lead: 'PARIDAD ENTRE ENTRENAMIENTO Y SERVICIO (TRAINING-SERVING PARITY):',
    text: 'El fallo más común en producción es calcular variables de forma distinta en offline frente a la API online. La adopción de un Feature Store centralizado asegura que la misma lógica matemática sirva tanto al entrenamiento masivo como a la inferencia unitaria en milisegundos.',
    size: 12.5,
  });

  // -------------------------------------------------------------
  // SLIDE 38: Caso de Éxito Empresarial: Hiperpersonalización y Retención 360°
  // -------------------------------------------------------------
  const s38 = H.slide(pres, {
    mod: 6,
    badge: 'Caso de Éxito Real',
    title: 'Caso de Éxito: Retención 360° e Hiperpersonalización',
    notes: {
      obj: 'Analizar la implementación integral de analítica predictiva y NLP en una operadora con métricas de retorno cuantificadas.',
      guion: [
        'Desafío: 3.2% de churn mensual (pérdida de 115.000 clientes/año y saturación del call center).',
        'Solución: Scoring diario con XGBoost + análisis de sentimiento VoC en streaming + motor Next Best Action.',
        'Impacto: Reducción del churn al 2.4% (ahorro neto de 4.2M€) y payback del proyecto en 4.5 meses.',
      ],
      preguntas: [
        '¿Cómo justificaríais internamente la inversión en un proyecto de analítica mostrando el ahorro directo por cliente retenido?',
      ],
    },
  });

  H.cardsRow(
    s38,
    [
      {
        title: '1 · El Desafío de Negocio',
        icon: 'FaExclamationTriangle',
        tone: 'light',
        bullets: [
          { lead: 'Churn mensual:', text: '3.2% sostenido (fuga anual de ~115.000 clientes).' },
          { lead: 'Quejas en soporte:', text: 'Incremento del 40% de reclamaciones críticas.' },
          { lead: 'Falta de contexto:', text: 'Ofertas comerciales genéricas a usuarios molestos.' },
          { lead: 'Coste económico:', text: 'Pérdida anual estimada en 18 M€ de ingresos.' },
        ],
      },
      {
        title: '2 · La Solución Integrada',
        icon: 'FaRobot',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Modelo XGBoost:', text: 'Scoring diario de probabilidad de baja con PR-AUC 0.88.' },
          { lead: 'Análisis VoC:', text: 'Extracción de polaridad en llamadas y chats en directo.' },
          { lead: 'Next Best Action:', text: 'Motor prescriptivo que selecciona la mejor oferta.' },
          { lead: 'Data App:', text: 'Interfaz Streamlit para teleoperadores en call center.' },
        ],
      },
      {
        title: '3 · Impacto y Retorno (ROI)',
        icon: 'FaChartLine',
        tone: 'light',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Reducción de Churn:', text: 'Descenso al 2.4% (ahorro directo de 4.2 M€/año).' },
          { lead: 'Conversión:', text: 'Subida del 11% al 28% en aceptación de promociones.' },
          { lead: 'Eficiencia soporte:', text: 'Ahorro del 35% en tiempo de atención por caso.' },
          { lead: 'Payback:', text: 'Retorno íntegro de la inversión técnica en 4.5 meses.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12, titleSize: 15 }
  );

  // -------------------------------------------------------------
  // SLIDE 39: MLOps, Monitorización y Gobernanza Ética
  // -------------------------------------------------------------
  const s39 = H.slide(pres, {
    mod: 6,
    badge: 'MLOps y Regulación',
    title: 'MLOps: Monitorización de Drift y Marco EU AI Act',
    notes: {
      obj: 'Distinguir entre Data Drift y Concept Drift, aplicando herramientas de observabilidad y cumplimiento ético según la normativa europea.',
      guion: [
        'Data Drift: Cambia la distribución de las variables de entrada P(X). Detección con Kolmogorov-Smirnov o Population Stability Index (PSI > 0.25 alerta).',
        'Concept Drift: Cambia la relación subyacente entre variables y objetivo P(y|X). Caída en picado del AUC o F1-score.',
        'Regulación Europea (EU AI Act): Sistemas de alto riesgo exigen supervisión humana, trazabilidad de datos y derecho a la explicación (SHAP/LIME).',
      ],
      preguntas: [
        '¿Tenéis protocolos definidos para auditar si vuestros modelos discriminan por variables sensibles (edad, género)?',
      ],
    },
  });

  H.cardsRow(
    s39,
    [
      {
        title: 'Data Drift (Datos)',
        icon: 'FaChartArea',
        tone: 'light',
        bullets: [
          { lead: 'Definición:', text: 'Variación en la distribución marginal de entradas $P(X)$.' },
          { lead: 'Causa habitual:', text: 'Cambios de mercado, estacionalidad o nuevas fuentes.' },
          { lead: 'Detección:', text: 'Tests Kolmogorov-Smirnov y Population Stability Index (PSI).' },
          { lead: 'Respuesta:', text: 'Reentrenamiento automático con ventanas recientes.' },
        ],
      },
      {
        title: 'Concept Drift (Concepto)',
        icon: 'FaBolt',
        tone: 'light',
        accent: H.COL.CORAL,
        bullets: [
          { lead: 'Definición:', text: 'Mutación en la relación entre variables y objetivo $P(y|X)$.' },
          { lead: 'Causa habitual:', text: 'Nuevos patrones de fraude o cambios de hábitos sociales.' },
          { lead: 'Detección:', text: 'Caída súbita en AUC o F1-score con datos entrantes normales.' },
          { lead: 'Respuesta:', text: 'Modelos adaptativos online y ajuste de umbrales de coste.' },
        ],
      },
      {
        title: 'Marco Legal (EU AI Act)',
        icon: 'FaBalanceScale',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Alto Riesgo:', text: 'Supervisión humana obligatoria en crédito, RRHH y salud.' },
          { lead: 'Explicabilidad:', text: 'Derecho a justificación matemática comprensible (GDPR).' },
          { lead: 'Auditoría de sesgos:', text: 'Control estricto de disparidad de impacto algorítmico.' },
          { lead: 'Gobernanza:', text: 'Registro transparente de procedencia de datos y modelos.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12, titleSize: 15 }
  );

  // -------------------------------------------------------------
  // SLIDE 40: Proyecto Integrador: Guía de Ejecución y Rúbrica
  // -------------------------------------------------------------
  const s40 = H.slide(pres, {
    mod: 6,
    badge: 'Evaluación del Curso',
    title: 'Proyecto Final Integrador: Fases y Rúbrica Oficial',
    notes: {
      obj: 'Presentar las directrices de entrega del proyecto integrador transversal y los criterios de ponderación oficial.',
      guion: [
        'Los alumnos eligen una vertical de negocio (Retail, Banca o Salud) y aplican los 5 módulos formativos.',
        'Hitos: 1. EDA hermético, 2. Modelo XGBoost con tuning, 3. NLP de opiniones, 4. Dashboard Streamlit, 5. Defensa oral de 10 min.',
        'Ponderación: Rigor metodológico (30%), Calidad de código (25%), Dashboard visual (25%), Storytelling y negocio (20%).',
      ],
      preguntas: [
        '¿Tenéis ya seleccionado el dataset o la vertical corporativa para vuestro proyecto final?',
      ],
    },
  });

  H.cardsRow(
    s40,
    [
      {
        title: 'Las 5 Fases del Proyecto',
        icon: 'FaProjectDiagram',
        accent: H.COL.COBALT,
        bullets: [
          { lead: 'Fase 1 · DataOps:', text: 'Auditoría estadística, imputación y feature engineering.' },
          { lead: 'Fase 2 · Modelado:', text: 'XGBoost con tuning en Optuna y corte por costes.' },
          { lead: 'Fase 3 · Cognitivo:', text: 'Análisis de sentimiento y extracción de tópicos con NLP.' },
          { lead: 'Fase 4 · Dashboard:', text: 'Aplicación en Streamlit con explicabilidad XAI interactiva.' },
          { lead: 'Fase 5 · Defensa:', text: 'Presentación ejecutiva de 10 minutos orientada al ROI.' },
        ],
      },
      {
        title: 'Rúbrica de Calificación Oficial',
        icon: 'FaAward',
        accent: H.COL.GREEN,
        bullets: [
          { lead: '30% · Rigor Metodológico:', text: 'Ausencia de data leakage y validación cruzada correcta.' },
          { lead: '25% · Calidad de Código:', text: 'Modularidad, reproducibilidad y limpieza en Python.' },
          { lead: '25% · Percepción Visual:', text: 'Diseño intuitivo, Tufte Data-Ink ratio y reactividad fluida.' },
          { lead: '20% · Negocio & Storytelling:', text: 'Traducción de conclusiones a impacto financiero demostrable.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );

  // -------------------------------------------------------------
  // SLIDE 41: Conclusiones, Próximos Pasos y Cierre
  // -------------------------------------------------------------
  H.closing(pres, {
    mod: 6,
    title: 'Conclusiones y Hoja de Ruta del Profesional en Analítica e IA',
    points: [
      {
        icon: 'FaDatabase',
        title: 'El Dato como Activo',
        text: 'La analítica avanzada solo genera retorno sostenible cuando está alineada con decisiones operativas y métricas de impacto económico directo.',
      },
      {
        icon: 'FaBrain',
        title: 'Sinergia Cuántica',
        text: 'La fusión de algoritmos predictivos estructurados con inteligencia cognitiva sobre texto no estructurado constituye la ventaja competitiva definitiva.',
      },
      {
        icon: 'FaShieldAlt',
        title: 'Rigor y Gobernanza',
        text: 'El éxito duradero en producción exige observabilidad continua mediante MLOps, prevención de deriva y explicabilidad transparente ante la sociedad.',
      },
    ],
    notes: {
      obj: 'Sintetizar los aprendizajes clave del curso, agradecer la participación y orientar los siguientes pasos profesionales.',
      guion: [
        'Agradecemos sinceramente vuestra participación activa y dedicación durante estas 15 horas lectivas.',
        'Recordad que la tecnología evoluciona rápido, pero el rigor metodológico, la validación hermética y la orientación al negocio son principios atemporales.',
        'Próximos pasos: completar el proyecto integrador y explorar certificaciones de arquitecturas cloud en IA.',
      ],
      preguntas: [
        '¿Cuál es la primera iniciativa o modelo que pensáis implementar en vuestro puesto de trabajo tras este curso?',
      ],
    },
  });
};
