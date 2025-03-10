/**
 * A file for defining the global MUI theme used in the project.
 */
import "@fontsource/roboto/500.css";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // Extend the MUI z-index interface
  interface ZIndex {
    appContainer: number;
    appFooter: number;
    dialog: number;
    hamburgerMenu: number;
    landingImg: number;
    landingImgOverlay: number;
    landingImgText: number;
  }
}

declare module "@mui/material/styles/createPalette" {
  // Extend the MUI palette options and palette interfaces
  export interface PaletteOptions {
    tint: string;
  }
  export interface Palette {
    tint: string;
  }
}

// https://github.com/hack4impact/chapter-website-template/blob/main/public/style.css
export const theme = createTheme({
  palette: {
    primary: {
      light: "#F2F7FA",
      main: "#328ed8",
      dark: "#0F1C27",
    },
    secondary: {
      light: "#9CD8CA",
      main: "#60AB9A",
      dark: "#095140",
    },
    background: {
      default: "#F1EEEA",
    },
    tint: "#E9AF75",
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      "Roboto",
      // "sans-serif",
    ].join(","),
  },
  zIndex: {
    appBar: 102,
    landingImgText: 102,
    landingImg: 100,
    landingImgOverlay: 101,
    appContainer: 10,
    appFooter: 1,
    dialog: 100,
    hamburgerMenu: 101,
  },
});
