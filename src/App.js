import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './styles/main.scss';

import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import Hamburger from './components/Hamburger';
import Navbar from './components/Navbar';

import githubIcon from './images/github-icon.png';
import emailIcon from './images/email-icon.png';
import resumeIcon from './images/resume-icon.png';
import resume from './images/resume.pdf';
import Icon from './components/Icon';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div id='app'>
          <div id='nav'>
            <div className='name'>
              <a href='/' component={Landing} name='name-anchor'>
                <h2>Sasa Schwartz</h2>
              </a>
            </div>
            <Hamburger />
            <Navbar />
            <Icon
              anchor={
                <a href='https://github.com/seschwartz8' target='_blank'>
                  <img src={githubIcon} id='github' width='40px' />
                </a>
              }
            />
            <Icon
              anchor={
                <a target='_blank' href={resume}>
                  <img src={resumeIcon} alt='resume' width='40px' />
                </a>
              }
            />
            <Icon
              anchor={
                <a href='mailto: seschwartz8@gmail.com'>
                  <img src={emailIcon} alt='email' width='40px' />
                </a>
              }
            />
          </div>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
