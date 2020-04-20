import React from 'react';
import { IconContainer, IconImg } from '../styledComponents/index';

const Icon = ({ href, src, newTab, alt, label, size = '30px' }) => {
  const rel = newTab ? 'noopener noreferrer' : null;
  const target = newTab ? '_blank' : null;
  return (
    <IconContainer>
      <a href={href} rel={rel} target={target}>
        <h4>{label}</h4>
        <IconImg src={src} alt={alt} style={{ width: size }} />
      </a>
    </IconContainer>
  );
};

export default Icon;
