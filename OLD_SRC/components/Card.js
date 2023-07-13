import React from 'react';
import { colors } from '../utils';
import {
  CardContent,
  CardTitle,
  CardContainer,
  Button,
} from '../styledComponents/index';

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
