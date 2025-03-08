// src/data/projects.js

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Applications' },
  { id: 'simulation', name: 'Simulation' },
  { id: 'literary', name: 'Literary Analysis' },
];

export const projects = [
  {
    id: 'covid-simulation',
    title: 'COVID-19 Simulation Model',
    description: 'Developed and implemented a SIDARTHE-based stochastic simulation model in Python to analyze and visualize disease progression patterns with Matplotlib and NumPy, and integrated probability distributions for realistic scenario modeling.',
    image: '/images/projects/covid-simulation.jpg',
    technologies: ['Python', 'Matplotlib', 'NumPy', 'Statistical Modeling'],
    github: null, // Add GitHub link if available
    liveLink: null, // Add live demo link if available
    deployLink: null, // Add deployment link when available
    category: 'simulation',
  },
  {
    id: 'taco-bout-it',
    title: 'Taco \'Bout It - Meal Kit Delivery',
    description: 'A full-stack web application for a taco-themed meal kit delivery service. The platform allows customers to browse meal kits, add them to cart, and place orders, while also providing a dedicated admin interface for data entry clerks to manage the inventory.',
    image: '/images/projects/taco-bout-it.jpg',
    technologies: ['Node.js', 'Express', 'EJS', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'bcrypt.js', 'SendGrid'],
    github: 'https://github.com/cSuarez13/web322-csuarez-socorro',
    liveLink: null,
    deployLink: null, // Add deployment link when available
    category: 'web',
  },
  {
    id: 'popcorn-buddy',
    title: 'PopcornBuddy - Movie Discovery App',
    description: 'A feature-rich movie information web application that allows users to discover, track, and organize their movie watching experiences. Leverages the TMDB API to provide comprehensive information about movies while offering personalized features like favorites lists, watchlists, ratings, and reviews.',
    image: '/images/projects/popcorn-buddy.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'TMDB API', 'Vercel', 'JWT'],
    github: 'https://github.com/mikeylim/PopcornBuddy',
    liveLink: null,
    deployLink: null, // Add deployment link when available
    category: 'web',
  },
  {
    id: 'this-world-is-made-for-monsters',
    title: 'This World Is Made For Monsters',
    description: 'A responsive web application dedicated to the analysis of Mary Rickert\'s short story. The site explores the narrative\'s themes of xenophobia, xenophilia, generational perspectives, and alien representation through multiple interconnected pages of literary analysis.',
    image: '/images/projects/this-world-is-made-for-monsters.jpg',
    technologies: ['Node.js', 'Express', 'EJS', 'Tailwind CSS', 'DaisyUI'],
    github: 'https://github.com/cSuarez13/this-world-is-made-for-monsters',
    liveLink: null,
    deployLink: null, // Add deployment link when available
    category: 'literary',
  },
  {
    id: 'fragments-api',
    title: 'Fragments API - RESTful Microservice',
    description: 'A cloud-based microservice built in Node.js that enables users to create, store, retrieve, update, and delete small fragments of text and images. Designed as a solution for handling various data formats from multiple sources in a centralized, secure platform. (In Development)',
    image: '/images/projects/fragments-api.PNG',
    technologies: ['Node.js', 'Express', 'AWS', 'REST API', 'Jest', 'CI/CD', 'AWS Cognito'],
    github: null, // Will be available upon completion
    liveLink: null,
    deployLink: null, // Add deployment link when available
    category: 'web',
    inProgress: true,
  }
];

export const getFilteredProjects = (category) => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};