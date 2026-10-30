# PROPUESTA TÉCNICA Y FORMATIVA
## Programa de Especialización: Analítica Avanzada e Inteligencia Cognitiva
**Duración:** 15 Horas Lectivas • **Modalidad:** Presencial / Streaming Síncrono • **Idioma:** Español

---

### 1. RESUMEN EJECUTIVO

En el contexto empresarial actual, la ventaja competitiva de las organizaciones depende directamente de su capacidad para evolucionar desde una gestión retrospectiva de la información (Business Intelligence tradicional) hacia una cultura de **decisión predictiva y acción cognitiva automatizada**.

La presente propuesta formativa articula un programa de **15 horas lectivas de alto impacto** diseñado para capacitar a perfiles técnicos, analistas y responsables de negocio en las dos grandes disciplinas que lideran la transformación digital:
1. **La Analítica Avanzada:** Modelado estadístico riguroso, algoritmos de Machine Learning supervisados y no supervisados, ingeniería de variables hermética y arquitecturas modernas de datos (*Lakehouse* y *Feature Stores*).
2. **La Inteligencia Cognitiva y NLP:** Explotación del 80% de los datos corporativos que residen en formato no estructurado (texto libre, tickets, audios, contratos), mediante modelos de lenguaje contextuales (*Transformers*), servicios cognitivos multimodales y arquitecturas *Retrieval-Augmented Generation* (RAG).

El curso se ha diseñado bajo una metodología **60% expositiva-arquitectónica y 40% práctica guiada (*Hands-on Coding*)**, dotando a los alumnos de un repositorio de código reproducible en Python y un proyecto integrador aplicable de forma inmediata a los retos estratégicos de su organización.

---

### 2. FICHA TÉCNICA DEL PROGRAMA

| Parámetro | Especificación Oficial |
| :--- | :--- |
| **Denominación** | Analítica Avanzada e Inteligencia Cognitiva |
| **Carga Horaria** | 15 Horas Lectivas (distribuidas en 6 módulos) |
| **Público Objetivo** | Científicos de datos, ingenieros de datos, analistas de negocio cuantitativos, desarrolladores de software, líderes técnicos de IT y directores de analítica. |
| **Prerrequisitos** | Conocimientos básicos de programación en Python y fundamentos de análisis cuantitativo o SQL. |
| **Entorno de Laboratorio** | Python 3.10+, JupyterLab / Google Colab (ejecutable en CPU estándar). |
| **Librerías Core** | `pandas`, `scikit-learn`, `xgboost`, `optuna`, `shap`, `transformers` (Hugging Face), `chromadb`, `streamlit`, `plotly`. |
| **Materiales Entregados** | Presentation Deck Panorámico 16:9 (PPTX/PDF), Guía Completa del Docente (Markdown), Repositorio de código fuente con 5 laboratorios y suite de generación modular en Node.js. |

---

### 3. OBJETIVOS PEDAGÓGICOS Y COMPETENCIAS A DESARROLLAR

#### 3.1. Objetivos Generales
Al término del programa, los participantes habrán adquirido competencias sólidas y prácticas para:
- **Estructurar y liderar proyectos de datos** bajo el ciclo metodológico estándar de la industria (CRISP-DM y TDSP).
- **Diseñar, entrenar y validar modelos predictivos** orientados al impacto económico de negocio, seleccionando métricas que penalicen el coste real del error frente a la métrica técnica aislada.
- **Implementar soluciones cognitivas de lenguaje natural**, extrayendo sentimiento, polaridad por aspectos (ABSA) y tópicos dominantes a partir de texto no estructurado.
- **Diseñar arquitecturas de recuperación aumentada (RAG)** que conecten bases de conocimiento privadas con modelos fundacionales sin riesgo de alucinaciones.
- **Construir aplicaciones interactivas y cuadros de mando ejecutivos** (dashboards) que traduzcan la complejidad algorítmica y la explicabilidad (XAI) en herramientas de toma de decisión accesibles para la alta dirección.
- **Garantizar la estabilidad y el cumplimiento ético** de los modelos en producción mediante técnicas de MLOps (detección de Data y Concept Drift) y alineación con la Ley de Inteligencia Artificial de la Unión Europea (*EU AI Act*).

#### 3.2. Competencias Específicas por Pilar
1. **Pilar Cuantitativo y Predictivo:** Dominio de algoritmos de regularización ($L_1/L_2$), ensambles secuenciales (Gradient Boosting / XGBoost), clustering espacial (DBSCAN / K-Means) y prevención estricta de *Data Leakage*.
2. **Pilar Cognitivo y Lingüístico:** Comprensión de embeddings densos vectoriales, mecanismos de autoatención (*Transformers*), indexación en bases vectoriales y consumo eficiente de APIs cognitivas cloud.
3. **Pilar de Comunicación y Visualización:** Aplicación de los principios de percepción preatentiva de Gestalt, maximización del ratio datos-tinta de Edward Tufte y diseño funcional de dashboards ejecutivos en Streamlit y Plotly.

---

### 4. ESTRUCTURA MODULAR DEL CURSO (15 HORAS)

El temario oficial se ha estructurado en **6 módulos didácticos equilibrados**, garantizando la alternancia entre rigor teórico, diagramas de arquitectura y práctica de laboratorio:

```
[M0: Encuadre (0.5h)] ➔ [M1: Analítica Avanzada (2.5h)] ➔ [M2: Inteligencia Cognitiva (2.5h)]
                                                                      │
[M6: Proyecto y Cierre (1.5h)] ◄─ [M5: Visualización (2.0h)] ◄─ [M4: NLP & Sentimiento (2.5h)] ◄─ [M3: ML Predictivo (3.5h)]
```

#### MÓDULO 0: Encuadre, Objetivos y Hoja de Ruta (0.5 Horas)
- Presentación del instructor y alineación de expectativas del aula.
- El perfil del profesional de datos moderno: del reporte estático a la co-pilotación cognitiva.
- Verificación del entorno de desarrollo: Google Colab, JupyterLab y librerías preinstaladas.
- Metodología docente: dinámicas de debate y resolución de casos reales.

#### MÓDULO 1: Introducción a la Analítica Avanzada (2.5 Horas)
- **Conceptos y Continuo de Madurez:** El marco de Gartner (Descriptiva ➔ Diagnóstica ➔ Predictiva ➔ Prescriptiva); ejes de valor frente a dificultad técnica.
- **Matriz Comparativa de Enfoques:** Análisis diferencial de preguntas de negocio, horizontes temporales, algoritmos y retorno de inversión en retail, banca y salud.
- **Ciclo de Vida de Proyectos de Datos:** Las 6 fases iterativas de CRISP-DM y TDSP; por qué el 80% del esfuerzo reside en la comprensión y preparación de datos.
- **Arquitectura de Datos Moderna:** La evolución desde Data Warehouses tradicionales y Data Lakes hacia el paradigma *Lakehouse* con transacciones ACID (Delta Lake / Iceberg) y la arquitectura *Medallion* (Bronze, Silver, Gold).
- **El Rol del Feature Store:** Sincronización entre entrenamiento masivo offline e inferencia online de baja latencia; prevención del *Training-Serving Skew*.
- **Laboratorio 1 (45 min):** *Diagnóstico y Calidad de Datos (EDA) en Python*. Profilado automatizado con `ydata-profiling`, clasificación de nulos (MCAR/MAR/MNAR), multicolinealidad con VIF y detección multivariante de anomalías con `IsolationForest`.

#### MÓDULO 2: Fundamentos de la Inteligencia Cognitiva (2.5 Horas)
- **Definición y Pilares Bio-inspirados:** Comprensión contextual multimodal (*Understand*), Razonamiento probabilístico (*Reason*), Aprendizaje continuo (*Learn*) e Interacción natural fluida (*Interact*).
- **Evolución Tecnológica de la IA:** De sistemas expertos simbólicos y ML estadístico al Deep Learning jerárquico y los Modelos Fundacionales (*Transformers* y LLMs).
- **Mecanismos de Atención:** Cómo la autoatención (*Self-Attention*) superó el cuello de botella secuencial de las redes recurrentes LSTM.
- **Catálogo de Servicios y APIs Cognitivas:** Panorama comparativo en la nube (Microsoft Azure AI Services, Google Cloud Vertex AI, AWS Bedrock). Criterios arquitectónicos: ¿cuándo consumir APIs gestionadas vs cuándo entrenar modelos propios?
- **Arquitectura RAG Empresarial (*Retrieval-Augmented Generation*):** Pipeline de ingesta, chunking semántico, modelos de embeddings, bases de datos vectoriales y búsqueda híbrida (vectorial densa + BM25 léxica).
- **Laboratorio 2 (45 min):** *Extracción y Enriquecimiento Cognitivo con APIs/LLM*. Vectorización de contratos y políticas corporativas con `ChromaDB` y modelo denso `all-MiniLM-L6-v2`, con recuperación semántica contextual.

#### MÓDULO 3: Modelos Predictivos y Machine Learning (3.5 Horas)
- **Taxonomía Integral del ML:** Mapeo matemático entre aprendizaje supervisado (regresión y clasificación), no supervisado (clustering y reducción dimensional) y por refuerzo (control y optimización de políticas).
- **Algoritmos Supervisados Clave:**
  - Modelos lineales y regularización ($L_2$ Ridge para control de varianza, $L_1$ Lasso para selección automática de variables, ElasticNet).
  - Árboles de decisión (CART) y reducción de impureza (Gini/Entropía).
  - Ensambles paralelos por Bagging (*Random Forest*): reducción de varianza mediante muestreo bootstrap.
  - Ensambles secuenciales por Boosting (*XGBoost / LightGBM*): optimización analítica de segundo orden mediante gradiente y hessiano.
- **Algoritmos No Supervisados:**
  - Clustering por centroides (*K-Means*) vs clustering por densidad (*DBSCAN* con aislamiento nativo de ruido). Métricas: coeficiente Silhouette y Davies-Bouldin.
  - Reducción de dimensionalidad lineal (*PCA*) vs no lineal (*t-SNE / UMAP*) para visualización exploratoria.
- **Ingeniería de Características y Prevención de Data Leakage:** Imputación robusta, codificación de variables de alta cardinalidad (*Target Encoding* regularizado) y escalado estricto en pipelines encapsulados de `scikit-learn`.
- **Evaluación Orientada al Negocio:** Desmitificación del *Accuracy* en clases desbalanceadas; priorización de Precisión vs Recall; curvas ROC-AUC y Precision-Recall (PR-AUC); traducción de la matriz de confusión a costes financieros directos.
- **Validación Cruzada:** Stratified K-Fold y TimeSeriesSplit (walk-forward validation) para evitar viajar al futuro.
- **Laboratorio 3 (60 min):** *Modelo Predictivo de Churn con XGBoost y SHAP*. Pipeline completo con preprocesamiento hermético, optimización bayesiana de hiperparámetros con `Optuna`, calibración de probabilidad, fijación del umbral óptimo de decisión por matriz de costes y explicabilidad global/local con valores SHAP (*TreeExplainer*).

#### MÓDULO 4: Análisis de Sentimientos y Procesamiento del Lenguaje Natural (2.5 Horas)
- **El Pipeline Lingüístico Moderno:** Normalización, tokenización por subpalabras (*Byte-Pair Encoding* / *WordPiece*), lematización según categoría gramatical (POS) y extracción de n-gramas preservando negaciones.
- **El Mito de las Stopwords:** Por qué en modelos estadísticos clásicos (TF-IDF) es vital eliminarlas, mientras que en Transformers deben conservarse para no destruir las relaciones de atención sintáctica.
- **Evolución Vectorial del Texto:** De representaciones dispersas y ortogonales (BoW / TF-IDF) a embeddings estáticos densos (Word2Vec / GloVe) y representaciones contextuales dinámicas con autoatención bidireccional (BERT / RoBERTa).
- **Técnicas de Análisis de Sentimientos:**
  - Métodos basados en léxicos (VADER, TextBlob) y sus límites ante el sarcasmo.
  - Modelos supervisados tradicionales (TF-IDF + regresión logística).
  - Modelos profundos finetuneados en español (`pysentimiento`, BETO, RoBERTa).
  - *Aspect-Based Sentiment Analysis* (ABSA): extracción granular de sentimiento por atributo de producto.
- **Aplicaciones Empresariales de Voice of Customer (VoC):** Monitorización de marca en streaming, triaje automatizado de tickets de soporte técnico, inteligencia competitiva y rescate proactivo de clientes en call centers mediante transcripción continua.
- **Laboratorio 4 (45 min):** *Clasificación de Sentimiento y Minería de Tópicos*. Comparativa de rendimiento entre baseline estadístico (TF-IDF) y Transformer preentrenado en español sobre 10.000 reseñas de e-commerce, con clustering temático de quejas mediante `BERTopic`.

#### MÓDULO 5: Visualización de Datos Avanzada y Dashboards Interactivos (2.0 Horas)
- **Fundamentos de Percepción Visual y Neurociencia:** Atributos preatentivos del córtex visual (posición y longitud vs área y color); leyes de organización Gestalt (proximidad, cerramiento, continuidad).
- **El Principio del Data-Ink Ratio (Edward Tufte):** Eliminación sistemática de "Chartjunk" (efectos 3D, degradados estridentes, rejillas densas); justificación matemática de por qué evitar gráficos circulares (*pie charts*).
- **Ecosistema Tecnológico:** Cuándo implantar plataformas BI corporativas (Power BI, Tableau) frente a frameworks de Data Apps en Python puro (Streamlit, Plotly Dash).
- **Anatomía de un Dashboard Ejecutivo de Impacto:** Patrones de lectura en "Z" y "F"; barra superior de filtros; fila de scorecards con deltas porcentuales; cuerpo central de tendencias temporales con bandas de confianza; tabla inferior de detalle accionable (*drill-through*). Reglas de los 5 segundos y los 3 clics.
- **Integración de ML y Sentimiento en Paneles:** Traducción de probabilidades estadísticas a categorías operativas de riesgo; integración de micro-gráficos de cascada SHAP para explicabilidad local; diseño de paneles de salud del modelo y botones de feedback humano (*Human-in-the-Loop*).
- **Laboratorio 5 (60 min):** *Construcción de un Dashboard con Streamlit y Plotly*. Desarrollo de una aplicación web interactiva que consuma los datasets y modelos de los labs anteriores, con filtros reactivos dinámicos, gráficos de dispersión con tooltips enriquecidos, análisis de sentimiento y exportación de clientes prioritarios con caché optimizada (`@st.cache_data`).

#### MÓDULO 6: Casos Prácticos, MLOps, Proyecto Integrador y Cierre (1.5 Horas)
- **Arquitectura Industrial End-to-End:** Blueprint tecnológico que integra DataOps, Feature Store corporativo, plataforma de CI/CD para ML (MLflow), inferencia híbrida (microservicios FastAPI / Triton) y observabilidad en tiempo real.
- **Estudio de Caso de Éxito Real:** Implementación en una multinacional de servicios (3M de clientes) combinando Churn predictivo con análisis VoC en call centers y motor prescriptivo *Next Best Action*, logrando una reducción de 0.8 puntos de abandono y un ahorro anual auditado de 4.2 millones de euros (payback en 4.5 meses).
- **MLOps y Degradación de Modelos:** Diferencias críticas entre *Data Drift* ($P(X)$, test de Kolmogorov-Smirnov / PSI) y *Concept Drift* ($P(y|X)$, mutación de patrones). Estrategias de reentrenamiento continuo y re-calibración.
- **Marco Regulatorio y Ética (EU AI Act & GDPR):** Clasificación de sistemas de IA por niveles de riesgo; requisitos para modelos de alto riesgo (scoring, empleo, salud); derecho a la explicación algorítmica (Art. 22 GDPR) mediante técnicas XAI auditables.
- **Guía del Proyecto Final Integrador:** Presentación de los casos de negocio disponibles (Retail, Fintech, Salud Digital), hitos de entrega y rúbrica de calificación oficial.
- **Conclusiones y Hoja de Ruta Profesional:** Síntesis de aprendizajes, certificaciones de referencia y turno abierto de debate y networking.

---

### 5. ECOSISTEMA DE ENTREGABLES DESARROLLADOS

El proyecto cuenta con un conjunto integral de entregables listos para su uso inmediato en el aula:

```
training-analisis-cognitivo/
│
├── Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx  # Slide Deck 16:9 oficial (41 slides con notas)
├── Analitica_Avanzada_e_Inteligencia_Cognitiva.pdf   # Versión vectorial PDF lista para proyección
├── GUIA_DEL_DOCENTE.md                              # Manual del profesor con transcripción y código
├── PROPUESTA_TECNICA_Y_FORMATIVA.md                 # La presente propuesta formal y académica
│
├── generator/                                       # Suite modular de generación en Node.js
│   ├── config.js                                    # Tokens de diseño, dimensiones y paleta
│   ├── helpers.js                                   # Componentes de tarjetas, tablas y flujos
│   ├── build_deck.js                                # Script principal de compilación del deck
│   ├── generate_guide.js                            # Script de exportación de la guía docente
│   └── modules/                                     # Módulos 0 al 6 desacoplados
│       ├── module0_intro.js
│       ├── module1_advanced_analytics.js
│       ├── module2_cognitive_ai.js
│       ├── module3_predictive_ml.js
│       ├── module4_nlp_sentiment.js
│       ├── module5_visualization.js
│       └── module6_cases_projects.js
│
└── package.json                                     # Configuración de dependencias (pptxgenjs)
```

#### Características Destacadas de los Materiales:
- **Diseño Gráfico Profesional:** Formato panorámico 16:9 con paleta corporativa de alto contraste (azul marino profundo `#0F1B2E`, acero `#2B4C7E`, gris perla `#F8FAFC` y acentos celestes `#0284C7`), garantizando máxima legibilidad en salas de formación y proyectores.
- **Notas del Orador Exhaustivas:** Cada una de las 41 diapositivas incorpora notas técnicas que detallan el trasfondo conceptual, preguntas de provocación intelectual para el alumnado y advertencias de fallos típicos en proyectos reales.
- **Validación Estricta:** El archivo PPTX ha superado la validación contra esquemas oficiales de Microsoft Office mediante analizador XML (`All validations PASSED!`), asegurando total compatibilidad sin errores de apertura.
- **Inspección Visual 100%:** Se ha realizado control de calidad visual sobre las 41 diapositivas exportadas a imagen, verificando la ausencia de desbordamientos de texto o elementos superpuestos.

---

### 6. PLANIFICACIÓN DE LOS 5 LABORATORIOS PRÁCTICOS

| Lab | Módulo | Título de la Práctica | Stack Tecnológico | Entregable del Alumno |
| :---: | :---: | :--- | :--- | :--- |
| **Lab 1** | Módulo 1 | **Auditoría y Perfilado Estadístico de Datos** | `pandas`, `ydata-profiling`, `IsolationForest` | Dataset curado en formato Parquet e informe de diagnóstico multivariante. |
| **Lab 2** | Módulo 2 | **Enriquecimiento Cognitivo y RAG Local** | `ChromaDB`, `sentence-transformers`, `LangChain` | Base vectorial persistente y función de consulta semántica contextual. |
| **Lab 3** | Módulo 3 | **Modelado Predictivo de Churn y XAI** | `scikit-learn`, `xgboost`, `optuna`, `shap` | Modelo calibrado, optimización bayesiana y gráfico resumen de impacto SHAP. |
| **Lab 4** | Módulo 4 | **Pipeline de Sentimiento y Tópicos** | `Hugging Face`, `pysentimiento`, `BERTopic` | Clasificador con modelo Transformer y reporte de causas raíz de insatisfacción. |
| **Lab 5** | Módulo 5 | **Data App Interactiva de Retención** | `Streamlit`, `Plotly Express`, `Altair` | Aplicación web funcional con filtros reactivos, scorecards y scatter plot interactivo. |

---

### 7. PROYECTO FINAL INTEGRADOR Y RÚBRICA DE EVALUACIÓN

Para superar el curso y obtener la acreditación formativa, los participantes desarrollarán de forma colaborativa (equipos de 2 a 3 personas) un **Proyecto Final Integrador** consistente en la resolución integral de un caso de uso real a elegir entre:
- **Opción A (Retail / E-commerce):** Predicción de abandono de compradores recurrentes + minería de reseñas insatisfechas + dashboard de recomendaciones comerciales.
- **Opción B (Banca / Fintech):** Scoring de riesgo crediticio + análisis semántico de reclamaciones a atención al cliente + panel de alertas regulatorias.
- **Opción C (Salud / Seguros):** Estimación de propensión a reingreso hospitalario + extracción de entidades en notas médicas libres + interfaz de soporte a la decisión clínica.

#### Rúbrica de Calificación Oficial

| Criterio | Ponderación | Aspectos Evaluados |
| :--- | :---: | :--- |
| **Rigor Metodológico y Métricas** | **30%** | Ausencia absoluta de *Data Leakage*, correcto split estratificado, justificación de la función de pérdida y alineación de la métrica con la matriz de costes financieros. |
| **Arquitectura y Calidad del Código** | **25%** | Modularidad de los pipelines (`ColumnTransformer`, `Pipeline`), reproducibilidad, gestión de dependencias y limpieza en cuadernos de trabajo. |
| **Visualización y Usabilidad** | **25%** | Diseño intuitivo del dashboard en Streamlit, cumplimiento del ratio datos-tinta, interactividad fluida (< 200 ms) e integración de explicabilidad XAI local. |
| **Enfoque de Negocio y Defensa Oral** | **20%** | Claridad en la exposición ejecutiva (10 minutos), cuantificación del ROI del proyecto y propuesta de un plan de gobierno y MLOps continuo. |

---

### 8. IMPACTO ORGANIZACIONAL Y RETORNO DE INVERSIÓN (ROI)

La adopción de este programa formativo genera beneficios directos y medibles en las organizaciones participantes:
1. **Reducción del Time-to-Market Analítico:** Los equipos adquieren plantillas de código modulares y patrones de diseño consolidados, reduciendo en un 50% el tiempo de puesta en marcha de nuevos casos de uso predictivos.
2. **Eliminación del Fracaso por Data Leakage:** Se entrena a los profesionales en técnicas rigurosas de validación cruzada y encapsulamiento en pipelines, erradicando modelos que funcionan en el laboratorio pero fallan catastróficamente en producción.
3. **Monetización de Datos No Estructurados:** Capacita a los equipos para extraer valor del 80% de la información corporativa latente en documentos de texto, correos y tickets, habilitando casos de uso de alta rentabilidad como la atención al cliente proactiva y el triaje cognitivo.
4. **Cumplimiento Regulatorio Anticipado:** Dota a la compañía de las directrices técnicas y metodológicas para operar modelos explicables (XAI) conformes con el marco de la *AI Act* europea y el reglamento general de protección de datos (GDPR).

---

*Propuesta técnica elaborada y validada por el Instructor Senior en Analítica Avanzada e Inteligencia Artificial.*
