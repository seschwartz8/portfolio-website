import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

const CardContainer = styled.div`
  background-color: ${colors.superLightAqua};
  padding: 3%;
  margin: 4% 1%;
`;

function Card({ id, title, content, imgUrl, link, linkName }) {
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
      <h4>{title}</h4>
      <p>{content}</p>
      {imgAndLink}
    </CardContainer>
  );
}

export default Card;
