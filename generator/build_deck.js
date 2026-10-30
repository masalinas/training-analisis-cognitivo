// generator/build_deck.js
// Pipeline principal de compilación y maquetación del slide deck oficial:
// "Analítica Avanzada e Inteligencia Cognitiva" (15 Horas Lectivas).
// Implementa el estándar panorámico Widescreen 16:9 (13.333" x 7.5"),
// precarga dinámica de iconos vectoriales react-icons/fa con sharp,
// verificación predictiva de 0 desbordamientos (0 warnings) y saneamiento OOXML con JSZip.

const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const H = require('./layout_helpers');

const MODULE_FILES = [
  'module0_intro.js',
  'module1_advanced_analytics.js',
  'module2_cognitive_ai.js',
  'module3_predictive_ml.js',
  'module4_nlp_sentiment.js',
  'module5_visualization.js',
  'module6_cases_projects.js',
];

const OUT = process.env.OUT || path.resolve(__dirname, '..', 'Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx');

async function buildDeck() {
  console.log('🚀 Iniciando compilación de la presentación técnica Widescreen 16:9...');
  console.log('Curso: Analítica Avanzada e Inteligencia Cognitiva (15H)');

  // 1. Detección automática y precarga de todos los iconos referenciados en código fuente
  const filesToScan = ['layout_helpers.js', ...MODULE_FILES.map((m) => path.join('modules', m))];
  const detectedIcons = new Set([
    'FaCheckCircle',
    'FaLightbulb',
    'FaExclamationTriangle',
    'FaAngleRight',
  ]);

  for (const relPath of filesToScan) {
    const fullPath = path.join(__dirname, relPath);
    if (!fs.existsSync(fullPath)) continue;
    const content = fs.readFileSync(fullPath, 'utf8');
    for (const match of content.matchAll(/\bFa[A-Z][A-Za-z0-9]+\b/g)) {
      detectedIcons.add(match[0]);
    }
  }

  console.log(`🎨 Precargando y rasterizando ${detectedIcons.size} iconos vectoriales...`);
  await H.preloadIcons([...detectedIcons]);

  // 2. Inicialización de la presentación con lienzo 16:9 de 13.333" x 7.5"
  H.state.n = 0;
  H.state.slides = [];
  H.state.warnings = [];
  H.state.cur = null;

  const pres = new H.pptxgen();
  pres.layout = 'LAYOUT_WIDE'; // 13.333" x 7.5" (16:9)
  pres.title = 'Analítica Avanzada e Inteligencia Cognitiva (15 h)';
  pres.subject = 'Curso Oficial de Formación Técnica en Analítica e IA';
  pres.author = 'Instructor Senior en Analítica e Inteligencia Cognitiva';
  pres.company = 'Programa de Especialización Técnica';

  // 3. Ejecución secuencial de los 6 módulos didácticos (Módulo 0 al Módulo 6)
  for (const modFile of MODULE_FILES) {
    const modPath = path.join(__dirname, 'modules', modFile);
    if (!fs.existsSync(modPath)) {
      console.warn(`(aviso) Módulo no encontrado: ${modFile}`);
      continue;
    }
    const before = H.state.n;
    const builder = require(modPath);
    await builder(pres, H);
    console.log(`📦 ${modFile}: ${H.state.n - before} diapositivas compiladas (acumulado ${H.state.n})`);
  }

  // 4. Saneamiento OOXML con JSZip (eliminación de etiquetas <a:pPr> duplicadas)
  console.log('\n🧹 Saneando esquema OOXML y eliminando duplicidades <a:pPr>...');
  const rawBuffer = await pres.write({ outputType: 'nodebuffer' });
  const zip = await JSZip.loadAsync(rawBuffer);
  const PPR_REGEX = /<a:pPr\b[^>]*?(?:\/>|>[\s\S]*?<\/a:pPr>)/g;

  const slideXmlFiles = Object.keys(zip.files).filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n));
  for (const name of slideXmlFiles) {
    const xml = await zip.file(name).async('string');
    const sanitizedXml = xml.replace(/<a:p>([\s\S]*?)<\/a:p>/g, (m, inner) => {
      let first = true;
      const body = inner.replace(PPR_REGEX, (pp) =>
        first && inner.trimStart().startsWith('<a:pPr') ? ((first = false), pp) : ''
      );
      return `<a:p>${body}</a:p>`;
    });
    zip.file(name, sanitizedXml);
  }

  // 5. Escritura final del archivo PPTX
  const finalBuffer = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
  fs.writeFileSync(OUT, finalBuffer);

  console.log(`\n💾 Archivo PPTX generado exitosamente: ${OUT}`);
  console.log(`📊 Total de diapositivas: ${H.state.n}`);

  // 6. Auditoría de avisos de maquetación y desbordamientos tipográficos
  if (H.state.warnings.length > 0) {
    console.warn(`\n⚠️ Se han detectado ${H.state.warnings.length} advertencias de maquetación/desbordamiento:`);
    H.state.warnings.forEach((w) => console.warn(`   - ${w}`));
    throw new Error('La compilación falló el criterio de 0 advertencias de desbordamiento.');
  } else {
    console.log('✨ Verificación impecable: 0 advertencias de maquetación. Todas las cajas y textos encajan a la perfección.');
  }
}

if (require.main === module) {
  buildDeck().catch((err) => {
    console.error('❌ Error compilando el slide deck:', err);
    process.exit(1);
  });
}

module.exports = buildDeck;
