import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../utils';
import { CardContent, CardTitle } from '../styledComponents/index';

const CardContainer = styled.div`
  background-color: ${colors.superLightAqua};
  padding: 2%;
  margin: 3% 2%;
  width: 100%;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media ${device.laptop} {
    width: 45%;
  }
`;

function ProjectCard({
  title,
  paragraphOne,
  paragraphTwo,
  imgUrl,
  link,
  linkName,
  onClick,
}) {
  return (
    <CardContainer onClick={onClick}>
      <CardTitle style={{ textAlign: 'center' }}>{title}</CardTitle>

      <CardContent>
        <img src={imgUrl} alt={title} style={{ width: '100%' }}></img>
      </CardContent>
    </CardContainer>
  );
}

export default ProjectCard;
