import React from "react";

const ProjectsFilter = ({
  categories = [],
  activeCategory,
  setActiveCategory,
}) => {
  // Safety check for categories
  if (!categories || !Array.isArray(categories)) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
            activeCategory === category.id
              ? "bg-purple-600 text-white shadow-md"
              : "bg-purple-100 dark:bg-purple-900/30 text-dark-700 dark:text-dark-200 hover:bg-purple-200 dark:hover:bg-purple-800/50"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilter;
