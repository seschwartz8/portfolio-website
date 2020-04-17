import React from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Name from './Name';
import Icon from './Icon';
import githubIcon from '../images/github-icon.png';
import emailIcon from '../images/email-icon.png';
import resumeIcon from '../images/resume-icon.png';
import resume from '../images/resume.pdf';
import styled from 'styled-components';
import { fadeIn } from '../utils';

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1% 4%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: 1s ${fadeIn} 0.3s forwards;
  animation-delay: 0.5s;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Name />
      <Hamburger />
      <Navbar />

      <IconContainer>
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
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
