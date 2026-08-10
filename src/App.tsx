import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import AboutPage from "./features/about";
import LandingPage from "./features/landing";
import ProjectsPage from "./features/projects";
import { appRoutes } from "./routes";
import { theme } from "./theme";

/**
 * Application root: global theme + router. All three views share the persistent
 * {@link AppLayout} shell (fixed nav + footer, scrollable main). Navigating
 * remounts the page component, which replays each view's entrance animations.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={`/${appRoutes.landing}`} element={<LandingPage />} />
            <Route path={`/${appRoutes.about}`} element={<AboutPage />} />
            <Route path={`/${appRoutes.projects}`} element={<ProjectsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
