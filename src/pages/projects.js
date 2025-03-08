import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/layout/Layout';
import ProjectsFilter from '../components/projects/ProjectsFilter';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProjectDetailModal from '../components/projects/ProjectDetailModal';
import { projectCategories, getFilteredProjects } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredProjects = getFilteredProjects(activeCategory);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectDetails = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <Layout 
      title="Claudia Suarez - Projects" 
      description="Explore the projects developed by Claudia Suarez, including web applications, data science work, simulations, and literary analysis."
    >
      <section className="py-20 px-4 md:px-6 w-full">
        <div className="container mx-auto max-w-7xl">
          <h1 
            ref={ref}
            className={`text-3xl md:text-5xl font-bold text-center mb-6 text-purple-700 dark:text-purple-400 transition-all duration-1000 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            My Projects
          </h1>
          
          <p 
            className={`text-lg text-dark-600 dark:text-dark-300 text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Here you'll find a collection of my work, showcasing my skills in software development, 
            data science, mathematical modeling, and literary analysis.
          </p>
          
          <ProjectsFilter 
            categories={projectCategories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          {filteredProjects.length > 0 ? (
            <ProjectsGrid 
              projects={filteredProjects} 
              onProjectClick={openProjectDetails}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-dark-600 dark:text-dark-300 text-lg">
                No projects found in this category. More coming soon!
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectDetails}
      />
    </Layout>
  );
}