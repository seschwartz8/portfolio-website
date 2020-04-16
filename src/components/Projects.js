import React from 'react';
import Square from './Square';
import projectData from '../data/projectData';

/* Create list of projects to render by iterating over projectData */
let projectList;
projectList = projectData.map((project) => {
  const { id, title, content, imgUrl, link, linkName } = project;
  return (
    <Square
      id={id}
      title={title}
      content={content}
      imgUrl={imgUrl}
      link={link}
      linkName={linkName}
    />
  );
});

function Projects() {
  return (
    <React.Fragment>
      <div className='header' name='project-header'>
        <h1>Projects</h1>
      </div>
      <main>
        <div className='content-container'>{projectList}</div>
      </main>
      <footer>
        <a href='#name-anchor'>Back to top ^</a>
      </footer>
    </React.Fragment>
  );
}

export default Projects;
