import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsGrid = ({ projects, onProjectClick }) => {
  return (
    <div className="flex flex-col space-y-6">
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          onClick={() => onProjectClick && onProjectClick(project)}
          className="cursor-pointer w-full"
        >
          <ProjectCard 
            {...project} 
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;