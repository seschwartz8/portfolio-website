import React, { useState } from 'react';
import ProjectCard from './ProjectCard.js';
import { ProjectsContent, Title } from '../styledComponents/index';
import projectData from '../projectData';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const onCardClick = (id) => {
    activeCard === id ? setActiveCard(null) : setActiveCard(id);
  };

  const renderProjects = () => {
    return projectData.map((project) => {
      return (
        <ProjectCard
          key={project.id}
          title={project.title}
          content={project.content}
          imgUrl={project.imgUrl}
          link={project.link}
          flipped={activeCard === project.id ? true : false}
          onClick={() => onCardClick(project.id)}
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
