import React from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Name from './Name';
import Icon from './Icon';
import githubIcon from '../images/github-icon.png';
import emailIcon from '../images/email-icon.png';
import resumeIcon from '../images/resume-icon.png';
import resume from '../images/resume.pdf';
import { IconsColumn, HeaderContainer } from '../styledComponents/index';

const Header = () => {
  const iconSize = '30px';

  return (
    <HeaderContainer>
      <Name />
      <Hamburger size={iconSize} />
      <Navbar />

      <IconsColumn>
        <Icon
          href='https://github.com/seschwartz8'
          newTab={true}
          src={githubIcon}
          alt='github icon'
          size={iconSize}
        />
        <Icon
          href={resume}
          newTab={true}
          src={resumeIcon}
          alt='resume icon'
          size={iconSize}
        />
        <Icon
          href='mailto: seschwartz8@gmail.com'
          newTab={false}
          src={emailIcon}
          alt='email icon'
          size={iconSize}
        />
      </IconsColumn>
    </HeaderContainer>
  );
};

export default Header;
