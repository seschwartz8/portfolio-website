import React from 'react';
import Square from './Square';

function About() {
  return (
    <React.Fragment>
      <div className='header'>
        <h1>About</h1>
      </div>
      <main>
        <div className='content-container'>
          <Square
            title='Who am I?'
            content="I'm a software engineer with experience from Epicodus Full-Stack Bootcamp Program, various online courses, and personal projects. I am looking for an entry level position where I can advance my skills and contribute to a fast-paced team environment."
          />
          <Square
            title='What are my skills?'
            content='Python, C#/.NET, Javascript, React, HTML, CSS/SCSS, Java, MySQL, Git, Web Design, Photoshop.'
          />
          <Square
            title="When I'm not coding?"
            content="I'm a licensed Speech-Language Pathologist with an occasional cider house bartending gig. I write and perform music, I love to brag about my yelp elite status, and I'm constantly in search of the perfect oolong tea."
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export default About;
