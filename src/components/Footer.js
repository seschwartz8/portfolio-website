import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: blue;
  height: 400px;
`;

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;
