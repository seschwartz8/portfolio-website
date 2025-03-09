/**
 * A file for defining the global MUI theme used in the project.
 */
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // Extend the MUI z-index interface
  interface ZIndex {
    appContainer: number;
    appFooter: number;
    dialog: number;
    hamburgerMenu: number;
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
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      "GT Walsheim Pro",
      "HK Grotesk",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
  zIndex: {
    appContainer: 10,
    appFooter: 1,
    dialog: 100,
    hamburgerMenu: 101,
  },
});
