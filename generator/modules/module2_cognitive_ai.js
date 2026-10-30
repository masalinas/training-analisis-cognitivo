// generator/modules/module2_cognitive_ai.js
// Module 2: Fundamentos de la Inteligencia Cognitiva (Slides 10 - 15)

const { createModuleSeparator, createContentSlide, addCard, addStyledTable, addCalloutBox } = require('../helpers');
const config = require('../config');
const colors = config.colors;

function buildModule2(pres, state) {
  // -------------------------------------------------------------
  // SLIDE 10: Separador Módulo 2
  // -------------------------------------------------------------
  state.slideCount++;
  createModuleSeparator(pres, {
    moduleNumber: '2',
    duration: '2.5 HORAS LECTIVAS',
    title: 'Fundamentos de la Inteligencia Cognitiva',
    subtitle: 'Sistemas Capaces de Percibir, Comprender el Contexto, Razonar e Interactuar',
    topics: [
      'Definición y pilares: comprensión, razonamiento, aprendizaje e interacción.',
      'Evolución tecnológica: de sistemas expertos y ML a modelos fundacionales.',
      'El catálogo de APIs cognitivas: visión, lenguaje, voz y decisión.',
      'Arquitecturas empresariales de RAG (Retrieval-Augmented Generation) y bases vectoriales.',
    ],
    labName: 'Lab 2 - Extracción y Enriquecimiento Cognitivo con APIs/LLM',
    labGoal: 'Procesamiento de documentos no estructurados mediante vectorización semántica.',
    labDeliverable: 'Pipeline en Python con ChromaDB y recuperación contextual RAG.',
    notes: `INTRODUCCIÓN AL MÓDULO 2 (15 minutos)
- Guía del Instructor:
  El Módulo 2 aborda la segunda gran pata del curso: la Inteligencia Cognitiva. Mientras que la analítica tradicional y el ML se centran en datos numéricos y categóricos tabulares, la inteligencia cognitiva expande las capacidades del software hacia datos que imitan las capacidades sensoriales e interpretativas humanas.
- Cambio de Paradigma:
  Explicar que la computación clásica es determinista (siempre produce la misma salida ante la misma entrada mediante código imperativo). Los sistemas cognitivos son probabilísticos y contextualmente conscientes; manejan ambigüedad, lenguaje figurado, imágenes imperfectas y razonamiento inductivo.
- Cronograma del Módulo:
  • 45 min: Definición, pilares y evolución técnica (Transformers y LLMs).
  • 45 min: Catálogo de servicios cognitivos cloud y arquitectura RAG.
  • 45 min: Laboratorio 2 práctico con vectorización semántica.`,
  });

  // -------------------------------------------------------------
  // SLIDE 11: ¿Qué es la Inteligencia Cognitiva? Los 4 Pilares
  // -------------------------------------------------------------
  state.slideCount++;
  const s11 = createContentSlide(pres, {
    category: 'Módulo 2 • Fundamentos Cognitivos',
    title: '¿Qué es la Inteligencia Cognitiva? Los 4 Pilares Fundamentales',
    subtitle: 'Capacidades bio-inspiradas para procesar información no estructurada a escala masiva',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `LOS 4 PILARES COGNITIVOS (20 minutos)
- Explicación Técnica para el Docente:
  La computación cognitiva fue conceptualizada originalmente para superar el "cuello de botella de Von Neumann" y la rigidez de los sistemas basados en reglas. Desarrollar cada pilar con ejemplos empresariales concretos:
  1. Comprensión (Understand): Capacidad de ingerir texto libre, correos electrónicos, imágenes radiológicas o audios y extraer entidades, relaciones, polaridad y significado profundo.
  2. Razonamiento (Reason): A partir de premisas y evidencias incompletas, el sistema puede formular hipótesis, ponderar probabilidades y deducir conclusiones lógicas.
  3. Aprendizaje Continuo (Learn): El sistema no es estático; se adapta mediante reentrenamiento continuo, fine-tuning y feedback humano (RLHF / Reinforcement Learning from Human Feedback).
  4. Interacción Natural (Interact): Comunicación multimodal fluida en lenguaje humano, contextualizada, que se adapta al tono y nivel técnico del interlocutor.
- Pregunta de Reflexión:
  "¿Por qué un sistema cognitivo no busca sustituir al experto humano, sino crear 'Inteligencia Aumentada'?"`,
  });

  // 4 Quadrants (2x2 Grid)
  const qW = 4.25;
  const qH = 1.72;
  const qX1 = 0.6;
  const qX2 = 5.15;
  const qY1 = 1.45;
  const qY2 = 3.28;

  addCard(s11, pres, {
    x: qX1,
    y: qY1,
    w: qW,
    h: qH,
    badge: 'PILAR 1 • PERCEPCIÓN',
    badgeBg: colors.iceBlue,
    badgeColor: colors.steelBlue,
    title: 'Comprensión Multimodal (Understand)',
    description: 'Capacidad de interpretar datos no estructurados complejos.',
    items: [
      'Extracción semántica de texto, audio, señales y vídeo.',
      'Reconocimiento de intenciones, entidades y jerarquías.',
      'Superación de la ambigüedad lingüística y sintáctica.',
    ],
    itemSize: 8.5,
  });

  addCard(s11, pres, {
    x: qX2,
    y: qY1,
    w: qW,
    h: qH,
    badge: 'PILAR 2 • LÓGICA',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Razonamiento e Inferencia (Reason)',
    description: 'Capacidad de generar hipótesis y deducciones probabilísticas.',
    items: [
      'Inferencia sobre grafos de conocimiento y bases vectoriales.',
      'Ponderación de evidencias frente a información incompleta.',
      'Trazabilidad lógica y justificación del camino de razonamiento.',
    ],
    itemSize: 8.5,
  });

  addCard(s11, pres, {
    x: qX1,
    y: qY2,
    w: qW,
    h: qH,
    badge: 'PILAR 3 • ADAPTACIÓN',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Aprendizaje Continuo (Learn)',
    description: 'Evolución dinámica del conocimiento del sistema.',
    items: [
      'Mejora iterativa con nuevos datos transaccionales y de uso.',
      'Retroalimentación humana en el bucle (RLHF / Human-in-the-loop).',
      'Adaptación a cambios de dominio y vocabulario corporativo.',
    ],
    itemSize: 8.5,
  });

  addCard(s11, pres, {
    x: qX2,
    y: qY2,
    w: qW,
    h: qH,
    badge: 'PILAR 4 • EXPERIENCIA',
    badgeBg: colors.amberBg,
    badgeColor: colors.amber,
    title: 'Interacción en Lenguaje Natural (Interact)',
    description: 'Diálogo fluido, empático y contextual con personas y sistemas.',
    items: [
      'Interfaces conversacionales avanzadas (chatbots contextuales).',
      'Generación de lenguaje natural con control de tono y estilo.',
      'Colaboración transparente hombre-máquina (Co-pilots).',
    ],
    itemSize: 8.5,
  });

  // -------------------------------------------------------------
  // SLIDE 12: Del Machine Learning a los Sistemas Cognitivos
  // -------------------------------------------------------------
  state.slideCount++;
  const s12 = createContentSlide(pres, {
    category: 'Módulo 2 • Evolución de la IA',
    title: 'Evolución Tecnológica: Del Código Basado en Reglas a los LLMs',
    subtitle: 'La transformación arquitectónica que habilitó el procesamiento del lenguaje y la percepción',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `EVOLUCIÓN ARQUITECTÓNICA DE LA IA (20 minutos)
- Guía para el Instructor:
  Explicar cómo hemos pasado de sistemas inflexibles a arquitecturas fundacionales:
  1. Era de las Reglas (Sistemas Expertos, 1970-1990): Si A y B entonces C. Imposibles de mantener; no generalizan ante imprevistos.
  2. Era del ML Estadístico (2000-2012): SVM, Random Forest, Naive Bayes. Éxito rotundo en datos tabulares, pero exigían diseñar variables a mano (manual feature engineering).
  3. Era del Deep Learning (2012-2017): Redes neuronales convolucionales (CNN) para visión y recurrentes (LSTM) para texto. El modelo aprende las representaciones internamente, pero las LSTM sufrían el problema del gradiente desvanecido y la lentitud por procesamiento estrictamente secuencial.
  4. Era de los Transformers y Modelos Fundacionales (2017-Actualidad): El hito "Attention is All You Need" (Vaswani et al.). El mecanismo de autoatención procesa todas las palabras en paralelo, capturando relaciones complejas de largo alcance.
- Pregunta Clave:
  "¿Por qué los Transformers permitieron la explosión de modelos como GPT, BERT o Claude mientras que las redes LSTM se estancaron?"`,
  });

  // 4 Horizontal Evolutionary Tiers
  const tierW2 = 2.05;
  const tierGap2 = 0.2;
  const startX2 = 0.6;
  const tierY2 = 1.5;
  const tierH2 = 2.4;

  const eras = [
    {
      badge: 'ERA 1 • 1980-1995',
      badgeColor: colors.textMuted,
      badgeBg: colors.cardBgAlt,
      title: 'Sistemas Expertos',
      model: 'Reglas Simbólicas',
      data: 'Bases de reglas Si/Entonces.',
      pros: 'Totalmente predecibles e interpretables.',
      cons: 'Frágiles ante excepciones; nula capacidad de aprendizaje.',
    },
    {
      badge: 'ERA 2 • 2000-2012',
      badgeColor: colors.steelBlue,
      badgeBg: colors.iceBlue,
      title: 'ML Estadístico',
      model: 'Scikit-learn, SVM, RF',
      data: 'Datos estructurados tabulares.',
      pros: 'Capacidad predictiva rigurosa sobre métricas numéricas.',
      cons: 'Requiere costoso feature engineering manual por expertos.',
    },
    {
      badge: 'ERA 3 • 2012-2017',
      badgeColor: colors.purple,
      badgeBg: colors.purpleBg,
      title: 'Deep Learning',
      model: 'CNNs, LSTMs, GRUs',
      data: 'Imágenes, audio, secuencias.',
      pros: 'Aprendizaje automático de representaciones jerárquicas.',
      cons: 'Alto consumo de GPU; cuello de botella secuencial en texto.',
    },
    {
      badge: 'ERA 4 • 2017-HOY',
      badgeColor: colors.emerald,
      badgeBg: colors.emeraldBg,
      title: 'Modelos Fundacionales',
      model: 'Transformers, LLMs',
      data: 'Texto masivo, código, multimodal.',
      pros: 'Razonamiento contextual, zero-shot learning y multimodalidad.',
      cons: 'Riesgo de alucinaciones; requiere técnicas de guardrails y RAG.',
    },
  ];

  eras.forEach((era, idx) => {
    const xPos = startX2 + idx * (tierW2 + tierGap2);
    addCard(s12, pres, {
      x: xPos,
      y: tierY2,
      w: tierW2,
      h: tierH2,
      badge: era.badge,
      badgeBg: era.badgeBg,
      badgeColor: era.badgeColor,
      title: era.title,
      titleSize: 11,
      items: [
        { text: `Motor: ${era.model}`, bold: true },
        `Datos: ${era.data}`,
        `Ventaja: ${era.pros}`,
        `Límite: ${era.cons}`,
      ],
      itemSize: 8,
    });
  });

  // Callout Box at bottom
  addCalloutBox(s12, pres, {
    x: 0.6,
    y: 4.05,
    w: 8.8,
    h: 1.0,
    type: 'info',
    title: 'EL MECANISMO DE AUTOATENCIÓN (SELF-ATTENTION)',
    text: 'A diferencia de las arquitecturas secuenciales que leían palabra por palabra olvidando el inicio de párrafos largos, el mecanismo de atención calcula la afinidad semántica de cada palabra con todas las demás de forma simultánea mediante matrices de Query, Key y Value (Attention(Q,K,V) = softmax((Q * K^T) / sqrt(d_k)) * V).',
  });

  // -------------------------------------------------------------
  // SLIDE 13: El Ecosistema de Servicios y APIs Cognitivas
  // -------------------------------------------------------------
  state.slideCount++;
  const s13 = createContentSlide(pres, {
    category: 'Módulo 2 • Servicios Cloud',
    title: 'El Catálogo de Servicios y APIs Cognitivas Empresariales',
    subtitle: 'Capacidades cognitivas preentrenadas listas para consumir mediante interfaces REST y SDKs',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `ECOSISTEMA DE SERVICIOS COGNITIVOS (25 minutos)
- Explicación Técnica para el Docente:
  Analizar el panorama de servicios cognitivos de los tres grandes proveedores de nube (Microsoft Azure AI Services, Google Cloud Vertex AI, AWS Bedrock & Comprehend).
- La Decisión Clave de Arquitectura: ¿Consumir API o Entrenar Modelo Propio?
  • Cuándo usar APIs cognitivas preentrenadas:
    - Time-to-market urgente (días en lugar de meses).
    - Casos de uso estándar (OCR de facturas, análisis de sentimiento de reviews, transcripción de llamadas).
    - No se dispone de un equipo masivo de científicos de datos ni clústeres de GPUs.
  • Cuándo entrenar o hacer fine-tuning interno:
    - Requisitos estrictos de soberanía y privacidad de datos (datos no pueden abandonar la infraestructura local).
    - Vocabularios técnicos extremadamente cerrados (terminología médica ultracompleja o jerga legal interna).
    - Coste a escala masiva (cuando millones de llamadas a la API resultan más caras que mantener infraestructura propia).`,
  });

  // 4 Service Columns
  const sW = 2.05;
  const sGap = 0.2;
  const startS = 0.6;
  const sY = 1.5;
  const sH = 3.5;

  const services = [
    {
      badge: 'VISIÓN ARTIFICIAL',
      badgeBg: colors.iceBlue,
      badgeColor: colors.steelBlue,
      title: 'Percepción Visual',
      desc: 'Análisis de imágenes y vídeo en streaming.',
      items: [
        'OCR avanzado de documentos (facturas, DNI).',
        'Detección y clasificación de objetos en tiempo real.',
        'Inspección visual de calidad en manufactura.',
        'Moderación de contenido gráfico sensible.',
      ],
      providers: 'Azure Computer Vision, Google Cloud Vision, AWS Rekognition.',
    },
    {
      badge: 'LENGUAJE Y TEXTO',
      badgeBg: colors.purpleBg,
      badgeColor: colors.purple,
      title: 'Comprensión Textual',
      desc: 'Extracción de valor de texto libre corporativo.',
      items: [
        'Análisis de sentimiento y polaridad por aspectos.',
        'Extracción de entidades nombradas (NER).',
        'Resumen automático y detección de PII (datos personales).',
        'Traducción neuronal multilingüe en tiempo real.',
      ],
      providers: 'Azure AI Language, Google Vertex Natural Language, AWS Comprehend.',
    },
    {
      badge: 'VOZ Y AUDIO',
      badgeBg: colors.amberBg,
      badgeColor: colors.amber,
      title: 'Procesamiento de Voz',
      desc: 'Transformación bidireccional voz-texto.',
      items: [
        'Speech-to-Text (STT) con transcripción fonética.',
        'Text-to-Speech (TTS) neuronal hiperrealista.',
        'Identificación biométrica de locutor en call centers.',
        'Detección de emociones en la modulación de voz.',
      ],
      providers: 'Azure Speech Services, Google Cloud Speech, AWS Transcribe / Polly.',
    },
    {
      badge: 'BÚSQUEDA Y DECISIÓN',
      badgeBg: colors.emeraldBg,
      badgeColor: colors.emerald,
      title: 'Búsqueda Semántica',
      desc: 'Recuperación de conocimiento y toma de decisión.',
      items: [
        'Búsqueda vectorial híbrida (semántica + léxica).',
        'Detección de anomalías en streaming temporal.',
        'Personalización y motores de recomendación.',
        'Sistemas de defensa contra fraude en transacciones.',
      ],
      providers: 'Azure AI Search, Vertex AI Search, AWS Kendra / OpenSearch.',
    },
  ];

  services.forEach((srv, idx) => {
    const xPos = startS + idx * (sW + sGap);
    addCard(s13, pres, {
      x: xPos,
      y: sY,
      w: sW,
      h: sH,
      badge: srv.badge,
      badgeBg: srv.badgeBg,
      badgeColor: srv.badgeColor,
      title: srv.title,
      titleSize: 11,
      description: srv.desc,
      descriptionSize: 8.5,
      items: [
        ...srv.items,
        { text: `Proveedores: ${srv.providers}`, bold: true },
      ],
      itemSize: 8,
    });
  });

  // -------------------------------------------------------------
  // SLIDE 14: Arquitectura de una Solución Cognitiva Empresarial (RAG)
  // -------------------------------------------------------------
  state.slideCount++;
  const s14 = createContentSlide(pres, {
    category: 'Módulo 2 • Arquitectura de Soluciones',
    title: 'Arquitectura Cognitiva Empresarial: RAG & Agentes Autónomos',
    subtitle: 'Integración de modelos fundacionales con bases de conocimiento privadas mediante recuperación vectorial',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `ARQUITECTURA RAG EMPRESARIAL (25 minutos)
- Explicación Técnica para el Docente:
  Retrieval-Augmented Generation (RAG) es hoy el estándar de facto para aplicar IA generativa y cognitiva en empresas. Detallar el flujo de extremo a extremo:
  1. Fase Offline (Indexación):
     - Ingesta de documentos no estructurados (PDFs, wikis internas, manuales técnicos, emails).
     - Chunking semántico: dividir el texto en fragmentos coherentes (ej. 500 tokens con overlap de 50 tokens).
     - Vectorización con modelo de embeddings (ej. text-embedding-3-small o E5).
     - Inserción en Vector Database (Pinecone, Qdrant, Milvus, pgvector).
  2. Fase Online (Recuperación y Generación):
     - El usuario plantea una consulta en lenguaje natural.
     - La consulta se vectoriza con el mismo modelo de embeddings.
     - Búsqueda K-NN (Nearest Neighbors) por similitud coseno en la base vectorial.
     - Los fragmentos más relevantes se inyectan como contexto dentro del Prompt del LLM ("Responde a la pregunta basándote estrictamente en los siguientes documentos corporativos...").
     - El LLM genera la respuesta citando fuentes exactas y sin alucinaciones.
- Pregunta para la Clase:
  "¿Por qué el RAG es preferible al Fine-Tuning para actualizar el conocimiento de una empresa?" (RAG permite actualizar documentos en milisegundos sin coste de reentrenamiento y respeta permisos de seguridad por usuario).`,
  });

  // Flowchart Diagram (4 Horizontal Phases)
  const fW = 2.05;
  const fGap = 0.2;
  const startF = 0.6;
  const fY = 1.5;
  const fH = 2.3;

  const ragFlow = [
    {
      step: 'PASO 1',
      title: 'Ingesta & Chunking',
      desc: 'Extracción de texto desde fuentes dispersas (PDFs, ERP, repositorios).',
      bullets: ['Particionamiento semántico.', 'Gestión de solapamiento (overlap).', 'Limpieza de metadatos.'],
      badgeBg: colors.cardBgAlt,
      badgeColor: colors.textMuted,
    },
    {
      step: 'PASO 2',
      title: 'Vectorización Densa',
      desc: 'Conversión de texto a vectores densos mediante modelos de embeddings.',
      bullets: ['Embeddings de 1536 dimensiones.', 'Captura de afinidad conceptual.', 'Almacenamiento en Vector DB.'],
      badgeBg: colors.purpleBg,
      badgeColor: colors.purple,
    },
    {
      step: 'PASO 3',
      title: 'Recuperación Híbrida',
      desc: 'Búsqueda K-NN por similitud coseno combinada con búsqueda léxica BM25.',
      bullets: ['Ranking por relevancia.', 'Filtros de permisos de acceso.', 'Re-ranking de resultados.'],
      badgeBg: colors.iceBlue,
      badgeColor: colors.steelBlue,
    },
    {
      step: 'PASO 4',
      title: 'Generación Aumentada',
      desc: 'Inyección de contexto en el LLM para generar una respuesta grounded.',
      bullets: ['Cero alucinaciones corporativas.', 'Cita de fuentes originales.', 'Guardrails éticos y de seguridad.'],
      badgeBg: colors.emeraldBg,
      badgeColor: colors.emerald,
    },
  ];

  ragFlow.forEach((rf, idx) => {
    const xPos = startF + idx * (fW + fGap);
    addCard(s14, pres, {
      x: xPos,
      y: fY,
      w: fW,
      h: fH,
      badge: rf.step,
      badgeBg: rf.badgeBg,
      badgeColor: rf.badgeColor,
      title: rf.title,
      titleSize: 11,
      description: rf.desc,
      descriptionSize: 8.5,
      items: rf.bullets,
      itemSize: 8,
    });
  });

  // Callout Box explaining Hybrid Search & Guardrails
  addCalloutBox(s14, pres, {
    x: 0.6,
    y: 3.95,
    w: 8.8,
    h: 1.1,
    type: 'success',
    title: 'MEJORES PRÁCTICAS EN RAG INDUSTRIAL: BÚSQUEDA HÍBRIDA Y GUARDRAILS',
    text: 'La búsqueda puramente vectorial falla al buscar códigos exactos o identificadores alfanuméricos (ej. "Contrato CTR-2024-99B"). Una solución industrial robusta implementa Búsqueda Híbrida (Hybrid Search), combinando la similitud semántica con algoritmos de coincidencia exacta (BM25) y una capa de Re-ranking (Cross-Encoders) antes de alimentar el contexto al modelo.',
  });

  // -------------------------------------------------------------
  // SLIDE 15: Laboratorio 2: Integración y Enriquecimiento Cognitivo
  // -------------------------------------------------------------
  state.slideCount++;
  const s15 = createContentSlide(pres, {
    category: 'Módulo 2 • Laboratorio Práctico',
    title: 'Laboratorio 2: Extracción Semántica y Enriquecimiento con APIs/LLM',
    subtitle: 'Construcción de un pipeline en Python para vectorizar documentos y ejecutar consultas RAG',
    slideNum: state.slideCount,
    totalSlides: state.totalSlides,
    notes: `LABORATORIO PRÁCTICO 2 (45 minutos)
- Guía de Ejecución para el Instructor:
  1. Abrir \`lab2_cognitive_enrichment_rag.ipynb\`.
  2. Dataset de Entrada: Conjunto de 200 documentos contractuales y políticas de empresa en formato texto/PDF.
- Pasos Guiados:
  • Paso 1: Configurar el cliente de embeddings (utilizaremos un modelo open source ligero de Hugging Face \`all-MiniLM-L6-v2\` para ejecución local rápida y reproducible sin coste).
  • Paso 2: Implementar un splitter de texto con \`RecursiveCharacterTextSplitter\` (chunk_size=400, chunk_overlap=50).
  • Paso 3: Crear e inicializar una base de datos vectorial local con \`ChromaDB\`.
  • Paso 4: Indexar los chunks y metadatos (título del documento, departamento, fecha de vigencia).
  • Paso 5: Implementar una función de consulta que reciba preguntas complejas en lenguaje natural (ej. "¿Cuál es la política de indemnización por rotura de stock en clientes VIP?"), recupere los 3 fragmentos más cercanos y formule el prompt contextualizado.
- Validación Pedagógica:
  Comprobar que los alumnos entiendan por qué dos frases con palabras totalmente distintas tienen una similitud coseno alta si su significado es equivalente.`,
  });

  addCard(s15, pres, {
    x: 0.6,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'FICHA TÉCNICA DEL LABORATORIO',
    badgeBg: colors.purpleBg,
    badgeColor: colors.purple,
    title: 'Objetivos y Tecnologías',
    description: 'Implementar un motor de búsqueda semántica y enriquecimiento cognitivo funcional.',
    items: [
      { text: 'Corpus de Datos:', bold: true },
      '200 documentos de políticas corporativas y contratos.',
      { text: 'Librerías Python:', bold: true },
      'ChromaDB, sentence-transformers, LangChain / LlamaIndex.',
      { text: 'Modelo de Embeddings:', bold: true },
      'all-MiniLM-L6-v2 (384 dimensiones, rápido y local).',
      { text: 'Tiempo Asignado:', bold: true },
      '45 minutos (30 min desarrollo + 15 min debate).',
    ],
    itemSize: 9,
  });

  addCard(s15, pres, {
    x: 5.15,
    y: 1.5,
    w: 4.25,
    h: 3.5,
    badge: 'PASO A PASO DE LA PRÁCTICA',
    badgeBg: colors.emeraldBg,
    badgeColor: colors.emerald,
    title: 'Hitos de Construcción del Pipeline',
    description: 'Secuencia de implementación en el entorno de desarrollo:',
    items: [
      '1. Particionar los textos con solapamiento semántico de 50 tokens.',
      '2. Calcular los vectores densos y almacenarlos en ChromaDB.',
      '3. Enriquecer cada vector con metadatos clave para filtrado.',
      '4. Ejecutar consultas semánticas y medir distancia coseno.',
      '5. Evaluar la tasa de acierto frente a palabras clave tradicionales.',
      '6. Exportar la función de inferencia lista para producción.',
    ],
    itemSize: 9,
  });
}

module.exports = buildModule2;
