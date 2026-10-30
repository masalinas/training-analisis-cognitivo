# Programa de Especialización: Analítica Avanzada e Inteligencia Cognitiva (15H)

[![OpenSpec Verified](https://img.shields.io/badge/OpenSpec-Spec--Driven-0052CC.svg)](openspec/specs/course-materials/spec.md)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB.svg?logo=python&logoColor=white)](https://www.python.org/)
[![Presentation](https://img.shields.io/badge/Format-16%3A9%20Panorámico-orange.svg)](#características-de-diseño-y-principios-técnicos)
[![Slides](https://img.shields.io/badge/Slides-41%20Diapositivas-blue.svg)](#estructura-modular-del-curso)

Repositorio oficial de contenidos formativos, materiales pedagógicos y pipeline automatizado de generación programática (*Presentation as Code*) para el programa de especialización de **15 horas lectivas** en **Analítica Avanzada e Inteligencia Cognitiva**.

El proyecto abarca desde la conceptualización teórica y arquitecturas de referencia en datos e IA, hasta el código fuente de 5 laboratorios prácticos en Python y un generador modular que compila automáticamente la presentación en formato panorámico Microsoft PowerPoint (`.pptx`), su exportación en `.pdf` de alta fidelidad y la documentación técnica de soporte.

---

## 📑 Tabla de Contenidos

- [Resumen del Proyecto](#-resumen-del-proyecto)
- [Stack Tecnológico y Herramientas](#-stack-tecnológico-y-herramientas)
- [Estructura del Repositorio](#-estructura-del-repositorio)
- [Estructura Modular del Curso](#-estructura-modular-del-curso-15-horas)
- [Laboratorios Prácticos y Proyecto Integrador](#-laboratorios-prácticos-y-proyecto-integrador)
- [Instalación y Guía de Uso](#-instalación-y-guía-de-uso)
- [Principios Técnicos del Generador ("Presentation as Code")](#-principios-técnicos-del-generador-presentation-as-code)
- [Documentación Adicional](#-documentación-adicional)

---

## 🎯 Resumen del Proyecto

El programa formativo capacita a profesionales técnicos, analistas y líderes de negocio en la transición desde el Business Intelligence retrospectivo hacia la **analítica predictiva y la acción cognitiva automatizada**.

- **Carga Horaria:** 15 Horas lectivas (repartibles en 3 jornadas de 5h o 5 sesiones de 3h).
- **Metodología Didáctica:** 60% Exposición teórico-arquitectónica y 40% Laboratorio práctico guiado (*Hands-on Coding*).
- **Público Objetivo:** Científicos de datos, ingenieros de datos, analistas cuantitativos, desarrolladores y directores de IT/Analytics.
- **Enfoque de Negocio:** Rigor estadístico, prevención de *Data Leakage*, optimización de decisiones mediante matrices de coste económico y explicabilidad algorítmica (XAI).

---

## 🛠️ Stack Tecnológico y Herramientas

El ecosistema técnico del proyecto se divide en dos componentes principales:

### 1. Pipeline de Generación de Materiales (*Presentation as Code*)

| Tecnología / Librería | Versión | Propósito en el Proyecto |
| :--- | :--- | :--- |
| **Node.js** | 18+ / 20+ | Runtime de ejecución para los scripts de generación y ensamblado modular. |
| **pptxgenjs** | `^4.0.1` | Motor declarativo para compilación de diapositivas OOXML (`.pptx`) 16:9 con soporte para tablas, tarjetas de flujo, portadas y notas de orador integradas. |
| **LibreOffice Headless** | 7.x+ / 24.x+ | Motor de renderizado vectorial para la conversión automatizada de `.pptx` a `.pdf`. |
| **OpenSpec** | 1.13.1 | Framework de especificación, trazabilidad y control de calidad (*spec-driven development*). |

### 2. Ecosistema de Laboratorios y Prácticas (*Hands-on Python*)

| Disciplina | Librerías Principales | Aplicación Práctica |
| :--- | :--- | :--- |
| **Manipulación y Diagnóstico** | `pandas`, `numpy`, `ydata-profiling` | Ingesta, tipología de valores nulos (MCAR/MAR/MNAR) y multicolinealidad (VIF). |
| **Machine Learning Supervisado** | `scikit-learn`, `xgboost`, `optuna` | Pipelines herméticos, ensamble secuencial por gradiente y optimización bayesiana de hiperparámetros. |
| **Explicabilidad (XAI)** | `shap` | Interpretación local y global de modelos de árbol mediante valores Shapley (`TreeExplainer`). |
| **Modelos Cognitivos y NLP** | `transformers` (Hugging Face) | Modelos contextuales (*BERT*, *RoBERTa*) para clasificación de sentimientos y análisis por aspectos (ABSA). |
| **Vectorización y RAG** | `chromadb`, `sentence-transformers` | Embeddings densos (`all-MiniLM-L6-v2`) e indexación vectorial para búsqueda semántica. |
| **Data Apps y Visualización** | `streamlit`, `plotly` | Aplicaciones interactivas orientadas a negocio aplicando principios de Gestalt y ratio datos-tinta de Tufte. |

---

## 📂 Estructura del Repositorio

```text
training-analisis-cognitivo/
├── Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx   # Slide deck oficial compilado (41 diapositivas)
├── Analitica_Avanzada_e_Inteligencia_Cognitiva.pdf    # Versión exportada en PDF de alta fidelidad
├── GUIA_DEL_DOCENTE.md                                # Manual integral del docente con notas y código
├── PROPUESTA_TECNICA_Y_FORMATIVA.md                   # Propuesta técnica, rúbrica de evaluación y ROI
├── README.md                                          # Documentación principal del repositorio
├── package.json                                       # Dependencias y scripts de Node.js
├── generator/                                         # Suite modular del generador en Node.js
│   ├── config.js                                      # Dimensiones 16:9, fuentes y paleta corporativa
│   ├── helpers.js                                     # Helpers de maquetación, tarjetas y portadas
│   ├── build_deck.js                                  # Script orquestador principal del slide deck
│   ├── generate_guide.js                              # Generador del handbook GUIA_DEL_DOCENTE.md
│   └── modules/                                       # Código modular de los 7 bloques didácticos
│       ├── module0_intro.js                           # Módulo 0 (Slides 1 a 3)
│       ├── module1_advanced_analytics.js              # Módulo 1 (Slides 4 a 9)
│       ├── module2_cognitive_ai.js                    # Módulo 2 (Slides 10 a 15)
│       ├── module3_predictive_ml.js                   # Módulo 3 (Slides 16 a 23)
│       ├── module4_nlp_sentiment.js                   # Módulo 4 (Slides 24 a 29)
│       ├── module5_visualization.js                   # Módulo 5 (Slides 30 a 35)
│       └── module6_cases_projects.js                  # Módulo 6 (Slides 36 a 41)
└── openspec/                                          # Gobernanza y especificaciones formales
    ├── config.yaml                                    # Configuración del proyecto OpenSpec
    ├── specs/
    │   └── course-materials/                          # Especificación viva sincronizada
    │       └── spec.md
    └── changes/
        └── archive/                                   # Historial de cambios completados y validados
            └── 2026-10-30-curso-analitica-cognitiva/
```

---

## 📚 Estructura Modular del Curso (15 Horas)

El curso se divide en **6 módulos temáticos** precedidos de un bloque de encuadre metodológico:

```text
[M0: Encuadre (0.5h)] ➔ [M1: Analítica Avanzada (2.5h)] ➔ [M2: Inteligencia Cognitiva (2.5h)]
                                                                      │
[M6: Proyecto y Cierre (1.5h)] ◄─ [M5: Visualización (2.0h)] ◄─ [M4: NLP & Sentimiento (2.5h)] ◄─ [M3: ML Predictivo (3.5h)]
```

| Módulo | Denominación Oficial | Horas | Diapositivas | Hito Práctico Asociado |
| :---: | :--- | :---: | :---: | :--- |
| **M0** | **Encuadre, Objetivos y Hoja de Ruta** | 0.5 h | Slides 1 - 3 | Verificación de entorno (Jupyter/Colab). |
| **M1** | **Introducción a la Analítica Avanzada** | 2.5 h | Slides 4 - 9 | **Lab 1:** Diagnóstico y Calidad de Datos (EDA). |
| **M2** | **Fundamentos de la Inteligencia Cognitiva** | 2.5 h | Slides 10 - 15 | **Lab 2:** Extracción Cognitiva y RAG con ChromaDB. |
| **M3** | **Modelos Predictivos y Machine Learning** | 3.5 h | Slides 16 - 23 | **Lab 3:** Clasificación de Churn (XGBoost + SHAP). |
| **M4** | **Análisis de Sentimientos y NLP Moderno** | 2.5 h | Slides 24 - 29 | **Lab 4:** Minería de Opinión y ABSA (Transformers). |
| **M5** | **Visualización de Datos y Data Apps** | 2.0 h | Slides 30 - 35 | **Lab 5:** Dashboard Ejecutivo Interactivo en Streamlit. |
| **M6** | **Casos de Éxito, MLOps y Proyecto** | 1.5 h | Slides 36 - 41 | **Proyecto Integrador:** Blueprint Industrial E2E. |

---

## 🧪 Laboratorios Prácticos y Proyecto Integrador

Los laboratorios cuentan con especificaciones completas, pipelines en Python y notas explicativas:

1. **Laboratorio 1 (M1 - 45 min): Calidad de Datos y EDA Multivariante**
   - Profilado estadístico avanzado.
   - Tratamiento diferenciado de valores nulos (MCAR, MAR, MNAR) e imputación mediante KNN e iterativa.
   - Detección de colinealidad vía Factor de Inflación de Varianza (VIF).
   - Detección multivariante de anomalías mediante *Isolation Forest*.

2. **Laboratorio 2 (M2 - 45 min): Vectorización Semántica y Pipeline RAG**
   - Ingesta y chunking de documentación corporativa no estructurada.
   - Generación de embeddings densos contextuales (`all-MiniLM-L6-v2`).
   - Almacenamiento, indexación y consulta top-k en base vectorial persistente con `ChromaDB`.

3. **Laboratorio 3 (M3 - 60 min): Modelo Predictivo de Churn con XGBoost y SHAP**
   - Preprocesamiento hermético encapsulado dentro de `Pipeline` de `scikit-learn` para prevenir *Data Leakage*.
   - Optimización bayesiana de hiperparámetros con `Optuna`.
   - Búsqueda del umbral óptimo de decisión minimizando la matriz de costes de negocio frente a métricas ingenuas.
   - Explicabilidad global y local con valores Shapley mediante `shap.TreeExplainer`.

4. **Laboratorio 4 (M4 - 45 min): Análisis de Sentimientos por Aspectos (ABSA)**
   - Tokenización por subpalabras (BPE / WordPiece) preservando stopwords funcionales.
   - Inferencia con modelos preentrenados de Hugging Face (`distilbert-base-uncased-finetuned-sst-2-english`).
   - Desagregación de opiniones por entidad/aspecto en tickets de soporte y comentarios de clientes (*Voice of Customer*).

5. **Laboratorio 5 (M5 - 45 min): Construcción de Data App Ejecutiva en Streamlit**
   - Diseño de interfaz analítica reactiva basada en principios de Gestalt y ratio datos-tinta de Edward Tufte.
   - Renderizado interactivo de curvas de dispersión y métricas de negocio con `plotly`.
   - Integración interactiva de explicabilidad local para simulaciones "what-if" en tiempo real.

6. **Proyecto Integrador Transversal (M6): Sistema de Retención Proactiva de Clientes**
   - Integración holística de los 5 pilares: Lakehouse ➔ Enriquecimiento NLP de tickets ➔ Inferencia de abandono con XGBoost ➔ Cuadro de mando ejecutivo ➔ Monitoreo de Data & Concept Drift bajo el marco regulatorio del **EU AI Act**.

---

## 🚀 Instalación y Guía de Uso

### Requisitos Previos

- **Node.js** v18 o superior instalado en el sistema.
- **npm** (incluido con Node.js).
- *(Opcional)* **Python 3.10+** para la ejecución de los cuadernos y scripts de laboratorio.
- *(Opcional)* **LibreOffice** con CLI activo si se desea compilar a PDF de forma desatendida.

### 1. Clonar el Repositorio e Instalar Dependencias

```bash
git clone <url-del-repositorio>
cd training-analisis-cognitivo

# Instalar dependencias de Node.js
npm install
```

### 2. Comandos Disponibles

El proyecto incluye scripts configurados en [`package.json`](file:///home/miguel/git/training-analisis-cognitivo/package.json):

```bash
# Compilar el slide deck completo (41 diapositivas PPTX)
npm run build

# Generar la Guía Completa del Docente en Markdown
npm run guide

# Ejecutar ambos procesos consecutivamente
npm run generate
```

### 3. Validación de Conformidad con OpenSpec

El material se encuentra auditado bajo las directrices del framework OpenSpec:

```bash
# Validar la conformidad del material frente a la especificación activa
openspec validate --specs

# Validar que los cambios archivados se encuentren debidamente completados
openspec validate --archived
```

---

## 🎨 Principios Técnicos del Generador ("Presentation as Code")

La generación del material de presentación se basa en directrices de ingeniería visual:

- **Relación de Aspecto Panorámica (16:9):** Tamaño exacto de 10.0" × 5.625", eliminando franjas negras en monitores modernos y proyectores corporativos.
- **Paleta Corporativa de Alto Contraste:** 
  - Fondo oscuro de portadas y separadores: Deep Navy (`#0F1B2E`).
  - Fondo de diapositivas de contenido: Slate Light (`#F8FAFC`).
  - Tarjetas de contenido: Pure White (`#FFFFFF`) con bordes limpios (`#CBD5E1`).
  - Tipografía jerarquizada: Títulos e insignias en `Calibri`, bloques de código en `Courier New`.
- **Arquitectura de Tarjetas de Flujo Unificado:**
  - Los contenedores visuales agrupan títulos, descripciones y métricas dentro de una única llamada con `valign: top`, previniendo solapamientos tipográficos en renderizados multiplataforma.
- **Notas de Orador en el 100% de Diapositivas:**
  - Cada diapositiva incluye instrucciones estructuradas en la sección `addNotes`: guía didáctica, profundización técnica de bajo nivel, preguntas socráticas para dinamizar el aula y advertencias operativas.

---

## 📖 Documentación Adicional

- [`PROPUESTA_TECNICA_Y_FORMATIVA.md`](file:///home/miguel/git/training-analisis-cognitivo/PROPUESTA_TECNICA_Y_FORMATIVA.md): Memoria técnica detallada, desglose pedagógico por minutos, modelo de evaluación y análisis de retorno sobre la inversión (ROI).
- [`GUIA_DEL_DOCENTE.md`](file:///home/miguel/git/training-analisis-cognitivo/GUIA_DEL_DOCENTE.md): Manual de cabecera para el formador con el contenido íntegro de las 41 diapositivas, las notas de orador y el código resuelto de los laboratorios.
- [`openspec/specs/course-materials/spec.md`](file:///home/miguel/git/training-analisis-cognitivo/openspec/specs/course-materials/spec.md): Especificación formal de requisitos funcionales y criterios de aceptación del ecosistema didáctico.

---

**Licencia:** Material formativo corporativo. Reservados todos los derechos. Distribuido para uso docente y capacitación técnica interna.