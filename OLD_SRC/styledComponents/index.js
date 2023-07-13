import styled from 'styled-components';
import { device, growShrink, fadeIn, colors } from '../utils';
import { NavLink } from 'react-router-dom';
import portrait from '../images/portrait.jpg';

export const MainContent = styled.div`
  min-height: 100vh;
  background-color: ${colors.offBlack};
  position: relative;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1% 4%;
`;

export const NavbarMenu = styled.ul`
  display: none;
  margin: 15px 0;
  @media ${device.mobileL} {
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
  justify-content: space-between;
  height: 25px;
  width: 30px;
  position: relative;
  z-index: 30;

  @media ${device.mobileL} {
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
    transform: translate(0, 1px) rotate(45deg);
    transition: transform 0.8s;
    transform-origin: left;
    background-color: ${colors.darkAqua}
  `
      : null}
`;

export const HamburgerMiddleLine = styled.div`
  background-color: white;
  width: 100%;
  height: 2px;
  ${(props) =>
    props.open
      ? `
    visibility: hidden;
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
      transform: translate(0, -1px) rotate(-45deg);
      transform-origin: left;
      background-color: ${colors.darkAqua}
    `
      : null}
`;

export const ModalContainer = styled.div`
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

export const ModalContents = styled.ul`
  display: flex;
  height: 40%;
  width: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const LandingContainer = styled.div`
  background-image: url(${portrait});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  background-position: 70% 0;

  @media ${device.mobileL} {
    background-position: center center;
  }
`;

export const NameContainer = styled(NavLink)`
  opacity: 0;
  animation: 1s ${fadeIn} 0.3s forwards;
  color: white;
  font-size: 2.3em;
  font-weight: 700;
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

export const CardContainer = styled.div`
  background-color: ${colors.superLightAqua};
  padding: 3%;
  margin: 3% 2%;
  width: 100%;
  ${(props) =>
    props.project
      ? `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &:hover {
      opacity: ${(props) => (props.flipped ? '1' : '0.7')};
      cursor: pointer;
    }

    @media ${device.laptop} {
      width: 45%;
    }`
      : `
    @media ${device.laptop} {
      width: 32%;
    }`}
`;

export const Button = styled.button`
  background: none;
  padding: 5%;
  border: none;
  margin-top: 10%;
  font-size: 1.5em;

  &:hover {
    opacity: 0.8;
  }
`;

export const AquaLink = styled.a`
  color: ${colors.lightAqua};
  &:hover {
    color: ${colors.darkAqua};
  }
`;

export const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.offBlack};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3%;
`;
