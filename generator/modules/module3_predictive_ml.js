// generator/modules/module3_predictive_ml.js
// Module 3: Modelos Predictivos y Machine Learning (Slides 16 - 23)

const { createModuleSeparator, createContentSlide, addCard, addStyledTable, addCalloutBox, addMetricCard } = require('../helpers');
const config = require('../config');
const colors = config.colors;

function buildModule3(pres, state) {
  // -------------------------------------------------------------
  // SLIDE 16: Separador Módulo 3
  // -------------------------------------------------------------
  state.slideCount++;
  createModuleSeparator(pres, {
    moduleNumber: '3',
    duration: '3.5 HORAS LECTIVAS',
    title: 'Modelos Predictivos y Machine Learning',
    subtitle: 'De la Teoría Estadística a los Algoritmos de Producción: Supervisado, No Supervisado y Validación',
    topics: [
      'Taxonomía matemática y conceptual del Machine Learning.',
      'Algoritmos supervisados: modelos lineales, regularización, árboles y ensamblados (XGBoost).',
      'Algoritmos no supervisados: clustering (K-Means, DBSCAN) y reducción de dimensionalidad (PCA).',
      'Ingeniería de variables, prevención de data leakage y validación cruzada estratificada.',
      'Métricas de evaluación críticas y explicabilidad con valores SHAP.',
    ],
    labName: 'Lab 3 - Modelo Predictivo de Churn con XGBoost y SHAP',
    labGoal: 'Pipeline completo en scikit-learn con tuning bayesiano e interpretabilidad ejecutiva.',
    labDeliverable: 'Modelo entrenado, matriz de confusión optimizada y análisis de impacto ROI.',
    notes: `INTRODUCCIÓN AL MÓDULO 3 (15 minutos)
- Guía del Instructor:
  Llegamos al módulo con mayor carga horaria del programa (3.5 horas). El Machine Learning constituye el motor cuantitativo de la analítica avanzada. Aquí los alumnos deben adquirir tanto el rigor conceptual (entender qué optimiza cada algoritmo) como la destreza práctica para resolver problemas reales.
- Énfasis Pedagógico:
  Insistir en que no existe un "algoritmo mágico universal" (teorema No Free Lunch). La clave del éxito de un científico de datos radica en:
  1. Un preprocesamiento e ingeniería de variables impecables (garbage in, garbage out).
  2. Una validación cruzada estricta sin fugas de información (Data Leakage).
  3. Elegir la métrica de evaluación alineada con el coste financiero del error en el negocio.
- Estructura Temporal:
  • 60 min: Taxonomía y algoritmos supervisados y de ensamble.
  • 45 min: Algoritmos no supervisados y feature engineering.
  • 45 min: Métricas de evaluación, matriz de costes y validación.
  • 60 min: Laboratorio práctico 3 (XGBoost + SHAP).`,
  });

  // -------------------------------------------------------------
  // SLIDE 17: Taxonomía Integral del Machine Learning
  // -------------------------------------------------------------
  state.slideCount++;
  const s17 = createContentSlide(pres, {
    category: 'Módulo 3 • Taxonomía del ML',
    title: 'Taxonomía del Machine Learning: Los 3 Grandes Paradigmas',
    subtitle: 'Estructuración matemática según la naturaleza de la señal de entrenamiento disponible',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `TAXONOMÍA DEL MACHINE LEARNING (25 minutos)
- Explicación Técnica para el Docente:
  Presentar los tres grandes paradigmas del aprendizaje automático:
  1. Supervisado: El dataset contiene pares (X, y). La función de pérdida mide la discrepancia entre la predicción y_estimada y la etiqueta real y.
     - Regresión: y en R (variable continua). Función de pérdida típica: MSE, MAE, Huber.
     - Clasificación: y en {C_1, ..., C_k} (discreta). Función de pérdida típica: Cross-Entropy (Log-Loss).
  2. No Supervisado: El dataset solo contiene X. No hay "tutor" ni etiqueta. El objetivo es modelar la distribución de probabilidad P(X) o descubrir subespacios latentes (clustering, densidad, manifold learning).
  3. Aprendizaje por Refuerzo (RL): Un agente toma acciones a_t en un entorno con estado s_t recibiendo recompensas r_t. Optimiza una política pi(a|s) para maximizar el retorno acumulado descontado.
- Pregunta para la Clase:
  "En vuestros proyectos, ¿con qué tipo de datos os encontráis más a menudo: etiquetados o no etiquetados? ¿Cuánto cuesta etiquetar 100.000 registros y cómo puede ayudar el aprendizaje no supervisado?"`,
  });

  // 3 Wide Columns for the 3 Paradigms
  const pW = 2.8;
  const pY = 1.5;
  const pH = 3.5;

  addCard(s17, pres, {
    x: 0.6,
    y: pY,
    w: pW,
    h: pH,
    badge: 'PARADIGMA 1 • ETIQUETADO',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Aprendizaje Supervisado',
    description: 'Entrenamiento con datos de entrada ($X$) y variable objetivo ($y$) conocida.',
    items: [
      { text: 'Problemas de Regresión:', bold: true },
      'Predicción de variables numéricas continuas (demanda, precios, LTV).',
      { text: 'Problemas de Clasificación:', bold: true },
      'Asignación a categorías discretas (abandono sí/no, fraude, diagnóstico).',
      { text: 'Algoritmos Representativos:', bold: true },
      'Regresión Logística, Random Forest, XGBoost, LightGBM, Redes MLP.',
      { text: 'Reto Principal:', bold: true },
      'Coste y calidad del etiquetado; sobreajuste a datos históricos.',
    ],
    itemSize: 8.5,
  });

  addCard(s17, pres, {
    x: 3.6,
    y: pY,
    w: pW,
    h: pH,
    badge: 'PARADIGMA 2 • ESTRUCTURA LATENTE',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Aprendizaje No Supervisado',
    description: 'Descubrimiento de patrones, agrupaciones y geometrías ocultas en $X$ sin etiquetas.',
    items: [
      { text: 'Técnicas de Clustering:', bold: true },
      'Agrupamiento por similitud (segmentación de clientes, perfiles de consumo).',
      { text: 'Reducción de Dimensionalidad:', bold: true },
      'Compresión de variables preservando varianza o topología (PCA, t-SNE).',
      { text: 'Detección de Anomalías:', bold: true },
      'Identificación de observaciones atípicas (Isolation Forest, One-Class SVM).',
      { text: 'Reto Principal:', bold: true },
      'Validación matemática objetiva; no hay ground truth evidente.',
    ],
    itemSize: 8.5,
  });

  addCard(s17, pres, {
    x: 6.6,
    y: pY,
    w: pW,
    h: pH,
    badge: 'PARADIGMA 3 • INTERACCIÓN Y CONTROL',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Aprendizaje por Refuerzo',
    description: 'Optimización de secuencias de decisiones mediante recompensas y penalizaciones.',
    items: [
      { text: 'Agente y Entorno:', bold: true },
      'Bucle continuo de Estado ($S$) -> Acción ($A$) -> Recompensa ($R$).',
      { text: 'Aplicaciones Empresariales:', bold: true },
      'Fijación dinámica de precios, optimización de inventario, trading.',
      { text: 'Algoritmos Representativos:', bold: true },
      'Q-Learning, Deep Q-Networks (DQN), PPO, Actor-Critic.',
      { text: 'Reto Principal:', bold: true },
      'Necesidad de simuladores precisos; lenta convergencia en entornos reales.',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 18: Algoritmos Supervisados Clave: De Regresión a Ensamblados
  // -------------------------------------------------------------
  state.slideCount++;
  const s18 = createContentSlide(pres, {
    category: 'Módulo 3 • Algoritmos Supervisados',
    title: 'Algoritmos Supervisados: De Modelos Lineales a Gradient Boosting',
    subtitle: 'Mapeo de técnicas, interpretabilidad vs capacidad predictiva y fundamentos matemáticos',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `ALGORITMOS SUPERVISADOS Y BOOSTING (30 minutos)
- Guía para el Instructor:
  Explicar por qué los modelos basados en árboles y ensamblados dominan las competiciones de datos tabulares (Kaggle) y los sistemas empresariales:
  1. Modelos Lineales & Regularizados (Ridge L2, Lasso L1):
     - Máxima interpretabilidad: los coeficientes beta_j representan el impacto marginal directo.
     - Asunción de linealidad y aditividad. Lasso selecciona variables anulando coeficientes (beta_j = 0).
  2. Árboles de Decisión (CART):
     - Particiones ortogonales del espacio de variables maximizando la reducción de impureza (Gini o Entropía).
     - Ventaja: no asumen linealidad ni requieren escalado de variables. Límite: alta varianza (inestables).
  3. Bagging (Bootstrap Aggregating - Random Forest):
     - Entrena cientos de árboles en paralelo con muestras aleatorias de filas (bootstrap) y subconjuntos aleatorios de columnas.
     - Promedia sus predicciones: reduce drásticamente la varianza sin aumentar el sesgo.
  4. Gradient Boosting (XGBoost / LightGBM / CatBoost):
     - Entrenamiento secuencial: cada nuevo árbol predice los errores residuales del conjunto acumulado.
     - Optimiza funciones de pérdida arbitrarias mediante aproximación de Taylor de segundo orden.
     - Regularización nativa (gamma, lambda) que previene el sobreajuste.`,
  });

  // 2x2 Grid of Algorithm Families
  const aW = 4.25;
  const aH = 1.72;
  const aX1 = 0.6;
  const aX2 = 5.15;
  const aY1 = 1.45;
  const aY2 = 3.28;

  addCard(s18, pres, {
    x: aX1,
    y: aY1,
    w: aW,
    h: aH,
    badge: 'MODELOS LINEALES',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Regresión Lineal, Logística & Regularización',
    description: 'Relación aditiva y = beta_0 + sum(beta_j * X_j). Alta interpretabilidad.',
    items: [
      'Ridge (L2): Penalización cuadrática para mitigar varianza.',
      'Lasso (L1): Fuerza coeficientes a cero (selección de variables).',
      'ElasticNet: Combinación convexa de L1 y L2 ante multicolinealidad.',
    ],
    itemSize: 8,
  });

  addCard(s18, pres, {
    x: aX2,
    y: aY1,
    w: aW,
    h: aH,
    badge: 'BAGGING / PARALELO',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Random Forest (Bosques Aleatorios)',
    description: 'Ensamble de árboles independientes entrenados en paralelo sobre submuestras.',
    items: [
      'Bootstrap Sampling: Selección aleatoria de filas con reemplazo en cada árbol.',
      'Feature Bagging: Subconjunto aleatorio de variables en cada división de nodo.',
      'Robusto frente a ruido y outliers; reduce la varianza sin incrementar el sesgo.',
    ],
    itemSize: 8,
  });

  addCard(s18, pres, {
    x: aX1,
    y: aY2,
    w: aW,
    h: aH,
    badge: 'BOOSTING / SECUENCIAL',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'XGBoost & LightGBM (Gradient Boosting)',
    description: 'Ensamble secuencial donde cada árbol corrige los errores residuales del anterior.',
    items: [
      'Optimización de segundo orden (cálculo analítico del gradiente y hessiano).',
      'Gestión automática de valores nulos y particionamiento en paralelo.',
      'Estado del arte indiscutible en rendimiento para datos tabulares empresariales.',
    ],
    itemSize: 8,
  });

  addCard(s18, pres, {
    x: aX2,
    y: aY2,
    w: aW,
    h: aH,
    badge: 'NO LINEALES COMPLEJOS',
    badgeBg: colors.amberBg,
    badgeColor: colors.amber,
    title: 'SVM & Redes Neuronales (MLP)',
    description: 'Fronteras de decisión complejas en espacios multivariantes.',
    items: [
      'SVM con Kernel RBF: Proyección a alta dimensión para separación.',
      'Perceptrón Multicapa (MLP): Capas ocultas con activación no lineal.',
      'Uso preferente: Datos no estructurados o geometrías intrincadas.',
    ],
    itemSize: 8,
  });

  // -------------------------------------------------------------
  // SLIDE 19: Algoritmos No Supervisados: Clustering y Reducción
  // -------------------------------------------------------------
  state.slideCount++;
  const s19 = createContentSlide(pres, {
    category: 'Módulo 3 • Algoritmos No Supervisados',
    title: 'Aprendizaje No Supervisado: Clustering y Reducción Dimensional',
    subtitle: 'Segmentación de observaciones y compresión de espacios multivariantes sin etiquetas',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `CLUSTERING Y REDUCCIÓN DE DIMENSIONALIDAD (25 minutos)
- Guía para el Instructor:
  1. K-Means:
     - Algoritmo de particionamiento por centroides. Minimiza la inercia (suma de distancias cuadráticas al centroide más cercano).
     - Limitaciones: Requiere predefinir $K$ (utilizar método del codo y Silhouette Score). Asume que los clusters son esféricos e isotrópicos. Es muy sensible al escalado de variables y a outliers.
  2. DBSCAN (Density-Based Spatial Clustering of Applications with Noise):
     - No requiere predefinir el número de clusters. Agrupa puntos densamente conectados basándose en dos parámetros: epsilon (radio de vecindad) y MinPts.
     - Gran fortaleza: identifica y aísla anomalías/ruido de forma nativa (puntos que no pertenecen a ningún cluster).
  3. Reducción de Dimensionalidad (PCA vs t-SNE / UMAP):
     - PCA: Transformación lineal ortogonal que proyecta los datos en las direcciones de máxima varianza (autovectores de la matriz de covarianza). Mantiene interpretabilidad global.
     - t-SNE / UMAP: Métodos no lineales diseñados específicamente para proyectar espacios de 50 o 100 dimensiones a 2D/3D para visualización exploratoria.`,
  });

  // 2 Large Comparison Columns: Left (Clustering) & Right (Reduction)
  const cW = 4.25;
  const cY = 1.5;
  const cH = 3.5;

  addCard(s19, pres, {
    x: 0.6,
    y: cY,
    w: cW,
    h: cH,
    badge: 'TÉCNICAS DE CLUSTERING',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Algoritmos de Agrupamiento',
    description: 'Segmentación de observaciones en grupos homogéneos internamente y heterogéneos entre sí.',
    items: [
      { text: 'K-Means:', bold: true },
      'Partición por centroides. Rápido y escalable. Requiere fijar K (Elbow method / Silhouette). Sensible a la escala.',
      { text: 'DBSCAN (Density-Based):', bold: true },
      'Agrupa por densidad espacial (radio epsilon y MinPts). Descubre geometrías no convexas y aisla ruido.',
      { text: 'Clustering Jerárquico:', bold: true },
      'Construcción de dendrogramas aglomerativos. Ideal cuando existe taxonomía jerárquica en el negocio.',
      { text: 'Métricas de Evaluación:', bold: true },
      'Coeficiente Silhouette (-1 a +1), Índice Davies-Bouldin, Calinski-Harabasz.',
    ],
    itemSize: 8.5,
  });

  addCard(s19, pres, {
    x: 5.15,
    y: cY,
    w: cW,
    h: cH,
    badge: 'REDUCCIÓN DIMENSIONAL',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Compresión y Visualización de Espacios',
    description: 'Transformación de datasets con decenas de variables en representaciones compactas.',
    items: [
      { text: 'PCA (Componentes Principales):', bold: true },
      'Transformación lineal que maximiza la varianza retenida. Elimina la multicolinealidad entre variables.',
      { text: 'Scree Plot & Varianza Explicada:', bold: true },
      'Selección del número de componentes que retengan al menos el 80-90% de la información original.',
      { text: 't-SNE & UMAP (No Lineales):', bold: true },
      'Preservación de la estructura topológica local. Estándar para visualizar clusters complejos en 2D/3D.',
      { text: 'Aplicación Práctica:', bold: true },
      'Comprimir 50 variables a 5 componentes antes de alimentar un modelo supervisado para evitar el sobreajuste.',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 20: Ingeniería de Variables & Prevención de Data Leakage
  // -------------------------------------------------------------
  state.slideCount++;
  const s20 = createContentSlide(pres, {
    category: 'Módulo 3 • Feature Engineering',
    title: 'Ingeniería de Características y Prevención de Data Leakage',
    subtitle: 'El factor más determinante en el rendimiento de los modelos en producción',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `INGENIERÍA DE VARIABLES Y DATA LEAKAGE (25 minutos)
- Explicación Técnica para el Docente:
  "Applied machine learning is basically feature engineering" (Andrew Ng). Ningún algoritmo moderno puede compensar variables mal construidas o señales inexistentes.
- Las 4 Familias de Feature Engineering:
  1. Variables de agregación temporal: Gasto acumulado últimos 7d, 30d, 90d; ratio de aceleración de consumo.
  2. Variables de interacción: Ratio deuda/ingresos, porcentaje de uso sobre el límite de crédito.
  3. Transformación de variables continuas: Logaritmo natural para distribuciones log-normales con sesgo positivo (ingresos, transacciones).
  4. Codificación categórica: One-Hot Encoding para cardinalidad baja (< 10 categorías); Target Encoding para alta cardinalidad (códigos postales, modelos de coche) aplicando siempre regularización y cálculo out-of-fold para no filtrar la etiqueta.
- DATA LEAKAGE (Fuga de Información):
  El error más letal en ciencia de datos. Ocurre cuando el modelo tiene acceso durante el entrenamiento a información que no estará disponible en el momento exacto de la inferencia en tiempo real.
  Ejemplo: Incluir la variable "Fecha de cancelación del contrato" o calcular la media del escalador con todo el dataset antes de hacer el train/test split.`,
  });

  // 4 Stepped Process Boxes
  const feW = 2.05;
  const feGap = 0.2;
  const startFE = 0.6;
  const feY = 1.5;
  const feH = 2.2;

  const feSteps = [
    {
      step: 'PASO 1',
      title: 'Imputación de Nulos',
      desc: 'Tratamiento riguroso de valores ausentes.',
      items: ['Mediana / Moda por grupo.', 'KNN Imputer para relaciones multivariantes.', 'Indicador binario de missing.'],
    },
    {
      step: 'PASO 2',
      title: 'Codificación Categórica',
      desc: 'Traducción de texto a señales numéricas.',
      items: ['One-Hot Encoding (baja cardinalidad).', 'Target Encoding con regularización.', 'Weight of Evidence (WoE) en scoring.'],
    },
    {
      step: 'PASO 3',
      title: 'Escalado & Transformación',
      desc: 'Homogeneización de magnitudes.',
      items: ['StandardScaler ($z$-score).', 'RobustScaler (resistente a outliers).', 'Transformación Box-Cox / Log.'],
    },
    {
      step: 'PASO 4',
      title: 'Variables de Negocio',
      desc: 'Construcción de métricas sintéticas.',
      items: ['Ratios y proporciones temporales.', 'Tendencias y diferencias (T-1 vs T-30).', 'Métricas RFM (Recencia, Frecuencia, Valor).'],
    },
  ];

  feSteps.forEach((fe, idx) => {
    const xPos = startFE + idx * (feW + feGap);
    addCard(s20, pres, {
      x: xPos,
      y: feY,
      w: feW,
      h: feH,
      badge: fe.step,
      badgeBg: colors.iceBlue,
      badgeColor: colors.steelBlue,
      title: fe.title,
      titleSize: 11,
      description: fe.desc,
      descriptionSize: 8.5,
      items: fe.items,
      itemSize: 8,
    });
  });

  // Severe Alert Box for Data Leakage
  addCalloutBox(s20, pres, {
    x: 0.6,
    y: 3.85,
    w: 8.8,
    h: 1.2,
    type: 'alert',
    title: 'REGLA DE ORO DE PRODUCCIÓN: PREVENCIÓN ABSOLUTA DE DATA LEAKAGE',
    text: 'Cualquier cálculo estadístico (medias de imputación, desviaciones de escalado, vocabularios de texto o frecuencias de categorías) DEBE calcularse exclusivamente sobre el conjunto de entrenamiento (Train) y aplicarse de forma ciega sobre Validación y Test usando pipelines reproducibles (ej. scikit-learn Pipeline / ColumnTransformer). Si calculas la media antes del split, tu modelo parecerá perfecto en el laboratorio pero fracasará estrepitosamente en producción.',
  });

  // -------------------------------------------------------------
  // SLIDE 21: Evaluación Rigurosa de Modelos de Clasificación
  // -------------------------------------------------------------
  state.slideCount++;
  const s21 = createContentSlide(pres, {
    category: 'Módulo 3 • Métricas de Evaluación',
    title: 'Evaluación de Clasificación: Más Allá de la Trampa del Accuracy',
    subtitle: 'Métricas robustas para clases desbalanceadas y alineación con la matriz de costes de negocio',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `EVALUACIÓN DE CLASIFICACIÓN (30 minutos)
- Guía del Instructor:
  La trampa del Accuracy (Exactitud):
  En un problema de fraude bancario o abandono de clientes donde solo el 1% de las transacciones son fraudulentas, un modelo "dummy" que siempre predice "NO FRAUDE" tendrá un 99.0% de exactitud, pero un 0% de utilidad empresarial (no detecta ningún fraude).
- Definición de Métricas Clave:
  • Precisión (Precision) = $TP / (TP + FP)$: De todos los casos que el modelo predijo positivos, ¿cuántos eran positivos de verdad? Priorizar cuando el coste de un Falso Positivo sea muy elevado (ej. bloquear injustamente la tarjeta de crédito de un cliente VIP o acusar erróneamente de spam).
  • Sensibilidad (Recall) = $TP / (TP + FN)$: De todos los casos positivos reales que existían, ¿cuántos logró capturar el modelo? Priorizar cuando el coste de un Falso Negativo sea crítico (ej. diagnóstico de cáncer o fuga de un cliente de alto margen).
  • F1-Score: Media armónica entre Precisión y Recall. No permite que una de las dos métricas sea despreciada.
  • Curva ROC y AUC: Mide la capacidad del modelo de ordenar probabilidades a través de todos los umbrales posibles.
  • Curva Precision-Recall (PR-AUC): Esencial en desbalanceos extremos (fraude, churn raro), donde ROC-AUC puede ser excesivamente optimista.`,
  });

  // 4 Metric Scorecards
  const mCardW = 2.05;
  const mCardGap = 0.2;
  const startM = 0.6;
  const mY = 1.5;
  const mH = 1.6;

  addMetricCard(s21, pres, {
    x: startM,
    y: mY,
    w: mCardW,
    h: mH,
    value: 'TP / (TP+FP)',
    valueSize: 16,
    valueColor: colors.steelBlue,
    label: 'PRECISIÓN',
    subtext: 'Minimiza Falsos Positivos. Clave cuando alertar erróneamente tiene un alto coste operativo.',
  });

  addMetricCard(s21, pres, {
    x: startM + 1 * (mCardW + mCardGap),
    y: mY,
    w: mCardW,
    h: mH,
    value: 'TP / (TP+FN)',
    valueSize: 16,
    valueColor: colors.purple,
    label: 'RECALL / SENSIBILIDAD',
    subtext: 'Minimiza Falsos Negativos. Crítico cuando dejar escapar un caso real es catastrófico.',
  });

  addMetricCard(s21, pres, {
    x: startM + 2 * (mCardW + mCardGap),
    y: mY,
    w: mCardW,
    h: mH,
    value: '2·(P·R)/(P+R)',
    valueSize: 16,
    valueColor: colors.emerald,
    label: 'F1-SCORE (ARMÓNICO)',
    subtext: 'Balance óptimo entre precisión y cobertura en escenarios con clases moderadamente desbalanceadas.',
  });

  addMetricCard(s21, pres, {
    x: startM + 3 * (mCardW + mCardGap),
    y: mY,
    w: mCardW,
    h: mH,
    value: 'ROC & PR-AUC',
    valueSize: 16,
    valueColor: colors.amber,
    label: 'ÁREA BAJO LA CURVA',
    subtext: 'Mide la capacidad de ranking del modelo independientemente del umbral de corte seleccionado.',
  });

  // Lower Section: Confusion Matrix Table & Business Cost Tradeoff
  addStyledTable(s21, pres, {
    x: 0.6,
    y: 3.25,
    w: 8.8,
    h: 1.8,
    colW: [1.8, 2.3, 2.3, 2.4],
    headers: ['Matriz de Confusión', 'Predicción Negativa (0)', 'Predicción Positiva (1)', 'Impacto en el Negocio (Caso Churn)'],
    alignCols: ['left', 'center', 'center', 'left'],
    rows: [
      ['Real Negativo (0 - No Churn)', 'Verdadero Negativo (TN)\nCliente fiel no tocado', 'Falso Positivo (FP - Error Tipo I)\nOferta enviada a cliente fiel', 'Coste de la campaña de retención innecesaria (ej. 15€).'],
      ['Real Positivo (1 - Churn)', 'Falso Negativo (FN - Error Tipo II)\nCliente que se marcha sin aviso', 'Verdadero Positivo (TP)\nCliente retenido proactivamente', 'Pérdida irreversible del valor de vida del cliente (LTV = 600€).'],
    ],
  });

  // -------------------------------------------------------------
  // SLIDE 22: Validación Cruzada y Trade-off Sesgo-Varianza
  // -------------------------------------------------------------
  state.slideCount++;
  const s22 = createContentSlide(pres, {
    category: 'Módulo 3 • Validación y Generalización',
    title: 'Validación Cruzada y el Dilema Sesgo-Varianza (Bias-Variance)',
    subtitle: 'Cómo garantizar que el modelo generalice ante datos futuros nunca vistos',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `SESGO-VARIANZA Y VALIDACIÓN CRUZADA (25 minutos)
- Guía para el Instructor:
  1. El Dilema Sesgo-Varianza:
     - Error Total = (Sesgo)^2 + Varianza + Error Irreducible.
     - Subajuste (High Bias / Underfitting): El modelo es demasiado rígido (ej. regresión lineal para datos polinomiales). Error elevado en train y en test.
     - Sobreajuste (High Variance / Overfitting): El modelo memoriza el ruido específico de la muestra de entrenamiento. Error casi cero en train, pero se dispara en test.
     - Punto Óptimo: Complejidad adecuada que minimiza el error de generalización en test.
  2. Técnicas de Validación Cruzada:
     - Stratified K-Fold: Divide los datos en $K$ pliegues asegurando que cada pliegue contenga exactamente el mismo porcentaje de la clase minoritaria que el dataset original.
     - TimeSeriesSplit: Obligatorio cuando los datos tienen componente temporal. No se puede entrenar con el futuro para predecir el pasado (walk-forward validation).
  3. Mecanismos de Control de Sobreajuste:
     - Early stopping en boosting.
     - Limitar la profundidad de los árboles (max_depth=4-6).
     - Regularización L1/L2.`,
  });

  // 2 Large Comparison Columns
  addCard(s22, pres, {
    x: 0.6,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'DILEMA SESGO-VARIANZA',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Subajuste vs Sobreajuste',
    description: 'El equilibrio entre la simplicidad del modelo y su capacidad de captura de patrones.',
    items: [
      { text: 'Alto Sesgo (Underfitting):', bold: true },
      'El modelo simplifica en exceso la realidad. Error elevado tanto en el conjunto de entrenamiento como en validación.',
      { text: 'Alta Varianza (Overfitting):', bold: true },
      'El modelo memoriza el ruido del conjunto de entrenamiento. Error mínimo en train, pero fracaso en validación/test.',
      { text: 'Técnicas de Mitigación:', bold: true },
      'Aumentar datos de entrenamiento, regularización L1/L2, podado de árboles (max_depth), dropout en redes.',
      { text: 'Objetivo de Producción:', bold: true },
      'Maximizar la capacidad de generalización sobre observaciones completamente nuevas.',
    ],
    itemSize: 8.5,
  });

  addCard(s22, pres, {
    x: 5.15,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'ESTRATEGIAS DE VALIDACIÓN',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Estrategias de Partición de Datos',
    description: 'Protocolos de validación estadística para estimar el error de forma insesgada.',
    items: [
      { text: 'Partición Train / Val / Test (60/20/20):', bold: true },
      'Train para ajustar parámetros, Val para calibrar hiperparámetros y Test como cofre sellado final.',
      { text: 'Stratified K-Fold Cross-Validation:', bold: true },
      'Partición en K bloques (típicamente K=5 o 10) preservando la distribución de clases en cada pliegue.',
      { text: 'TimeSeriesSplit (Validación Temporal):', bold: true },
      'Ventana expansiva o deslizante temporal. Prohibido mezclar observaciones futuras con pasadas.',
      { text: 'Nested Cross-Validation:', bold: true },
      'Validación anidada para optimización de hiperparámetros sin sesgo de selección.',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 23: Laboratorio 3: Modelado Predictivo de Churn con XGBoost & SHAP
  // -------------------------------------------------------------
  state.slideCount++;
  const s23 = createContentSlide(pres, {
    category: 'Módulo 3 • Laboratorio Práctico',
    title: 'Laboratorio 3: Predicción de Churn con XGBoost y Valores SHAP',
    subtitle: 'Construcción, optimización con Optuna e interpretabilidad con XAI para comités directivos',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `LABORATORIO PRÁCTICO 3 (60 minutos)
- Guía para el Instructor:
  Este es el laboratorio más completo del bloque predictivo. Se ejecuta sobre el notebook \`lab3_xgboost_churn_shap.ipynb\`.
- Dinámica del Ejercicio:
  1. Los alumnos cargan el dataset preparado en el Lab 1.
  2. Implementan un Pipeline con \`ColumnTransformer\` para escalar continuas y aplicar \`TargetEncoder\` regularizado a categóricas.
  3. Ajustan un modelo baseline de Regresión Logística para establecer la línea base de rendimiento.
  4. Entrenan un clasificador \`XGBClassifier\` optimizando hiperparámetros clave con \`Optuna\` (n_estimators, max_depth, learning_rate, subsample, colsample_bytree).
  5. Calculan curvas Precision-Recall y fijan el umbral óptimo de probabilidad basándose en la matriz de costes (Retener cliente cuesta 20€; perderlo cuesta 400€).
  6. Generan el gráfico \`shap.summary_plot\` para identificar las 5 variables con mayor impacto en la propensión de abandono.
- Pregunta de Discusión en el Aula:
  "Observando el Waterfall plot de SHAP para el cliente #1042, ¿qué palanca comercial específica debería activar el gestor de cuentas para evitar su baja?"`,
  });

  addCard(s23, pres, {
    x: 0.6,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'FICHA TÉCNICA DEL LABORATORIO',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Especificaciones del Modelo',
    description: 'Desarrollo de un pipeline predictivo completo y explicable orientado al ROI empresarial.',
    items: [
      { text: 'Caso de Negocio:', bold: true },
      'Predicción del abandono mensual en cartera de clientes corporativos.',
      { text: 'Algoritmo Principal:', bold: true },
      'XGBoost (Extreme Gradient Boosting) con calibración de probabilidad.',
      { text: 'Métrica Primaria de Optimización:', bold: true },
      'PR-AUC (Área bajo la curva Precision-Recall) y Coste Total.',
      { text: 'Librerías Clave:', bold: true },
      'scikit-learn, xgboost, optuna, shap, matplotlib.',
    ],
    itemSize: 9,
  });

  addCard(s23, pres, {
    x: 5.15,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'HITOS DE IMPLEMENTACIÓN',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Flujo de Ejecución en el Notebook',
    description: 'Etapas que cada alumno debe completar y verificar:',
    items: [
      '1. Partición estratificada 80/20 con StratifiedShuffleSplit.',
      '2. Construcción de Pipeline con preprocesadores herméticos.',
      '3. Optimización bayesiana de hiperparámetros con Optuna (30 trials).',
      '4. Simulación de umbrales de corte (Threshold Tuning) por coste financiero.',
      '5. Extracción de valores SHAP mediante TreeExplainer.',
      '6. Generación de informe ejecutivo con recomendaciones de retención.',
    ],
    itemSize: 9,
  });
}

module.exports = buildModule3;
