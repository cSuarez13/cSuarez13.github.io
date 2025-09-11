// src/data/projectsData.js

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "mobile", name: "Mobile Development" },
  { id: "web", name: "Web Development" },
  { id: "cloud", name: "Cloud & Enterprise" },
  { id: "desktop", name: "Desktop Applications" },
  { id: "game", name: "Game Development" },
  { id: "research", name: "Research & Data Science" },
  { id: "literary", name: "Literary Analysis" },
];

export const projects = [
  // PRIMARY FOCUS PROJECTS
  {
    id: "band-radar",
    title: "Band Radar",
    subtitle: "AI-Powered Concert Discovery App",
    description:
      "A sophisticated React Native application that revolutionizes live music discovery by combining Spotify listening habits with AI-powered recommendations and real-time event data.",
    fullDescription:
      "Band Radar is a cross-platform mobile application that transforms how users discover live music events. The app analyzes user's Spotify playlists to extract genre preferences and musical taste profiles, then uses Anthropic's Claude AI to provide personalized concert recommendations. Features include interactive Google Maps integration for event visualization, comprehensive filtering systems, and secure OAuth 2.0 authentication.",
    image: "/images/projects/band-radar.png",
    category: "mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo Router",
      "Node.js",
      "Anthropic Claude API",
      "Spotify API",
      "Ticketmaster API",
      "Google Maps API",
      "OAuth 2.0",
    ],
    keyFeatures: [
      "Intelligent Music Analysis using Spotify playlist data",
      "AI-powered chat assistant with personalized recommendations",
      "Real-time concert visualization with interactive maps",
      "Advanced filtering with GPS integration and genre-specific search",
      "Comprehensive event details with direct ticket purchasing",
      "Secure user authentication and persistent preferences",
    ],
    techHighlights: [
      "Cross-platform development supporting iOS, Android, and web",
      "Complex state management using React Context API",
      "Integration of multiple APIs (Spotify, Ticketmaster, Google Maps, Claude)",
      "Advanced data processing for music preference analysis",
      "Real-time location services and event visualization",
      "AI-powered natural language interface for event discovery",
    ],
    github: "https://github.com/cSuarez13/BandRadar_Personal_Repo",
    videoDemo: "https://youtube.com/shorts/rL5gVN3LX2A",
    developmentPeriod: "3 months",
    teamSize: "Team of 5",
    role: "Full-Stack Developer & AI Integration Specialist",
  },
  {
    id: "bytebasket",
    title: "ByteBasket",
    subtitle: "Food Bank Assistance Web Application",
    description:
      "A comprehensive full-stack web application designed to streamline food bank operations by connecting donors, volunteers, recipients, and administrators in an efficient digital ecosystem.",
    fullDescription:
      "ByteBasket addresses food insecurity challenges by providing a complete digital platform for food bank operations. The application features multi-role authentication, real-time inventory management, donation tracking, volunteer coordination, and recipient request processing with dietary restriction matching.",
    image: "/images/projects/bytebasket.jpg",
    category: "web",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose ODM",
      "JWT Authentication",
      "Tailwind CSS",
      "Docker",
      "GitHub Actions",
    ],
    keyFeatures: [
      "Multi-role user authentication and authorization system",
      "Real-time inventory management with low-stock alerts",
      "Donation management with automated receipt generation",
      "Volunteer coordination with shift scheduling",
      "Request processing with dietary restriction matching",
      "Role-specific dashboards with data visualization",
      "Multi-language support (English, French, Spanish)",
    ],
    techHighlights: [
      "Full-stack architecture with RESTful API design",
      "Comprehensive NoSQL database schema with MongoDB collections",
      "Mongoose ODM for document validation and modeling",
      "Responsive design optimized for mobile and desktop",
      "CI/CD pipeline with automated testing and deployment",
      "Comprehensive security measures and input validation",
      "Designed to serve 500+ concurrent users",
    ],
    github: "https://github.com/cSuarez13/ByteBasket",
    liveLink: "https://frontend3-brown.vercel.app/",
    developmentPeriod: "4 months",
    teamSize: "Team Lead of 5-member team",
    role: "Team Leader & Full-Stack Developer",
    impact:
      "Designed to improve operational efficiency across multiple food bank locations",
  },
  {
    id: "fragments",
    title: "Fragments Microservice",
    subtitle: "Cloud-Native Data Processing Platform",
    description:
      "An enterprise-grade microservice for managing and converting various data formats including text, images, and structured data with AWS cloud integration and comprehensive authentication.",
    fullDescription:
      "The Fragments Microservice is an enterprise-grade solution supporting multiple data formats including plain text, Markdown, HTML, CSV, JSON, YAML, and various image formats. Built with scalable AWS architecture, it features multi-level authentication, fragment versioning, and advanced search functionality with 95%+ test coverage.",
    image: "/images/projects/fragments.jpg",
    category: "cloud",
    technologies: [
      "Node.js",
      "Express.js",
      "AWS (EC2, S3, DynamoDB, Cognito)",
      "Docker",
      "GitHub Actions",
      "JWT Authentication",
      "Sharp",
      "markdown-it",
    ],
    keyFeatures: [
      "RESTful API for CRUD operations on text and image fragments",
      "Real-time format conversion (Markdown to HTML, JSON to YAML, image formats)",
      "Multi-level authentication with AWS Cognito and HTTP Basic Auth",
      "Fragment versioning system with restore capabilities",
      "Advanced search functionality with filtering options",
      "Scalable cloud architecture processing 100,000+ fragments",
    ],
    techHighlights: [
      "Microservices architecture with Docker containerization",
      "Dual storage strategy (AWS DynamoDB/S3 vs in-memory)",
      "Complete CI/CD pipeline with automated deployment",
      "Comprehensive testing suite with 95%+ code coverage",
      "Enterprise-grade security with data isolation",
      "Cross-platform compatibility and performance optimization",
    ],
    github: "https://github.com/cSuarez13/fragments",
    githubUI: "https://github.com/cSuarez13/fragments-ui",
    videoDemo: "https://youtu.be/3HtiJwWAnWk",
    developmentPeriod: "5 months",
    teamSize: "Individual Project",
    role: "Full-Stack Developer & DevOps Engineer",
    testCoverage: "95%+",
  },
  {
    id: "hotel-system",
    title: "Hotel ABC Reservation System",
    subtitle: "Desktop Hotel Management Application",
    description:
      "A comprehensive hotel management desktop application featuring dual interfaces: a customer-facing kiosk for self-service bookings and an administrative dashboard for hotel staff management.",
    fullDescription:
      "Built with Java and JavaFX, this system handles complete hotel operations from room booking to checkout with integrated billing and reporting. Features include multi-room booking support, real-time availability checking, automated billing with tax calculations, and network-enabled remote administration capabilities.",
    image: "/images/projects/hotel.jpg",
    category: "desktop",
    technologies: [
      "Java",
      "JavaFX",
      "FXML",
      "JDBC",
      "SQLite",
      "CSS",
      "Socket Programming",
      "MVC Architecture",
    ],
    keyFeatures: [
      "Self-service kiosk interface with touch-friendly UI",
      "Administrative dashboard for comprehensive management",
      "Multi-room booking system with guest distribution",
      "Real-time room availability with date-based filtering",
      "Integrated billing system with tax calculations",
      "Comprehensive reporting module for hotel analytics",
      "Remote administration with network-enabled server",
    ],
    techHighlights: [
      "MVC architecture with clear separation of concerns",
      "Normalized relational database with 8+ interconnected tables",
      "Responsive design adapting to different screen sizes",
      "Service-oriented architecture for easy maintenance",
      "Comprehensive validation and transaction management",
      "Multi-threaded client-server architecture",
    ],
    github: "https://github.com/cSuarez13/Hotel_Management_Desktop_App",
    videoDemo: "https://youtu.be/KbA_9wrV6vc",
    developmentPeriod: "3 months",
    teamSize: "Team of 3",
    role: "Lead Developer & System Architect",
    businessImpact:
      "Demonstrates enterprise-level application development for hospitality industry",
  },
  {
    id: "kaleidoscope",
    title: "Kaleidoscope",
    subtitle: "3D Puzzle-Platformer Game",
    description:
      "An innovative 3D puzzle-platformer where players restore a colorless world through dynamic color manipulation mechanics, featuring revolutionary gameplay and comprehensive business planning.",
    fullDescription:
      "Led a 3-person team through complete game development lifecycle from concept to working prototype. Created revolutionary color-mixing shrine systems with procedural animations, achieved 79% polygon optimization while maintaining visual fidelity, and developed a comprehensive business plan with market research and financial projections targeting the accessibility-focused gaming market.",
    image: "/images/projects/kaleidoscope.jpg",
    category: "game",
    technologies: [
      "Unity Engine",
      "C#",
      "Blender",
      "Python",
      "UV Mapping",
      "Procedural Generation",
      "3D Modeling",
    ],
    keyFeatures: [
      "Revolutionary color manipulation physics system",
      "Procedural cave generation and shrine architecture",
      "Advanced character rigging and animation systems",
      "Accessibility-first design with colorblind support",
      "Cross-platform optimization (Steam Deck compatible)",
      "Comprehensive business plan with $2.8M revenue projections",
    ],
    techHighlights: [
      "Unity 3D game development with cross-platform optimization",
      "Blender mastery: complex modeling, rigging, and animations",
      "Python automation achieving 300% workflow efficiency gains",
      "79% polygon optimization (116K→24K triangles)",
      "Procedural generation systems for dynamic content",
      "Performance optimization maintaining AAA visual quality",
    ],
    driveLink:
      "https://drive.google.com/file/d/1lAmESOFg0vF07ZFYAeKwDd30qdYNQ_m3/view?usp=drive_link",
    developmentPeriod: "30 months",
    teamSize: "Team Lead of 3",
    role: "Project Director, Lead Developer & Technical Artist",
    businessPlan: "$596K development budget, $2.8M projected revenue",
    targetMarket: "Accessibility-focused gaming market",
  },
  {
    id: "popcorn-buddy",
    title: "PopcornBuddy",
    subtitle: "Full-Stack Movie Discovery Platform",
    description:
      "A comprehensive movie information web application that allows users to discover, manage, and review movies with real-time search and personalized collections.",
    fullDescription:
      "PopcornBuddy provides a seamless experience for movie enthusiasts to browse trending films, manage personal collections, and engage with content. Features secure authentication, real-time search capabilities, and comprehensive integration with The Movie Database API for up-to-date movie information and recommendations.",
    image: "/images/projects/popcorn-buddy.jpg",
    category: "web",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "The Movie Database API",
      "JWT Authentication",
      "Material-UI",
      "Axios",
    ],
    keyFeatures: [
      "Real-time movie search and discovery functionality",
      "Personal movie collections and customizable watchlists",
      "User reviews and comprehensive rating system",
      "Trending movies with personalized recommendations",
      "Detailed movie information with cast and crew details",
      "Fully responsive design for mobile and desktop platforms",
    ],
    techHighlights: [
      "RESTful API design and implementation",
      "Third-party API integration with efficient data processing",
      "User authentication and secure session management",
      "NoSQL database design and query optimization",
      "Modern React development with functional components and hooks",
      "Material Design implementation with custom theming",
    ],
    github: "https://github.com/mikeylim/PopcornBuddy",
    liveLink: "https://popcornbuddy.vercel.app/",
    developmentPeriod: "2 months",
    teamSize: "Team of 2",
    role: "Full-Stack Developer & UI/UX Designer",
  },
  {
    id: "lost-item-app",
    title: "Lost Item Tracker",
    subtitle: "Android Mobile Application",
    description:
      "A comprehensive Android application for reporting and tracking lost items with location services, real-time notifications, and community-based recovery system.",
    fullDescription:
      "The Lost Item Tracker is a full-featured Android application that helps users report lost items and connect with finders in their community. Built with Java and Android SDK, it features GPS integration for location tracking, push notifications for match alerts, and a user-friendly interface for seamless item reporting and recovery coordination.",
    image: "/images/projects/lost-item.jpg",
    category: "mobile",
    technologies: [
      "Java",
      "Android SDK",
      "SQLite",
      "Google Maps API",
      "Firebase",
      "Material Design",
      "GPS Location Services",
    ],
    keyFeatures: [
      "Intuitive lost item reporting with photo uploads",
      "GPS-based location tracking and mapping",
      "Real-time push notifications for potential matches",
      "Community-driven item recovery system",
      "Secure user authentication and profile management",
      "Advanced search and filtering capabilities",
    ],
    techHighlights: [
      "Native Android development with Java",
      "Integration with Google Maps for location visualization",
      "SQLite database for local data storage and caching",
      "Firebase backend for real-time data synchronization",
      "Material Design principles for intuitive user experience",
      "GPS services for accurate location tracking",
    ],
    github: "https://github.com/cSuarez13/LostItem_AndroidApp",
    videoDemo: "https://youtu.be/MQ-g0DGq-gM",
    developmentPeriod: "2 months",
    teamSize: "Individual Project",
    role: "Mobile Developer & UI/UX Designer",
  },
  {
    id: "covid-simulation",
    title: "COVID-19 Simulation Model",
    subtitle: "Advanced Epidemiological Modeling System",
    description:
      "A sophisticated Monte Carlo simulation model for COVID-19 transmission dynamics, designed for public health decision-making with high statistical accuracy.",
    fullDescription:
      "Developed for local public health authorities, this model differentiates between diagnosed/undetected cases and categorizes infections by symptom severity. Achieved highly accurate predictions with relative errors under 1% when validated against real epidemiological data from Cárdenas municipality (154,204 population). The model successfully estimated over 1,000 undetected COVID-19 cases.",
    image: "/images/projects/covid-simulation.jpg",
    category: "research",
    technologies: [
      "Python",
      "NumPy",
      "Matplotlib",
      "Microsoft Excel",
      "Monte Carlo Simulation",
      "Statistical Analysis",
      "Pandas",
    ],
    keyFeatures: [
      "SIDARTHE compartmental model with 8-state population dynamics",
      "Monte Carlo simulation for uncertainty modeling and analysis",
      "Parameter estimation using real-world epidemiological data",
      "Statistical validation with comprehensive normality testing",
      "Geographic positioning with uniform distribution modeling",
      "Policy impact assessment capabilities for public health decisions",
    ],
    techHighlights: [
      "Advanced statistical computing with Python ecosystem",
      "Stochastic simulation using probability distributions",
      "Model validation achieving 0.022% relative error for cases",
      "Sensitivity analysis through 50-simulation averaging",
      "Integration with real epidemiological data sources",
      "Scalable framework adaptable to different geographic regions",
    ],
    developmentPeriod: "4 months",
    teamSize: "Individual Research Project",
    role: "Research Scientist & Model Developer",
    accuracy: "0.022% relative error for cases, 0.917% for deaths",
    impact: "Successfully estimated over 1,000 undetected COVID-19 cases",
  },
];

// Helper function to get filtered projects
export const getFilteredProjects = (categoryId) => {
  if (!projects || !Array.isArray(projects)) {
    return [];
  }
  if (categoryId === "all") {
    return projects;
  }
  return projects.filter((project) => project.category === categoryId);
};

// Helper function to get project by ID
export const getProjectById = (id) => {
  if (!projects || !Array.isArray(projects)) {
    return null;
  }
  return projects.find((project) => project.id === id);
};

// Create the default export object
const projectsData = {
  projectCategories,
  projects,
  getFilteredProjects,
  getProjectById,
};

export default projectsData;
