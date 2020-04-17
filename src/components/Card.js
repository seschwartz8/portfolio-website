import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../utils';

const CardContainer = styled.div`
  background-color: ${colors.superLightAqua};
  padding: 3%;
  margin: 4% 2%;
  width: 100%;
  @media ${device.laptop} {
    width: 32%;
  }
`;

const CardTitle = styled.h4`
  font-weight: 600;
  font-size: 1.7em;
  margin-bottom: 4%;
`;

const CardContent = styled.p`
  font-size: 1.2em;
`;

function Card({
  id,
  title,
  paragraphOne,
  paragraphTwo,
  imgUrl,
  link,
  linkName,
}) {
  const imgAndLink =
    imgUrl && link && linkName ? (
      <>
        <img src={imgUrl} alt={title}></img>
        <a target='_blank' rel='noopener noreferrer' href={link}>
          {' '}
          {linkName}{' '}
        </a>
      </>
    ) : null;

  return (
    <CardContainer key={id}>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <div>{paragraphOne}</div>
        <br />
        <div>{paragraphTwo}</div>
      </CardContent>
      {imgAndLink}
    </CardContainer>
  );
}

export default Card;
