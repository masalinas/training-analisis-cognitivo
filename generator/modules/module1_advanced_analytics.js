// generator/modules/module1_advanced_analytics.js
// Module 1: Introducción a la Analítica Avanzada (Slides 4 - 9)

const { createModuleSeparator, createContentSlide, addCard, addStyledTable, addCalloutBox } = require('../helpers');
const config = require('../config');
const colors = config.colors;

function buildModule1(pres, state) {
  // -------------------------------------------------------------
  // SLIDE 4: Separador Módulo 1
  // -------------------------------------------------------------
  state.slideCount++;
  createModuleSeparator(pres, {
    moduleNumber: '1',
    duration: '2.5 HORAS LECTIVAS',
    title: 'Introducción a la Analítica Avanzada',
    subtitle: 'Conceptos Clave, Continuo de Madurez y Ciclo de Vida de los Proyectos de Datos',
    topics: [
      'De los datos a la decisión: el continuo de madurez analítica.',
      'Diferencias entre analítica descriptiva, predictiva y prescriptiva.',
      'El ciclo metodológico de proyectos de datos: CRISP-DM y TDSP.',
      'Arquitecturas modernas de datos: Lakehouse, Delta y Feature Stores.',
    ],
    labName: 'Lab 1 - Diagnóstico y Auditoría de Calidad de Datos',
    labGoal: 'Profilado estadístico, detección de anomalías y preparación para ML.',
    labDeliverable: 'Jupyter Notebook con informe reproducible y dataset curado.',
    notes: `INTRODUCCIÓN AL MÓDULO 1 (15 minutos)
- Guía del Instructor:
  Iniciamos el Módulo 1 sentando las bases terminológicas y metodológicas del curso. Muchas iniciativas de ciencia de datos fracasan no por debilidades matemáticas en los algoritmos, sino por una mala formulación del problema y una infraestructura de datos deficiente.
- Mensaje Central:
  La analítica no es un fin en sí mismo; es un habilitador de decisiones óptimas. Debemos enseñar a los alumnos a categorizar cualquier necesidad de negocio en el continuo analítico adecuado (descriptivo, diagnóstico, predictivo o prescriptivo).
- Estructura de la Sesión:
  • 60 min: Fundamentos teóricos, framework de Gartner y análisis comparativo.
  • 45 min: Metodología CRISP-DM y arquitecturas Lakehouse.
  • 45 min: Ejecución del Laboratorio 1 (EDA avanzado con Python).`,
  });

  // -------------------------------------------------------------
  // SLIDE 5: El Continuo de Madurez Analítica (Gartner)
  // -------------------------------------------------------------
  state.slideCount++;
  const s5 = createContentSlide(pres, {
    category: 'Módulo 1 • Madurez Analítica',
    title: 'El Continuo de Madurez Analítica (Gartner Framework)',
    subtitle: 'Evolución desde la retrospectiva histórica hasta la toma de decisiones autónoma y optimizada',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `EL CONTINUO DE MADUREZ ANALÍTICA (20 minutos)
- Explicación Técnica para el Docente:
  Presentamos las cuatro etapas clásicas del modelo de Gartner, haciendo énfasis en dos ejes vectoriales:
  1. Eje horizontal: Valor aportado al negocio (desde el mero reporte hasta la generación directa de ingresos o ahorro).
  2. Eje vertical: Dificultad técnica y requerimientos de gobernanza y automatización.
- Puntos Críticos a Explicar:
  • Descriptiva: Responde a "¿Qué pasó?". Muy madura en la mayoría de empresas mediante BI (Power BI, Tableau, SQL).
  • Diagnóstica: "¿Por qué pasó?". Requiere análisis de correlación, drill-down y segmentación causal.
  • Predictiva: "¿Qué pasará?". Entramos en Machine Learning. Estimación de probabilidades futuras basadas en patrones históricos.
  • Prescriptiva: "¿Qué debemos hacer?". La cúspide analítica. Combina predicciones con investigación operativa (optimización con restricciones, simulaciones de Monte Carlo y árboles de decisión automatizados).
- Pregunta de Debate:
  "¿Por qué tantas empresas con millones invertidos en Data Lakes siguen atrapadas en la analítica descriptiva? ¿Qué falta para dar el salto predictivo?"`,
  });

  // 4 Horizontal Stepped Cards
  const stepW = 2.05;
  const stepGap = 0.2;
  const startX = 0.6;
  const stepY = 1.5;
  const stepH = 2.4;

  const stepsData = [
    {
      num: '01',
      type: 'DESCRIPTIVA',
      badgeBg: colors.cardBgAlt,
      badgeColor: colors.textMuted,
      question: '¿Qué ha ocurrido?',
      focus: 'Visión retrospectiva',
      techniques: 'BI clásico, dashboards, KPIs históricos, agregaciones SQL.',
      outcome: 'Informes y reportes de estado.',
    },
    {
      num: '02',
      type: 'DIAGNÓSTICA',
      badgeBg: colors.iceBlue,
      badgeColor: colors.steelBlue,
      question: '¿Por qué ocurrió?',
      focus: 'Causalidad y patrones',
      techniques: 'Drill-down, minería de datos, correlaciones, análisis de raíz.',
      outcome: 'Identificación de factores críticos.',
    },
    {
      num: '03',
      type: 'PREDICTIVA',
      badgeBg: colors.purpleBg,
      badgeColor: colors.purple,
      question: '¿Qué ocurrirá?',
      focus: 'Estimación probabilística',
      techniques: 'Machine Learning, series temporales, modelos de clasificación.',
      outcome: 'Scores de probabilidad y alertas.',
    },
    {
      num: '04',
      type: 'PRESCRIPTIVA',
      badgeBg: colors.emeraldBg,
      badgeColor: colors.emerald,
      question: '¿Qué debemos hacer?',
      focus: 'Decisión y optimización',
      techniques: 'Optimización matemática, simulación, motores de reglas dinámicos.',
      outcome: 'Acción automatizada óptima.',
    },
  ];

  stepsData.forEach((s, idx) => {
    const xPos = startX + idx * (stepW + stepGap);
    addCard(s5, pres, {
      x: xPos,
      y: stepY,
      w: stepW,
      h: stepH,
      badge: `${s.num} • ${s.type}`,
      badgeBg: s.badgeBg,
      badgeColor: s.badgeColor,
      title: s.question,
      titleSize: 11,
      items: [
        { text: s.focus, bold: true },
        `Técnicas: ${s.techniques}`,
        `Resultado: ${s.outcome}`,
      ],
      itemSize: 8.5,
    });
  });

  // Bottom Axis Explanation Box
  addCalloutBox(s5, pres, {
    x: 0.6,
    y: 4.05,
    w: 8.8,
    h: 1.0,
    type: 'info',
    title: 'TRANSICIÓN CLAVE: DE LA INFORMACIÓN RETROSPECTIVA A LA ACCIÓN AUTÓNOMA',
    text: 'A medida que una organización avanza hacia la derecha del espectro, el valor empresarial se multiplica exponencialmente. Sin embargo, también aumentan los requisitos de calidad de datos en tiempo real, gobernanza de modelos y tolerancia al riesgo algorítmico.',
  });

  // -------------------------------------------------------------
  // SLIDE 6: Matriz Comparativa: Descriptiva vs Predictiva vs Prescriptiva
  // -------------------------------------------------------------
  state.slideCount++;
  const s6 = createContentSlide(pres, {
    category: 'Módulo 1 • Análisis Comparativo',
    title: 'Matriz Comparativa de Enfoques Analíticos',
    subtitle: 'Diferencias técnicas, metodológicas y de impacto empresarial en los 4 niveles de madurez',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `MATRIZ COMPARATIVA DE NIVELES ANALÍTICOS (20 minutos)
- Guía para el Instructor:
  Utilizar la tabla estructurada para recorrer cada dimensión de análisis. Detallar un ejemplo transversal para que los alumnos vean la evolución en una misma vertical de negocio:
- Ejemplo Transversal: Sector Sanitario / Hospitalario:
  • Descriptiva: "¿Cuántos reingresos de pacientes tuvimos el mes pasado en cardiología?" (Métrica histórica = 14.2%).
  • Diagnóstica: "¿Por qué reingresaron más pacientes de cardiología que de neurología?" (Análisis causal = falta de seguimiento farmacológico ambulatorio).
  • Predictiva: "¿Qué probabilidad tiene el paciente Martínez de reingresar en los próximos 30 días?" (Modelo de scoring ML = 78% de probabilidad).
  • Prescriptiva: "¿Qué plan de intervención médica minimiza el riesgo de reingreso al menor coste para el hospital?" (Motor prescriptivo = asignar teleconsulta obligatoria a las 48h y ajuste automático de dosis).
- Pregunta para los Estudiantes:
  "En vuestros sectores, ¿qué decisión repetitiva de alto coste se beneficiaría inmediatamente de pasar de un enfoque descriptivo a uno prescriptivo?"`,
  });

  addStyledTable(s6, pres, {
    x: 0.6,
    y: 1.5,
    w: 8.8,
    h: 3.5,
    colW: [1.3, 1.4, 2.0, 2.3, 1.8],
    headers: ['Nivel Analítico', 'Horizonte', 'Herramientas Clave', 'Caso Empresarial (Retail)', 'Impacto en el Negocio'],
    alignCols: ['left', 'center', 'left', 'left', 'left'],
    rows: [
      ['Descriptiva', 'Pasado (T-n)', 'SQL, Power BI, Excel, Dashboards OLAP', 'Informe de ventas por tienda y SKU en el último trimestre.', 'Visibilidad retrospectiva de la salud del negocio.'],
      ['Diagnóstica', 'Pasado reciente', 'Python (pandas, scipy), Minería causal, Clustering', 'Detección de por qué cayó la venta en tiendas del norte (roturas de stock).', 'Comprensión de causas raíz y anomalías operativas.'],
      ['Predictiva', 'Futuro probable (T+1)', 'Scikit-learn, XGBoost, Prophet, Redes Neuronales', 'Predicción de la demanda de cada producto para los próximos 14 días.', 'Reducción de inventario ocioso y roturas de stock.'],
      ['Prescriptiva', 'Futuro accionable', 'Optimización matemática (Gurobi, PuLP), Heurísticas', 'Plan automatizado de reabastecimiento y fijación dinámica de precios.', 'Maximización del margen bruto y automatización operativa.'],
    ],
  });

  // -------------------------------------------------------------
  // SLIDE 7: Ciclo de Vida de Proyectos Analíticos (CRISP-DM & TDSP)
  // -------------------------------------------------------------
  state.slideCount++;
  const s7 = createContentSlide(pres, {
    category: 'Módulo 1 • Metodología de Proyectos',
    title: 'Ciclo de Vida de Proyectos de Datos: De CRISP-DM a TDSP',
    subtitle: 'El proceso iterativo estándar de la industria para garantizar el éxito y la gobernanza de modelos',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `CICLO DE VIDA DE PROYECTOS ANALÍTICOS (25 minutos)
- Explicación Técnica para el Docente:
  Presentamos el estándar CRISP-DM (Cross-Industry Standard Process for Data Mining) y su evolución moderna en entornos cloud como TDSP (Team Data Science Process de Microsoft) y frameworks ágiles de MLOps.
- El Gran Error en la Industria:
  El 80% del tiempo de un científico de datos se invierte en las fases 2 (Data Understanding) y 3 (Data Preparation). Quien comience a programar modelos (Fase 4) sin haber comprendido las restricciones de negocio (Fase 1) o la calidad de los datos generará un modelo inútil que nunca pasará a producción.
- La Flecha de Retorno:
  Destacar el carácter circular e iterativo. Tras evaluar el modelo en la Fase 5, frecuentemente descubrimos que debemos volver a la Fase 1 (redefinir la métrica de éxito) o a la Fase 3 (crear nuevas variables de mayor poder predictivo).
- Pregunta para la Clase:
  "¿Por qué un modelo con un 95% de precisión técnica puede ser rechazado por el área de negocio en la Fase 5?"`,
  });

  // 6 Circular / Process Phases as a 2x3 Grid
  const cardW = 2.75;
  const cardGap = 0.25;
  const row1Y = 1.5;
  const row2Y = 3.25;
  const cardH = 1.6;

  const phases = [
    {
      num: '01',
      title: 'Comprensión del Negocio',
      desc: 'Definir el problema en términos de negocio. Fijar KPIs, restricciones legales, criterios de éxito financiero y diseño del caso de uso.',
      color: colors.steelBlue,
      bg: colors.iceBlue,
    },
    {
      num: '02',
      title: 'Comprensión de los Datos',
      desc: 'Recolectar datos brutos, identificar problemas de calidad, balanceo de clases, dispersión y relaciones iniciales mediante EDA.',
      color: colors.steelBlue,
      bg: colors.cardBg,
    },
    {
      num: '03',
      title: 'Preparación de los Datos',
      desc: 'El 80% del esfuerzo: limpieza, imputación de nulos, ingeniería de características (features), escalado y división train/validation/test.',
      color: colors.purple,
      bg: colors.purpleBg,
    },
    {
      num: '04',
      title: 'Modelado Analítico',
      desc: 'Seleccionar técnicas algorítmicas, calibrar hiperparámetros, ensamblar modelos y aplicar validación cruzada estratificada.',
      color: colors.purple,
      bg: colors.cardBg,
    },
    {
      num: '05',
      title: 'Evaluación y Validación',
      desc: 'Verificar si el modelo satisface los criterios de negocio definidos en la Fase 1. Análisis de costes, sesgos y explicabilidad.',
      color: colors.amber,
      bg: colors.amberBg,
    },
    {
      num: '06',
      title: 'Despliegue y MLOps',
      desc: 'Pase a producción: APIs de inferencia en tiempo real o batch, monitorización continua de drift y reentrenamiento automatizado.',
      color: colors.emerald,
      bg: colors.emeraldBg,
    },
  ];

  phases.forEach((p, idx) => {
    const isRow1 = idx < 3;
    const colIdx = idx % 3;
    const xPos = 0.6 + colIdx * (cardW + cardGap);
    const yPos = isRow1 ? row1Y : row2Y;

    addCard(s7, pres, {
      x: xPos,
      y: yPos,
      w: cardW,
      h: cardH,
      badge: `FASE ${p.num}`,
      badgeBg: p.bg,
      badgeColor: p.color,
      title: p.title,
      titleSize: 11,
      description: p.desc,
      descriptionSize: 8.5,
    });
  });

  // -------------------------------------------------------------
  // SLIDE 8: Arquitectura Moderna de Datos para Analítica Avanzada
  // -------------------------------------------------------------
  state.slideCount++;
  const s8 = createContentSlide(pres, {
    category: 'Módulo 1 • Arquitectura de Sistemas',
    title: 'Arquitectura Moderna de Datos: El Paradigma Lakehouse',
    subtitle: 'La convergencia de la flexibilidad del Data Lake con el gobierno ACID del Data Warehouse',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `ARQUITECTURA DE DATOS MODERNA (20 minutos)
- Guía del Instructor:
  Explicar la evolución técnica del almacenamiento analítico:
  1. Data Warehouse tradicional (1990-2010): Estructurado, esquemas en estrella, costoso de escalar, incapaz de gestionar texto no estructurado o imágenes.
  2. Data Lake (2010-2020): Almacenamiento barato en HDFS/S3, pero se convertía en un "Data Swamp" (pantano de datos sin gobernanza, esquemas rotos y falta de transaccionalidad).
  3. Lakehouse (2020-Actualidad): Capa de almacenamiento abierta sobre Object Storage con transacciones ACID (Delta Lake, Apache Iceberg, Apache Hudi).
- La Arquitectura Medallion:
  • Bronze: Ingesta pura en formato raw (histórico inmutable).
  • Silver: Datos limpios, tipados, deduplicados y enriquecidos.
  • Gold: Tablas agregadas listas para consumo de negocio y Feature Stores optimizados para inferencia ML de baja latencia.
- Feature Stores:
  Concepto fundamental para MLOps. Garantiza que la lógica de cálculo de una variable sea idéntica en el entrenamiento (offline) y en la predicción en producción (online).`,
  });

  // 3 Tiers (Medallion Architecture)
  const tierW = 2.8;
  const tierH = 2.3;
  const tierY = 1.5;

  addCard(s8, pres, {
    x: 0.6,
    y: tierY,
    w: tierW,
    h: tierH,
    badge: 'BRONZE • INGESTA RAW',
    badgeBg: colors.cardBgAlt,
    badgeColor: colors.textMuted,
    title: 'Capa Bronce (Cruda)',
    description: 'Aterrizaje directo de datos sin transformar desde múltiples fuentes heterogéneas.',
    items: [
      'Fuentes: ERP, CRM, IoT, logs, APIs web.',
      'Formatos: JSON, Parquet, CSV, audio, imágenes.',
      'Patrón: Append-only con trazabilidad completa.',
      'Objetivo: Preservar la verdad histórica del dato.',
    ],
    itemSize: 8.5,
  });

  addCard(s8, pres, {
    x: 3.6,
    y: tierY,
    w: tierW,
    h: tierH,
    badge: 'SILVER • CURADA Y VALIDADA',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Capa Plata (Estructurada)',
    description: 'Datos limpios, tipados, deduplicados y transformados para análisis transversal.',
    items: [
      'Validación de esquemas y contratos de datos.',
      'Normalización y enriquecimiento de entidades.',
      'Soporte transaccional ACID (Delta / Iceberg).',
      'Base para analítica exploratoria y data science.',
    ],
    itemSize: 8.5,
  });

  addCard(s8, pres, {
    x: 6.6,
    y: tierY,
    w: tierW,
    h: tierH,
    badge: 'GOLD • CONSUMO DE NEGOCIO',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Capa Oro (Especializada)',
    description: 'Vistas de negocio, modelos dimensionales y tablas para modelos predictivos.',
    items: [
      'Esquemas en estrella para reporting y BI.',
      'Feature Store corporativo (variables para ML).',
      'Métricas estandarizadas y gobernadas.',
      'Mínima latencia de consulta y alta concurrencia.',
    ],
    itemSize: 8.5,
  });

  // Bottom Callout on Feature Store
  addCalloutBox(s8, pres, {
    x: 0.6,
    y: 4.0,
    w: 8.8,
    h: 1.05,
    type: 'success',
    title: 'EL ROL DEL FEATURE STORE EN LA ARQUITECTURA PREDICTIVA',
    text: 'El Feature Store resuelve la divergencia entre entrenamiento y servicio (Training-Serving Skew). Almacena variables precomputadas (ej. "gasto medio del cliente en los últimos 30 días") en dos almacenes sincronizados: Offline (Parquet/Delta para entrenamiento masivo) y Online (Redis/DynamoDB para inferencia en tiempo real en milisegundos).',
  });

  // -------------------------------------------------------------
  // SLIDE 9: Laboratorio 1: Exploración y Diagnóstico de Datos
  // -------------------------------------------------------------
  state.slideCount++;
  const s9 = createContentSlide(pres, {
    category: 'Módulo 1 • Laboratorio Práctico',
    title: 'Laboratorio 1: Diagnóstico y Auditoría de Datos Empresariales',
    subtitle: 'Auditoría estadística rigurosa, detección de multicolinealidad y preparación de un dataset comercial',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `LABORATORIO PRÁCTICO 1 (45 minutos)
- Guía de Ejecución para el Instructor:
  1. Abrir el notebook \`lab1_data_profiling_and_eda.ipynb\` en Google Colab o Jupyter.
  2. Dataset de Trabajo: Conjunto de datos bancario/telecom con 50.000 clientes, 25 variables numéricas y categóricas, y presencia deliberada de nulos, valores atípicos y problemas de formato.
- Pasos Prácticos a Guiar en el Aula:
  • Paso 1: Generación de reporte automático con \`ydata-profiling\` para obtener una radiografía rápida del dataset.
  • Paso 2: Análisis profundo de valores ausentes. Distinguir entre MCAR (Missing Completely at Random), MAR y MNAR.
  • Paso 3: Identificación de multicolinealidad mediante matriz de correlación de Pearson y cálculo del Factor de Inflación de Varianza (VIF). Variables con VIF > 10 deben ser analizadas para posible eliminación o combinación.
  • Paso 4: Detección multivariante de outliers con Isolation Forest.
- Entregable Requerido:
  El alumno debe exportar el dataframe limpio \`clientes_curados.parquet\` y justificar en tres párrafos las decisiones de imputación tomadas.`,
  });

  // Lab Spec Layout: Left Card (Protocol) & Right Card (Checklist & Code)
  addCard(s9, pres, {
    x: 0.6,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'FICHA TÉCNICA DEL LABORATORIO',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Objetivos y Metodología',
    description: 'Diagnosticar la salud de un dataset empresarial antes de aplicar cualquier modelo predictivo.',
    items: [
      { text: 'Dataset:', bold: true },
      '50.000 clientes con historial transaccional y métricas de uso.',
      { text: 'Herramientas:', bold: true },
      'Python 3.10+, pandas, ydata-profiling, seaborn, statsmodels.',
      { text: 'Tiempo Estimado:', bold: true },
      '45 minutos (30 min trabajo individual + 15 min puesta en común).',
      { text: 'Competencia Clave:', bold: true },
      'Capacidad crítica para no fiarse de datos brutos sin auditar.',
    ],
    itemSize: 9,
  });

  addCard(s9, pres, {
    x: 5.15,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'CHECKLIST DE TAREAS A COMPLETAR',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Entregables del Ejercicio',
    description: 'Los alumnos deben ejecutar en su entorno las siguientes fases guiadas:',
    items: [
      '1. Generar e interpretar el reporte de perfilado HTML.',
      '2. Clasificar el patrón de nulos y aplicar imputación adecuada.',
      '3. Detectar variables con VIF > 10 y tratar la multicolinealidad.',
      '4. Aislar outliers con Isolation Forest (contamination=0.03).',
      '5. Exportar el dataset procesado a formato Parquet comprimido.',
      '6. Redactar el resumen de hallazgos para el comité de datos.',
    ],
    itemSize: 9,
  });
}

module.exports = buildModule1;
