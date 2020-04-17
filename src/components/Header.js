import React from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import githubIcon from '../images/github-icon.png';
import emailIcon from '../images/email-icon.png';
import resumeIcon from '../images/resume-icon.png';
import resume from '../images/resume.pdf';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  border: 1px solid pink;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 2%;
`;

const Header = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export default Header;
