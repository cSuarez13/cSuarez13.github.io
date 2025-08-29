// src/data/projectsData.js

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "mobile", name: "Mobile Development" },
  { id: "web", name: "Web Development" },
  { id: "cloud", name: "Cloud & Enterprise" },
  { id: "desktop", name: "Desktop Applications" },
  { id: "game", name: "Game Development" },
  { id: "research", name: "Research & Data Science" },
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
      "PostgreSQL",
      "Sequelize ORM",
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
      "Scalable database schema supporting multiple user roles",
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
    subtitle: "Cloud-Based Data Management System",
    description:
      "A comprehensive cloud-based microservice designed for a Canadian manufacturing company to handle small text and image fragments with real-time format conversion capabilities.",
    fullDescription:
      "The Fragments Microservice is an enterprise-grade solution supporting multiple data formats including plain text, Markdown, HTML, CSV, JSON, YAML, and various image formats. Built with scalable AWS architecture, it features multi-level authentication, fragment versioning, and advanced search functionality.",
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
      "Built with Java and JavaFX, this system handles complete hotel operations from room booking to checkout with integrated billing and reporting. Features include multi-room booking support, real-time availability checking, automated billing with tax calculations, and network-enabled remote administration.",
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
    ],
    keyFeatures: [
      "Self-service kiosk interface with touch-friendly UI",
      "Administrative dashboard for comprehensive management",
      "Multi-room booking system with guest distribution",
      "Real-time room availability with date-based filtering",
      "Integrated billing system with tax calculations",
      "Reporting module for hotel analytics",
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
    github: "https://github.com/cSuarez13/APD_Final_Project",
    videoDemo: "https://youtu.be/KbA_9wrV6vc",
    developmentPeriod: "3 months",
    teamSize: "Team of 3",
    role: "Lead Developer & System Architect",
    businessImpact:
      "Demonstrates enterprise-level application development for hospitality industry",
  },

  // ADDITIONAL PROJECTS FOR SPECIFIC ROLES
  {
    id: "kaleidoscope",
    title: "Kaleidoscope",
    subtitle: "3D Puzzle-Platformer Game",
    description:
      "An innovative 3D puzzle-platformer where players restore a colorless world through dynamic color manipulation mechanics, featuring revolutionary gameplay and comprehensive business planning.",
    fullDescription:
      "Led a 3-person team through complete game development lifecycle from concept to working prototype. Created revolutionary color-mixing shrine systems with procedural animations, achieved 79% polygon optimization while maintaining visual fidelity, and developed a comprehensive business plan with market research and financial projections.",
    image: "/images/projects/kaleidoscope.jpg",
    category: "game",
    technologies: [
      "Unity Engine",
      "Blender",
      "Python",
      "C#",
      "UV Mapping",
      "Procedural Generation",
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
      "PopcornBuddy provides a seamless experience for movie enthusiasts to browse trending films, manage personal collections, and engage with content. Features secure authentication, real-time search, and integration with The Movie Database API.",
    image: "/images/projects/popcorn-buddy.jpg",
    category: "web",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "JWT",
      "Tailwind CSS",
      "TMDB API",
      "Vercel",
    ],
    keyFeatures: [
      "Movie discovery with trending, popular, and top-rated categories",
      "User authentication with JWT-based security",
      "Personal collections (favorites and watchlists)",
      "Real-time search with instant results",
      "User review and rating system",
      "Fully responsive design for all devices",
    ],
    techHighlights: [
      "Next.js full-stack development with API routes",
      "MongoDB complex schemas with nested arrays",
      "JWT authentication with refresh token mechanism",
      "Real-time TMDB API integration",
      "Responsive UI with Tailwind CSS",
      "Deployed on Vercel with environment configuration",
    ],
    github: "https://github.com/mikeylim/PopcornBuddy",
    liveLink: "https://popcornbuddy.vercel.app/",
    developmentPeriod: "2 months",
    teamSize: "Team of 2",
    role: "Full-Stack Developer & UI/UX Designer",
  },
  {
    id: "lost-item-app",
    title: "LostItem Android App",
    subtitle: "Community-Based Lost & Found Platform",
    description:
      "A native Android application that connects people who have lost items with those who have found them, featuring location mapping and direct communication.",
    fullDescription:
      "This comprehensive mobile application provides a platform for reporting lost items with location data, photos, and contact information. Features interactive Google Maps integration, offline-first architecture, and cross-app SMS communication.",
    image: "/images/projects/lost-item.jpg",
    category: "mobile",
    technologies: [
      "Kotlin",
      "Android SDK",
      "Room Database",
      "Google Maps API",
      "SQLite",
      "Android Studio",
    ],
    keyFeatures: [
      "Item reporting with detailed information and photos",
      "Interactive Google Maps with location markers",
      "Search and browse functionality with filtering",
      "One-tap SMS messaging for direct communication",
      "Photo documentation for item verification",
      "Offline-first architecture with local storage",
    ],
    techHighlights: [
      "Native Android development with Kotlin",
      "Room database for offline data persistence",
      "Google Maps integration with custom markers",
      "Geocoder implementation for address-to-GPS conversion",
      "Cross-app SMS integration using Android intents",
      "Custom ListView adapters for efficient data presentation",
    ],
    github: "https://github.com/cSuarez13/LostItem_AndroidApp",
    videoDemo: "https://youtu.be/MQ-g0DGq-gM",
    developmentPeriod: "2 months",
    teamSize: "Individual Project",
    role: "Android Developer & UI/UX Designer",
  },
  {
    id: "covid-model",
    title: "COVID-19 Transmission Simulation",
    subtitle: "Epidemiological Research Model",
    description:
      "A sophisticated stochastic simulation model to predict COVID-19 pandemic evolution in local municipalities using the advanced SIDARTHE compartmental framework.",
    fullDescription:
      "Developed for local public health authorities, this model differentiates between diagnosed/undetected cases and categorizes infections by symptom severity. Achieved highly accurate predictions with relative errors under 1% when validated against real epidemiological data from Cárdenas municipality (154,204 population).",
    image: "/images/projects/covid-simulation.jpg",
    category: "research",
    technologies: [
      "Python",
      "NumPy",
      "Matplotlib",
      "Microsoft Excel",
      "Monte Carlo Simulation",
      "Statistical Analysis",
    ],
    keyFeatures: [
      "SIDARTHE compartmental model with 8-state population dynamics",
      "Monte Carlo simulation for uncertainty modeling",
      "Parameter estimation using real-world data",
      "Statistical validation with normality testing",
      "Geographic positioning with uniform distribution",
      "Policy impact assessment capabilities",
    ],
    techHighlights: [
      "Advanced statistical computing with Python",
      "Stochastic simulation using probability distributions",
      "Model validation achieving 0.022% relative error for cases",
      "Sensitivity analysis through 50-simulation averaging",
      "Integration with real epidemiological data",
      "Scalable framework for different geographic regions",
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
  if (categoryId === "all") {
    return projects;
  }
  return projects.filter((project) => project.category === categoryId);
};

// Helper function to get project by ID
export const getProjectById = (id) => {
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
