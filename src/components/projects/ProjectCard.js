import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  github, 
  liveLink, 
  deployLink,
  category,
  index,
  inProgress 
}) => {
  // Set up the intersection observer with a threshold of 0.1 (10% visible)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    // Small delay to stagger animations
    rootMargin: '0px 0px -100px 0px',
  });

  // Calculate animation delay based on index
  const delay = index * 0.1;

  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden transition-all duration-500 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } group hover:shadow-xl flex flex-col md:flex-row w-full mb-8`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Project Image (Left side) */}
      <div className="relative md:w-2/5 h-60 md:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-purple-500/20 dark:bg-purple-700/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image 
          src={image || '/images/projects/placeholder-project.jpg'} 
          alt={title}
          width={500}
          height={350}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        
        {/* In Progress Badge */}
        {inProgress && (
          <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center z-20">
            <Clock size={12} className="mr-1" />
            In Progress
          </div>
        )}
      </div>

      {/* Content (Right side) */}
      <div className="p-6 md:w-3/5 flex flex-col">
        <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3 flex-grow">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="mt-auto flex space-x-3">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} className="mr-1" />
              <span>Code</span>
            </a>
          )}
          
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}
          
          {/* Deployment link for websites */}
          {(category === 'web' || category === 'literary') && (
            deployLink ? (
              <a 
                href={deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} className="mr-1" />
                <span>View Site</span>
              </a>
            ) : (
              <span className="text-dark-400 dark:text-dark-500 flex items-center cursor-default">
                <ExternalLink size={18} className="mr-1" />
                <span>Site Coming Soon</span>
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;