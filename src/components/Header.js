import React from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import githubIcon from '../images/github-icon.png';
import emailIcon from '../images/email-icon.png';
import resumeIcon from '../images/resume-icon.png';
import resume from '../images/resume.pdf';

const Header = () => {
  return (
    <div>
      <NavLink exact to='/' className='sasa-schwartz'>
        Sasa Schwartz
      </NavLink>

      <Hamburger />
      <Navbar />

      <Icon
        href='https://github.com/seschwartz8'
        newTab={true}
        src={githubIcon}
        alt='github icon'
      />
      <Icon href={resume} newTab={true} src={resumeIcon} alt='resume icon' />
      <Icon
        href='mailto: seschwartz8@gmail.com'
        newTab={false}
        src={emailIcon}
        alt='email icon'
      />
    </div>
  );
};

export default Header;
