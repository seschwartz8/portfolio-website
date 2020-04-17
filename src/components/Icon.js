import React from 'react';
import styled from 'styled-components';
import { growShrink } from '../utils';

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const IconImg = styled.img`
  width: 30px;
  &:hover {
    opacity: 0.8;
    animation: ${growShrink} 0.2s 1;
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
