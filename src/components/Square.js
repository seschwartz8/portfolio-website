import React from 'react';

function Square({ id, title, content, imgUrl, link, linkName }) {
  /* If it's a project with an image and a link to github*/
  if (imgUrl && link && linkName) {
    return (
      <div className='square' key={id}>
        <div className='square-title'>
          <h4> {title} </h4>
        </div>
        <div className='square-content'>
          <p> {content} </p>
        </div>
        <div className='square-img'>
          <img src={imgUrl} alt={title}></img>
        </div>
        <div className='square-link'>
          <a target='_blank' rel='noopener noreferrer' href={link}>
            {' '}
            {linkName}{' '}
          </a>
        </div>
      </div>
    );
    /* If it's a generic square with only title and content */
  } else {
    return (
      <div className='square' key={id}>
        <div className='square-title'>
          <h4> {title} </h4>
        </div>
        <div className='square-content'>
          <p> {content} </p>
        </div>
      </div>
    );
  }
}

export default Square;
