import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./HamburgerMenu.css";
import { NavBar } from "./components";
import AboutPage from "./features/about/index";
import LandingPage from "./features/landing/index";
import ProjectsPage from "./features/projects/index";
import { appRoutes } from "./routes";
import { NavBarHeight } from "./utils/constants";
import { theme } from "./utils/theme";

function App() {
  return (
    <Suspense
      fallback={
        <Box width="100%" display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      }
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Box
            sx={(theme) => ({
              height: `calc(100vh - ${NavBarHeight}px)`,
              position: "relative",
              zIndex: theme.zIndex.appContainer,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            })}
          >
            <Routes>
              <Route path={`${appRoutes.landing}/`} element={<Outlet />}>
                <Route index Component={LandingPage} />
                <Route path={`${appRoutes.about}/*`} Component={AboutPage} />
                <Route
                  path={`${appRoutes.projects}/*`}
                  Component={ProjectsPage}
                />
              </Route>
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
