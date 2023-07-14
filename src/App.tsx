import { Box, CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './HamburgerMenu.css';
import { Footer, NavBar } from './components';
import AboutPage from './features/about/Loadable';
import ContactPage from './features/contact/Loadable';
import LandingPage from './features/landing/Loadable';
import ProjectsPage from './features/projects/Loadable';
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
      <BrowserRouter basename={`${appRoutes.landing}/`}>
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
            <Route
              index
              path={`${appRoutes.landing}/`}
              Component={LandingPage}
            />
            <Route path={`${appRoutes.about}/*`} Component={AboutPage} />
            <Route path={`${appRoutes.projects}/*`} Component={ProjectsPage} />
            <Route path={`${appRoutes.contact}/*`} Component={ContactPage} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
