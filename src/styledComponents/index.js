import styled from 'styled-components';
import { device, growShrink, fadeIn, colors } from '../utils';
import { NavLink } from 'react-router-dom';

export const NavbarMenu = styled.ul`
  display: none;
  margin: 15px 0;
  @media ${device.tablet} {
    display: block;
  }
`;

export const NavItem = styled(NavLink)`
  opacity: 0;
  animation: 1s ${fadeIn} 0.3s forwards;
  animation-delay: 0.5s;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 1.2em;
  font-weight: 200;
  margin-right: 20px;
  &:hover h2 {
    color: #7394a7;
  }
`;

export const HamburgerMenu = styled.div`
  opacity: 0;
  animation: 1s ${fadeIn} 0.3s forwards;
  animation-delay: 0.5s;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: ${(props) => (props.size ? `calc(${props.size} - 5px)` : '30px')};
  width: ${(props) => (props.size ? props.size : '30px')};
  position: relative;
  z-index: 30;

  @media ${device.tablet} {
    display: none;
  }
`;

export const HamburgerTopLine = styled.div`
  transition: transform 0.8s;
  background-color: white;
  width: 100%;
  height: 2px;
  ${(props) =>
    props.open
      ? `
    transform: translate(0, 7.5px) rotate(45deg);
    transition: transform 0.8s;
    transform-origin: center;
    background-color: ${colors.darkAqua}
  `
      : null}
`;
export const HamburgerMiddleLine = styled.div`
  transition: transform 0.8s;
  background-color: white;
  width: 100%;
  height: 2px;
  ${(props) =>
    props.open
      ? `
    visibility: hidden;
    transform-origin: center;
  `
      : null}
`;
export const HamburgerBottomLine = styled.div`
  transition: transform 0.8s;
  background-color: white;
  width: 100%;
  height: 2px;
  ${(props) =>
    props.open
      ? `
      transition: transform 0.8s;
      transform: translate(0, -7.5px) rotate(-45deg);
      transform-origin: center;
      background-color: ${colors.darkAqua}
    `
      : null}
`;

export const Modal = styled.div`
  background-color: ${colors.offWhite};
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 20;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 1s ${fadeIn} 0.3s forwards;
`;

export const AboutContent = styled.main`
  background-color: white;
  min-height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: stretch;
    padding: 5% 3%;
  }
`;

export const ProjectsContent = styled.main`
  background-color: white;
  min-height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 5% 3%;
  }
`;

export const ContactContent = styled.main`
  background-color: white;
  min-height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: stretch;
    padding: 5% 3%;
  }
`;

export const SingleBox = styled.div`
  background-color: ${colors.superLightAqua};
  padding: 8%;
  display: flex;
  flex-direction: column;
  margin: 3% 2% 8% 2%;
  width: 100%;
  text-align: center;
`;

export const Title = styled.div`
  color: white;
  font-size: 3em;
  font-weight: 700;
  width: 100%;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  &:hover h4 {
    color: #7394a7;
  }
`;

export const IconImg = styled.img`
  &:hover {
    opacity: 0.8;
    animation: ${growShrink} 0.2s 1;
  }
`;

export const IconsColumn = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: 1s ${fadeIn} 0.3s forwards;
  animation-delay: 0.5s;
`;

export const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  opacity: 0;
  animation: 1s ${fadeIn} 0.3s forwards;
  animation-delay: 0.5s;e
`;

export const CardContent = styled.div`
  font-size: 1.4em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h4`
  font-weight: 600;
  font-size: 1.7em;
  margin-bottom: 4%;
`;

export const AquaLink = styled.a`
  color: ${colors.lightAqua};
  &:hover {
    color: ${colors.darkAqua};
  }
`;
