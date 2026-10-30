// generator/modules/module4_nlp_sentiment.js
// Module 4: Análisis de Sentimientos y Procesamiento del Lenguaje Natural (Slides 24 - 29)

module.exports = async function buildModule4(pres, H) {
  // -------------------------------------------------------------
  // SLIDE 24: Separador Módulo 4
  // -------------------------------------------------------------
  H.divider(pres, {
    mod: 4,
    title: 'Análisis de Sentimientos y NLP',
    subtitle: 'Desbloqueando el Valor del Texto: De la Sintaxis a la Semántica Contextual de los Transformers',
    hours: '2.5 HORAS LECTIVAS',
    topics: [
      { icon: 'FaFileAlt', text: 'El pipeline de preprocesamiento en NLP: tokenización y normalización' },
      { icon: 'FaProjectDiagram', text: 'Representaciones vectoriales: BoW, TF-IDF, Word2Vec y Transformers' },
      { icon: 'FaSmile', text: 'Técnicas de análisis de sentimiento: léxicos, clasificadores y LLMs' },
      { icon: 'FaChartPie', text: 'Aspect-Based Sentiment Analysis (ABSA) y minería de opiniones VoC' },
      { icon: 'FaFlask', text: 'Laboratorio 4: Clasificación de sentimiento con Hugging Face' },
    ],
    notes: {
      obj: 'Transformar texto no estructurado en señales analíticas cuantificables mediante técnicas modernas de procesamiento del lenguaje natural.',
      guion: [
        'El 80% de la información crítica de una compañía reside en formato de texto (reclamaciones, chats, transcripciones y contratos).',
        'Analizaremos la transición desde el recuento léxico tradicional hacia los modelos de autoatención bidireccional en español.',
        'Conectaremos el análisis de sentimiento con la voz del cliente (VoC) y la minería de aspectos granular (ABSA).',
      ],
      preguntas: [
        '¿Cómo explotáis hoy las transcripciones de llamadas y las opiniones en redes sociales en vuestros paneles directivos?',
      ],
    },
  });

  // -------------------------------------------------------------
  // SLIDE 25: El Pipeline de Preprocesamiento en NLP
  // -------------------------------------------------------------
  const s25 = H.slide(pres, {
    mod: 4,
    badge: 'Preprocesamiento Textual',
    title: 'Pipeline de Preprocesamiento en Lenguaje Natural',
    notes: {
      obj: 'Conocer las etapas de limpieza, normalización, tokenización por subpalabras y reducción morfológica.',
      guion: [
        'En NLP tradicional (TF-IDF), eliminar stopwords y hacer stemming era crítico para reducir dimensiones.',
        'En Transformers (BERT/RoBERTa), NUNCA deben eliminarse stopwords: la atención bidireccional necesita artículos y preposiciones para entender la sintaxis y las negaciones.',
        'La tokenización moderna por subpalabras (Byte-Pair Encoding, WordPiece) soluciona al 100% el problema de palabras fuera de vocabulario (OOV).',
      ],
      preguntas: [
        '¿Por qué "no es bueno" y "es bueno" colapsan en significados similares si eliminamos las stopwords?',
      ],
    },
  });

  H.steps(
    s25,
    [
      {
        title: '1 · Normalización',
        body: 'Limpieza de Texto\n\n• Eliminación de etiquetas HTML\n• Mapeo semántico de emojis\n• Homogeneización de minúsculas y caracteres de escape',
      },
      {
        title: '2 · Tokenización',
        body: 'Subword Tokenization\n\n• Segmentación por subpalabras\n• Algoritmos BPE y WordPiece\n• Manejo total de palabras desconocidas (cero errores OOV)',
      },
      {
        title: '3 · Morfología',
        body: 'Lematización vs Stemming\n\n• Stemming: corte heurístico de afijos\n• Lematización: reducción al lema formal según categoría gramatical',
      },
      {
        title: '4 · Secuencias',
        body: 'Alineación Numérica\n\n• Preservación de negaciones\n• Truncation y Padding uniforme\n• Generación de máscaras de atención para el modelo',
      },
    ],
    {
      dir: 'h',
      gap: 0.3,
      size: 11.5,
      accent: H.COL.PURPLE,
      h: 3.5,
    }
  );

  H.callout(s25, {
    x: H.CX,
    y: 5.4,
    w: H.CW,
    h: 1.1,
    kind: 'info',
    lead: 'EL DILEMA DE LAS STOPWORDS:',
    text: 'En modelos estadísticos clásicos (TF-IDF), suprimir stopwords evita inflar la dimensionalidad. Pero en Transformers, conservarlas es vital: la autoatención las utiliza para capturar la estructura gramatical y la polaridad invertida en negaciones ("no está mal" frente a "está mal").',
    size: 12.5,
  });

  // -------------------------------------------------------------
  // SLIDE 26: Representación Vectorial: De BoW a Transformers
  // -------------------------------------------------------------
  const s26 = H.slide(pres, {
    mod: 4,
    badge: 'Representaciones Vectoriales',
    title: 'Representación Vectorial: De BoW a Embeddings',
    notes: {
      obj: 'Examinar las tres olas históricas de vectorización: matrices dispersas, embeddings estáticos y representaciones contextuales dinámicas.',
      guion: [
        '1. Bag-of-Words & TF-IDF: Vectores ortogonales de ceros; palabras sinónimas como "coche" y "auto" no comparten nada.',
        '2. Word2Vec / GloVe: Vectores densos continuos aprendidos por coocurrencia local; álgebra semántica pero vectores estáticos.',
        '3. Transformers: El vector muta según el contexto de la frase; "banco" financiero genera un vector diferente a "banco" de sentarse.',
      ],
      preguntas: [
        '¿Cómo afecta la polisemia a un buscador empresarial si se utiliza TF-IDF frente a embeddings contextuales?',
      ],
    },
  });

  H.cardsRow(
    s26,
    [
      {
        title: 'Vectores Dispersos (TF-IDF)',
        icon: 'FaFont',
        tone: 'light',
        bullets: [
          { lead: 'Mecánica:', text: 'Matriz de frecuencias ponderada por especificidad en el corpus.' },
          { lead: 'Ventajas:', text: 'Computacionalmente ligero, rápido de ajustar e interpretable.' },
          { lead: 'Límite severo:', text: 'Ortogonalidad estricta: ignora sinónimos y destruye el orden.' },
        ],
      },
      {
        title: 'Embeddings Estáticos (Word2Vec)',
        icon: 'FaProjectDiagram',
        tone: 'light',
        bullets: [
          { lead: 'Mecánica:', text: 'Vectores densos (300 dim) aprendidos por coocurrencia local.' },
          { lead: 'Ventajas:', text: 'Geometría semántica: captura analogías y cercanías de significado.' },
          { lead: 'Límite severo:', text: 'Vectores estáticos: no puede distinguir sentidos en polisemia.' },
        ],
      },
      {
        title: 'Atención Contextual (Transformers)',
        icon: 'FaBrain',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Mecánica:', text: 'Autoatención bidireccional sobre la frase completa (BERT, RoBERTa).' },
          { lead: 'Ventajas:', text: 'Representación dinámica dependiente del contexto circundante.' },
          { lead: 'Requisito:', text: 'Mayor coste de GPU/CPU en inferencia (optimizable con ONNX).' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 15 }
  );

  // -------------------------------------------------------------
  // SLIDE 27: Técnicas de Análisis de Sentimientos
  // -------------------------------------------------------------
  const s27 = H.slide(pres, {
    mod: 4,
    badge: 'Análisis de Sentimiento',
    title: 'Técnicas de Análisis de Sentimientos y Minería VoC',
    notes: {
      obj: 'Comparar métodos de clasificación de sentimiento y entender la ventaja competitiva de Aspect-Based Sentiment Analysis.',
      guion: [
        'Léxicos (VADER): Diccionarios de palabras con polaridad; fallan ante ironías y jergas.',
        'Modelos supervisados: TF-IDF + LogisticRegression; sólidos si hay mucho dato etiquetado.',
        'Transformers preentrenados (BETO, pysentimiento): Capturan matices sutiles, dobles sentidos y emociones.',
        'ABSA: Desacopla la opinión en aspectos (Comida +, Servicio -, Precio +).',
      ],
      preguntas: [
        '¿Por qué una clasificación global "Positivo/Negativo" es insuficiente para un responsable de producto?',
      ],
    },
  });

  H.cardsRow(
    s27,
    [
      {
        title: 'Diccionarios Léxicos',
        icon: 'FaFileAlt',
        tone: 'light',
        bullets: [
          { lead: 'Mecánica:', text: 'Puntuaciones fijas por término con reglas para negaciones.' },
          { lead: 'Ventajas:', text: 'Sin entrenamiento ni datos etiquetados previos.' },
          { lead: 'Limitación:', text: 'Incapaz de capturar sarcasmo o jerga especializada.' },
        ],
      },
      {
        title: 'Supervisado Clásico',
        icon: 'FaCogs',
        tone: 'light',
        bullets: [
          { lead: 'Mecánica:', text: 'TF-IDF con n-gramas + Regresión Logística o SVM.' },
          { lead: 'Ventajas:', text: 'Excelente relación entre precisión y coste en CPU.' },
          { lead: 'Limitación:', text: 'Requiere miles de ejemplos etiquetados por humanos.' },
        ],
      },
      {
        title: 'Transformers & LLMs',
        icon: 'FaSmile',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Mecánica:', text: 'Modelos contextuales preentrenados en español (BETO).' },
          { lead: 'Ventajas:', text: 'Comprensión superior de matices, ironía y emociones.' },
          { lead: 'Inferencia:', text: 'Zero-shot o fine-tuning sobre datasets corporativos.' },
        ],
      },
    ],
    { y: 1.75, h: 3.5, size: 12, titleSize: 15 }
  );

  H.callout(s27, {
    x: H.CX,
    y: 5.4,
    w: H.CW,
    h: 1.1,
    kind: 'tip',
    lead: 'VALOR ESTRATÉGICO DE ABSA (ASPECT-BASED SENTIMENT ANALYSIS):',
    text: 'Saber que un cliente está "insatisfecho" es insuficiente. ABSA descompone el comentario en tuplas estructuradas [Entidad, Aspecto, Polaridad], por ejemplo: [Habitación: +0.9 (Amplia)], [Ubicación: +0.8 (Céntrica)], [Atención: -0.85 (Check-in lento)], permitiendo intervenciones operativas quirúrgicas.',
    size: 12.5,
  });

  // -------------------------------------------------------------
  // SLIDE 28: Aplicaciones Empresariales: Voice of Customer y Marketing
  // -------------------------------------------------------------
  const s28 = H.slide(pres, {
    mod: 4,
    badge: 'Casos de Negocio',
    title: 'Aplicaciones Empresariales: Voice of Customer y Retención',
    notes: {
      obj: 'Identificar casos de uso corporativo de alto retorno económico para pipelines de NLP y análisis de sentimiento.',
      guion: [
        '1. Monitorización de marca: Detección temprana de crisis reputacionales en streaming social.',
        '2. Triaje de tickets: Enrutamiento inteligente por gravedad y urgencia para soporte técnico.',
        '3. Inteligencia de producto: Benchmarking de opiniones sobre la competencia en reseñas públicas.',
        '4. Prevención en call centers: Alertas en pantalla del teleoperador ante frustración detectada por voz/texto.',
      ],
      preguntas: [
        '¿Cuánto tiempo tarda actualmente vuestra empresa en enterarse de una incidencia grave reportada en redes?',
      ],
    },
  });

  H.cardsGrid(
    s28,
    [
      {
        title: 'Monitorización de Marca en Streaming',
        icon: 'FaBullhorn',
        bullets: [
          { lead: 'Detección:', text: 'Alertas tempranas ante picos anómalos de quejas.' },
          { lead: 'Clustering:', text: 'Agrupación semántica para aislar el foco de la crisis.' },
          { lead: 'Impacto:', text: 'Respuesta del gabinete de prensa en menos de 15 minutos.' },
        ],
      },
      {
        title: 'Triaje Inteligente de Soporte',
        icon: 'FaHeadset',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Enrutamiento:', text: 'Clasificación automática por urgencia y departamento.' },
          { lead: 'Resumen:', text: 'Extracción de puntos clave para agilizar la respuesta.' },
          { lead: 'Impacto:', text: 'Reducción del 40% en tiempo medio de resolución (MTTR).' },
        ],
      },
      {
        title: 'Inteligencia de Producto Competitiva',
        icon: 'FaSearchPlus',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Benchmarking:', text: 'Minería de reseñas de productos de la competencia.' },
          { lead: 'Detección:', text: 'Identificación de carencias ajenas para captación.' },
          { lead: 'Impacto:', text: 'Priorización del roadmap de desarrollo con datos reales.' },
        ],
      },
      {
        title: 'Prevención Activa en Call Centers',
        icon: 'FaUserShield',
        accent: H.COL.CORAL,
        bullets: [
          { lead: 'Voz a Texto:', text: 'Análisis de polaridad en streaming en llamada.' },
          { lead: 'Copiloto:', text: 'Sugerencia de retención en pantalla del agente.' },
          { lead: 'Impacto:', text: 'Rescate de un 22% de clientes en riesgo.' },
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
  // SLIDE 29: Laboratorio 4: Pipeline de Sentimiento y Minería de Opinión
  // -------------------------------------------------------------
  const s29 = H.slide(pres, {
    mod: 4,
    badge: 'Laboratorio Práctico 4',
    title: 'Lab 4: Clasificación de Sentimiento con Hugging Face',
    lab: true,
    notes: {
      obj: 'Construir y comparar pipelines de clasificación de polaridad entre TF-IDF y Transformers preentrenados en español.',
      guion: [
        'Abrimos `lab4_sentiment_nlp_spanish.ipynb` en Google Colab o Jupyter local.',
        'Dataset: 10.000 opiniones reales de e-commerce en español con calificaciones de 1 a 5 estrellas.',
        'Ajustamos un baseline TF-IDF + LogisticRegression y lo comparamos con un modelo RoBERTa preentrenado.',
        'Aplicamos BERTopic para extraer automáticamente los motivos recurrentes de insatisfacción.',
      ],
      preguntas: [
        '¿En qué tipo de expresiones idiomáticas o giros sarcásticos el Transformer supera con creces al modelo lineal?',
      ],
      lab: [
        '1. Implementar normalización con expresiones regulares en Python.',
        '2. Entrenar y evaluar el baseline de Regresión Logística.',
        '3. Cargar el pipeline de Hugging Face con modelo en español.',
        '4. Ejecutar inferencia por lotes y comparar matrices de confusión.',
        '5. Extraer los 5 tópicos dominantes en comentarios negativos con BERTopic.',
      ],
    },
  });

  H.cardsRow(
    s29,
    [
      {
        title: 'Ficha Técnica del Laboratorio',
        icon: 'FaFlask',
        accent: H.COL.CORAL,
        bullets: [
          { lead: 'Corpus:', text: '10.000 opiniones de e-commerce en español con notas 1-5.' },
          { lead: 'Librerías:', text: 'transformers, datasets, scikit-learn, BERTopic, pandas.' },
          { lead: 'Modelos:', text: 'TF-IDF baseline vs RoBERTa preentrenado en español.' },
          { lead: 'Duración:', text: '45 minutos (30 min desarrollo + 15 min análisis de error).' },
        ],
      },
      {
        title: 'Hitos del Pipeline de NLP',
        icon: 'FaTerminal',
        accent: H.COL.COBALT,
        bullets: [
          { lead: 'Hito 1 · Limpieza:', text: 'Normalización de caracteres y preservación sintáctica.' },
          { lead: 'Hito 2 · Baseline:', text: 'Ajuste del modelo lineal de referencia para control.' },
          { lead: 'Hito 3 · Transformer:', text: 'Inferencia por lotes con pipeline de Hugging Face.' },
          { lead: 'Hito 4 · Diagnóstico:', text: 'Análisis de matriz de confusión y falsos positivos.' },
          { lead: 'Hito 5 · BERTopic:', text: 'Extracción de tópicos recurrentes en opiniones negativas.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );
};
