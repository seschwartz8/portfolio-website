import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { fadeIn } from '../utils';

const NameContainer = styled(NavLink)`
  opacity: 0;
  animation: 1s ${fadeIn} 0.3s forwards;
  color: white;
  font-size: 2.3em;
  font-weight: 700;
  &:hover {
    color: white;
    opacity: 0.8;
  }
`;

const Name = () => {
  return (
    <NameContainer exact to='/'>
      Sasa Schwartz
    </NameContainer>
  );
};

export default Name;
