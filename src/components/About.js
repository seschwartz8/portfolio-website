import React from 'react';
import Card from './Card.js';
import styled from 'styled-components';
import { device } from '../utils';

const Title = styled.div`
  color: white;
  font-size: 3em;
  font-weight: 700;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: stretch;
    padding: 5% 3%;
  }
`;

const About = () => {
  return (
    <>
      <Title>About</Title>
      <Content>
        <Card
          title='Who am I?'
          paragraphOne="I'm a software engineer with experience from Epicodus Full-Stack Bootcamp Program, various online courses, and personal projects. This summer I will be working as a UI Developer intern at ClearBlade Inc."
          paragraphTwo='I am looking for an entry level front-end position where I can advance my skills and contribute to a fast-paced team environment.'
        />
        <Card
          title='What are my skills?'
          paragraphOne='I enjoy building react applications with a focus on modularity, scalability, and responsiveness. I have experience with RESTful conventions, state management using redux and hooks, and building custom reusable components.'
          paragraphTwo='React, Redux, Javascript, Typescript, HTML, CSS/Sass, MySQL, C#, .NET, Python, Git, Jest, Photoshop, Figma.'
        />
        <Card
          title="When I'm not coding?"
          paragraphOne="I moved to Austin, TX in May 2020, and I'm thoroughly enjoying the sunshine after living in Seattle for a few years."
          paragraphTwo="I write and perform music, I love to brag about my yelp elite status, and I'm constantly in search of the perfect oolong tea."
        />
      </Content>
    </>
  );
};

export default About;
