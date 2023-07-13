import { Box } from '@mui/material';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, NavBar } from './components';
import LandingPage from './features/landing/Loadable';
import { zIndexMap } from './utils';

function App() {
  return (
    <HashRouter basename='/'>
      <NavBar />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'blue',
          position: 'relative',
          zIndex: zIndexMap.appContainer,
          overflow: 'hidden',
        }}
      >
        <Routes>
          <Route
            // exact
            path='/'
            Component={LandingPage}
          />
          {/* <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} /> */}
        </Routes>
      </Box>
      <Footer />
    </HashRouter>
  );
}

export default App;
