import React from 'react';
import { HashRouter, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import styled from 'styled-components';

const MainContent = styled.div`
  border: 1px solid green;
  min-height: 100vh;
  background-color: yellow;
  position: relative;
  z-index: 1;
`;

const App = () => {
  return (
    <React.Fragment>
      <HashRouter basename='/'>
        <React.Fragment>
          <MainContent>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </MainContent>
          <Footer />
        </React.Fragment>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;
