import React from 'react';
import Card from './Card.js';
import styled from 'styled-components';
import { colors } from '../utils';

const Title = styled.div`
  color: white;
  font-size: 3em;
  width: 100%;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.main`
  background-color: white;
  min-height: 100%;
  padding: 3%;
`;

const About = () => {
  return (
    <>
      <Title>About</Title>
      <Content>
        <Card
          title='Who am I?'
          content="I'm a software engineer with experience from Epicodus Full-Stack Bootcamp Program, various online courses, and personal projects. This summer I will be working as a UI Developer intern at ClearBlade Inc. I am looking for a entry level front-end position where I can advance my skills and contribute to a fast-paced team environment."
        />
        <Card
          title='What are my skills?'
          content='React, React-Router, Hooks, Redux, Javascript, Typescript, HTML, CSS/Sass, MySQL, Git, C#/.NET, Python, Photoshop, Figma, Responsive Web Design and Development, Unit Testing in Jest and MSTest, RESTful conventions.'
        />
        <Card
          title="When I'm not coding?"
          content="I moved to Austin in May 2020, and I'm thoroughly enjoying the sunshine after my time in Seattle. I write and perform music, I love to brag about my yelp elite status, and I'm constantly in search of the perfect oolong tea."
        />
      </Content>
    </>
  );
};

export default About;
