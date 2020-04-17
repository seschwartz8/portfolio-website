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

const AquaAnchor = styled.a`
  color: #b5d0d8;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ color: 'white' }}>
        Created by{' '}
        <AquaAnchor
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/seschwartz8'
        >
          Sasa Schwartz
        </AquaAnchor>
      </div>
      <div style={{ color: 'white' }}>&copy; May 2020</div>
    </FooterContainer>
  );
};

export default Footer;
