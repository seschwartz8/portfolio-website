import React from 'react';
import styled from 'styled-components';
import { device } from '../utils';

const HamburgerMenu = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const Hamburger = () => {
  return <HamburgerMenu>Hamburger</HamburgerMenu>;
};

export default Hamburger;
