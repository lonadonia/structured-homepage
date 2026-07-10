/**
 * Structured™ design tokens — TypeScript mirror of
 * `structured_design_tokens.json` (Concept C — Light Core, Dark Shell).
 *
 * CSS consumes these via app/globals.css (@theme). This module is the
 * source for anything that needs token values in JS — chiefly the SVG
 * diagram components, which draw with exact brand hexes.
 *
 * Canonical brand hexes (from the official moodboard — do not drift):
 * #0B0F17 · #4F46E5 · #2563EB · #E5E7EB · #F8FAFC
 */

export const colors = {
  brand: {
    /** Deep navy-ink. Hero + footer ground, primary text on light. */
    ink: "#0B0F17",
    /** Intelligence accent: data, diagrams, lattice glow. Never on buttons. */
    indigo: "#4F46E5",
    /** Interactive accent: buttons, links, focus. Only clickable things are blue. */
    blue: "#2563EB",
    /** Hairlines and borders on light ground. */
    mist: "#E5E7EB",
    /** Off-white alternating light section ground. */
    paper: "#F8FAFC",
  },
  ink: {
    950: "#070A10",
    900: "#0B0F17",
    800: "#111726",
    700: "#1A2233",
    600: "#242F45",
  },
  gray: {
    50: "#F8FAFC",
    100: "#F1F4F8",
    200: "#E5E7EB",
    300: "#D3D9E1",
    400: "#9AA3B2",
    500: "#6B7484",
    600: "#4A5262",
    700: "#333A48",
  },
  indigo: {
    400: "#818CF8",
    500: "#6366F1",
    600: "#4F46E5",
    700: "#4338CA",
  },
  blue: {
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
  },
  data: {
    seriesPrimary: "#4F46E5",
    seriesSecondary: "#3B82F6",
    deltaPositive: "#059669",
    deltaPositiveOnDark: "#34D399",
    deltaNegative: "#DC2626",
    chartFill: "rgba(79, 70, 229, 0.08)",
  },
} as const;

export const typography = {
  families: {
    sans: "Inter",
    mono: "IBM Plex Mono",
  },
  /** Display + headings use 600 only. 300 reserved for display-scale numerals. */
  weights: { light: 300, regular: 400, medium: 500, semibold: 600 },
  scale: {
    displayXl: { desktop: 72, mobile: 44, lineHeight: 1.05, tracking: "0", weight: 600 },
    displayL: { desktop: 56, mobile: 38, lineHeight: 1.1, tracking: "0", weight: 600 },
    h2: { desktop: 40, mobile: 31, lineHeight: 1.15, tracking: "0", weight: 600 },
    h3: { desktop: 28, mobile: 24, lineHeight: 1.25, tracking: "0", weight: 600 },
    h4: { desktop: 21, mobile: 19, lineHeight: 1.35, tracking: "0", weight: 600 },
    bodyL: { desktop: 20, mobile: 18, lineHeight: 1.6, weight: 400 },
    body: { desktop: 17, mobile: 16, lineHeight: 1.65, weight: 400 },
    bodyS: { desktop: 15, mobile: 15, lineHeight: 1.6, weight: 400 },
    caption: { desktop: 13, mobile: 13, lineHeight: 1.5, weight: 400 },
    overline: { desktop: 13, mobile: 13, lineHeight: 1.4, tracking: "0", weight: 500 },
    dataXl: { desktop: 56, mobile: 40, lineHeight: 1.0, tracking: "0", weight: 300 },
    dataM: { desktop: 32, mobile: 32, lineHeight: 1.1, weight: 500 },
  },
  measure: { headingMax: "18ch", bodyMax: "68ch", introMax: "56ch" },
} as const;

/** 4px base. Any spacing value off this scale is a defect. */
export const spacing = [4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160] as const;

export const radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8, // buttons, inputs
  lg: 8, // cards and framed tools
  xl: 8, // retained alias for framed tools
  pill: 999, // diagram nodes
} as const;

export const shadows = {
  /** Sticky nav on scroll. */
  nav: "0 1px 2px rgba(11, 15, 23, 0.06)",
  /** The dashboard artifact frame only — nothing else floats. */
  artifact: "0 12px 32px -12px rgba(11, 15, 23, 0.14)",
  focusRing: "0 0 0 3px rgba(37, 99, 235, 0.35)",
} as const;

export const grid = {
  columnsDesktop: 12,
  gutter: 24,
  containerContent: 1200,
  containerArtifact: 1320,
  baseline: 8,
  /** Diagram geometry snaps to this cell. */
  dotGridCell: 24,
} as const;

export const breakpoints = {
  xs: 360,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
} as const;

export const motion = {
  duration: { fast: 120, base: 200, slow: 320, reveal: 600, counter: 900 },
  easing: {
    standard: "cubic-bezier(0.2, 0, 0, 1)",
    exit: "cubic-bezier(0.4, 0, 1, 1)",
  },
} as const;

export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  grid,
  breakpoints,
  motion,
} as const;

export default tokens;
