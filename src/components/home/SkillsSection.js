import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'tools', name: 'Tools & Others' },
  ];
  
  const skills = [
    // Languages
    { name: 'Python', category: 'languages', level: 90 },
    { name: 'JavaScript (ES6+)', category: 'languages', level: 90 },
    { name: 'C++', category: 'languages', level: 95 },
    { name: 'C', category: 'languages', level: 95 },
    { name: 'R', category: 'languages', level: 60 },
    
    // Frontend
    { name: 'HTML5', category: 'frontend', level: 90 },
    { name: 'CSS3', category: 'frontend', level: 85 },
    { name: 'Next.js', category: 'frontend', level: 80 },
    { name: 'Tailwind CSS', category: 'frontend', level: 85 },
    { name: 'Bootstrap', category: 'frontend', level: 70 },
    
    // Backend
    { name: 'Node.js', category: 'backend', level: 85 },
    { name: 'Express', category: 'backend', level: 80 },
    { name: 'RESTful APIs', category: 'backend', level: 75 },
    { name: 'EJS', category: 'backend', level: 80 },
    
    // Database
    { name: 'Oracle SQL', category: 'database', level: 85 },
    { name: 'MongoDB', category: 'database', level: 85 },
    { name: 'PostgreSQL', category: 'database', level: 75 },
    { name: 'Microsoft SQL Server', category: 'database', level: 85 },
    { name: 'Mongoose', category: 'database', level: 70 },
    
    // Cloud & DevOps (Skills being learned)
    { name: 'Git', category: 'cloud', level: 90 },
    { name: 'GitHub', category: 'cloud', level: 90 },
    { name: 'AWS', category: 'cloud', level: 75 },
    { name: 'Docker', category: 'cloud', level: 70 },
    { name: 'CI/CD', category: 'cloud', level: 75 },
    
    // Tools & Others
    { name: 'VS Code', category: 'tools', level: 95 },
    { name: 'Data Analysis', category: 'tools', level: 85 },
    { name: 'Statistical Modeling', category: 'tools', level: 90 },
    { name: 'Computational Modeling', category: 'tools', level: 85 },
    { name: 'Mathematics', category: 'tools', level: 95 },
  ];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section 
      ref={ref}
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-700 dark:text-purple-400">
          My Skills
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-purple-100 dark:bg-purple-900/30 text-dark-700 dark:text-dark-200 hover:bg-purple-200 dark:hover:bg-purple-800/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-purple-100 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-700 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;