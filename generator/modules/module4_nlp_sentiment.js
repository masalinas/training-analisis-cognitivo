// generator/modules/module4_nlp_sentiment.js
// Module 4: Análisis de Sentimientos y Procesamiento del Lenguaje Natural (Slides 24 - 29)

const { createModuleSeparator, createContentSlide, addCard, addStyledTable, addCalloutBox } = require('../helpers');
const config = require('../config');
const colors = config.colors;

function buildModule4(pres, state) {
  // -------------------------------------------------------------
  // SLIDE 24: Separador Módulo 4
  // -------------------------------------------------------------
  state.slideCount++;
  createModuleSeparator(pres, {
    moduleNumber: '4',
    duration: '2.5 HORAS LECTIVAS',
    title: 'Análisis de Sentimientos y NLP',
    subtitle: 'Desbloqueando el Valor del Texto: De la Sintaxis Lingüística a la Semántica Contextual de los Transformers',
    topics: [
      'El pipeline de preprocesamiento en NLP: tokenización por subpalabras y normalización.',
      'Representaciones vectoriales del lenguaje: BoW, TF-IDF, Word2Vec y Embeddings contextuales.',
      'Técnicas de análisis de sentimiento: léxicos, clasificadores supervisados, Transformers y LLMs.',
      'Aspect-Based Sentiment Analysis (ABSA) y minería de opiniones en Voice of Customer (VoC).',
    ],
    labName: 'Lab 4 - Pipeline de Sentimiento y Minería de Opiniones en Español',
    labGoal: 'Comparativa entre modelos baseline (TF-IDF) y Transformers preentrenados.',
    labDeliverable: 'Script con Hugging Face, matriz de confusión de polaridad y clustering de tópicos.',
    notes: `INTRODUCCIÓN AL MÓDULO 4 (15 minutos)
- Guía del Instructor:
  El Módulo 4 conecta las técnicas de analítica avanzada con el dominio lingüístico. El 80% de la información crítica de una compañía (reclamaciones, transcripciones de call centers, chats de soporte, comentarios en redes sociales y contratos) reside en formato de texto no estructurado.
- Propósito del Módulo:
  Enseñar a los participantes a construir pipelines robustos capaces de transformar texto ruidoso e informal en señales estructuradas y cuantificables que alimenten modelos predictivos y paneles de control.
- Cronograma de la Sesión:
  • 45 min: Preprocesamiento de texto y representaciones vectoriales (de TF-IDF a Transformers).
  • 45 min: Técnicas de análisis de sentimientos, ABSA y casos de uso en marketing y operaciones.
  • 45 min: Laboratorio 4 práctico con Hugging Face y modelos en español.`,
  });

  // -------------------------------------------------------------
  // SLIDE 25: El Pipeline de Preprocesamiento en NLP
  // -------------------------------------------------------------
  state.slideCount++;
  const s25 = createContentSlide(pres, {
    category: 'Módulo 4 • Preprocesamiento Textual',
    title: 'El Pipeline de Preprocesamiento en Procesamiento del Lenguaje Natural',
    subtitle: 'De cadenas de caracteres crudas a secuencias de tokens estructuradas',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `PIPELINE DE PREPROCESAMIENTO EN NLP (25 minutos)
- Explicación Técnica para el Docente:
  Explicar la diferencia entre el preprocesamiento clásico (diseñado para modelos estadísticos/BoW) y el preprocesamiento moderno para modelos Transformer:
  1. Normalización: Limpieza de caracteres de escape, URLs, menciones en redes sociales, emojis (mapeo a tokens semánticos como [EMOJI_SONRISA]).
  2. Tokenización:
     - Clásica: Dividir por espacios en blanco y signos de puntuación. Problema: palabras fuera del vocabulario (OOV - Out Of Vocabulary).
     - Moderna (Subword Tokenization): Byte-Pair Encoding (BPE) o WordPiece. Divide palabras desconocidas en morfemas frecuentes (ej. "hiperconectividad" -> "hiper", "##conect", "##ividad"). Resuelve el 100% de problemas OOV.
  3. Lematización vs Stemming:
     - Stemming (Porter/Snowball): Algoritmo heurístico que corta terminaciones (ej. "volando", "voló" -> "vol"). Rápido pero genera raíces no válidas gramaticalmente.
     - Lematización (WordNet, spaCy): Busca el lema formal de la palabra analizando su categoría gramatical (POS - Part of Speech). "Íbamos" -> "ir".
  4. Stopwords:
     - En TF-IDF es crucial eliminar palabras vacías ("el", "la", "de") para no inflar la dimensionalidad.
     - En Transformers NO se deben eliminar las stopwords porque son esenciales para que la autoatención entienda la sintaxis (ej. "el gato persiguió al perro" vs "el perro persiguió al gato").`,
  });

  // 4 Stepped Process Cards
  const nlpW = 2.05;
  const nlpGap = 0.2;
  const startNLP = 0.6;
  const nlpY = 1.5;
  const nlpH = 2.2;

  const nlpSteps = [
    {
      step: 'PASO 1',
      title: 'Limpieza & Normalización',
      desc: 'Homogeneización de cadenas de texto.',
      items: ['Eliminación de HTML, URLs y caracteres especiales.', 'Mapeo semántico de emojis y hashtags.', 'Corrección ortográfica básica y minúsculas.'],
    },
    {
      step: 'PASO 2',
      title: 'Tokenización Avanzada',
      desc: 'Segmentación en unidades léxicas procesables.',
      items: ['Tokenización por palabras y puntuación.', 'Tokenización por subpalabras (BPE, WordPiece).', 'Manejo absoluto de vocabulario desconocido (OOV).'],
    },
    {
      step: 'PASO 3',
      title: 'Reducción Morfológica',
      desc: 'Unificación de variantes flexivas.',
      items: ['Stemming: corte heurístico de afijos.', 'Lematización: reducción al lema formal (POS).', 'Filtro selectivo de Stopwords según el modelo.'],
    },
    {
      step: 'PASO 4',
      title: 'Extracción de Secuencias',
      desc: 'Captura de contexto local y n-gramas.',
      items: ['Unigramas, Bigramas y Trigramas.', 'Preservación de negaciones ("no_bueno").', 'Alineación de longitud (Padding & Truncation).'],
    },
  ];

  nlpSteps.forEach((ns, idx) => {
    const xPos = startNLP + idx * (nlpW + nlpGap);
    addCard(s25, pres, {
      x: xPos,
      y: nlpY,
      w: nlpW,
      h: nlpH,
      badge: ns.step,
      badgeBg: colors.purpleBg,
      badgeColor: colors.purple,
      title: ns.title,
      titleSize: 11,
      description: ns.desc,
      descriptionSize: 8.5,
      items: ns.items,
      itemSize: 8,
    });
  });

  // Bottom Callout on Modern vs Traditional NLP
  addCalloutBox(s25, pres, {
    x: 0.6,
    y: 3.85,
    w: 8.8,
    h: 1.2,
    type: 'info',
    title: 'EL DILEMA DE LAS STOPWORDS: ¿ELIMINAR O CONSERVAR?',
    text: 'En pipelines tradicionales basados en Bag-of-Words o TF-IDF, eliminar las stopwords es imperativo para evitar que términos ultra-frecuentes como "de", "que" o "en" dominen el vocabulario. Sin embargo, en modelos basados en Transformers (BERT, RoBERTa, GPT), NUNCA deben eliminarse: la atención bidireccional utiliza precisamente los artículos, preposiciones y signos de puntuación para inferir relaciones sintácticas y de negación ("no es bueno" vs "es bueno").',
  });

  // -------------------------------------------------------------
  // SLIDE 26: Representación Vectorial: De BoW a Transformers
  // -------------------------------------------------------------
  state.slideCount++;
  const s26 = createContentSlide(pres, {
    category: 'Módulo 4 • Representaciones Vectoriales',
    title: 'Representación Vectorial: De la Bolsa de Palabras a Embeddings',
    subtitle: 'La transición de vectores dispersos sin semántica a espacios densos de atención contextual',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `REPRESENTACIONES VECTORIALES DEL TEXTO (25 minutos)
- Guía para el Instructor:
  Recorrer las tres grandes olas históricas de vectorización de texto:
  1. Representaciones Dispersas (Sparse):
     - Bag-of-Words (BoW): Vector con la longitud del vocabulario completo (ej. 50.000 palabras). Cada posición cuenta cuántas veces aparece la palabra en el documento.
     - TF-IDF: Pondera la frecuencia del término por la inversa de su frecuencia en el corpus ($TF \times \log(N/DF)$). Penaliza palabras comunes y premia palabras distintivas.
     - Gran problema: vectores gigantescos llenos de ceros y ortogonalidad absoluta ("coche" y "automóvil" son perpendiculares; no comparten ninguna similitud matemática).
  2. Embeddings Estáticos Densos (Word2Vec / GloVe, 2013):
     - Vectores continuos de 100-300 dimensiones aprendidos mediante redes neuronales superficiales por coocurrencia ("conocerás a una palabra por las compañías que tiene", Firth).
     - Capturan propiedades algebraicas increíbles (Vector(Rey) - Vector(Hombre) + Vector(Mujer) ≈ Vector(Reina)).
     - Problema: vectores estáticos. La palabra "banco" tiene el mismo vector exacto si se refiere a una entidad financiera o a un banco del parque.
  3. Embeddings Contextuales (Transformers / BERT, 2018-Hoy):
     - El vector de un token se recalcula dinámicamente en función de todas las palabras que lo rodean en la frase. "Banco" en "fui al banco a pedir un préstamo" genera un vector completamente diferente a "me senté en un banco".`,
  });

  // 3 Wide Columns for the 3 Generations
  const vW = 2.8;
  const vY = 1.5;
  const vH = 3.5;

  addCard(s26, pres, {
    x: 0.6,
    y: vY,
    w: vW,
    h: vH,
    badge: 'GENERACIÓN 1 • VECTORES DISPERSOS',
    badgeBg: colors.cardBgAlt,
    badgeColor: colors.textMuted,
    title: 'Bag-of-Words & TF-IDF',
    description: 'Matrices de recuento de frecuencia ponderada por especificidad en el corpus.',
    items: [
      { text: 'Mecánica:', bold: true },
      'Vocabulario de N palabras. Matriz dispersa de ceros con recuentos o pesos TF-IDF.',
      { text: 'Fórmula Clave:', bold: true },
      'TF(t,d) * log(N / DF(t)). Penaliza términos ubicuos en la colección.',
      { text: 'Ventajas:', bold: true },
      'Extremadamente rápido de calcular, interpretable y ligero.',
      { text: 'Limitación Fatal:', bold: true },
      'Ortogonalidad estricta: ignora sinónimos y destruye el orden sintáctico.',
    ],
    itemSize: 8.5,
  });

  addCard(s26, pres, {
    x: 3.6,
    y: vY,
    w: vW,
    h: vH,
    badge: 'GENERACIÓN 2 • ESPACIOS DENSOS',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Word2Vec & GloVe',
    description: 'Vectores continuos de baja dimensión aprendidos por coocurrencia local.',
    items: [
      { text: 'Mecánica:', bold: true },
      'Arquitecturas Skip-gram y CBOW con Softmax jerárquico o Negative Sampling.',
      { text: 'Geometría Semántica:', bold: true },
      'Palabras con significados afines se sitúan cerca en el espacio vectorial continuo.',
      { text: 'Ventajas:', bold: true },
      'Captura relaciones analógicas (Francia:París :: España:Madrid).',
      { text: 'Limitación Fatal:', bold: true },
      'Vectores estáticos: incapacidad de resolver polisemia y ambigüedad.',
    ],
    itemSize: 8.5,
  });

  addCard(s26, pres, {
    x: 6.6,
    y: vY,
    w: vW,
    h: vH,
    badge: 'GENERACIÓN 3 • ATENCIÓN CONTEXTUAL',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Transformers (BERT, RoBERTa)',
    description: 'Embeddings contextuales dinámicos generados mediante autoatención.',
    items: [
      { text: 'Mecánica:', bold: true },
      'Masked Language Modeling (MLM) bidireccional sobre corpus masivos.',
      { text: 'Contexto Dinámico:', bold: true },
      'La representación del token muta según las palabras precedentes y posteriores.',
      { text: 'Ventajas:', bold: true },
      'Resuelve la polisemia, el sarcasmo y relaciones complejas de largo alcance.',
      { text: 'Requisito:', bold: true },
      'Mayor demanda computacional durante inferencia (optimizable con ONNX).',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 27: Técnicas de Análisis de Sentimientos
  // -------------------------------------------------------------
  state.slideCount++;
  const s27 = createContentSlide(pres, {
    category: 'Módulo 4 • Análisis de Sentimiento',
    title: 'Técnicas de Análisis de Sentimientos: Del Léxico al Fine-Tuning',
    subtitle: 'Comparativa metodológica para clasificar la polaridad y las emociones en opiniones de usuarios',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `ANÁLISIS DE SENTIMIENTOS (25 minutos)
- Explicación Técnica para el Docente:
  Presentar los tres enfoques predominantes en la industria:
  1. Métodos Basados en Léxicos y Reglas (VADER, TextBlob):
     - Utilizan diccionarios donde cada palabra tiene una puntuación de polaridad (ej. "excelente" = +3.2, "pésimo" = -3.4).
     - Incorporan reglas heurísticas para negaciones ("no es bueno" invierte el signo) e intensificadores ("MUY bueno" amplifica).
     - Pros: No requieren entrenamiento ni datos etiquetados; ejecución inmediata.
     - Contras: Fallan ante sarcasmo, modismos regionales, dobles sentidos y jerga técnica.
  2. Modelos Supervisados Clásicos:
     - TF-IDF + Regresión Logística / SVM. Muy sólidos si se dispone de decenas de miles de reviews etiquetadas por humanos.
  3. Modelos Basados en Transformers (BETO, RoBERTa, pysentimiento) & LLMs:
     - Modelos entrenados sobre millones de tweets y reseñas en español. Capturan la sutileza contextual y la ironía con una precisión muy superior.
  4. Aspect-Based Sentiment Analysis (ABSA):
     - El análisis de sentimiento tradicional arroja una etiqueta global ("Positivo" o "Negativo").
     - ABSA desglosa el sentimiento por cada aspecto del producto. Ejemplo: "La batería dura dos días (+), pero la cámara en fotos nocturnas es muy decepcionante (-)". Esto es lo que realmente busca un director de producto.`,
  });

  // 3 Methodology Cards
  const mColW = 2.8;
  const mColY = 1.5;
  const mColH = 2.3;

  addCard(s27, pres, {
    x: 0.6,
    y: mColY,
    w: mColW,
    h: mColH,
    badge: 'MÉTODO 1 • REGLAS Y DICCIONARIOS',
    badgeBg: colors.cardBgAlt,
    badgeColor: colors.textMuted,
    title: 'Léxicos (VADER / TextBlob)',
    description: 'Diccionarios predefinidos de palabras con valores de polaridad asociados.',
    items: [
      'Sin coste de entrenamiento ni necesidad de datos etiquetados.',
      'Heurísticas para intensificadores ("extremadamente bueno").',
      'Inversión automática de polaridad ante negaciones gramaticales.',
      'Limitación: Nula adaptación a jergas corporativas o ironías complejas.',
    ],
    itemSize: 8,
  });

  addCard(s27, pres, {
    x: 3.6,
    y: mColY,
    w: mColW,
    h: mColH,
    badge: 'MÉTODO 2 • APRENDIZAJE SUPERVISADO',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'TF-IDF + Clasificadores',
    description: 'Entrenamiento de modelos lineales o ensamble sobre corpus etiquetado.',
    items: [
      'Extracción de n-gramas relevantes para el negocio.',
      'Ajuste con Regresión Logística, Naive Bayes o SVM.',
      'Excelente relación entre precisión y coste computacional en CPU.',
      'Limitación: Requiere miles de ejemplos etiquetados de calidad.',
    ],
    itemSize: 8,
  });

  addCard(s27, pres, {
    x: 6.6,
    y: mColY,
    w: mColW,
    h: mColH,
    badge: 'MÉTODO 3 • TRANSFORMERS & LLMS',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Transformers Finetuneados',
    description: 'Modelos de lenguaje profundos especializados en análisis de polaridad.',
    items: [
      'Modelos preentrenados en español (BETO, pysentimiento, RoBERTa).',
      'Comprensión superior del contexto, sarcasmo y dobles sentidos.',
      'Capacidad de extracción granular de emociones (ira, alegría, sorpresa).',
      'Inferencia adaptable mediante Zero-Shot Prompting con LLMs.',
    ],
    itemSize: 8,
  });

  // Callout Box explaining ABSA (Aspect-Based Sentiment Analysis)
  addCalloutBox(s27, pres, {
    x: 0.6,
    y: 3.95,
    w: 8.8,
    h: 1.1,
    type: 'success',
    title: 'EL VALOR ESTRATÉGICO DEL ASPECT-BASED SENTIMENT ANALYSIS (ABSA)',
    text: 'En el entorno empresarial, decir que un cliente está "descontento" es insuficiente. ABSA desacopla el texto en tuplas estructuradas de [Entidad, Aspecto, Polaridad]. Por ejemplo, en una reseña hotelera: [Habitación: +0.9 (Limpia y amplia)], [Ubicación: +0.8 (Céntrica)], [Recepción: -0.85 (Trato descortés y check-in lento)]. Esto permite a los departamentos operativos actuar de forma quirúrgica sobre el problema real.',
  });

  // -------------------------------------------------------------
  // SLIDE 28: Aplicaciones Empresariales: Voice of Customer y Marketing
  // -------------------------------------------------------------
  state.slideCount++;
  const s28 = createContentSlide(pres, {
    category: 'Módulo 4 • Casos de Negocio',
    title: 'Aplicaciones Empresariales de NLP: Voice of Customer y Marketing',
    subtitle: 'Casos reales de explotación de texto no estructurado para maximizar retención y captación',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `CASOS DE NEGOCIO EN NLP Y VOC (20 minutos)
- Guía para el Instructor:
  Exponer cuatro casos de aplicación industrial de alto impacto económico:
  1. Monitorización de Reputación y Detección de Crisis en Redes:
     - Ingesta de tweets, comentarios en foros y noticias en streaming.
     - Detección de picos anómalos de volumen combinados con polaridad negativa extrema. Alertas automatizadas al equipo de comunicación corporativa en menos de 5 minutos.
  2. Triaje Inteligente de Tickets de Soporte Técnico:
     - Enrutamiento automático: clasificar el ticket por urgencia (SLA), departamento responsable y grado de frustración del usuario.
     - Reducción del tiempo medio de primera respuesta en un 60%.
  3. Inteligencia de Producto Competitivo:
     - Scraping legal y minería de reseñas públicas de productos propios frente a competidores en Amazon, Google Maps o Trustpilot.
     - Identificación inmediata de fallos en productos de la competencia para orientar campañas de captación.
  4. Prevención de Bajas en Call Centers mediante Transcripción Speech-to-Text:
     - Transcribir la conversación en tiempo real y alimentar un modelo de sentimiento. Si la frustración supera un umbral, el sistema sugiere en la pantalla del teleoperador una compensación comercial inmediata.`,
  });

  // 4 Business Use Case Cards (2x2 Grid)
  const ucW = 4.25;
  const ucH = 1.72;
  const ucX1 = 0.6;
  const ucX2 = 5.15;
  const ucY1 = 1.45;
  const ucY2 = 3.28;

  addCard(s28, pres, {
    x: ucX1,
    y: ucY1,
    w: ucW,
    h: ucH,
    badge: 'CASO 1 • REPUTACIÓN SOCIAL',
    badgeBg: colors.roseBg,
    badgeColor: colors.rose,
    title: 'Monitorización de Marca en Streaming',
    description: 'Detección temprana de incendios reputacionales en redes.',
    items: [
      'Ingesta de menciones sociales con alertas automáticas ante anomalías.',
      'Clustering de causas raíz para aislar el motivo del malestar.',
      'Reducción del tiempo de respuesta del gabinete de prensa a < 15 min.',
    ],
    itemSize: 8.5,
  });

  addCard(s28, pres, {
    x: ucX2,
    y: ucY1,
    w: ucW,
    h: ucH,
    badge: 'CASO 2 • ATENCIÓN AL CLIENTE',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Triaje y Enrutamiento Inteligente de Tickets',
    description: 'Clasificación automática por severidad y departamento.',
    items: [
      'Asignación prioritaria a operadores senior de usuarios enfurecidos.',
      'Resumen extractivo automático del problema para agilizar la resolución.',
      'Ahorro del 40% en tiempos de gestión manual de buzones de soporte.',
    ],
    itemSize: 8.5,
  });

  addCard(s28, pres, {
    x: ucX1,
    y: ucY2,
    w: ucW,
    h: ucH,
    badge: 'CASO 3 • I+D Y PRODUCTO',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Inteligencia Competitiva de Producto',
    description: 'Benchmarking continuo mediante minería de opiniones.',
    items: [
      'Extracción de funcionalidades más alabadas y criticadas de la competencia.',
      'Identificación de fallos de diseño y oportunidades de packaging.',
      'Priorización del roadmap de producto respaldada por datos de clientes.',
    ],
    itemSize: 8.5,
  });

  addCard(s28, pres, {
    x: ucX2,
    y: ucY2,
    w: ucW,
    h: ucH,
    badge: 'CASO 4 • RETENCIÓN ACTIVA',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Prevención de Bajas en Call Centers',
    description: 'Análisis continuo sobre transcripciones de llamadas.',
    items: [
      'Detección de patrones de hostilidad o decepción durante la llamada.',
      'Despliegue dinámico de scripts de retención y bonos en pantalla del agente.',
      'Incremento del 22% en la tasa de rescate de clientes en riesgo inminente.',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 29: Laboratorio 4: Pipeline de Sentimiento y Minería de Opinión
  // -------------------------------------------------------------
  state.slideCount++;
  const s29 = createContentSlide(pres, {
    category: 'Módulo 4 • Laboratorio Práctico',
    title: 'Laboratorio 4: Clasificación de Sentimiento y Minería de Tópicos',
    subtitle: 'Implementación comparativa entre modelos estadísticos y Transformers en español',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `LABORATORIO PRÁCTICO 4 (45 minutos)
- Guía para el Instructor:
  Trabajaremos sobre el notebook \`lab4_sentiment_nlp_spanish.ipynb\`.
- Dataset de Trabajo:
  10.000 reseñas de usuarios de comercio electrónico en español sobre productos tecnológicos, categorizadas con estrellas (1 a 5) y texto libre.
- Pasos de Ejecución Guiados:
  1. Limpieza y preprocesamiento del texto: normalización con expresiones regulares y eliminación de stopwords específicas.
  2. Baseline Estadístico: Construcción de un pipeline scikit-learn con \`TfidfVectorizer(ngram_range=(1,2))\` y \`LogisticRegression\`. Evaluar F1-score y tiempo de inferencia.
  3. Modelo Transformer: Carga del modelo preentrenado \`pysentimiento/robertuito-sentiment-analysis\` mediante la librería \`transformers\` de Hugging Face.
  4. Inferencia por lotes (Batch Inference) y cálculo de matriz de confusión para evaluar cómo el Transformer supera al baseline en frases con sarcasmo o dobles negaciones ("no está nada mal para su precio").
  5. Minería de Tópicos con BERTopic: Agrupación no supervisada de las reseñas negativas para extraer automáticamente los 3 mayores motivos de queja.`,
  });

  addCard(s29, pres, {
    x: 0.6,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'FICHA TÉCNICA DEL LABORATORIO',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Objetivos y Tecnologías',
    description: 'Construir y comparar pipelines de clasificación de sentimiento y extracción temática.',
    items: [
      { text: 'Corpus:', bold: true },
      '10.000 opiniones reales de clientes de e-commerce en español.',
      { text: 'Stack Técnico:', bold: true },
      'Hugging Face Transformers, scikit-learn, BERTopic, pandas.',
      { text: 'Modelos Evaluados:', bold: true },
      'TF-IDF + LogisticRegression vs RoBERTa preentrenado en español.',
      { text: 'Tiempo Asignado:', bold: true },
      '45 minutos (30 min código guiado + 15 min análisis de errores).',
    ],
    itemSize: 9,
  });

  addCard(s29, pres, {
    x: 5.15,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'ENTREGABLES DEL LABORATORIO',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Hitos Prácticos a Resolver',
    description: 'Tareas obligatorias en el cuaderno de trabajo:',
    items: [
      '1. Implementar la limpieza y extracción de bigramas en Python.',
      '2. Entrenar y calibrar el clasificador lineal de referencia.',
      '3. Ejecutar inferencia con el modelo Transformer en GPU/CPU.',
      '4. Comparar matrices de confusión y analizar falsos positivos.',
      '5. Extraer los 5 tópicos dominantes en comentarios negativos.',
      '6. Exportar las predicciones consolidadas para el dashboard del Lab 5.',
    ],
    itemSize: 9,
  });
}

module.exports = buildModule4;
