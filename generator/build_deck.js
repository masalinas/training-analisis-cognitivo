// generator/build_deck.js
// Main script to assemble the complete 41-slide training deck

const pptxgen = require('pptxgenjs');
const path = require('path');
const config = require('./config');

const buildModule0 = require('./modules/module0_intro');
const buildModule1 = require('./modules/module1_advanced_analytics');
const buildModule2 = require('./modules/module2_cognitive_ai');
const buildModule3 = require('./modules/module3_predictive_ml');
const buildModule4 = require('./modules/module4_nlp_sentiment');
const buildModule5 = require('./modules/module5_visualization');
const buildModule6 = require('./modules/module6_cases_projects');

async function generateDeck() {
  console.log('🚀 Iniciando compilación de la presentación técnica...');
  console.log('Curso: Analítica Avanzada e Inteligencia Cognitiva (15H)');

  const pres = new pptxgen();
  pres.layout = config.layout; // LAYOUT_16x9 (10" x 5.625")
  pres.author = 'Instructor Senior en Analítica e IA';
  pres.company = 'Programa de Especialización Técnica';
  pres.title = 'Analítica Avanzada e Inteligencia Cognitiva';
  pres.subject = 'Slide Deck formativo completo (15 Horas Lectivas)';

  const state = {
    slideCount: 0,
    totalSlides: 41,
  };

  // Compile modules sequentially
  console.log('📦 Construyendo Módulo 0: Encuadre, Objetivos y Cronograma...');
  buildModule0(pres, state);

  console.log('📦 Construyendo Módulo 1: Introducción a la Analítica Avanzada...');
  buildModule1(pres, state);

  console.log('📦 Construyendo Módulo 2: Fundamentos de la Inteligencia Cognitiva...');
  buildModule2(pres, state);

  console.log('📦 Construyendo Módulo 3: Modelos Predictivos y Machine Learning...');
  buildModule3(pres, state);

  console.log('📦 Construyendo Módulo 4: Análisis de Sentimientos y NLP...');
  buildModule4(pres, state);

  console.log('📦 Construyendo Módulo 5: Visualización de Datos Avanzada...');
  buildModule5(pres, state);

  console.log('📦 Construyendo Módulo 6: Casos Prácticos, MLOps y Proyecto...');
  buildModule6(pres, state);

  console.log(`✅ Total de diapositivas generadas: ${state.slideCount} de ${state.totalSlides}`);

  const outputFileName = 'Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx';
  const outputPath = path.resolve(__dirname, '..', outputFileName);

  console.log(`💾 Guardando archivo en: ${outputPath}...`);
  await pres.writeFile({ fileName: outputPath });
  console.log('🎉 ¡Presentación PPTX generada exitosamente!');
}

generateDeck().catch((err) => {
  console.error('❌ Error compilando el slide deck:', err);
  process.exit(1);
});
