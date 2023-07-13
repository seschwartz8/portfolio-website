import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { MainContent } from '../styledComponents/index';

const App = () => {
  return (
    <>
      <HashRouter basename='/'>
        <>
          <MainContent>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </MainContent>
          <Footer />
        </>
      </HashRouter>
    </>
  );
};

export default App;
