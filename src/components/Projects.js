import React, { useState } from 'react';
import Card from './Card.js';
import { ProjectsContent, Title } from '../styledComponents/index';
import projectData from '../projectData';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const onCardClick = (id) => {
    activeCard === id ? setActiveCard(null) : setActiveCard(id);
  };

  const renderProjects = () => {
    // THESE SIZE CORRECTLY BECAUSE THE IMAGES ARE ALL CROPPED AT RATIO 4:3
    return projectData.map((project) => {
      return (
        <Card
          key={project.id}
          title={project.title}
          content={project.content}
          imgUrl={project.imgUrl}
          link={project.link}
          flipped={activeCard === project.id ? true : false}
          onClick={() => onCardClick(project.id)}
          project
        />
      );
    });
  };

  return (
    <>
      <Title>Projects</Title>
      <ProjectsContent>{renderProjects()}</ProjectsContent>
    </>
  );
};

export default Projects;
