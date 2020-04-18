import React, { useState } from 'react';
import ProjectCard from './ProjectCard.js';
import { ProjectsContent, Title } from '../styledComponents/index';
import projectData from '../projectData';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const onCardClick = (id) => {
    setActiveProject(id);
  };

  const renderProjects = () => {
    return projectData.map((project) => {
      return (
        <ProjectCard
          key={project.id}
          title={project.title}
          paragraphOne={project.content}
          imgUrl={project.imgUrl}
          link={project.link}
          linkName={project.linkName}
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
