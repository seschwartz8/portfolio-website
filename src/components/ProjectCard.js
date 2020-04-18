import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, device } from '../utils';
import { CardContent, CardTitle } from '../styledComponents/index';

const CardContainer = styled.div`
  background-color: ${colors.superLightAqua};
  padding: 3%;
  margin: 3% 2%;
  width: 100%;

  @media ${device.laptop} {
    width: 45%;
  }
`;

const Button = styled.button`
  background-color: ${colors.darkerAqua};
  padding: 2.5%;
  border: none;
  margin-top: 5%;
`;

function ProjectCard({ title, content, imgUrl, link, linkName }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <CardTitle style={{ textAlign: 'center' }}>{title}</CardTitle>

      <CardContent>
        {!isFlipped ? (
          <img src={imgUrl} alt={title} style={{ width: '100%' }}></img>
        ) : (
          <>
            <p>{content}</p>
            <Button>
              <a
                style={{ color: 'white' }}
                rel='noopener noreferrer'
                target='_blank'
                href={link}
              >
                Check out the code...
              </a>
            </Button>
          </>
        )}
      </CardContent>
    </CardContainer>
  );
}

export default ProjectCard;
