import React from 'react';
import styled from 'styled-components';
import portrait from '../images/portrait.jpg';

const LandingContainer = styled.div`
  border: 1px solid brown;
  background-color: brown;
  background-image: url(${portrait});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

const Landing = () => {
  return <LandingContainer>Landing</LandingContainer>;
};

export default Landing;
