// generator/helpers.js
// Reusable components and layout helpers for slides

const pptxgen = require('pptxgenjs');
const config = require('./config');

const colors = config.colors;
const fonts = config.fonts;

/**
 * Creates the dark cover slide
 */
function createCoverSlide(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: colors.navyDark };

  // Decorative top badge
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 0.8,
    w: 3.8,
    h: 0.38,
    rectRadius: 0.1,
    fill: { color: colors.navyPrimary },
    line: { color: colors.skyAccent, width: 1.5 },
  });

  slide.addText('PROGRAMA FORMATIVO EJECUTIVO • 15 HORAS', {
    x: 0.8,
    y: 0.8,
    w: 3.8,
    h: 0.38,
    fontFace: fonts.title,
    fontSize: 9.5,
    bold: true,
    color: colors.skyAccent,
    align: 'center',
    valign: 'middle',
    margin: 0,
  });

  // Main Title
  slide.addText(data.title || 'Analítica Avanzada e Inteligencia Cognitiva', {
    x: 0.8,
    y: 1.35,
    w: 8.4,
    h: 1.4,
    fontFace: fonts.title,
    fontSize: 34,
    bold: true,
    color: colors.textLight,
    lineSpacingMultiple: 1.05,
    margin: 0,
  });

  // Subtitle
  slide.addText(data.subtitle || 'De los Datos a la Decisión Automatizada: Machine Learning, NLP y Dashboards', {
    x: 0.8,
    y: 2.85,
    w: 8.4,
    h: 0.7,
    fontFace: fonts.body,
    fontSize: 15,
    color: colors.textLightMuted,
    margin: 0,
  });

  // 3 Feature highlight boxes
  const boxW = 2.65;
  const boxGap = 0.22;
  const startX = 0.8;
  const boxY = 3.65;
  const highlights = data.highlights || [
    { label: 'Enfoque Integral', text: '6 Módulos Temáticos alineados con el temario oficial' },
    { label: 'Práctica Aplicada', text: '5 Laboratorios prácticos guiados con código en Python' },
    { label: 'Nivel Avanzado', text: 'Arquitecturas Lakehouse, MLOps, NLP y Servicios Cognitivos' }
  ];

  highlights.forEach((h, i) => {
    const xPos = startX + i * (boxW + boxGap);
    slide.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: boxY,
      w: boxW,
      h: 1.0,
      rectRadius: 0.08,
      fill: { color: colors.navyPrimary },
      line: { color: colors.steelBlue, width: 1 },
    });

    slide.addText(h.label, {
      x: xPos + 0.15,
      y: boxY + 0.12,
      w: boxW - 0.3,
      h: 0.25,
      fontFace: fonts.title,
      fontSize: 11,
      bold: true,
      color: colors.skyAccent,
      margin: 0,
    });

    slide.addText(h.text, {
      x: xPos + 0.15,
      y: boxY + 0.4,
      w: boxW - 0.3,
      h: 0.5,
      fontFace: fonts.body,
      fontSize: 9.5,
      color: colors.textLightMuted,
      margin: 0,
    });
  });

  // Footer metadata
  slide.addText('Documentación del Docente y Guía de Laboratorios • Formato Panorámico 16:9 • Español Técnico', {
    x: 0.8,
    y: 5.15,
    w: 8.4,
    h: 0.3,
    fontFace: fonts.body,
    fontSize: 9,
    color: colors.textLightMuted,
    margin: 0,
  });

  if (data.notes) {
    slide.addNotes(data.notes);
  }

  return slide;
}

/**
 * Creates a dark module separator slide
 */
function createModuleSeparator(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: colors.navyDark };

  // Module badge
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 0.9,
    w: 2.2,
    h: 0.35,
    rectRadius: 0.08,
    fill: { color: colors.navyPrimary },
    line: { color: colors.skyAccent, width: 1.2 },
  });

  slide.addText(`MÓDULO ${data.moduleNumber} • ${data.duration}`, {
    x: 0.8,
    y: 0.9,
    w: 2.2,
    h: 0.35,
    fontFace: fonts.title,
    fontSize: 10,
    bold: true,
    color: colors.skyAccent,
    align: 'center',
    valign: 'middle',
    margin: 0,
  });

  // Module Title
  slide.addText(data.title, {
    x: 0.8,
    y: 1.45,
    w: 8.4,
    h: 1.2,
    fontFace: fonts.title,
    fontSize: 30,
    bold: true,
    color: colors.textLight,
    lineSpacingMultiple: 1.05,
    margin: 0,
  });

  // Subtitle / Scope
  slide.addText(data.subtitle, {
    x: 0.8,
    y: 2.75,
    w: 8.4,
    h: 0.6,
    fontFace: fonts.body,
    fontSize: 14,
    color: colors.textLightMuted,
    margin: 0,
  });

  // Topics Grid
  const cardW = 4.1;
  const cardH = 1.45;
  const cardY = 3.45;

  // Left card: Core topics
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: cardY,
    w: cardW,
    h: cardH,
    rectRadius: 0.08,
    fill: { color: colors.navyPrimary },
    line: { color: colors.steelBlue, width: 1 },
  });

  slide.addText('CONTENIDOS TÉCNICOS', {
    x: 1.0,
    y: cardY + 0.12,
    w: cardW - 0.4,
    h: 0.25,
    fontFace: fonts.title,
    fontSize: 10,
    bold: true,
    color: colors.skyAccent,
    margin: 0,
  });

  const topicsList = (data.topics || []).map((t, idx, arr) => ({
    text: t,
    options: {
      bullet: true,
      breakLine: idx < arr.length - 1,
      fontSize: 9.5,
      color: colors.textLight,
      fontFace: fonts.body,
      paraSpaceAfter: 4,
    }
  }));

  if (topicsList.length > 0) {
    slide.addText(topicsList, {
      x: 1.0,
      y: cardY + 0.42,
      w: cardW - 0.4,
      h: 0.9,
      margin: 0,
    });
  }

  // Right card: Practical Lab & Expected Outcomes
  slide.addShape(pres.ShapeType.roundRect, {
    x: 5.1,
    y: cardY,
    w: cardW,
    h: cardH,
    rectRadius: 0.08,
    fill: { color: colors.navyPrimary },
    line: { color: colors.steelBlue, width: 1 },
  });

  slide.addText('LABORATORIO PRÁCTICO & RESULTADO', {
    x: 5.3,
    y: cardY + 0.12,
    w: cardW - 0.4,
    h: 0.25,
    fontFace: fonts.title,
    fontSize: 10,
    bold: true,
    color: colors.skyAccent,
    margin: 0,
  });

  const labList = [
    { text: `Práctica: ${data.labName || 'Laboratorio guiado'}`, options: { bullet: true, breakLine: true, fontSize: 9.5, color: colors.textLight, fontFace: fonts.body, bold: true, paraSpaceAfter: 4 } },
    { text: `Objetivo: ${data.labGoal || 'Implementación práctica de conceptos'}`, options: { bullet: true, breakLine: true, fontSize: 9.5, color: colors.textLightMuted, fontFace: fonts.body, paraSpaceAfter: 4 } },
    { text: `Entregable: ${data.labDeliverable || 'Notebook y pipeline funcional'}`, options: { bullet: true, breakLine: false, fontSize: 9.5, color: colors.textLightMuted, fontFace: fonts.body } },
  ];

  slide.addText(labList, {
    x: 5.3,
    y: cardY + 0.42,
    w: cardW - 0.4,
    h: 0.9,
    margin: 0,
  });

  if (data.notes) {
    slide.addNotes(data.notes);
  }

  return slide;
}

/**
 * Standard Light Content Slide Template
 */
function createContentSlide(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: colors.bgLight };

  // Category Badge
  if (data.category) {
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.6,
      y: 0.35,
      w: 2.8,
      h: 0.26,
      rectRadius: 0.06,
      fill: { color: colors.iceBlue },
      line: { color: colors.steelBlue, width: 0.8 },
    });

    slide.addText(data.category.toUpperCase(), {
      x: 0.6,
      y: 0.35,
      w: 2.8,
      h: 0.26,
      fontFace: fonts.title,
      fontSize: 8.5,
      bold: true,
      color: colors.steelBlue,
      align: 'center',
      valign: 'middle',
      margin: 0,
    });
  }

  // Slide Title
  slide.addText(data.title, {
    x: 0.6,
    y: 0.68,
    w: 8.8,
    h: 0.45,
    fontFace: fonts.title,
    fontSize: 21,
    bold: true,
    color: colors.textDark,
    margin: 0,
  });

  // Subtitle / framing text
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: 0.6,
      y: 1.13,
      w: 8.8,
      h: 0.28,
      fontFace: fonts.body,
      fontSize: 11,
      color: colors.textMuted,
      margin: 0,
    });
  }

  // Footer line & info
  slide.addText(`Analítica Avanzada e Inteligencia Cognitiva (15H) • ${data.moduleTag || 'Curso Oficial'}`, {
    x: 0.6,
    y: 5.25,
    w: 7.0,
    h: 0.25,
    fontFace: fonts.body,
    fontSize: 8.5,
    color: colors.textMuted,
    margin: 0,
  });

  if (data.slideNum && data.totalSlides) {
    slide.addText(`${data.slideNum} / ${data.totalSlides}`, {
      x: 8.4,
      y: 5.25,
      w: 1.0,
      h: 0.25,
      fontFace: fonts.body,
      fontSize: 8.5,
      bold: true,
      color: colors.textMuted,
      align: 'right',
      margin: 0,
    });
  }

  if (data.notes) {
    slide.addNotes(data.notes);
  }

  return slide;
}

/**
 * Add a styled card to a slide
 */
function addCard(slide, pres, options) {
  const bg = options.bg || colors.cardBg;
  const border = options.border || colors.cardBorder;
  const borderWidth = options.borderWidth || 1;

  slide.addShape(pres.ShapeType.roundRect, {
    x: options.x,
    y: options.y,
    w: options.w,
    h: options.h,
    rectRadius: options.radius !== undefined ? options.radius : 0.08,
    fill: { color: bg },
    line: { color: border, width: borderWidth },
  });

  // Card Header / Badge if provided (Auto-sized based on text length)
  let contentOffsetY = 0.12;
  if (options.badge) {
    const badgeText = options.badge;
    const autoWidth = Math.max(1.3, badgeText.length * 0.085 + 0.25);
    const badgeWidth = options.badgeW || Math.min(options.w - 0.3, autoWidth);

    slide.addShape(pres.ShapeType.roundRect, {
      x: options.x + 0.15,
      y: options.y + 0.10,
      w: badgeWidth,
      h: 0.22,
      rectRadius: 0.05,
      fill: { color: options.badgeBg || colors.iceBlue },
      line: { color: options.badgeBorder || colors.steelBlue, width: 0.7 },
    });

    slide.addText(badgeText, {
      x: options.x + 0.15,
      y: options.y + 0.10,
      w: badgeWidth,
      h: 0.22,
      fontFace: fonts.title,
      fontSize: 8,
      bold: true,
      color: options.badgeColor || colors.steelBlue,
      align: 'center',
      valign: 'middle',
      margin: 0,
    });
    contentOffsetY = 0.38;
  }

  // Card Title
  if (options.title) {
    const titleH = options.titleH || (options.titleSize > 12 ? 0.30 : 0.26);
    slide.addText(options.title, {
      x: options.x + 0.15,
      y: options.y + contentOffsetY,
      w: options.w - 0.3,
      h: titleH,
      fontFace: fonts.title,
      fontSize: options.titleSize || 12,
      bold: true,
      color: options.titleColor || colors.textDark,
      valign: 'top',
      margin: 0,
    });
    contentOffsetY += titleH + 0.04;
  }

  // Combined Body (Description + Items into a single top-aligned text frame to prevent overlaps)
  const bodyRuns = [];

  if (options.description) {
    bodyRuns.push({
      text: options.description,
      options: {
        breakLine: true,
        fontSize: options.descriptionSize || 8.5,
        color: options.descriptionColor || colors.textBody,
        fontFace: fonts.body,
        paraSpaceAfter: (options.items && options.items.length > 0) ? 5 : 0,
      }
    });
  }

  if (options.items && Array.isArray(options.items)) {
    options.items.forEach((item, idx, arr) => {
      const isLast = idx === arr.length - 1;
      if (typeof item === 'string') {
        bodyRuns.push({
          text: item,
          options: {
            bullet: true,
            breakLine: !isLast,
            fontSize: options.itemSize || 8.5,
            color: options.itemColor || colors.textBody,
            fontFace: fonts.body,
            paraSpaceAfter: 3,
          }
        });
      } else {
        bodyRuns.push({
          text: item.text,
          options: {
            bullet: item.bullet !== false,
            breakLine: !isLast,
            fontSize: options.itemSize || 8.5,
            color: item.color || options.itemColor || colors.textBody,
            fontFace: fonts.body,
            bold: !!item.bold,
            paraSpaceAfter: 3,
          }
        });
      }
    });
  }

  if (bodyRuns.length > 0) {
    slide.addText(bodyRuns, {
      x: options.x + 0.15,
      y: options.y + contentOffsetY,
      w: options.w - 0.3,
      h: options.h - contentOffsetY - 0.08,
      valign: 'top',
      margin: 0,
    });
  }
}

/**
 * Add a high-contrast comparison table
 */
function addStyledTable(slide, pres, options) {
  const tableData = [];

  // Header row
  const headerCells = options.headers.map(h => ({
    text: h,
    options: {
      fill: { color: colors.navyPrimary },
      color: colors.textLight,
      fontFace: fonts.title,
      fontSize: 9.5,
      bold: true,
      align: 'center',
      valign: 'middle',
    }
  }));
  tableData.push(headerCells);

  // Data rows
  options.rows.forEach((row, rIdx) => {
    const rowBg = rIdx % 2 === 0 ? colors.cardBg : colors.cardBgAlt;
    const rowCells = row.map((cell, cIdx) => {
      const isFirstCol = cIdx === 0;
      return {
        text: cell,
        options: {
          fill: { color: rowBg },
          color: isFirstCol ? colors.steelBlue : colors.textBody,
          fontFace: isFirstCol ? fonts.title : fonts.body,
          fontSize: 9,
          bold: isFirstCol,
          align: isFirstCol ? 'left' : (options.alignCols ? options.alignCols[cIdx] : 'left'),
          valign: 'middle',
        }
      };
    });
    tableData.push(rowCells);
  });

  slide.addTable(tableData, {
    x: options.x,
    y: options.y,
    w: options.w,
    h: options.h,
    colW: options.colW,
    border: { type: 'solid', pt: 0.75, color: colors.cardBorder },
    margin: [4, 6, 4, 6], // top, right, bottom, left in points
  });
}

/**
 * Add a callout box (e.g. for key principles, formulas, warnings)
 */
function addCalloutBox(slide, pres, options) {
  let bgColor = colors.iceBlue;
  let borderColor = colors.steelBlue;
  let titleColor = colors.navyPrimary;

  if (options.type === 'alert' || options.type === 'warning') {
    bgColor = colors.roseBg;
    borderColor = colors.rose;
    titleColor = colors.rose;
  } else if (options.type === 'success') {
    bgColor = colors.emeraldBg;
    borderColor = colors.emerald;
    titleColor = colors.emerald;
  } else if (options.type === 'amber') {
    bgColor = colors.amberBg;
    borderColor = colors.amber;
    titleColor = colors.amber;
  }

  slide.addShape(pres.ShapeType.roundRect, {
    x: options.x,
    y: options.y,
    w: options.w,
    h: options.h,
    rectRadius: 0.08,
    fill: { color: bgColor },
    line: { color: borderColor, width: 1.2 },
  });

  const titleW = options.w - 0.4;
  slide.addText(options.title, {
    x: options.x + 0.2,
    y: options.y + 0.1,
    w: titleW,
    h: 0.25,
    fontFace: fonts.title,
    fontSize: 10,
    bold: true,
    color: titleColor,
    margin: 0,
  });

  slide.addText(options.text, {
    x: options.x + 0.2,
    y: options.y + 0.35,
    w: titleW,
    h: options.h - 0.42,
    fontFace: fonts.body,
    fontSize: 9,
    color: colors.textBody,
    margin: 0,
  });
}

/**
 * Add a metric card with big number
 */
function addMetricCard(slide, pres, options) {
  slide.addShape(pres.ShapeType.roundRect, {
    x: options.x,
    y: options.y,
    w: options.w,
    h: options.h,
    rectRadius: 0.08,
    fill: { color: options.bg || colors.cardBg },
    line: { color: options.border || colors.cardBorder, width: 1 },
  });

  slide.addText(options.value, {
    x: options.x + 0.1,
    y: options.y + 0.12,
    w: options.w - 0.2,
    h: 0.45,
    fontFace: fonts.title,
    fontSize: options.valueSize || 22,
    bold: true,
    color: options.valueColor || colors.skyAccent,
    align: 'center',
    margin: 0,
  });

  slide.addText(options.label, {
    x: options.x + 0.1,
    y: options.y + 0.58,
    w: options.w - 0.2,
    h: 0.25,
    fontFace: fonts.title,
    fontSize: 9.5,
    bold: true,
    color: colors.textDark,
    align: 'center',
    margin: 0,
  });

  if (options.subtext) {
    slide.addText(options.subtext, {
      x: options.x + 0.1,
      y: options.y + 0.83,
      w: options.w - 0.2,
      h: options.h - 0.88,
      fontFace: fonts.body,
      fontSize: 8,
      color: colors.textMuted,
      align: 'center',
      margin: 0,
    });
  }
}

module.exports = {
  createCoverSlide,
  createModuleSeparator,
  createContentSlide,
  addCard,
  addStyledTable,
  addCalloutBox,
  addMetricCard,
};
