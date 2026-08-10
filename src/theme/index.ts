/**
 * The global MUI theme for the "Editorial Calm" redesign.
 *
 * Palette and typography are wired from the design tokens so that MUI's own
 * components (text colors, buttons, links) inherit the system automatically.
 * Components that need exact design values import from `./tokens` directly —
 * this file is the bridge between those tokens and MUI.
 */
import { createTheme } from "@mui/material/styles";
import "./fonts";
import { colors, fonts } from "./tokens";

declare module "@mui/material/styles" {
  interface ZIndex {
    nav: number;
    tabBar: number;
    footer: number;
    scrim: number;
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: colors.accent, dark: colors.accentDark },
    secondary: { main: colors.gold },
    text: { primary: colors.ink, secondary: colors.muted },
    background: { default: colors.cream, paper: colors.surface },
    divider: colors.hairline,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: fonts.body,
    // Display headings use Playfair; components override size via `sx` (clamp).
    h1: { fontFamily: fonts.display, fontWeight: 500, letterSpacing: "-0.01em" },
    h2: { fontFamily: fonts.display, fontWeight: 500, letterSpacing: "-0.01em" },
    h3: { fontFamily: fonts.display, fontWeight: 500 },
    h4: { fontFamily: fonts.display, fontWeight: 500 },
    h5: { fontFamily: fonts.display, fontWeight: 500 },
    h6: { fontFamily: fonts.display, fontWeight: 500 },
    button: { fontFamily: fonts.mono, textTransform: "none" },
  },
  zIndex: {
    scrim: 1,
    tabBar: 4,
    nav: 6,
    footer: 6,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: colors.cream },
      },
    },
  },
});
