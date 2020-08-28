import React from 'react';
import Card from './Card.js';
import { AboutContent, Title } from '../styledComponents/index';

const About = () => {
  return (
    <>
      <Title>About</Title>
      <AboutContent>
        <Card
          title='Who am I?'
          paragraphOne="I'm a software engineer with a specialty in React and UI/UX, currently working on the front-end development team at ClearBlade Inc. I have additional experience from Epicodus Full-Stack Bootcamp Program, various online courses, and personal projects."
          paragraphTwo='I am looking for a front-end position where I can advance my skills and contribute to a fast-paced team environment.'
        />
        <Card
          title='What are my skills?'
          paragraphOne='I enjoy building React applications with a focus on modularity, scalability, and responsiveness. I have experience with state management using hooks, recoil, and redux, building custom reusable components, and RESTful conventions.'
          paragraphTwo='React, Redux, Recoil, Typescript, Javascript, HTML, CSS/Sass, Styled Components, MySQL, C#, Python, Git, Jest, Figma.'
        />
        <Card
          title="When I'm not coding?"
          paragraphOne="I moved to Austin, TX in May 2020, and I'm thoroughly enjoying the sunshine after living in Seattle for a few years."
          paragraphTwo="I write and perform music, I love to brag about my yelp elite status, and I'm constantly in search of the perfect oolong tea."
        />
      </AboutContent>
    </>
  );
};

export default About;
