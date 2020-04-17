import React from 'react';

const Icon = ({ href, src, newTab, alt }) => {
  const rel = newTab ? 'noopener noreferrer' : null;
  const target = newTab ? '_blank' : null;

  return (
    <div className='icon'>
      <div className='icon-animate'>
        <a href={href} rel={rel} target={target}>
          <img src={src} alt={alt} width='40px' />
        </a>
      </div>
    </div>
  );
};

export default Icon;
