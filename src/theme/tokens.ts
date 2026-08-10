/**
 * Design tokens for the "Editorial Calm" redesign.
 *
 * A single, framework-agnostic source of truth for the visual language:
 * colors, type families, easing, motion, elevation, radii and layout metrics.
 * The MUI theme (./index.ts) and individual components consume these so that a
 * value only ever lives in one place.
 */

/** Warm, editorial palette — cream canvas, ink text, terracotta accent. */
export const colors = {
  /** Page canvas. */
  cream: "#EDEAE1",
  /** Raised card / media surface. */
  surface: "#F4F1EA",
  /** Primary text. */
  ink: "#2B2824",
  /** Secondary / muted text. */
  muted: "#6B655C",
  /** Softer muted (over imagery). */
  mutedSoft: "#5C564D",
  /** Faint labels, inactive tabs. */
  faint: "#8A8478",
  fainter: "#A49C8F",
  /** Terracotta accent. */
  accent: "#B15C3F",
  /** Darker accent for hover. */
  accentDark: "#8F4D33",
  /** Warm gold — footer eyebrow, CTA arrow. */
  gold: "#E9AF75",
  /** Warm wash laid over photos so they blend into the cream palette. */
  tint: "#E9AF75",
  /** Dark footer background. */
  footer: "#2B2824",
  /** Cream text used on dark surfaces. */
  onDark: "#EDEAE1",
  /** Hairline divider. */
  hairline: "rgba(43,40,36,0.16)",
  /** Default button border. */
  buttonBorder: "rgba(43,40,36,0.25)",
} as const;

/** Font families. Fallbacks mirror each face's category for graceful loading. */
export const fonts = {
  display: "'Playfair Display', Georgia, 'Times New Roman', serif",
  mono: "'Space Mono', ui-monospace, 'SFMono-Regular', monospace",
  body: "'Hanken Grotesk', system-ui, -apple-system, sans-serif",
} as const;

/** Motion. One easing curve for entrances/underlines; `ease` for simple hovers. */
export const motion = {
  /** Signature entrance / underline easing. */
  easing: "cubic-bezier(.2,.7,.2,1)",
  duration: {
    hover: "0.3s",
    underline: "0.35s",
    rise: "0.7s",
    fade: "0.9s",
    slide: "0.5s",
  },
} as const;

/** Elevation — long, soft, low-opacity shadows to keep the calm feel. */
export const shadows = {
  card: "0 30px 50px -34px rgba(43,40,36,0.45)",
  media: "0 24px 50px -34px rgba(43,40,36,0.4)",
  portrait: "0 30px 60px -30px rgba(43,40,36,0.4)",
} as const;

/** Corner radii. */
export const radii = {
  card: "18px",
  media: "14px",
  mediaLarge: "16px",
  pill: "999px",
} as const;

/** Layout metrics shared across the app shell and pages. */
export const layout = {
  /** Horizontal content padding. */
  bodyPad: { xs: "28px 24px 40px", md: "10px 60px 44px" },
  projPad: { xs: "20px 24px 40px", md: "10px 60px 44px" },
  navPad: { xs: "14px 24px", md: "14px 60px" },
  footerPad: { xs: "24px", md: "24px 60px" },
} as const;
