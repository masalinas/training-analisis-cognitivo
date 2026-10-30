// generator/modules/module3_predictive_ml.js
// Module 3: Modelos Predictivos y Machine Learning (Slides 16 - 23)

module.exports = async function buildModule3(pres, H) {
  // -------------------------------------------------------------
  // SLIDE 16: Separador Módulo 3
  // -------------------------------------------------------------
  H.divider(pres, {
    mod: 3,
    title: 'Modelos Predictivos y Machine Learning',
    subtitle: 'De la Teoría Estadística a los Algoritmos de Producción: Supervisado, No Supervisado y Validación',
    hours: '3.5 HORAS LECTIVAS',
    topics: [
      { icon: 'FaCogs', text: 'Taxonomía matemática y conceptual del Machine Learning' },
      { icon: 'FaProjectDiagram', text: 'Algoritmos supervisados: lineales, regularización y ensembles (XGBoost)' },
      { icon: 'FaShapes', text: 'Aprendizaje no supervisado: clustering (K-Means) y reducción (PCA)' },
      { icon: 'FaShieldAlt', text: 'Feature engineering, prevención de data leakage y validación cruzada' },
      { icon: 'FaChartBar', text: 'Métricas de evaluación, matriz de costes y explicabilidad con SHAP' },
      { icon: 'FaFlask', text: 'Laboratorio 3: Modelo predictivo de Churn con XGBoost y XAI' },
    ],
    notes: {
      obj: 'Dominar la selección, ajuste, validación rigurosa y explicación técnica de algoritmos predictivos empresariales.',
      guion: [
        'Módulo central del curso por carga horaria (3.5 horas) y profundidad técnica.',
        'Insistiremos en que no hay algoritmos mágicos (teorema No Free Lunch): el éxito reside en una sólida ingeniería de variables y una validación cruzada hermética.',
        'Conectaremos las métricas algorítmicas con la matriz de costes y la explicabilidad para comités directivos.',
      ],
      preguntas: [
        '¿Cómo determináis hoy si una ganancia de 0.02 en AUC justifica el coste computacional de un modelo más complejo en producción?',
      ],
    },
  });

  // -------------------------------------------------------------
  // SLIDE 17: Taxonomía Integral del Machine Learning
  // -------------------------------------------------------------
  const s17 = H.slide(pres, {
    mod: 3,
    badge: 'Taxonomía del ML',
    title: 'Taxonomía del Machine Learning: 3 Paradigmas',
    notes: {
      obj: 'Estructurar los enfoques del aprendizaje automático según la disponibilidad y naturaleza de la señal de entrenamiento.',
      guion: [
        '1. Supervisado: Pares (X, y). Regresión si la variable objetivo es continua, Clasificación si es discreta.',
        '2. No Supervisado: Solo matriz X. Descubrimiento de estructuras latentes, clusters o densidades sin etiquetas.',
        '3. Refuerzo (RL): Interacción agente-entorno para optimizar decisiones secuenciales mediante recompensas.',
      ],
      preguntas: [
        '¿Cuánto le cuesta a vuestra organización etiquetar datos brutos para convertirlos en problemas supervisados?',
      ],
    },
  });

  H.cardsRow(
    s17,
    [
      {
        title: 'Aprendizaje Supervisado',
        icon: 'FaTag',
        tone: 'light',
        bullets: [
          { lead: 'Regresión:', text: 'Previsión de variables continuas (demanda, precios, LTV).' },
          { lead: 'Clasificación:', text: 'Categorías discretas (abandono, detección de fraude).' },
          { lead: 'Algoritmos:', text: 'Regresión Logística, Random Forest, XGBoost, LightGBM.' },
          { lead: 'Reto clave:', text: 'Coste del etiquetado y prevención de sobreajuste.' },
        ],
      },
      {
        title: 'Aprendizaje No Supervisado',
        icon: 'FaShapes',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Clustering:', text: 'Segmentación de clientes sin categorías preestablecidas.' },
          { lead: 'Reducción:', text: 'Compresión del espacio preservando varianza (PCA).' },
          { lead: 'Anomalías:', text: 'Aislamiento de casos atípicos (Isolation Forest).' },
          { lead: 'Reto clave:', text: 'Evaluación objetiva sin una etiqueta de verdad base.' },
        ],
      },
      {
        title: 'Aprendizaje por Refuerzo',
        icon: 'FaGamepad',
        tone: 'light',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Bucle interactivo:', text: 'Estado ($S$), Acción ($A$) y Recompensa ($R$).' },
          { lead: 'Aplicaciones:', text: 'Pricing dinámico, logística y gestión de inventario.' },
          { lead: 'Algoritmos:', text: 'Q-Learning, DQN, PPO, modelos Actor-Critic.' },
          { lead: 'Reto clave:', text: 'Requiere entornos de simulación de alta fidelidad.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );

  // -------------------------------------------------------------
  // SLIDE 18: Algoritmos Supervisados Clave: De Regresión a Ensamblados
  // -------------------------------------------------------------
  const s18 = H.slide(pres, {
    mod: 3,
    badge: 'Algoritmos Supervisados',
    title: 'Modelos Supervisados: De Modelos Lineales a Boosting',
    notes: {
      obj: 'Examinar los principios matemáticos y el trade-off entre interpretabilidad y precisión de las familias algorítmicas líderes.',
      guion: [
        'Modelos Lineales (Ridge/Lasso): Coeficientes directos de impacto marginal, asumen aditividad y linealidad.',
        'Random Forest: Ensamble paralelo (Bagging) de árboles descorrelacionados; reduce drásticamente la varianza.',
        'Gradient Boosting (XGBoost/LightGBM): Ensamble secuencial que optimiza errores residuales con gradiente y hessiano de 2º orden.',
        'SVM y Redes: Fronteras complejas no lineales en datos no tabulares.',
      ],
      preguntas: [
        '¿Por qué XGBoost suele superar a redes neuronales profundas en datasets tabulares empresariales?',
      ],
    },
  });

  H.cardsGrid(
    s18,
    [
      {
        title: 'Modelos Lineales & Regularización',
        icon: 'FaChartLine',
        bullets: [
          { lead: 'Interpretabilidad:', text: 'Relación aditiva $y = \\beta_0 + \\sum \\beta_j X_j$.' },
          { lead: 'Ridge (L2):', text: 'Penalización cuadrática ante varianza.' },
          { lead: 'Lasso (L1):', text: 'Selección de variables forzando pesos a 0.' },
        ],
      },
      {
        title: 'Random Forest (Bagging Paralelo)',
        icon: 'FaTree',
        bullets: [
          { lead: 'Bootstrap:', text: 'Muestreo aleatorio de filas con reemplazo.' },
          { lead: 'Variables:', text: 'Subconjunto aleatorio en división de nodo.' },
          { lead: 'Robustez:', text: 'Promedio de árboles que reduce la varianza.' },
        ],
      },
      {
        title: 'XGBoost & LightGBM (Boosting)',
        icon: 'FaRocket',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Secuencial:', text: 'Cada árbol minimiza el error acumulado.' },
          { lead: 'Segundo orden:', text: 'Optimización de gradiente y hessiano.' },
          { lead: 'Producción:', text: 'Rendimiento estado del arte en datos tabulares.' },
        ],
      },
      {
        title: 'SVM & Redes Neuronales (MLP)',
        icon: 'FaBrain',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Kernel Trick:', text: 'Proyección RBF a dimensiones superiores.' },
          { lead: 'Perceptrón:', text: 'Capas densas con activación no lineal.' },
          { lead: 'Casos clave:', text: 'Interacciones no lineales de alta escala.' },
        ],
      },
    ],
    {
      cols: 2,
      gap: 0.35,
      size: 11.5,
      titleSize: 15,
      h: 4.8,
    }
  );

  // -------------------------------------------------------------
  // SLIDE 19: Algoritmos No Supervisados: Clustering y Reducción
  // -------------------------------------------------------------
  const s19 = H.slide(pres, {
    mod: 3,
    badge: 'No Supervisado',
    title: 'Clustering y Reducción de Dimensionalidad',
    notes: {
      obj: 'Dominar la segmentación por agrupamiento y la compresión geométrica de espacios multivariantes.',
      guion: [
        'K-Means agrupa por centroides minimizando inercia; sensible a outliers y escala. Requiere fijar K con Silhouette Score.',
        'DBSCAN agrupa por densidad con parámetros epsilon y MinPts; detecta anomalías y formas no esféricas de manera natural.',
        'PCA reduce variables correladas proyectando en ejes ortogonales de máxima varianza.',
      ],
      preguntas: [
        '¿Cómo interpretáis un Silhouette Score de 0.25 en una segmentación comercial de clientes?',
      ],
    },
  });

  H.cardsRow(
    s19,
    [
      {
        title: 'Algoritmos de Clustering',
        icon: 'FaObjectGroup',
        tone: 'light',
        bullets: [
          { lead: 'K-Means:', text: 'Partición por centroides. Escalable, sensible a escala de variables.' },
          { lead: 'DBSCAN:', text: 'Agrupamiento por densidad espacial; aísla ruido y outliers nativamente.' },
          { lead: 'Jerárquico:', text: 'Construcción de dendrogramas para taxonomías de negocio.' },
          { lead: 'Evaluación:', text: 'Coeficiente Silhouette (-1 a +1) e índice Davies-Bouldin.' },
        ],
      },
      {
        title: 'Compresión & Reducción (PCA)',
        icon: 'FaCompressArrowsAlt',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'PCA:', text: 'Transformación lineal que maximiza la varianza acumulada retenida.' },
          { lead: 'Varianza:', text: 'Selección de componentes que retengan al menos el 80-90% de señal.' },
          { lead: 't-SNE / UMAP:', text: 'Mapeo no lineal para proyección visual exploratoria en 2D y 3D.' },
          { lead: 'Producción:', text: 'Eliminación previa de multicolinealidad antes de modelos supervisados.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );

  // -------------------------------------------------------------
  // SLIDE 20: Ingeniería de Variables & Prevención de Data Leakage
  // -------------------------------------------------------------
  const s20 = H.slide(pres, {
    mod: 3,
    badge: 'Feature Engineering',
    title: 'Ingeniería de Variables y Prevención de Data Leakage',
    notes: {
      obj: 'Identificar el papel crucial de la transformación de variables y las medidas técnicas para evitar fugas de información.',
      guion: [
        'Andrew Ng: "Applied machine learning is basically feature engineering". Ningún modelo compensa variables erróneas.',
        'Data Leakage ocurre cuando información del futuro o del conjunto de test se filtra al entrenamiento.',
        'Regla de oro: cualquier cálculo (medias, encoders, escalados) debe ajustarse estrictamente en train y transformarse en test vía Pipelines.',
      ],
      preguntas: [
        '¿Por qué calcular la media de un StandardScaler con todo el dataset antes del split invalida los resultados?',
      ],
    },
  });

  H.steps(
    s20,
    [
      {
        title: '1 · Imputación',
        body: 'Valores Ausentes\n\n• Mediana o moda por grupo\n• KNN Imputer multivariante\n• Variable bandera de missing',
      },
      {
        title: '2 · Codificación',
        body: 'Variables Categóricas\n\n• One-Hot (baja cardinalidad)\n• Target Encoding regularizado\n• Weight of Evidence (WoE)',
      },
      {
        title: '3 · Escalado',
        body: 'Magnitudes Numéricas\n\n• StandardScaler ($z$-score)\n• RobustScaler (con outliers)\n• Transformación Logarítmica',
      },
      {
        title: '4 · Negocio',
        body: 'Ratios e Interacción\n\n• Métricas temporales (T-7 / T-30)\n• Recencia, Frecuencia, Valor\n• Ratios de aceleración',
      },
    ],
    {
      dir: 'h',
      gap: 0.3,
      size: 11.5,
      accent: H.COL.COBALT,
      h: 3.5,
    }
  );

  H.callout(s20, {
    x: H.CX,
    y: 5.4,
    w: H.CW,
    h: 1.1,
    kind: 'warn',
    lead: 'PREVENCIÓN ABSOLUTA DE DATA LEAKAGE:',
    text: 'Cualquier cálculo estadístico (medias, varianzas, imputadores o vocabularios) debe entrenarse EXCLUSIVAMENTE sobre Train y aplicarse a ciegas sobre Validación y Test mediante pipelines reproducibles (scikit-learn Pipeline). De lo contrario, las métricas serán falsamente optimistas.',
    size: 12.5,
  });

  // -------------------------------------------------------------
  // SLIDE 21: Evaluación Rigurosa de Modelos de Clasificación
  // -------------------------------------------------------------
  const s21 = H.slide(pres, {
    mod: 3,
    badge: 'Métricas de Evaluación',
    title: 'Evaluación de Clasificación y Matriz de Costes',
    notes: {
      obj: 'Aprender a superar la trampa del Accuracy en datasets desbalanceados y conectar métricas probabilísticas con el impacto en euros.',
      guion: [
        'En un problema con 1% de fraude, predecir siempre "no fraude" da 99% de accuracy pero 0% de utilidad de negocio.',
        'Precision penaliza Falsos Positivos; Recall penaliza Falsos Negativos.',
        'Curva Precision-Recall es obligatoria ante desbalanceo severo.',
        'La matriz de confusión debe traducirse a una matriz de costes económicos.',
      ],
      preguntas: [
        '¿Cuánto le cuesta a vuestra empresa un Falso Positivo frente a un Falso Negativo?',
      ],
    },
  });

  H.cardsRow(
    s21,
    [
      {
        title: 'Precisión',
        icon: 'FaBullseye',
        bullets: [
          { lead: 'Fórmula:', text: 'TP / (TP + FP)' },
          { lead: 'Objetivo:', text: 'Minimizar Falsos Positivos.' },
          { lead: 'Foco:', text: 'Evitar alarmas erróneas de coste alto.' },
        ],
      },
      {
        title: 'Sensibilidad',
        icon: 'FaSearchPlus',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Fórmula:', text: 'TP / (TP + FN)' },
          { lead: 'Objetivo:', text: 'Minimizar Falsos Negativos.' },
          { lead: 'Foco:', text: 'Capturar toda fuga o fraude crítico.' },
        ],
      },
      {
        title: 'F1-Score',
        icon: 'FaBalanceScale',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Fórmula:', text: '2·(P·R) / (P + R)' },
          { lead: 'Objetivo:', text: 'Equilibrio armónico.' },
          { lead: 'Foco:', text: 'Métrica única balanceada.' },
        ],
      },
      {
        title: 'PR-AUC',
        icon: 'FaChartArea',
        accent: H.COL.AMBER,
        bullets: [
          { lead: 'Fórmula:', text: 'Área bajo curva PR' },
          { lead: 'Objetivo:', text: 'Capacidad de ranking.' },
          { lead: 'Foco:', text: 'Clave ante desbalanceo extremo.' },
        ],
      },
    ],
    { y: 1.70, h: 2.35, size: 10.5, titleSize: 14, gap: 0.25 }
  );

  H.table(
    s21,
    [
      ['Matriz de Confusión', 'Predicción: No Abandono (0)', 'Predicción: Abandono (1)', 'Impacto Económico del Error'],
      ['Real: Fiel (0)', 'Verdadero Negativo (TN)\nCliente satisfecho preservado', 'Falso Positivo (FP - Error Tipo I)\nOferta enviada innecesariamente', 'Coste de campaña innecesaria (ej. 20 € de descuento).'],
      ['Real: Fuga (1)', 'Falso Negativo (FN - Error Tipo II)\nCliente que se marcha sin aviso', 'Verdadero Positivo (TP)\nCliente retenido proactivamente', 'Pérdida del valor vitalicio del cliente (LTV = 500 €).'],
    ],
    {
      y: 4.22,
      w: H.CW,
      colW: [2.5, 3.2, 3.2, 3.2],
      size: 11,
      headSize: 12,
      maxH: 2.45,
    }
  );

  // -------------------------------------------------------------
  // SLIDE 22: Validación Cruzada y Trade-off Sesgo-Varianza
  // -------------------------------------------------------------
  const s22 = H.slide(pres, {
    mod: 3,
    badge: 'Validación y Generalización',
    title: 'Validación Cruzada y Trade-off Sesgo-Varianza',
    notes: {
      obj: 'Comprender los mecanismos para prevenir el sobreajuste y garantizar la generalización del modelo ante datos futuros.',
      guion: [
        'Error total = (Sesgo)^2 + Varianza + Error irreducible.',
        'Subajuste: modelo demasiado rígido. Sobreajuste: modelo memoriza el ruido.',
        'Stratified K-Fold asegura la misma proporción de clases en cada pliegue.',
        'TimeSeriesSplit es obligatorio para datos temporales (walk-forward).',
      ],
      preguntas: [
        '¿Por qué nunca se debe utilizar un K-Fold aleatorio convencional en datos financieros o de series temporales?',
      ],
    },
  });

  H.cardsRow(
    s22,
    [
      {
        title: 'Dilema Sesgo-Varianza',
        icon: 'FaChartBar',
        bullets: [
          { lead: 'Subajuste (Alto Sesgo):', text: 'Modelo excesivamente simplificado. Error alto en train y en test.' },
          { lead: 'Sobreajuste (Alta Varianza):', text: 'Memorización del ruido muestral. Error mínimo en train, pésimo en test.' },
          { lead: 'Mitigación:', text: 'Aumentar observaciones, regularización L1/L2, podar árboles (max_depth).' },
          { lead: 'Punto óptimo:', text: 'Complejidad calibrada que minimiza el error de generalización.' },
        ],
      },
      {
        title: 'Estrategias de Partición',
        icon: 'FaColumns',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Train / Val / Test:', text: 'Partición 60/20/20 con cofre sellado de test final para auditoría.' },
          { lead: 'Stratified K-Fold:', text: 'K pliegues preservando exactamente el porcentaje de clase minoritaria.' },
          { lead: 'TimeSeriesSplit:', text: 'Validación temporal progresiva; prohibido mezclar futuro con pasado.' },
          { lead: 'Nested CV:', text: 'Ajuste de hiperparámetros anidado para evitar sesgo de optimismo.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );

  // -------------------------------------------------------------
  // SLIDE 23: Laboratorio 3: Modelado Predictivo de Churn con XGBoost & SHAP
  // -------------------------------------------------------------
  const s23 = H.slide(pres, {
    mod: 3,
    badge: 'Laboratorio Práctico 3',
    title: 'Lab 3: Predicción de Churn con XGBoost y SHAP (XAI)',
    lab: true,
    notes: {
      obj: 'Entrenar un modelo de Gradient Boosting para churn, calibrar hiperparámetros con Optuna y explicar predicciones con SHAP.',
      guion: [
        'Abrimos `lab3_xgboost_churn_shap.ipynb` en Google Colab o Jupyter local.',
        'Entrenamos una Regresión Logística baseline y la comparamos con XGBoost optimizado.',
        'Calculamos la curva Precision-Recall, elegimos el umbral por matriz de costes y extraemos el waterfall plot de SHAP.',
      ],
      preguntas: [
        'Mirando el gráfico SHAP de un cliente en riesgo, ¿qué acción comercial concreta deberíamos activar?',
      ],
      lab: [
        '1. Configurar el pipeline con ColumnTransformer y TargetEncoder.',
        '2. Entrenar XGBClassifier y optimizar con Optuna (30 iteraciones).',
        '3. Evaluar la curva PR-AUC y simular costes por umbral de probabilidad.',
        '4. Extraer el TreeExplainer de SHAP y graficar el summary plot.',
        '5. Explicar predicciones locales individuales para el gestor de cuentas.',
      ],
    },
  });

  H.cardsRow(
    s23,
    [
      {
        title: 'Especificaciones del Modelo',
        icon: 'FaFlask',
        accent: H.COL.CORAL,
        bullets: [
          { lead: 'Caso de Negocio:', text: 'Predicción de abandono mensual en cartera B2B.' },
          { lead: 'Algoritmo:', text: 'XGBoost con optimización bayesiana (Optuna).' },
          { lead: 'Métrica Clave:', text: 'PR-AUC y minimización de coste total de churn.' },
          { lead: 'Stack:', text: 'scikit-learn, xgboost, optuna, shap, matplotlib.' },
        ],
      },
      {
        title: 'Hitos del Laboratorio',
        icon: 'FaTerminal',
        accent: H.COL.COBALT,
        bullets: [
          { lead: 'Hito 1 · Pipeline:', text: 'Preprocesamiento hermético sin fugas de datos.' },
          { lead: 'Hito 2 · Tuning:', text: 'Calibración de learning_rate, depth y subsample.' },
          { lead: 'Hito 3 · Costes:', text: 'Selección de punto de corte óptimo por ROI.' },
          { lead: 'Hito 4 · SHAP:', text: 'Extracción de valores Shapley para interpretabilidad.' },
          { lead: 'Hito 5 · Informe:', text: 'Traducción de conclusiones a recomendaciones comerciales.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );
};
