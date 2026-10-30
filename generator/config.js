// generator/config.js
// Configuration, themes, and design tokens for the presentation

module.exports = {
  layout: 'LAYOUT_16x9', // 10" x 5.625"
  slideWidth: 10.0,
  slideHeight: 5.625,

  fonts: {
    title: 'Calibri',
    body: 'Calibri',
    code: 'Courier New',
  },

  colors: {
    // Primary Brand Colors (Corporate Dark Navy & Steel Blue)
    navyDark: '0F1B2E',      // Dark background for covers & separators
    navyPrimary: '162B4D',   // Deep corporate navy
    steelBlue: '2B4C7E',     // Accent header & key framing
    steelLight: '4A6FA5',    // Secondary blue
    iceBlue: 'EBF3FA',       // Light tinted background for cards
    skyAccent: '0284C7',      // Bright call to action / focal point

    // Surface & Card Colors
    bgLight: 'F8FAFC',       // Clean background for content slides
    cardBg: 'FFFFFF',        // White surface for cards
    cardBorder: 'CBD5E1',    // Subtle clean border
    cardBorderActive: '38BDF8', // Active border
    cardBgAlt: 'F1F5F9',     // Slightly shaded card

    // Text Colors (High Contrast)
    textDark: '0F172A',      // Near black high contrast text
    textBody: '1E293B',      // Body text
    textMuted: '64748B',     // Subtitles, captions, metadata
    textLight: 'F8FAFC',     // Light text on dark navy
    textLightMuted: '94A3B8',// Secondary text on dark navy

    // Status & Accent Colors
    emerald: '059669',       // Success / Green
    emeraldBg: 'ECFDF5',     // Soft green tint
    amber: 'D97706',         // Warning / Prescriptive
    amberBg: 'FFFBEB',       // Soft amber tint
    rose: 'E11D48',          // Alert / Churn / Error
    roseBg: 'FFF1F2',        // Soft rose tint
    purple: '7C3AED',        // Cognitive / NLP accent
    purpleBg: 'F5F3FF',      // Soft purple tint
  },

  dimensions: {
    margin: 0.5,
    headerY: 0.35,
    contentY: 1.25,
    footerY: 5.25,
    contentHeight: 3.85,
  }
};
