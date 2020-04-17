import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <div id='app'>
      <HashRouter basename='/'>
        <React.Fragment>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </React.Fragment>
      </HashRouter>
    </div>
  );
};

export default App;
