// generator/modules/module2_cognitive_ai.js
// Module 2: Fundamentos de la Inteligencia Cognitiva (Slides 10 - 15)

module.exports = async function buildModule2(pres, H) {
  // -------------------------------------------------------------
  // SLIDE 10: Separador Módulo 2
  // -------------------------------------------------------------
  H.divider(pres, {
    mod: 2,
    title: 'Fundamentos de la Inteligencia Cognitiva',
    subtitle: 'Sistemas Capaces de Percibir, Comprender Contexto, Razonar e Interactuar',
    hours: '2.5 HORAS LECTIVAS',
    topics: [
      { icon: 'FaBrain', text: 'Los 4 pilares: comprensión, razonamiento, aprendizaje e interacción' },
      { icon: 'FaHistory', text: 'Evolución técnica: de sistemas expertos a modelos fundacionales' },
      { icon: 'FaCloud', text: 'Catálogo de APIs cognitivas cloud: visión, lenguaje, voz y decisión' },
      { icon: 'FaNetworkWired', text: 'Arquitecturas empresariales RAG y bases de datos vectoriales' },
      { icon: 'FaFlask', text: 'Laboratorio 2: Extracción semántica y embeddings contextuales' },
    ],
    notes: {
      obj: 'Comprender los principios de la computación cognitiva y su capacidad diferencial para procesar datos no estructurados.',
      guion: [
        'El Módulo 2 aborda la transición desde modelos estadísticos tabulares hacia arquitecturas capaces de interpretar lenguaje, audio y visión.',
        'La computación clásica es determinista; los sistemas cognitivos son probabilísticos y gestionan activamente la ambigüedad semántica.',
        'Analizaremos el catálogo de APIs de los hiper-escaladores y la arquitectura RAG como estándar empresarial.',
      ],
      preguntas: [
        '¿Qué porcentaje de la información valiosa en vuestra empresa reside hoy en documentos no estructurados (PDFs, contratos, audios)?',
      ],
    },
  });

  // -------------------------------------------------------------
  // SLIDE 11: ¿Qué es la Inteligencia Cognitiva? Los 4 Pilares
  // -------------------------------------------------------------
  const s11 = H.slide(pres, {
    mod: 2,
    badge: 'Fundamentos Cognitivos',
    title: '¿Qué es la Inteligencia Cognitiva? Los 4 Pilares',
    notes: {
      obj: 'Desglosar las cuatro dimensiones bio-inspiradas que configuran un sistema cognitivo de nivel empresarial.',
      guion: [
        '1. Comprensión (Understand): Ingesta de texto, imágenes y señales extrayendo relaciones semánticas profundas.',
        '2. Razonamiento (Reason): Formulación de hipótesis e inferencias a partir de información incompleta.',
        '3. Aprendizaje (Learn): Adaptación continua mediante reentrenamiento y retroalimentación humana (RLHF).',
        '4. Interacción (Interact): Diálogo natural contextualizado adaptado al interlocutor.',
      ],
      preguntas: [
        '¿Por qué los sistemas cognitivos se definen como "Inteligencia Aumentada" y no como reemplazo del experto humano?',
      ],
    },
  });

  H.cardsGrid(
    s11,
    [
      {
        title: 'Comprensión Multimodal',
        icon: 'FaEye',
        accent: H.COL.COBALT,
        bullets: [
          { lead: 'Percepción:', text: 'Valor en texto, audio, imágenes y vídeo.' },
          { lead: 'Semántica:', text: 'Reconocimiento de intenciones y relaciones.' },
          { lead: 'Precisión:', text: 'Resolución de ambigüedad y polisemia.' },
        ],
      },
      {
        title: 'Razonamiento e Inferencia',
        icon: 'FaLightbulb',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Inferencia:', text: 'Razonamiento sobre grafos y vectores.' },
          { lead: 'Evidencias:', text: 'Decisiones ante información incompleta.' },
          { lead: 'Trazabilidad:', text: 'Explicación del camino deductivo.' },
        ],
      },
      {
        title: 'Aprendizaje Continuo',
        icon: 'FaSyncAlt',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Adaptación:', text: 'Ajuste continuo a nuevos datos.' },
          { lead: 'Feedback:', text: 'Refinamiento con criterio humano experto.' },
          { lead: 'Evolución:', text: 'Actualización sin olvido catastrófico.' },
        ],
      },
      {
        title: 'Interacción en Lenguaje Natural',
        icon: 'FaComments',
        accent: H.COL.CORAL,
        bullets: [
          { lead: 'Diálogo:', text: 'Conversaciones multietapa con contexto.' },
          { lead: 'Tono:', text: 'Generación adaptada a directivos o técnicos.' },
          { lead: 'Copilotos:', text: 'Colaboración fluida persona-algoritmo.' },
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
  // SLIDE 12: Del Machine Learning a los Sistemas Cognitivos
  // -------------------------------------------------------------
  const s12 = H.slide(pres, {
    mod: 2,
    badge: 'Evolución Tecnológica',
    title: 'De las Reglas Simbólicas a los Modelos Fundacionales',
    notes: {
      obj: 'Trazar la evolución arquitectónica desde los sistemas expertos inflexibles hasta el mecanismo de autoatención de los Transformers.',
      guion: [
        'Evolución en 4 olas: Sistemas basados en reglas (frágiles), ML estadístico (bueno en tablas, costoso en feature engineering), Deep Learning (redes recurrentes limitadas por cuello de botella secuencial) y Transformers (procesamiento paralelo y contexto global).',
        'El artículo "Attention is All You Need" (2017) supuso la gran ruptura metodológica de la IA moderna.',
      ],
      preguntas: [
        '¿Por qué las redes LSTM no pudieron escalar al tamaño de los Transformers actuales?',
      ],
    },
  });

  H.steps(
    s12,
    [
      {
        title: '1 · Reglas (1980)',
        body: 'Sistemas Expertos\n\n• Reglas Si/Entonces\n• Alta interpretabilidad\n• Frágiles ante excepciones\n• Sin aprendizaje adaptativo',
      },
      {
        title: '2 · ML Estadístico',
        body: 'Scikit-learn, SVM, RF\n\n• Métricas cuantitativas\n• Fuerte en datos tabulares\n• Dependencia absoluta de feature engineering manual',
      },
      {
        title: '3 · Deep Learning',
        body: 'CNNs, LSTMs, GRUs\n\n• Representación interna\n• Visión y secuencias\n• Alto consumo de GPU\n• Gradiente desvanecido en texto',
      },
      {
        title: '4 · Transformers',
        body: 'Modelos Fundacionales\n\n• Autoatención paralela\n• Comprensión contextual\n• Capacidades zero-shot\n• Base de los LLMs modernos',
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

  H.callout(s12, {
    x: H.CX,
    y: 5.4,
    w: H.CW,
    h: 1.1,
    kind: 'info',
    lead: 'MECANISMO DE AUTOATENCIÓN (SELF-ATTENTION):',
    text: 'A diferencia de las arquitecturas secuenciales que leían palabra a palabra perdiendo memoria en textos largos, la autoatención calcula la afinidad semántica simultánea entre todos los tokens mediante matrices de Query, Key y Value: Attention(Q,K,V) = softmax((Q·K^T) / √d_k) · V.',
    size: 12.5,
  });

  // -------------------------------------------------------------
  // SLIDE 13: El Ecosistema de Servicios y APIs Cognitivas
  // -------------------------------------------------------------
  const s13 = H.slide(pres, {
    mod: 2,
    badge: 'Servicios Cloud',
    title: 'Catálogo de Servicios y APIs Cognitivas Empresariales',
    notes: {
      obj: 'Mapear la oferta de servicios cognitivos preentrenados y evaluar el trade-off entre consumo de API y entrenamiento propio.',
      guion: [
        'Revisión de las 4 familias de servicios: Visión artificial, Procesamiento de lenguaje, Servicios de voz y Motores de decisión/búsqueda.',
        'Criterio de decisión clave: APIs para time-to-market inmediato y casos estándar; modelos propios para soberanía de datos y jerga especializada.',
      ],
      preguntas: [
        'En vuestra organización, ¿qué barrera pesa más al usar APIs cloud: coste por llamada o confidencialidad de los datos?',
      ],
    },
  });

  H.cardsRow(
    s13,
    [
      {
        title: 'Visión Artificial',
        icon: 'FaEye',
        tone: 'light',
        bullets: [
          { lead: 'OCR analítico:', text: 'Extracción de tablas y texto en documentos.' },
          { lead: 'Detección:', text: 'Reconocimiento de objetos y anomalías en streaming.' },
          { lead: 'Proveedores:', text: 'Azure Vision, AWS Rekognition, Google Vision.' },
        ],
      },
      {
        title: 'Lenguaje y Texto',
        icon: 'FaFileAlt',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Sentimiento:', text: 'Análisis de polaridad y Voice of Customer.' },
          { lead: 'Entidades:', text: 'Extracción de NER y anonimización de PII.' },
          { lead: 'Proveedores:', text: 'Azure AI Language, AWS Comprehend, Vertex NLP.' },
        ],
      },
      {
        title: 'Voz y Audio',
        icon: 'FaMicrophone',
        tone: 'light',
        accent: H.COL.AMBER,
        bullets: [
          { lead: 'STT / TTS:', text: 'Transcripción precisa y síntesis neuronal.' },
          { lead: 'Biometría:', text: 'Identificación de locutor en centros de llamadas.' },
          { lead: 'Proveedores:', text: 'Azure Speech, AWS Transcribe/Polly, Google Speech.' },
        ],
      },
      {
        title: 'Búsqueda y Decisión',
        icon: 'FaSearch',
        tone: 'light',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Búsqueda vectorial:', text: 'Recuperación híbrida por relevancia semántica.' },
          { lead: 'Detección:', text: 'Anti-fraude y scoring de riesgo en tiempo real.' },
          { lead: 'Proveedores:', text: 'Azure AI Search, AWS Kendra, Vertex Search.' },
        ],
      },
    ],
    {
      gap: 0.25,
      size: 11.5,
      titleSize: 14,
      h: 4.8,
    }
  );

  // -------------------------------------------------------------
  // SLIDE 14: Arquitectura de una Solución Cognitiva Empresarial (RAG)
  // -------------------------------------------------------------
  const s14 = H.slide(pres, {
    mod: 2,
    badge: 'Arquitectura de Soluciones',
    title: 'Arquitectura RAG Empresarial: De los Datos al LLM',
    notes: {
      obj: 'Dominar la arquitectura de Retrieval-Augmented Generation (RAG) para conectar modelos fundacionales con repositorios privados sin alucinaciones.',
      guion: [
        'RAG resuelve el problema del conocimiento desactualizado y las alucinaciones al anclar las respuestas en fragmentos documentales verificados.',
        'Fase offline de ingesta: particionamiento semántico (chunking) y generación de embeddings en base de datos vectorial.',
        'Fase online de consulta: búsqueda por similitud coseno K-NN, inyección en el prompt y respuesta fundamentada con cita de fuentes.',
      ],
      preguntas: [
        '¿Por qué una búsqueda puramente vectorial falla al buscar referencias exactas de contratos o códigos de referencia?',
      ],
    },
  });

  H.steps(
    s14,
    [
      {
        title: '1 · Ingesta & Chunking',
        body: 'Partición de Documentos\n\n• Extracción de PDFs, wikis, ERP\n• Chunks de 400-500 tokens\n• Solapamiento (overlap) de 50 tokens para no romper frases',
      },
      {
        title: '2 · Vectorización',
        body: 'Modelos de Embeddings\n\n• Conversión de texto a vectores densos (384 / 1536 dim)\n• Almacenamiento indexado en Vector DB (Chroma, Pinecone)',
      },
      {
        title: '3 · Búsqueda K-NN',
        body: 'Recuperación Semántica\n\n• Vectorización de la consulta\n• Cálculo de similitud coseno\n• Filtrado por metadatos y permisos corporativos de acceso',
      },
      {
        title: '4 · Generación',
        body: 'Respuesta Fundamentada\n\n• Inyección de contexto al LLM\n• Respuestas auditables sin alucinaciones\n• Cita rigurosa de fuentes internas',
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

  H.callout(s14, {
    x: H.CX,
    y: 5.4,
    w: H.CW,
    h: 1.1,
    kind: 'tip',
    lead: 'BÚSQUEDA HÍBRIDA INDUSTRIAL (HYBRID SEARCH):',
    text: 'En producción se combina la búsqueda vectorial (similitud semántica de ideas) con búsqueda léxica BM25 (coincidencia exacta de códigos o números de contrato) y un re-ranking intermedio para garantizar la máxima precisión documental.',
    size: 12.5,
  });

  // -------------------------------------------------------------
  // SLIDE 15: Laboratorio 2: Integración y Enriquecimiento Cognitivo
  // -------------------------------------------------------------
  const s15 = H.slide(pres, {
    mod: 2,
    badge: 'Laboratorio Práctico 2',
    title: 'Lab 2: Extracción Semántica y Embeddings con ChromaDB',
    lab: true,
    notes: {
      obj: 'Implementar un pipeline de indexación vectorial y recuperación contextual en Python utilizando ChromaDB y sentence-transformers.',
      guion: [
        'Abrimos `lab2_cognitive_enrichment_rag.ipynb` en Google Colab o Jupyter local.',
        'Dataset: 200 documentos corporativos y políticas de servicio al cliente.',
        'Implementamos la vectorización con `all-MiniLM-L6-v2`, indexamos en ChromaDB y ejecutamos consultas semánticas en lenguaje natural.',
      ],
      preguntas: [
        '¿Por qué dos frases con palabras totalmente distintas pueden arrojar una distancia coseno cercana a 0 en el espacio latente?',
      ],
      lab: [
        '1. Segmentar los documentos con RecursiveCharacterTextSplitter.',
        '2. Instanciar el modelo de embeddings e inicializar ChromaDB.',
        '3. Indexar fragmentos y metadatos (departamento, versión, fecha).',
        '4. Ejecutar consultas y verificar fragmentos recuperados con mayor score.',
        '5. Construir la función de prompt contextualizado para el LLM.',
      ],
    },
  });

  H.cardsRow(
    s15,
    [
      {
        title: 'Ficha Técnica del Laboratorio',
        icon: 'FaFlask',
        accent: H.COL.CORAL,
        bullets: [
          { lead: 'Corpus:', text: '200 políticas de empresa y cláusulas contractuales.' },
          { lead: 'Librerías:', text: 'Python 3.10+, ChromaDB, sentence-transformers, LangChain.' },
          { lead: 'Modelo:', text: 'all-MiniLM-L6-v2 (384 dimensiones, eficiente y local).' },
          { lead: 'Duración:', text: '45 minutos (30 min desarrollo + 15 min debate técnico).' },
        ],
      },
      {
        title: 'Hitos del Pipeline de Código',
        icon: 'FaTerminal',
        accent: H.COL.COBALT,
        bullets: [
          { lead: 'Hito 1 · Chunking:', text: 'Partición con solapamiento semántico de 50 tokens.' },
          { lead: 'Hito 2 · Vectorización:', text: 'Generación de matrices densas de embeddings.' },
          { lead: 'Hito 3 · Almacén:', text: 'Persistencia e indexación de metadatos en ChromaDB.' },
          { lead: 'Hito 4 · Recuperación:', text: 'Búsqueda semántica K-NN por proximidad coseno.' },
          { lead: 'Hito 5 · Grounding:', text: 'Construcción del prompt libre de alucinaciones.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );
};
