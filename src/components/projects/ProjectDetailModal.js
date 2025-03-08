import React from 'react';
import { X, Github, ExternalLink, Clock } from 'lucide-react';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      {/* Modal Content */}
      <div 
        className="bg-white dark:bg-dark-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full bg-purple-100 dark:bg-dark-700 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-dark-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800 dark:text-white">
              {project.title}
            </h2>
            
            {/* In Progress Badge */}
            {project.inProgress && (
              <div className="ml-4 bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center">
                <Clock size={16} className="mr-2" />
                In Progress
              </div>
            )}
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Full Description */}
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-dark-700 dark:text-dark-200 text-lg leading-relaxed">
              {project.description}
            </p>
            
            {/* Additional details could be added here */}
            {project.longDescription && (
              <div className="mt-4">
                {project.longDescription.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-dark-800 dark:bg-dark-700 text-white rounded-md flex items-center hover:bg-dark-700 dark:hover:bg-dark-600 transition-colors"
              >
                <Github size={18} className="mr-2" />
                View Code
              </a>
            )}
            
            {project.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-purple-600 text-white rounded-md flex items-center hover:bg-purple-700 transition-colors"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            )}
            
            {/* Deployment link for websites */}
            {(project.category === 'web' || project.category === 'literary') && (
              project.deployLink ? (
                <a 
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-purple-600 text-white rounded-md flex items-center hover:bg-purple-700 transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" />
                  View Site
                </a>
              ) : (
                <span className="px-5 py-2 bg-purple-300 dark:bg-purple-900/50 text-dark-700 dark:text-purple-300 rounded-md flex items-center cursor-not-allowed">
                  <ExternalLink size={18} className="mr-2" />
                  Site Coming Soon
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;