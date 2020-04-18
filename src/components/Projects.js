import React from 'react';
import ProjectCard from './ProjectCard.js';
import { ProjectsContent, Title } from '../styledComponents/index';
import projectData from '../projectData';

const Projects = () => {
  const renderProjects = () => {
    return projectData.map((project) => {
      return (
        <ProjectCard
          key={project.id}
          title={project.title}
          content={project.content}
          imgUrl={project.imgUrl}
          link={project.link}
          linkName={project.linkName}
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
