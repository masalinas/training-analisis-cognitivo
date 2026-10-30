// generator/modules/module5_visualization.js
// Module 5: Visualización de Datos Avanzada y Dashboards Interactivos (Slides 30 - 35)

module.exports = async function buildModule5(pres, H) {
  // -------------------------------------------------------------
  // SLIDE 30: Separador Módulo 5
  // -------------------------------------------------------------
  H.divider(pres, {
    mod: 5,
    title: 'Visualización de Datos Avanzada',
    subtitle: 'Comunicar con Impacto: Principios de Percepción, Arquitectura de Dashboards y Storytelling',
    hours: '2.0 HORAS LECTIVAS',
    topics: [
      { icon: 'FaEye', text: 'Fundamentos cognitivos: atributos preatentivos y leyes de Gestalt' },
      { icon: 'FaChartPie', text: 'El ratio datos-tinta de Tufte y selección rigurosa de gráficos' },
      { icon: 'FaLaptopCode', text: 'Ecosistema: BI corporativo (Power BI) vs Data Apps (Streamlit)' },
      { icon: 'FaSlidersH', text: 'Anatomía y diseño de dashboards ejecutivos para toma de decisiones' },
      { icon: 'FaFlask', text: 'Laboratorio 5: Dashboard interactivo con Streamlit y Plotly' },
    ],
    notes: {
      obj: 'Dominar el diseño de cuadros de mando interactivos que traduzcan la incertidumbre probabilística en decisiones de negocio seguras.',
      guion: [
        'El Módulo 5 aborda la última milla del dato inteligente: cómo presentar modelos complejos sin abrumar a la dirección.',
        'Un modelo con un 98% de AUC es inútil si su salida es una tabla ininteligible o un gráfico confuso.',
        'Combinamos neurociencia visual aplicada con el desarrollo de una Data App real en Streamlit que consuma los modelos previos.',
      ],
      preguntas: [
        '¿Cuánto tiempo tarda un directivo en vuestra empresa en interpretar el estado del negocio al abrir un panel?',
      ],
    },
  });

  // -------------------------------------------------------------
  // SLIDE 31: Fundamentos de Percepción Visual y Gramática de Gráficos
  // -------------------------------------------------------------
  const s31 = H.slide(pres, {
    mod: 5,
    badge: 'Percepción Visual',
    title: 'Percepción Visual y Gramática de Gráficos',
    notes: {
      obj: 'Comprender cómo procesa el cerebro humano las señales visuales antes del razonamiento consciente y aplicar las leyes de Gestalt.',
      guion: [
        'Atributos preatentivos: posición y longitud son los más precisos para el ojo humano (menos de 200 ms). El color solo debe usarse para resaltar métricas clave.',
        'Leyes de Gestalt: proximidad, similitud y cerramiento estructuran intuitivamente la jerarquía visual.',
        'Principio de Edward Tufte: Maximizar el Data-Ink Ratio eliminando basura gráfica (chartjunk, 3D engañoso, cuadrículas densas).',
      ],
      preguntas: [
        '¿Por qué los gráficos circulares (pie charts) son fuertemente desaconsejados cuando hay más de 3 categorías?',
      ],
    },
  });

  H.cardsRow(
    s31,
    [
      {
        title: 'Atributos Preatentivos',
        icon: 'FaBrain',
        tone: 'light',
        bullets: [
          { lead: 'Jerarquía visual:', text: 'Posición > Longitud > Área > Color > Ángulo.' },
          { lead: 'Uso del color:', text: 'Exclusivamente para dirigir atención o alertar.' },
          { lead: 'Sobriedad:', text: 'Máximo 2 atributos visuales combinados por elemento.' },
        ],
      },
      {
        title: 'Psicología de la Gestalt',
        icon: 'FaShapes',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Proximidad:', text: 'Agrupar métricas afines y separar las no relacionadas.' },
          { lead: 'Cerramiento:', text: 'Tarjetas con fondos suaves para delimitar contextos.' },
          { lead: 'Continuidad:', text: 'Alinear filtros, cabeceras y ejes para guiar la vista.' },
        ],
      },
      {
        title: 'Data-Ink Ratio (Tufte)',
        icon: 'FaBroom',
        tone: 'light',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Cero Chartjunk:', text: 'Eliminar 3D artificial, degradados y sombras densas.' },
          { lead: 'Cuadrículas:', text: 'Atenuadas en gris muy claro o suprimidas.' },
          { lead: 'Etiquetado:', text: 'Directo sobre los datos evitando leyendas lejanas.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );

  // -------------------------------------------------------------
  // SLIDE 32: Ecosistema Tecnológico: BI Corporativo vs Data Apps
  // -------------------------------------------------------------
  const s32 = H.slide(pres, {
    mod: 5,
    badge: 'Herramientas y Ecosistema',
    title: 'Ecosistema: Plataformas BI vs Data Apps en Código',
    notes: {
      obj: 'Evaluar los trade-offs arquitectónicos entre suites de Business Intelligence y frameworks de Data Apps en Python.',
      guion: [
        'Plataformas de BI (Power BI, Tableau): Excelentes para consumo masivo con gobernanza empresarial (SSO, RLS), pero rígidas ante modelos ML complejos.',
        'Data Apps en código (Streamlit, Dash): Flexibilidad total en Python puro; ejecutan inferencia en tiempo real, SHAP interactivo y simulaciones what-if.',
      ],
      preguntas: [
        '¿En qué situaciones preferís un desarrollo ágil en Streamlit antes que encargar un nuevo informe en Power BI?',
      ],
    },
  });

  H.table(
    s32,
    [
      ['Criterio de Evaluación', 'Plataformas de BI (Power BI / Tableau)', 'Data Apps en Código (Streamlit / Dash)'],
      ['Audiencia Principal', 'Comités de dirección, analistas y mandos comerciales.', 'Científicos de datos, producto y usuarios técnicos.'],
      ['Integración de ML / IA', 'Limitada a scripts integrados o inferencia batch previa.', 'Nativa: inferencia en tiempo real con scikit-learn y SHAP.'],
      ['Gobernanza y RLS', 'Nativa empresarial (Azure AD / SSO y seguridad por fila).', 'Debe resolverse en código o en la capa del API gateway.'],
      ['Curva de Desarrollo', 'Rápida en reportes estándar; compleja en interacciones.', 'Inmediata en Python puro (cero HTML, CSS o JS).'],
      ['Simulación What-If', 'Limitada a parámetros DAX o selectores estáticos.', 'Dinámica total con sliders reactivos en milisegundos.'],
    ],
    {
      y: 1.85,
      w: H.CW,
      colW: [2.5, 4.8, 4.8],
      size: 11.5,
      headSize: 12.5,
      maxH: 4.8,
    }
  );

  // -------------------------------------------------------------
  // SLIDE 33: Anatomía y Arquitectura de un Dashboard Ejecutivo
  // -------------------------------------------------------------
  const s33 = H.slide(pres, {
    mod: 5,
    badge: 'Diseño de Interfaces',
    title: 'Anatomía y Arquitectura de un Dashboard Ejecutivo',
    notes: {
      obj: 'Conocer la distribución espacial canónica basada en el patrón de lectura en F y las reglas de los 5 segundos y los 3 clics.',
      guion: [
        'Zona 1 (Superior): Filtros globales e indicadores de frescura de datos.',
        'Zona 2 (Scorecards): Los 4 KPIs sagrados del negocio con comparativa temporal y color semántico.',
        'Zona 3 (Cuerpo Central): Evolución temporal con intervalos de confianza de machine learning.',
        'Zona 4 (Detalle Accionable): Tabla priorizada por score de riesgo con llamadas a la acción directas.',
      ],
      preguntas: [
        '¿Se cumple la regla de los 5 segundos en los paneles analíticos de vuestro departamento?',
      ],
    },
  });

  // Top control bar
  H.rect(s33, { x: H.CX, y: 1.70, w: H.CW, h: 0.62, fill: H.COL.NAVY, radius: 0.08 });
  s33.addText('ZONA 1 · BARRA DE CONTROL:', { x: H.CX + 0.2, y: 1.70, w: 2.6, h: 0.62, fontFace: H.FONT.head, fontSize: 11, bold: true, color: H.COL.CORAL, margin: 0, valign: 'middle' });
  s33.addText('Rango: Últimos 30 días  •  Segmento: B2B Enterprise  •  Región: Nacional  •  Pipeline actualizado hace 12 min', { x: H.CX + 2.8, y: 1.70, w: H.CW - 3.0, h: 0.62, fontFace: H.FONT.body, fontSize: 11, color: H.COL.WHITE, margin: 0, valign: 'middle' });

  // 4 Scorecard Stats
  const kpiW = (H.CW - 0.25 * 3) / 4;
  H.stat(s33, { x: H.CX, y: 2.45, w: kpiW, h: 1.4, value: '2.14%', label: 'TASA CHURN (▲ +0.3%)', valueSize: 32 });
  H.stat(s33, { x: H.CX + (kpiW + 0.25), y: 2.45, w: kpiW, h: 1.4, value: '+0.72', label: 'SENTIMIENTO VoC (▲ +0.08)', valueSize: 32 });
  H.stat(s33, { x: H.CX + (kpiW + 0.25) * 2, y: 2.45, w: kpiW, h: 1.4, value: '1.420', label: 'CUENTAS EN RIESGO (>0.70)', valueSize: 32 });
  H.stat(s33, { x: H.CX + (kpiW + 0.25) * 3, y: 2.45, w: kpiW, h: 1.4, value: '840 k€', label: 'VALOR EN RIESGO (ARR)', valueSize: 32 });

  // Bottom 2 drilldown panels
  H.cardsRow(
    s33,
    [
      {
        title: 'Zona 3 · Tendencia y Proyección con ML',
        icon: 'FaChartLine',
        bullets: [
          { lead: 'Histórico consolidado:', text: 'Línea continua con datos reales de facturación.' },
          { lead: 'Proyección XGBoost:', text: 'Línea discontinua con bandas de confianza al 95% a 60 días.' },
          { lead: 'Puntos de inflexión:', text: 'Marcadores automáticos ante cambios de tarifa o campañas.' },
        ],
      },
      {
        title: 'Zona 4 · Detalle Accionable Priorizado',
        icon: 'FaListAlt',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Top Cuentas:', text: 'Listado ordenado por probabilidad de baja y valor LTV.' },
          { lead: 'Micro-XAI:', text: 'Desglose de factores causales SHAP para cada cliente individual.' },
          { lead: 'Acción:', text: 'Botón directo de asignación de oferta a gestores comerciales.' },
        ],
      },
    ],
    { x: H.CX, y: 4.02, w: H.CW, h: 2.7, gap: 0.35, size: 12, titleSize: 15 }
  );

  // -------------------------------------------------------------
  // SLIDE 34: Integración de Analítica Predictiva y Sentimiento
  // -------------------------------------------------------------
  const s34 = H.slide(pres, {
    mod: 5,
    badge: 'Integración Avanzada',
    title: 'Integración de Modelos Predictivos y NLP en Paneles',
    notes: {
      obj: 'Traducir probabilidades e inferencias de NLP a interfaces amigables con micro-explicabilidad y bucles de feedback.',
      guion: [
        'Regla 1: Mapear números crudos a categorías operativas inteligibles (Riesgo Crítico / Alto / Medio).',
        'Regla 2: Micro-explicabilidad embebida: mostrar los 3 factores que más empujan la predicción mediante gráficos de cascada SHAP.',
        'Regla 3: Bucle de retroalimentación (Human-in-the-loop): permitir que el operador confirme o descarte la alerta para reentrenamiento.',
      ],
      preguntas: [
        '¿Cómo reaccionan vuestros decisores cuando ven probabilidades puras en lugar de recomendaciones categorizadas?',
      ],
    },
  });

  H.cardsRow(
    s34,
    [
      {
        title: 'Semántica Operativa',
        icon: 'FaTrafficLight',
        tone: 'light',
        bullets: [
          { lead: 'Categorización:', text: 'Mapeo de probabilidades en cuartiles de riesgo comercial.' },
          { lead: 'Colores sobrios:', text: 'Formatos condicionales claros sin fatiga visual.' },
          { lead: 'Impacto económico:', text: 'Estimación directa de pérdidas o ganancias asociadas.' },
        ],
      },
      {
        title: 'Micro-XAI Embebida',
        icon: 'FaSearch',
        tone: 'light',
        accent: H.COL.PURPLE,
        bullets: [
          { lead: 'Waterfall plot:', text: 'Gráfico de cascada al hacer clic sobre cualquier cliente.' },
          { lead: 'Top 3 factores:', text: 'Variables que más empujan el score de predicción.' },
          { lead: 'Confianza:', text: 'Apertura de la caja negra ante el usuario de operaciones.' },
        ],
      },
      {
        title: 'Gobernanza y Calidad',
        icon: 'FaShieldAlt',
        tone: 'light',
        accent: H.COL.GREEN,
        bullets: [
          { lead: 'Frescura:', text: 'Indicador explícito de la última ejecución batch del modelo.' },
          { lead: 'Semáforo de Drift:', text: 'Aviso inmediato si los datos entrantes divergen de train.' },
          { lead: 'Feedback:', text: 'Botón de reporte de falsos positivos por el gestor de cuentas.' },
        ],
      },
    ],
    { y: 1.75, h: 3.5, size: 12, titleSize: 15 }
  );

  H.callout(s34, {
    x: H.CX,
    y: 5.4,
    w: H.CW,
    h: 1.1,
    kind: 'info',
    lead: 'BUCLE DE RETROALIMENTACIÓN HUMANA (HUMAN-IN-THE-LOOP):',
    text: 'Un dashboard directivo no debe ser unidireccional. Incluir botones interactivos para validar o refutar alertas ("¿Considera acertada la predicción? Sí/No") permite enviar feedback directo a la capa Silver del Lakehouse para auditar sesgos y mejorar futuros reentrenamientos.',
    size: 12.5,
  });

  // -------------------------------------------------------------
  // SLIDE 35: Laboratorio 5: Construcción de Dashboard Interactivo
  // -------------------------------------------------------------
  const s35 = H.slide(pres, {
    mod: 5,
    badge: 'Laboratorio Práctico 5',
    title: 'Lab 5: Construcción de un Dashboard con Streamlit',
    lab: true,
    notes: {
      obj: 'Desarrollar una aplicación web interactiva en Python que consolide en un único panel las predicciones de Churn y el análisis de sentimiento.',
      guion: [
        'Trabajamos sobre `app_dashboard_streamlit.py` combinando los resultados de los Labs 1, 3 y 4.',
        'Implementamos la barra lateral de filtros reactivos, los scorecards con deltas y los gráficos dinámicos con Plotly Express.',
        'Optimizamos la reactividad con el decorador `@st.cache_data` para lograr tiempos de respuesta inferiores a 200 milisegundos.',
      ],
      preguntas: [
        '¿Cómo cambia la adopción de un modelo cuando el usuario puede interactuar con sliders y ver el impacto en tiempo real?',
      ],
      lab: [
        '1. Configurar página responsive y paleta de colores corporativos.',
        '2. Construir filtros reactivos en st.sidebar.',
        '3. Renderizar fila de métricas estratégicas con st.metric.',
        '4. Diseñar scatter plot con Plotly (burbujas ponderadas por LTV y Churn).',
        '5. Desplegar gráfico de sentimiento VoC y tabla de auditoría con descarga en CSV.',
      ],
    },
  });

  H.cardsRow(
    s35,
    [
      {
        title: 'Ficha Técnica del Laboratorio',
        icon: 'FaFlask',
        accent: H.COL.CORAL,
        bullets: [
          { lead: 'Entradas:', text: 'Datasets y predicciones consolidadas de los Labs 1, 3 y 4.' },
          { lead: 'Stack:', text: 'Python 3.10+, Streamlit, Plotly Express, pandas.' },
          { lead: 'Arquitectura:', text: 'Componentes reactivos con caché en memoria (@st.cache_data).' },
          { lead: 'Duración:', text: '60 minutos (45 min desarrollo guiado + 15 min demo interactiva).' },
        ],
      },
      {
        title: 'Hitos de Construcción de la Data App',
        icon: 'FaTerminal',
        accent: H.COL.COBALT,
        bullets: [
          { lead: 'Hito 1 · Layout:', text: 'Configuración responsive y sidebar de filtros dinámicos.' },
          { lead: 'Hito 2 · KPIs:', text: 'Renderizado de scorecards ejecutivos con variación porcentual.' },
          { lead: 'Hito 3 · Scatter:', text: 'Gráfico interactivo de riesgo cliente ponderado por LTV.' },
          { lead: 'Hito 4 · VoC:', text: 'Distribución de sentimiento y quejas por categoría.' },
          { lead: 'Hito 5 · Exportación:', text: 'Tabla de clientes prioritarios con descarga en CSV.' },
        ],
      },
    ],
    { y: 1.75, h: 4.8, size: 12.5, titleSize: 16 }
  );
};
