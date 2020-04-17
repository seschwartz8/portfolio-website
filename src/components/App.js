import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <React.Fragment>
      <HashRouter basename='/'>
        <React.Fragment>
          <div
            style={{
              border: '1px solid green',
              minHeight: '100vh',
              backgroundColor: 'yellow',
              position: 'relative',
              zIndex: '1',
            }}
          >
            <Header />
            <Route exact path='/' component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </div>
          <Footer />
        </React.Fragment>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;
