// generator/modules/module5_visualization.js
// Module 5: Visualización de Datos Avanzada y Dashboards Interactivos (Slides 30 - 35)

const { createModuleSeparator, createContentSlide, addCard, addStyledTable, addCalloutBox } = require('../helpers');
const config = require('../config');
const colors = config.colors;

function buildModule5(pres, state) {
  // -------------------------------------------------------------
  // SLIDE 30: Separador Módulo 5
  // -------------------------------------------------------------
  state.slideCount++;
  createModuleSeparator(pres, {
    moduleNumber: '5',
    duration: '2.0 HORAS LECTIVAS',
    title: 'Visualización de Datos Avanzada',
    subtitle: 'Comunicar con Impacto: Principios de Percepción, Arquitectura de Dashboards y Storytelling con Datos',
    topics: [
      'Fundamentos cognitivos de la visualización: atributos preatentivos y leyes de Gestalt.',
      'El ratio datos-tinta de Edward Tufte y selección rigurosa de tipos de gráficos.',
      'Ecosistema tecnológico: plataformas BI corporativas vs frameworks de Data Apps en Python.',
      'Anatomía y diseño de dashboards ejecutivos orientados a la toma de decisiones inmediata.',
    ],
    labName: 'Lab 5 - Prototipado y Despliegue de un Dashboard Interactivo',
    labGoal: 'Construcción de una aplicación web en Streamlit que integre predicciones y sentimiento.',
    labDeliverable: 'Dashboard interactivo con filtros cruzados, tarjetas de KPI y visualización explicable.',
    notes: `INTRODUCCIÓN AL MÓDULO 5 (15 minutos)
- Guía del Instructor:
  El Módulo 5 aborda la última milla de cualquier proyecto de analítica avanzada e inteligencia cognitiva: la comunicación visual y la interactividad con los decisores de negocio.
- Filosofía Central:
  "Un modelo de Machine Learning con un 98% de ROC-AUC es completamente estéril si sus conclusiones se presentan en una tabla incomprensible de 50 columnas o en un gráfico saturado que genera rechazo en la dirección".
- Estructura de la Sesión:
  • 35 min: Principios de percepción visual, neurociencia aplicada a gráficos y reglas de diseño.
  • 25 min: Comparativa de herramientas (Power BI / Tableau vs Streamlit / Dash) y anatomía de un dashboard de impacto.
  • 60 min: Laboratorio 5 práctico: construcción de una aplicación en Streamlit que consuma los modelos de los Labs 3 y 4.`,
  });

  // -------------------------------------------------------------
  // SLIDE 31: Fundamentos de Percepción Visual y Gramática de Gráficos
  // -------------------------------------------------------------
  state.slideCount++;
  const s31 = createContentSlide(pres, {
    category: 'Módulo 5 • Percepción Visual',
    title: 'Principios de Percepción Visual y Gramática de Gráficos',
    subtitle: 'Cómo procesa el cerebro humano la información visual antes del razonamiento consciente',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `PRINCIPIOS DE PERCEPCIÓN VISUAL (20 minutos)
- Explicación Técnica para el Docente:
  1. Atributos Preatentivos (Pre-attentive Processing):
     - El córtex visual procesa ciertas propiedades en menos de 200 milisegundos de forma automática: posición espacial, longitud de barras, color (tono y brillo), tamaño y orientación.
     - Regla: La posición espacial y la longitud son los atributos cuantitativos más precisos para el ojo humano. El color solo debe utilizarse para categorías o resaltar la métrica principal, nunca como un arcoíris sin significado.
  2. Leyes de la Gestalt aplicadas al diseño de interfaces:
     - Proximidad: Los elementos colocados cerca se perciben como pertenecientes al mismo grupo funcional.
     - Similitud: Elementos con el mismo color o forma se interpretan como la misma métrica a través de diferentes paneles.
     - Cerramiento: El uso de tarjetas con bordes sutiles ayuda al cerebro a delimitar contextos analíticos.
  3. El Ratio Datos-Tinta (Edward Tufte):
     - Data-Ink Ratio = (Tinta dedicada a datos) / (Tinta total del gráfico).
     - Eliminar "Chartjunk" (basura gráfica): fondos oscuros innecesarios, líneas de cuadrícula densas, efectos 3D engañosos y leyendas redundantes.
- Pregunta para la Clase:
  "¿Por qué los gráficos circulares (pie charts) son fuertemente desaconsejados por los expertos en visualización cuando hay más de 3 categorías?" (El ojo humano es pésimo comparando ángulos y áreas; es mucho más preciso comparando longitudes alineadas en un eje).`,
  });

  // 3 Large Pillars for Visual Perception
  const vpW = 2.8;
  const vpY = 1.5;
  const vpH = 3.5;

  addCard(s31, pres, {
    x: 0.6,
    y: vpY,
    w: vpW,
    h: vpH,
    badge: 'NEUROCIENCIA VISUAL',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Atributos Preatentivos',
    description: 'Procesamiento cerebral subconsciente en menos de 200 milisegundos.',
    items: [
      { text: 'Jerarquía de Precisión:', bold: true },
      '1. Posición en eje común > 2. Longitud > 3. Área > 4. Intensidad de color > 5. Ángulo.',
      { text: 'Uso Funcional del Color:', bold: true },
      'Utilizar color únicamente para dirigir la atención o codificar estados (éxito, alerta).',
      { text: 'Economía Visual:', bold: true },
      'No codificar más de dos atributos visuales simultáneamente en el mismo elemento.',
    ],
    itemSize: 8.5,
  });

  addCard(s31, pres, {
    x: 3.6,
    y: vpY,
    w: vpW,
    h: vpH,
    badge: 'PSICOLOGÍA GESTALT',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Leyes de Agrupamiento Gestalt',
    description: 'Reglas de organización perceptual que estructuran la mente humana.',
    items: [
      { text: 'Ley de Proximidad:', bold: true },
      'Separar métricas no relacionadas mediante espacio en blanco y agrupar KPIs afines.',
      { text: 'Ley de Cerramiento:', bold: true },
      'Contener bloques lógicos en tarjetas limpias con bordes o fondos suaves.',
      { text: 'Ley de Continuidad:', bold: true },
      'Alinear visualmente filtros, títulos y ejes para guiar el flujo de lectura.',
    ],
    itemSize: 8.5,
  });

  addCard(s31, pres, {
    x: 6.6,
    y: vpY,
    w: vpW,
    h: vpH,
    badge: 'PRINCIPIO DE TUFTE',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Maximización del Data-Ink Ratio',
    description: 'Eliminación radical de ruido y decoración superflua en gráficos.',
    items: [
      { text: 'Erradicar el "Chartjunk":', bold: true },
      'Prohibición total de gráficos 3D, degradados estridentes y sombras exageradas.',
      { text: 'Atenuación de Cuadrículas:', bold: true },
      'Líneas de eje sutiles en gris claro o eliminadas si existen etiquetas directas de datos.',
      { text: 'Etiquetado Directo:', bold: true },
      'Preferir etiquetas sobre las barras en lugar de leyendas lejanas que exijan desviar la vista.',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 32: Ecosistema Tecnológico: BI Corporativo vs Data Apps
  // -------------------------------------------------------------
  state.slideCount++;
  const s32 = createContentSlide(pres, {
    category: 'Módulo 5 • Herramientas y Ecosistema',
    title: 'Ecosistema Tecnológico: Plataformas BI vs Data Apps en Código',
    subtitle: 'Criterios de selección arquitectónica entre herramientas de autoservicio y frameworks de desarrollo',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `BI CORPORATIVO VS DATA APPS EN CÓDIGO (20 minutos)
- Guía para el Instructor:
  Plantear el dilema que viven todos los departamentos de datos: ¿cuándo utilizar Power BI / Tableau y cuándo desarrollar una aplicación web analítica en Python con Streamlit o Plotly Dash?
- Comparativa Detallada:
  1. Plataformas de BI Corporativo (Power BI, Tableau, Looker):
     - Excelentes para consumo masivo en toda la compañía (miles de directores y comerciales).
     - Gobernanza impecable: gestión de identidades corporativas (Azure AD), seguridad a nivel de fila (RLS - Row Level Security) y conexión directa a almacenes certificados.
     - Limitación: Integrar modelos predictivos complejos o modelos de lenguaje con inferencia dinámica interactiva suele ser rígido, lento o muy costoso.
  2. Frameworks de Data Apps en Código (Streamlit, Plotly Dash, Panel):
     - Desarrolladas íntegramente en Python por científicos de datos.
     - Flexibilidad total: ejecutan código scikit-learn, PyTorch, Hugging Face o llamadas a LLMs en tiempo real en respuesta a la interacción del usuario.
     - Ideales para prototipos rápidos, herramientas internas de analítica avanzada y simuladores what-if.
     - Reto: Requieren gestionar infraestructura de despliegue (Docker, Kubernetes) y optimizar concurrencia.`,
  });

  // High-Contrast Comparison Table
  addStyledTable(s32, pres, {
    x: 0.6,
    y: 1.5,
    w: 8.8,
    h: 3.5,
    colW: [1.8, 3.5, 3.5],
    headers: ['Criterio de Evaluación', 'Plataformas de BI (Power BI / Tableau)', 'Data Apps en Código (Streamlit / Dash)'],
    alignCols: ['left', 'left', 'left'],
    rows: [
      ['Audiencia Principal', 'Comités de dirección, analistas de negocio y mandos intermedios no técnicos.', 'Científicos de datos, equipos de producto, operaciones y usuarios especializados.'],
      ['Integración de ML / IA', 'Limitada a scripts integrados o inferencias batch precalculadas en el data warehouse.', 'Nativa: ejecución en tiempo real de scikit-learn, Transformers, SHAP y llamadas a LLMs.'],
      ['Gobernanza y RLS', 'Nativa empresarial (Azure AD / SSO, seguridad por fila gobernada centralmente).', 'Debe implementarse a nivel de software o delegarse en el gateway del API.'],
      ['Curva de Desarrollo', 'Muy rápida para reportes estándar; compleja para interacciones fuera de catálogo.', 'Extremadamente rápida en Python puro (100% código, sin frontend HTML/CSS/JS).'],
      ['Simulaciones What-If', 'Complejas mediante parámetros DAX o parámetros de simulación limitados.', 'Nativas y dinámicas: sliders que recalculan matrices y modelos en milisegundos.'],
    ],
  });

  // -------------------------------------------------------------
  // SLIDE 33: Anatomía y Arquitectura de un Dashboard Ejecutivo
  // -------------------------------------------------------------
  state.slideCount++;
  const s33 = createContentSlide(pres, {
    category: 'Módulo 5 • Diseño de Interfaces',
    title: 'Anatomía y Arquitectura de un Dashboard Ejecutivo de Impacto',
    subtitle: 'Estructuración visual en cuadrículas jerárquicas basada en patrones naturales de lectura',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `ANATOMÍA DE UN DASHBOARD EJECUTIVO (20 minutos)
- Explicación Técnica para el Docente:
  Presentar el layout canónico de un dashboard empresarial de alto nivel. Explicar el patrón de lectura en "Z" o "F": el ojo humano comienza en la esquina superior izquierda y se desplaza hacia la derecha antes de bajar.
- Las 4 Zonas Estructurales:
  1. Encabezado y Filtros Globales (Zona Superior): Título del panel, selector temporal (Rango de fechas) y filtros cruzados macro (Mercado, Canal, Segmento).
  2. Banda de Scorecards / KPIs (Fila Superior de Contenido): Los 4 o 5 números sagrados del negocio. Cada tarjeta debe contener:
     - El valor absoluto actual en tipografía grande (24-32pt).
     - La variación porcentual respecto al periodo anterior (Δ% vs mes anterior en color condicional verde/rojo).
     - Un mini-gráfico de tendencia (Sparkline) que aporte contexto histórico inmediato.
  3. Visión Macro y Tendencias (Cuerpo Central): Gráfico de líneas temporales con proyecciones y bandas de confianza, y gráfico de barras ordenado para comparativas dimensionales.
  4. Tabla de Detalle Accionable (Zona Inferior): Registros individuales priorizados con un score de riesgo para que el usuario pueda tomar una acción directa (drill-through).
- Reglas de Oro:
  • Regla de los 5 Segundos: El usuario debe entender si el negocio va bien o mal en 5 segundos.
  • Regla de los 3 Clics: Cualquier detalle debe alcanzarse en menos de 3 interacciones.`,
  });

  // Visual Wireframe of a Dashboard (4 Functional Zones)
  const zoneW = 8.8;
  const startZX = 0.6;

  // Zone 1: Header / Filter Bar
  addCard(s33, pres, {
    x: startZX,
    y: 1.5,
    w: zoneW,
    h: 0.65,
    bg: colors.navyPrimary,
    border: colors.steelBlue,
    radius: 0.06,
    title: 'ZONA 1 • BARRA DE CONTROL Y FILTROS GLOBALES',
    titleSize: 10,
    titleColor: colors.skyAccent,
    description: 'Selector de Horizonte Temporal (Últimos 30d / YTD) • Filtro por Segmento de Cliente • Filtro Regional • Estado de Calidad de Datos',
    descriptionSize: 8.5,
    descriptionColor: colors.textLight,
  });

  // Zone 2: KPI Scorecards (4 mini cards side-by-side)
  const kpiW = 2.05;
  const kpiGap = 0.2;
  const kpiY = 2.25;
  const kpiH = 1.05;

  addCard(s33, pres, {
    x: startZX,
    y: kpiY,
    w: kpiW,
    h: kpiH,
    badge: 'TASA DE ABANDONO',
    badgeBg: colors.roseBg,
    badgeColor: colors.rose,
    title: '2.14% (Churn)',
    titleSize: 12,
    description: '▲ +0.3% vs obj. (Alerta)',
    descriptionSize: 8,
  });

  addCard(s33, pres, {
    x: startZX + 1 * (kpiW + kpiGap),
    y: kpiY,
    w: kpiW,
    h: kpiH,
    badge: 'SENTIMIENTO MEDIO',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: '+0.72 Polaridad',
    titleSize: 12,
    description: '▲ +0.08 vs mes anterior',
    descriptionSize: 8,
  });

  addCard(s33, pres, {
    x: startZX + 2 * (kpiW + kpiGap),
    y: kpiY,
    w: kpiW,
    h: kpiH,
    badge: 'CLIENTES EN RIESGO',
    badgeBg: colors.amberBg,
    badgeColor: colors.amber,
    title: '1.420 Cuentas',
    titleSize: 12,
    description: 'Score Churn > 0.70',
    descriptionSize: 8,
  });

  addCard(s33, pres, {
    x: startZX + 3 * (kpiW + kpiGap),
    y: kpiY,
    w: kpiW,
    h: kpiH,
    badge: 'VALOR EN RIESGO (ARR)',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: '840.000 €',
    titleSize: 12,
    description: 'Objetivo de retención activa',
    descriptionSize: 8,
  });

  // Zone 3: Trends & Drill-down (2 Columns)
  addCard(s33, pres, {
    x: startZX,
    y: 3.38,
    w: 5.2,
    h: 1.68,
    badge: 'ZONA 3A • TENDENCIA Y PROYECCIÓN ML',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Evolución Histórica y Bandas de Confianza Predictivas',
    description: 'Gráfico de líneas con intervalo del 95% para los próximos 60 días.',
    items: [
      'Línea continua: Datos reales consolidados.',
      'Línea discontinua con sombreado: Inferencia del modelo XGBoost.',
      'Marcadores de eventos: Puntos de inflexión por cambios de tarifa.',
    ],
    itemSize: 8,
  });

  addCard(s33, pres, {
    x: startZX + 5.4,
    y: 3.38,
    w: 3.4,
    h: 1.68,
    badge: 'ZONA 3B • DETALLE ACCIONABLE',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Top Cuentas Prioritarias',
    description: 'Tabla filtrable con llamada a la acción directa.',
    items: [
      'ID de Cliente y Razón Social.',
      'Score de Riesgo y Factores SHAP.',
      'Botón "Asignar Acción a Gestor".',
    ],
    itemSize: 8,
  });

  // -------------------------------------------------------------
  // SLIDE 34: Integración de Analítica Predictiva y Sentimiento
  // -------------------------------------------------------------
  state.slideCount++;
  const s34 = createContentSlide(pres, {
    category: 'Módulo 5 • Integración Avanzada',
    title: 'Integración de Modelos Predictivos y Sentimiento en Paneles',
    subtitle: 'Cómo presentar probabilidades complejas e inferencias de NLP de forma transparente y accionable',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `INTEGRACIÓN PREDICTIVA Y COGNITIVA EN DASHBOARDS (20 minutos)
- Guía para el Instructor:
  El gran desafío de diseño: los usuarios de negocio no quieren ver matrices de confusión ni valores SHAP brutos; quieren entender qué cliente está en riesgo, por qué y qué deben hacer al respecto.
- Las 3 Reglas de Oro de la Integración de IA en Paneles:
  1. Traducción de Probabilidades a Lenguaje de Negocio:
     - Nunca mostrar: "Probabilidad $P(y=1) = 0.8327$".
     - Mostrar: "Riesgo de Fuga: MUY ALTO" (Badge rojo con tooltip que detalle el percentil).
  2. Explicabilidad Local Embebida (Micro-XAI):
     - Al seleccionar una cuenta o registro, el dashboard debe renderizar un micro-gráfico de cascada (Waterfall plot) con los 3 factores que más empujan la predicción (ej. "+32% por 3 incidencias abiertas en soporte; +21% por caída del 50% en consumo; -15% por antigüedad de 4 años").
  3. Cuadro de Salud del Modelo (Model Health Scorecard):
     - Para generar confianza y cumplimiento de gobernanza, incluir una pestaña secundaria que informe de: fecha del último reentrenamiento, drift detectado y porcentaje de confianza general del sistema.`,
  });

  // 3 Strategic Cards
  const intW = 2.8;
  const intY = 1.5;
  const intH = 2.3;

  addCard(s34, pres, {
    x: 0.6,
    y: intY,
    w: intW,
    h: intH,
    badge: 'REGLA 1 • SEMÁNTICA',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Probabilidad a Acción',
    description: 'Traducción de números estadísticos a categorías operativas inteligibles.',
    items: [
      'Mapeo de probabilidades en cuartiles de riesgo (Bajo, Medio, Alto, Crítico).',
      'Formatos condicionales sobrios sin saturación de colores.',
      'Estimación del impacto económico directo asociado a la predicción.',
    ],
    itemSize: 8.5,
  });

  addCard(s34, pres, {
    x: 3.6,
    y: intY,
    w: intW,
    h: intH,
    badge: 'REGLA 2 • EXPLICABILIDAD',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'XAI Embebida (SHAP)',
    description: 'Justificación transparente del motivo de cada inferencia algorítmica.',
    items: [
      'Micro-gráficos de cascada al hacer clic sobre cualquier registro individual.',
      'Top 3 variables explicativas que justifican la alerta del modelo.',
      'Desmitificación de la "caja negra" ante el usuario de operaciones.',
    ],
    itemSize: 8.5,
  });

  addCard(s34, pres, {
    x: 6.6,
    y: intY,
    w: intW,
    h: intH,
    badge: 'REGLA 3 • CONFIANZA',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Gobernanza y Calidad',
    description: 'Panel de observabilidad y frescura del sistema predictivo.',
    items: [
      'Indicador de frescura: fecha y hora de la última inferencia batch.',
      'Semáforo de Data Drift: alerta si los datos entrantes divergen de train.',
      'Canal de feedback directo: botón para que el usuario reporte falsos positivos.',
    ],
    itemSize: 8.5,
  });

  // Callout Box at bottom
  addCalloutBox(s34, pres, {
    x: 0.6,
    y: 3.95,
    w: 8.8,
    h: 1.1,
    type: 'info',
    title: 'EL BUCLE DE FEEDBACK DE USUARIO (HUMAN-IN-THE-LOOP)',
    text: 'Un dashboard avanzado no debe ser unidireccional. Incluir mecanismos interactivos para que el gestor de negocio valide o refute la predicción del modelo (ej. "¿Considera acertada esta alerta de abandono? Sí / No"). Estos registros se capturan de vuelta en la capa Silver del Lakehouse para auditar sesgos y servir de base en los ciclos de reentrenamiento.',
  });

  // -------------------------------------------------------------
  // SLIDE 35: Laboratorio 5: Construcción de Dashboard Interactivo
  // -------------------------------------------------------------
  state.slideCount++;
  const s35 = createContentSlide(pres, {
    category: 'Módulo 5 • Laboratorio Práctico',
    title: 'Laboratorio 5: Construcción de un Dashboard con Streamlit / Plotly',
    subtitle: 'Desarrollo de una Data App interactiva completa integrando predicciones de Churn y VoC',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `LABORATORIO PRÁCTICO 5 (60 minutos)
- Guía para el Instructor:
  Trabajaremos sobre el script \`app_dashboard_streamlit.py\`.
- Dinámica del Taller:
  1. Los alumnos integran en una sola aplicación interactiva los resultados de los tres laboratorios anteriores:
     - El dataset curado del Lab 1.
     - Las probabilidades de Churn y valores SHAP calculados en el Lab 3.
     - Las polaridades de sentimiento y tópicos del Lab 4.
  2. Implementación en Streamlit:
     - Barra lateral (\`st.sidebar\`) con filtros reactivos por país, segmento y rango de probabilidad.
     - Tres tarjetas de métricas (\`st.metric\`) con deltas porcentuales.
     - Gráfico de dispersión interactivo con Plotly Express (\`px.scatter\`), donde el eje X es la antigüedad del cliente, el eje Y es el gasto medio, el tamaño de la burbuja es el valor LTV y el color representa la probabilidad de Churn.
     - Gráfico de barras de sentimiento agrupado por tópico.
     - Tabla interactiva (\`st.dataframe\`) con opción de descargar la lista de clientes priorizados en CSV.
- Evaluación del Ejercicio:
  Verificar que el código aplique correctamente el decorador de caché (\`@st.cache_data\`) para garantizar que el dashboard responda en menos de 200 milisegundos tras cada cambio de filtro.`,
  });

  addCard(s35, pres, {
    x: 0.6,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'FICHA TÉCNICA DEL LABORATORIO',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Objetivos y Stack Tecnológico',
    description: 'Diseñar y desplegar una aplicación web de analítica ejecutiva interactiva en Python puro.',
    items: [
      { text: 'Datos de Entrada:', bold: true },
      'Outputs combinados de los modelos predictivos y de NLP previos.',
      { text: 'Stack Técnico:', bold: true },
      'Python 3.10+, Streamlit, Plotly Express, pandas.',
      { text: 'Enfoque de Arquitectura:', bold: true },
      'Componentes reactivos desacoplados con caché en memoria (@st.cache_data).',
      { text: 'Tiempo Asignado:', bold: true },
      '60 minutos (45 min desarrollo guiado + 15 min demo interactiva).',
    ],
    itemSize: 9,
  });

  addCard(s35, pres, {
    x: 5.15,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'HITOS DE CONSTRUCCIÓN EN STREAMLIT',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Módulos de la Aplicación',
    description: 'Estructura modular del script que cada alumno implementará:',
    items: [
      '1. Configuración de página responsive y paleta corporativa coherente.',
      '2. Construcción de filtros dinámicos en barra lateral.',
      '3. Renderizado de la fila de KPIs estratégicos con formato condicional.',
      '4. Scatter plot interactivo de clientes con tooltips enriquecidos.',
      '5. Distribución de polaridad de sentimiento por categoría de producto.',
      '6. Tabla de auditoría con botón de exportación para el equipo comercial.',
    ],
    itemSize: 9,
  });
}

module.exports = buildModule5;
