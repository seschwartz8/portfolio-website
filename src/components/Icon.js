import React from 'react';
import styled from 'styled-components';
import { device, growShrink } from '../utils';

const IconContainer = styled.div`
  width: 50px;
  height: 50pxpx;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const IconImg = styled.img`
  width: 30px;
  &:hover {
    opacity: 0.8;
    animation: ${growShrink} 0.2s 1;
  }
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
