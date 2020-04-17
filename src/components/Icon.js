import React from 'react';
import { IconContainer, IconImg } from '../styledComponents/index';

const Icon = ({ href, src, newTab, alt, label }) => {
  const rel = newTab ? 'noopener noreferrer' : null;
  const target = newTab ? '_blank' : null;
  return (
    <IconContainer>
      <a href={href} rel={rel} target={target}>
        {label}
        <IconImg src={src} alt={alt} />
      </a>
    </IconContainer>
  );
};

export default Icon;
