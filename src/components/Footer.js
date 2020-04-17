import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.offBlack};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ color: 'white' }}>
        Created by{' '}
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/seschwartz8'
        >
          Sasa Schwartz
        </a>
      </div>
      <div style={{ color: 'white' }}>&copy; May 2020</div>
    </FooterContainer>
  );
};

export default Footer;
