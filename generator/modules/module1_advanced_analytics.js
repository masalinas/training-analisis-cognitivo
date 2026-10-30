// generator/modules/module1_advanced_analytics.js
// Module 1: Introducción a la Analítica Avanzada (Slides 4 - 9)

module.exports = async function buildModule1(pres, H) {
  // -------------------------------------------------------------
  // SLIDE 4: Separador Módulo 1
  // -------------------------------------------------------------
  H.divider(pres, {
    mod: 1,
    title: 'Introducción a la Analítica Avanzada',
    subtitle: 'Conceptos Clave, Continuo de Madurez y Ciclo de Vida de Proyectos de Datos',
    hours: '2.5 HORAS LECTIVAS',
    topics: [
      { icon: 'FaProjectDiagram', text: 'De los datos a la decisión: continuo de madurez analítica' },
      { icon: 'FaChartLine', text: 'Diferencias entre analítica descriptiva, predictiva y prescriptiva' },
      { icon: 'FaSyncAlt', text: 'El ciclo metodológico de proyectos: CRISP-DM y TDSP' },
      { icon: 'FaDatabase', text: 'Arquitecturas modernas: Lakehouse, Delta y Feature Stores' },
      { icon: 'FaFlask', text: 'Laboratorio 1: Profilado y auditoría de calidad de datos' },
    ],
    notes: {
      obj: 'Sentar las bases metodológicas, arquitectónicas y taxonómicas de la analítica moderna en el contexto corporativo.',
      guion: [
        'Iniciamos el Módulo 1 distinguiendo con claridad entre Business Intelligence tradicional y analítica avanzada.',
        'La mayoría de proyectos fallan por deficiencias en la formulación del problema de negocio y en la gobernanza de datos brutos.',
        'El temario articula los fundamentos con la arquitectura Lakehouse y la práctica inmediata de profilado estadístico.',
      ],
      preguntas: [
        '¿Por qué tantas organizaciones con lagos de datos siguen limitadas al reporting descriptivo en Excel o Power BI?',
      ],
    },
  });

  // -------------------------------------------------------------
  // SLIDE 5: El Continuo de Madurez Analítica (Gartner)
  // -------------------------------------------------------------
  const s5 = H.slide(pres, {
    mod: 1,
    badge: 'Madurez Analítica',
    title: 'El Continuo de Madurez Analítica (Gartner Framework)',
    notes: {
      obj: 'Comprender los cuatro estadios evolutivos de la analítica y su relación directa con el valor de negocio y la complejidad técnica.',
      guion: [
        'Presentamos las 4 etapas del modelo de Gartner a través de los ejes de valor de negocio y dificultad analítica.',
        'Descriptiva: "¿Qué pasó?". Muy asentada en BI clásico pero con bajo valor prescriptivo.',
        'Diagnóstica: "¿Por qué ocurrió?". Análisis causal y segmentación de factores raíz.',
        'Predictiva: "¿Qué ocurrirá?". Modelos de machine learning que proyectan probabilidades.',
        'Prescriptiva: "¿Qué debemos hacer?". Optimización algorítmica y automatización de la decisión óptima.',
      ],
      preguntas: [
        '¿Qué decisión de alto coste en vuestra empresa se beneficiaría hoy de pasar de descriptiva a predictiva?',
      ],
    },
  });

  H.steps(
    s5,
    [
      {
        title: '01 · Descriptiva',
        body: '¿Qué ha ocurrido?\n\n• Enfoque retrospectivo\n• Herramientas: SQL, BI, KPIs\n• Informes estáticos y cuadros de mando',
      },
      {
        title: '02 · Diagnóstica',
        body: '¿Por qué ocurrió?\n\n• Análisis causal y drill-down\n• Minería de datos y correlaciones\n• Identificación de causas raíz',
      },
      {
        title: '03 · Predictiva',
        body: '¿Qué ocurrirá?\n\n• Estimación probabilística\n• Machine Learning y series temporales\n• Scoring y alertas preventivas',
      },
      {
        title: '04 · Prescriptiva',
        body: '¿Qué debemos hacer?\n\n• Decisión y optimización\n• Programación matemática y reglas\n• Acción autónoma automatizada',
      },
    ],
    {
      dir: 'h',
      gap: 0.3,
      size: 12,
      accent: H.COL.COBALT,
      h: 3.55,
    }
  );

  H.callout(s5, {
    x: H.CX,
    y: 5.4,
    w: H.CW,
    h: 1.1,
    kind: 'tip',
    lead: 'TRANSICIÓN CLAVE:',
    text: 'Avanzar hacia la derecha del continuo multiplica el retorno económico, pero exige mayor rigor en la calidad del dato en tiempo real, gobierno de modelos y tolerancia al riesgo algorítmico.',
    size: 13,
  });

  // -------------------------------------------------------------
  // SLIDE 6: Matriz Comparativa: Descriptiva vs Predictiva vs Prescriptiva
  // -------------------------------------------------------------
  const s6 = H.slide(pres, {
    mod: 1,
    badge: 'Análisis Comparativo',
    title: 'Matriz Comparativa de Enfoques Analíticos',
    notes: {
      obj: 'Diferenciar técnicamente los cuatro niveles analíticos mediante ejemplos concretos del sector sanitario y comercial.',
      guion: [
        'Recorremos cada dimensión analítica comparando horizonte temporal, stack tecnológico, caso empresarial e impacto final.',
        'Subrayar que ningún nivel es prescindible: un buen modelo predictivo necesita cimientos descriptivos de datos fiables.',
      ],
      preguntas: [
        '¿Tenéis identificadas las restricciones operativas que impiden pasar de predicciones a decisiones automáticas prescriptivas?',
      ],
    },
  });

  H.table(
    s6,
    [
      ['Nivel Analítico', 'Horizonte', 'Herramientas Clave', 'Caso Práctico (Retail / Salud)', 'Impacto en el Negocio'],
      ['Descriptiva', 'Pasado (T-n)', 'SQL, Power BI, Dashboards OLAP', 'Informe de ventas por SKU o reingresos de pacientes en el mes.', 'Visibilidad retrospectiva del negocio.'],
      ['Diagnóstica', 'Pasado reciente', 'Python (pandas, scipy), Análisis causal', 'Detección de roturas de stock o causa de reingreso ambulatorio.', 'Comprensión de causas raíz y fallos.'],
      ['Predictiva', 'Futuro (T+1)', 'Scikit-learn, XGBoost, Prophet', 'Previsión de demanda a 14 días o scoring de riesgo de fuga/churn.', 'Reducción de inventario ocioso y pérdida.'],
      ['Prescriptiva', 'Futuro accionable', 'Optimización (Gurobi, PuLP), Heurísticas', 'Reaprovisionamiento y pricing dinámico o teleconsulta médica.', 'Maximización de márgenes y automatización.'],
    ],
    {
      y: 1.85,
      w: H.CW,
      colW: [2.0, 1.8, 2.7, 3.4, 2.2],
      size: 11.5,
      headSize: 12.5,
      maxH: 4.8,
    }
  );

  // -------------------------------------------------------------
  // SLIDE 7: Ciclo de Vida de Proyectos Analíticos (CRISP-DM & TDSP)
  // -------------------------------------------------------------
  const s7 = H.slide(pres, {
    mod: 1,
    badge: 'Metodología de Proyectos',
    title: 'Ciclo de Vida de Proyectos de Datos: De CRISP-DM a TDSP',
    notes: {
      obj: 'Comprender el carácter iterativo del proceso estándar de la industria y la distribución real del esfuerzo técnico.',
      guion: [
        'CRISP-DM sigue siendo el marco conceptual de referencia, enriquecido hoy por TDSP de Microsoft y prácticas ágiles de MLOps.',
        'El 80% del esfuerzo se concentra en las fases de Business Understanding, Data Understanding y Data Preparation.',
        'Destacar la flecha de retorno: la evaluación con negocio frecuentemente exige volver a formular hipótesis o enriquecer variables.',
      ],
      preguntas: [
        '¿Por qué un modelo con un 95% de precisión técnica puede ser rechazado por negocio en la fase de evaluación?',
      ],
    },
  });

  H.cardsGrid(
    s7,
    [
      {
        title: '01 · Negocio',
        icon: 'FaBullseye',
        bullets: [
          { lead: 'Objetivo:', text: 'Traducir la necesidad en métricas analíticas.' },
          { lead: 'Entregable:', text: 'KPIs, límites de coste y diseño de caso.' },
        ],
      },
      {
        title: '02 · Comprensión',
        icon: 'FaSearch',
        bullets: [
          { lead: 'Exploración:', text: 'Auditoría de calidad y patrones con EDA.' },
          { lead: 'Detección:', text: 'Nulos, outliers y desbalanceo de clases.' },
        ],
      },
      {
        title: '03 · Preparación',
        icon: 'FaBroom',
        bullets: [
          { lead: 'Ingeniería:', text: 'Limpieza, imputación y codificación.' },
          { lead: 'Partición:', text: 'División rigurosa train / val / test.' },
        ],
      },
      {
        title: '04 · Modelado',
        icon: 'FaBrain',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Algoritmos:', text: 'Entrenamiento de modelos supervisados.' },
          { lead: 'Ajuste:', text: 'Validación cruzada y tuning fino.' },
        ],
      },
      {
        title: '05 · Evaluación',
        icon: 'FaCheckCircle',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Negocio:', text: 'Validación de impacto económico y XAI.' },
          { lead: 'Decisión:', text: 'Aprobación o retroceso a fases previas.' },
        ],
      },
      {
        title: '06 · Despliegue',
        icon: 'FaRocket',
        accent: H.COL.CORAL,
        bullets: [
          { lead: 'Puesta en marcha:', text: 'APIs en tiempo real o por lotes.' },
          { lead: 'MLOps:', text: 'Monitorización de drift y reentrenamiento.' },
        ],
      },
    ],
    {
      cols: 3,
      gap: 0.25,
      size: 11.5,
      titleSize: 14,
      h: 4.8,
    }
  );

  // -------------------------------------------------------------
  // SLIDE 8: Arquitectura Moderna de Datos para Analítica Avanzada
  // -------------------------------------------------------------
  const s8 = H.slide(pres, {
    mod: 1,
    badge: 'Arquitectura de Datos',
    title: 'Arquitectura Moderna de Datos: El Paradigma Lakehouse',
    notes: {
      obj: 'Presentar la arquitectura Medallion y el papel del Feature Store para unificar entrenamiento y servicio en producción.',
      guion: [
        'Evolución histórica: del Data Warehouse rígido al Data Lake no estructurado, culminando en el Lakehouse con soporte ACID (Delta Lake / Apache Iceberg).',
        'Arquitectura Medallion: Bronze (ingesta raw inmutable), Silver (datos curados y tipados) y Gold (agregaciones y Feature Stores).',
        'El Feature Store previene el Training-Serving Skew al compartir la misma definición de variables entre offline y online.',
      ],
      preguntas: [
        '¿Cómo garantizáis en vuestros sistemas que una variable se calcule exactamente igual en el entrenamiento que en la API de inferencia?',
      ],
    },
  });

  H.cardsRow(
    s8,
    [
      {
        title: 'Capa Bronce (Raw)',
        icon: 'FaLayerGroup',
        tone: 'light',
        bullets: [
          { lead: 'Ingesta pura:', text: 'Aterrizaje raw sin transformar desde ERP, CRM, IoT o APIs.' },
          { lead: 'Formatos:', text: 'JSON, Parquet, CSV, audio y texto libre.' },
          { lead: 'Trazabilidad:', text: 'Historial inmutable de auditoría completa.' },
        ],
      },
      {
        title: 'Capa Plata (Curada)',
        icon: 'FaFilter',
        tone: 'light',
        bullets: [
          { lead: 'Calidad:', text: 'Esquemas validados, deduplicación y tipado.' },
          { lead: 'Gobernanza:', text: 'Transacciones ACID con Delta Lake e Iceberg.' },
          { lead: 'Consumo:', text: 'Base limpia para analítica y exploración ML.' },
        ],
      },
      {
        title: 'Capa Oro (Negocio)',
        icon: 'FaGem',
        tone: 'light',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Modelos:', text: 'Tablas dimensionales para reporting ejecutivo.' },
          { lead: 'Feature Store:', text: 'Variables precomputadas de baja latencia.' },
          { lead: 'Inferencia:', text: 'Servicio dual sincronizado offline/online.' },
        ],
      },
    ],
    { y: 1.75, h: 3.5, size: 12, titleSize: 15 }
  );

  H.callout(s8, {
    x: H.CX,
    y: 5.45,
    w: H.CW,
    h: 1.05,
    kind: 'info',
    lead: 'FEATURE STORE CORPORATIVO:',
    text: 'Elimina el Training-Serving Skew al garantizar que variables como "gasto medio a 30 días" se calculen con idéntica lógica en Parquet masivo (offline) y en almacenes clave-valor tipo Redis (online en milisegundos).',
    size: 12.5,
  });

  // -------------------------------------------------------------
  // SLIDE 9: Laboratorio 1: Exploración y Diagnóstico de Datos
  // -------------------------------------------------------------
  const s9 = H.slide(pres, {
    mod: 1,
    badge: 'Laboratorio Práctico 1',
    title: 'Lab 1: Diagnóstico y Auditoría de Datos Empresariales',
    lab: true,
    notes: {
      obj: 'Auditar la calidad estadística de un conjunto de datos real, resolviendo nulos, multicolinealidad y valores atípicos con Python.',
      guion: [
        'Abrimos el notebook `lab1_data_profiling_and_eda.ipynb` en Colab o Jupyter local.',
        'Dataset: 50.000 clientes con variables numéricas y categóricas que presentan problemas habituales de calidad.',
        'Comprobamos la multicolinealidad con el Variance Inflation Factor (VIF > 10) y tratamos los outliers con Isolation Forest.',
      ],
      preguntas: [
        '¿Por qué imputar valores ausentes con la media aritmética puede destruir la relación varianza-covarianza entre variables?',
      ],
      lab: [
        '1. Ejecutar el reporte automatizado de perfilado estadístico.',
        '2. Identificar el mecanismo de generación de nulos (MCAR vs MAR vs MNAR).',
        '3. Calcular VIF y aislar variables colineales.',
        '4. Ajustar Isolation Forest con contamination=0.03.',
        '5. Exportar el dataset curado a Parquet comprimido.',
      ],
    },
  });

  H.cardsRow(
    s9,
    [
      {
        title: 'Ficha Técnica del Laboratorio',
        icon: 'FaFlask',
        accent: H.COL.CORAL,
        bullets: [
          { lead: 'Dataset:', text: '50.000 registros transaccionales con 25 variables heterogéneas.' },
          { lead: 'Stack técnico:', text: 'Python 3.10+, pandas, ydata-profiling, statsmodels, seaborn.' },
          { lead: 'Duración:', text: '45 minutos (30 min trabajo guiado + 15 min puesta en común).' },
          { lead: 'Hito clave:', text: 'Diagnóstico crítico previo a cualquier fase de modelado.' },
        ],
      },
      {
        title: 'Protocolo de Ejecución en Notebook',
        icon: 'FaCode',
        accent: H.COL.COBALT,
        bullets: [
          { lead: 'Paso 1 · Profiling:', text: 'Generación de reporte global con distribuciones y alertas.' },
          { lead: 'Paso 2 · Nulos:', text: 'Clasificación de patrones e imputación condicionada.' },
          { lead: 'Paso 3 · VIF:', text: 'Filtrado de multicolinealidad en variables redundantes.' },
          { lead: 'Paso 4 · Outliers:', text: 'Detección multivariante con Isolation Forest.' },
          { lead: 'Paso 5 · Salida:', text: 'Exportación a formato Parquet con esquema tipado.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );
};
