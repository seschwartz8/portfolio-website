import { Box, CircularProgress } from '@mui/material';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './HamburgerMenu.css';
import './EnvelopeAnimation.css';
import { Footer, NavBar } from './components';
import AboutPage from './features/about/index';
import ContactPage from './features/contact/index';
import LandingPage from './features/landing/index';
import ProjectsPage from './features/projects/index';
import { appRoutes } from './routes';
import { zIndexMap } from './utils';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense
      fallback={
        <Box width='100%' display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      }
    >
      <BrowserRouter>
        <NavBar />
        <Box
          sx={{
            minHeight: '100vh',
            position: 'relative',
            zIndex: zIndexMap.appContainer,
            overflow: 'hidden',
          }}
        >
          <Routes>
            <Route path={`${appRoutes.landing}/`} element={<Outlet />}>
              <Route index Component={LandingPage} />
              <Route path={`${appRoutes.about}/*`} Component={AboutPage} />
              <Route
                path={`${appRoutes.projects}/*`}
                Component={ProjectsPage}
              />
              <Route path={`${appRoutes.contact}/*`} Component={ContactPage} />
            </Route>
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
