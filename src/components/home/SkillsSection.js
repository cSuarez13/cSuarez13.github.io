import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp } from "lucide-react";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllSkills, setShowAllSkills] = useState(false);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Programming Languages" },
    { id: "frontend", name: "Frontend & Web" },
    { id: "backend", name: "Backend & APIs" },
    { id: "database", name: "Database & Data" },
    { id: "mobile", name: "Mobile Development" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "mathematics", name: "Mathematics & Analytics" },
    { id: "tools", name: "Tools & Frameworks" },
  ];

  const skills = [
    // Programming Languages
    {
      name: "Python",
      category: "languages",
      level: 95,
      description: "Statistical modeling, data analysis, automation",
    },
    {
      name: "JavaScript (ES6+)",
      category: "languages",
      level: 90,
      description: "Modern JS, async/await, DOM manipulation",
    },
    {
      name: "TypeScript",
      category: "languages",
      level: 85,
      description: "Type-safe development, React Native projects",
    },
    {
      name: "C++",
      category: "languages",
      level: 95,
      description: "Advanced OOP, STL, memory management",
    },
    {
      name: "C",
      category: "languages",
      level: 95,
      description: "System programming, algorithms, data structures",
    },
    {
      name: "Java",
      category: "languages",
      level: 85,
      description: "Desktop applications, enterprise development",
    },
    {
      name: "Kotlin",
      category: "languages",
      level: 85,
      description: "Android development, cross-platform apps",
    },
    {
      name: "SQL",
      category: "languages",
      level: 90,
      description: "Complex queries, stored procedures, optimization",
    },
    {
      name: "PL/SQL",
      category: "languages",
      level: 85,
      description: "Oracle database programming, functions, packages",
    },
    {
      name: "R",
      category: "languages",
      level: 75,
      description: "Statistical computing, data visualization",
    },
    {
      name: "Shell Scripting",
      category: "languages",
      level: 80,
      description: "Linux automation, system administration",
    },

    // Frontend & Web
    {
      name: "React.js",
      category: "frontend",
      level: 90,
      description: "Hooks, Context API, component architecture",
    },
    {
      name: "Next.js",
      category: "frontend",
      level: 85,
      description: "SSR, API routes, full-stack applications",
    },
    {
      name: "HTML5",
      category: "frontend",
      level: 95,
      description: "Semantic markup, accessibility, modern standards",
    },
    {
      name: "CSS3",
      category: "frontend",
      level: 90,
      description: "Grid, Flexbox, animations, responsive design",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: 90,
      description: "Utility-first styling, custom configurations",
    },
    {
      name: "Bootstrap",
      category: "frontend",
      level: 80,
      description: "Responsive frameworks, component libraries",
    },
    {
      name: "Responsive Design",
      category: "frontend",
      level: 95,
      description: "Mobile-first, cross-device compatibility",
    },

    // Backend & APIs
    {
      name: "Node.js",
      category: "backend",
      level: 90,
      description: "Server-side JavaScript, microservices",
    },
    {
      name: "Express.js",
      category: "backend",
      level: 85,
      description: "RESTful APIs, middleware, routing",
    },
    {
      name: "RESTful APIs",
      category: "backend",
      level: 85,
      description: "API design, HTTP protocols, authentication",
    },
    {
      name: "JWT Authentication",
      category: "backend",
      level: 80,
      description: "Secure authentication, session management",
    },
    {
      name: "Middleware Development",
      category: "backend",
      level: 80,
      description: "Custom middleware, request processing",
    },
    {
      name: "EJS",
      category: "backend",
      level: 80,
      description: "Server-side templating, dynamic content",
    },
    {
      name: "OAuth Integration",
      category: "backend",
      level: 75,
      description: "Third-party authentication flows",
    },

    // Database & Data
    {
      name: "Oracle SQL",
      category: "database",
      level: 90,
      description: "Advanced queries, performance tuning",
    },
    {
      name: "MongoDB",
      category: "database",
      level: 85,
      description: "NoSQL, aggregation pipelines, indexing",
    },
    {
      name: "PostgreSQL",
      category: "database",
      level: 80,
      description: "Relational databases, complex joins",
    },
    {
      name: "Microsoft SQL Server",
      category: "database",
      level: 80,
      description: "Enterprise database management",
    },
    {
      name: "Mongoose ODM",
      category: "database",
      level: 80,
      description: "MongoDB object modeling, schemas",
    },
    {
      name: "Database Design",
      category: "database",
      level: 90,
      description: "ERD modeling, normalization, constraints",
    },
    {
      name: "Data Analysis",
      category: "database",
      level: 90,
      description: "Statistical analysis, data interpretation",
    },
    {
      name: "Room Database",
      category: "database",
      level: 80,
      description: "Android local storage, SQLite",
    },

    // Mobile Development
    {
      name: "React Native",
      category: "mobile",
      level: 85,
      description: "Cross-platform mobile apps, native features",
    },
    {
      name: "Android (Kotlin)",
      category: "mobile",
      level: 85,
      description: "Native Android development, Material Design",
    },
    {
      name: "Mobile UI/UX",
      category: "mobile",
      level: 80,
      description: "Mobile-first design, user experience",
    },
    {
      name: "Expo",
      category: "mobile",
      level: 80,
      description: "React Native development, rapid prototyping",
    },
    {
      name: "Android Studio",
      category: "mobile",
      level: 80,
      description: "IDE proficiency, debugging, testing",
    },
    {
      name: "JavaFX",
      category: "mobile",
      level: 75,
      description: "Desktop GUI applications, cross-platform",
    },

    // Cloud & DevOps
    {
      name: "AWS",
      category: "cloud",
      level: 80,
      description: "EC2, S3, DynamoDB, Lambda, deployment",
    },
    {
      name: "Docker",
      category: "cloud",
      level: 75,
      description: "Containerization, multi-stage builds",
    },
    {
      name: "CI/CD",
      category: "cloud",
      level: 80,
      description: "GitHub Actions, automated deployment",
    },
    {
      name: "Git",
      category: "cloud",
      level: 95,
      description: "Version control, collaboration, workflows",
    },
    {
      name: "GitHub",
      category: "cloud",
      level: 95,
      description: "Repository management, code review",
    },
    {
      name: "Linux/Unix",
      category: "cloud",
      level: 85,
      description: "System administration, command line",
    },
    {
      name: "Cloud Architecture",
      category: "cloud",
      level: 75,
      description: "Microservices, scalable systems",
    },

    // Mathematics & Analytics
    {
      name: "Advanced Mathematics",
      category: "mathematics",
      level: 95,
      description: "Calculus, differential equations, analysis",
    },
    {
      name: "Statistical Modeling",
      category: "mathematics",
      level: 95,
      description: "Regression, hypothesis testing, inference",
    },
    {
      name: "Epidemiological Modeling",
      category: "mathematics",
      level: 90,
      description: "SIDARTHE models, disease simulation",
    },
    {
      name: "Monte Carlo Simulation",
      category: "mathematics",
      level: 85,
      description: "Stochastic modeling, uncertainty analysis",
    },
    {
      name: "Algorithm Design",
      category: "mathematics",
      level: 90,
      description: "Complexity analysis, optimization",
    },
    {
      name: "Data Structures",
      category: "mathematics",
      level: 90,
      description: "Trees, graphs, hash tables, algorithms",
    },
    {
      name: "Mathematical Optimization",
      category: "mathematics",
      level: 85,
      description: "Linear programming, optimization theory",
    },
    {
      name: "Probability Theory",
      category: "mathematics",
      level: 90,
      description: "Distributions, random processes",
    },
    {
      name: "Numerical Methods",
      category: "mathematics",
      level: 80,
      description: "Computational mathematics, approximation",
    },

    // Tools & Frameworks
    {
      name: "VS Code",
      category: "tools",
      level: 95,
      description: "Primary IDE, extensions, debugging",
    },
    {
      name: "Blender",
      category: "tools",
      level: 80,
      description: "3D modeling, game content creation",
    },
    {
      name: "Unity",
      category: "tools",
      level: 75,
      description: "Game development, 3D applications",
    },
    {
      name: "Matplotlib/NumPy",
      category: "tools",
      level: 90,
      description: "Python data visualization, scientific computing",
    },
    {
      name: "Jupyter Notebooks",
      category: "tools",
      level: 85,
      description: "Data analysis, research documentation",
    },
    {
      name: "Figma",
      category: "tools",
      level: 75,
      description: "UI/UX design, prototyping",
    },
    {
      name: "Postman",
      category: "tools",
      level: 80,
      description: "API testing, documentation",
    },
    {
      name: "Gradle",
      category: "tools",
      level: 75,
      description: "Build automation, dependency management",
    },
    {
      name: "Maven",
      category: "tools",
      level: 70,
      description: "Project management, build lifecycle",
    },
    {
      name: "Jest",
      category: "tools",
      level: 75,
      description: "JavaScript testing framework",
    },
  ];

  // Get filtered skills based on active category
  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      // Sort all skills by level in descending order
      const sortedSkills = [...skills].sort((a, b) => b.level - a.level);
      // If showAllSkills is false, return only top 9
      return showAllSkills ? sortedSkills : sortedSkills.slice(0, 9);
    } else {
      // For specific categories, show all skills in that category
      return skills.filter((skill) => skill.category === activeCategory);
    }
  };

  const filteredSkills = getFilteredSkills();

  // Check if there are more than 9 skills to show the expand button
  const hasMoreSkills = activeCategory === "all" && skills.length > 9;

  // Reset showAllSkills when category changes
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId !== "all") {
      setShowAllSkills(false);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-purple-700 dark:text-purple-400">
          Technical Expertise & Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Full-stack developer with strong mathematical background and expertise
          in modern technologies. Experience ranges from algorithmic
          problem-solving to scalable web applications and mobile development.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-medium ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>

                {skill.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {skill.description}
                  </p>
                )}

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-700 h-2.5 rounded-full transition-all duration-1000 ease-out shadow-sm"
                    style={{ width: inView ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Proficiency</span>
                  <span>
                    {skill.level >= 90
                      ? "Expert"
                      : skill.level >= 80
                      ? "Advanced"
                      : skill.level >= 70
                      ? "Intermediate"
                      : "Developing"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button for All Skills */}
        {hasMoreSkills && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>{showAllSkills ? "Show Less" : `See All Skills`}</span>
              {showAllSkills ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
