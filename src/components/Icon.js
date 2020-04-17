import React from 'react';
import styled from 'styled-components';
import { device } from '../utils';

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5%;
`;

const IconImg = styled.img`
  width: 30px;
  @media ${device.mobileL} {
    width: 40px;
  }
`;

const Icon = ({ href, src, newTab, alt }) => {
  const rel = newTab ? 'noopener noreferrer' : null;
  const target = newTab ? '_blank' : null;

  return (
    <IconContainer>
      <a href={href} rel={rel} target={target}>
        <IconImg src={src} alt={alt} />
      </a>
    </IconContainer>
  );
};

export default Icon;
