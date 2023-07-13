import React from 'react';
import { AquaLink, FooterContainer } from '../styledComponents/index';

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ color: 'white' }}>
        Created by{' '}
        <AquaLink
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/seschwartz8'
        >
          Sasa Schwartz
        </AquaLink>
      </div>
      <div style={{ color: 'white' }}>&copy; May 2020</div>
    </FooterContainer>
  );
};

export default Footer;
