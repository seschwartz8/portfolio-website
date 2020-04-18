import styled from 'styled-components';
import { device, growShrink, fadeIn, colors } from '../utils';

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
`;

export const IconImg = styled.img`
  width: 30px;
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
  animation-delay: 0.5s;
`;

export const CardContent = styled.p`
  font-size: 1.2em;
`;

export const CardTitle = styled.h4`
  font-weight: 600;
  font-size: 1.7em;
  margin-bottom: 4%;
`;
