import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../utils';
import { CardContent, CardTitle } from '../styledComponents/index';

const CardContainer = styled.div`
  background-color: ${colors.superLightAqua};
  padding: 3%;
  margin: 3% 2%;
  width: 100%;
  @media ${device.laptop} {
    width: 32%;
  }
`;

function Card({ title, paragraphOne, paragraphTwo }) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <div style={{ lineHeight: '2' }}>{paragraphOne}</div>
        <br />
        <div style={{ lineHeight: '2' }}>{paragraphTwo}</div>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
