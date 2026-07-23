/**
 * Self-hosted webfonts for the "Editorial Calm" design system.
 *
 * Fonts are loaded via @fontsource (bundled at build time) rather than a
 * Google Fonts <link>, so the site ships with no third-party requests and no
 * flash of unstyled text. Only the weights/styles the design uses are imported.
 *
 *  - Playfair Display  — display headings (roman + italic)
 *  - Space Mono        — eyebrows, nav, buttons, labels
 *  - Hanken Grotesk    — body copy
 */

// Playfair Display — display serif
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/500-italic.css";

// Space Mono — monospaced labels
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";

// Hanken Grotesk — body
import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/500.css";
import "@fontsource/hanken-grotesk/600.css";
