import { keyframes } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const colors = {
  offWhite: '#E8ECF2',
  lightAqua: '#B5D0D8',
  darkAqua: '#7394A7',
  darkerAqua: '#455f6e',
  grey: '#6B737E',
  offBlack: '#252525',
};

export const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`;

export const growShrink = keyframes`
  50% {
    transform: scale(.7);
  }
  100% {
    transform: scale(1);
  }
`;
