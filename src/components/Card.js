import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../utils';
import { CardContent, CardTitle } from '../styledComponents/index';

const CardContainer = styled.div`
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
        opacity: ${(props) => (props.flipped ? '1' : '0.8')};
      }

      @media ${device.laptop} {
        width: 45%;
      }`
      : `
      @media ${device.laptop} {
        width: 32%;
      }`}
`;

const Button = styled.button`
  background: none;
  padding: 5%;
  border: none;
  margin-top: 10%;
  font-size: 1.5em;

  &:hover {
    opacity: 0.8;
  }
`;

function Card({
  title,
  paragraphOne,
  paragraphTwo,
  content,
  imgUrl,
  link,
  flipped,
  onClick,
  project = false,
}) {
  const renderCard = () => {
    return !project ? (
      <CardContainer project={project}>
        <CardTitle>{title}</CardTitle>
        <CardContent>
          <div style={{ lineHeight: '2' }}>{paragraphOne}</div>
          <br />
          <div style={{ lineHeight: '2' }}>{paragraphTwo}</div>
        </CardContent>
      </CardContainer>
    ) : (
      <CardContainer project={project} onClick={onClick} flipped={flipped}>
        <CardTitle style={{ textAlign: 'center' }}>{title}</CardTitle>

        <CardContent>
          {!flipped ? (
            <img src={imgUrl} alt={title} style={{ width: '100%' }}></img>
          ) : (
            <p style={{ padding: '0 5%', lineHeight: '2' }}>{content}</p>
          )}
        </CardContent>
        {flipped ? (
          <Button>
            <a
              style={{ color: colors.darkerAqua }}
              rel='noopener noreferrer'
              target='_blank'
              href={link}
            >
              Check out the code
              <i
                className='angle right icon large'
                style={{ color: colors.darkerAqua }}
              />
            </a>
          </Button>
        ) : null}
      </CardContainer>
    );
  };

  return renderCard();
}

export default Card;
