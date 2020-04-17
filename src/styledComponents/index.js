import styled from 'styled-components';
import { device, growShrink } from '../utils';

export const Content = styled.main`
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
