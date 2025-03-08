// src/components/experience/Timeline.js
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Bookmark } from 'lucide-react';

// Timeline wrapper component
export function Timeline({ children }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-1 bg-purple-200 dark:bg-purple-900/50 h-full rounded-full"></div>
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
}

// Timeline Item Component with animation
export function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`flex flex-col md:flex-row items-center ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } transition-all duration-1000 ease-out`}
    >
      {/* Content for large screens - alternating left/right */}
      <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:pr-12 text-right' : 'md:pl-12 order-2'}`}>
        {isEven && <TimelineContent item={item} />}
      </div>

      {/* Timeline node */}
      <div className="flex items-center justify-center z-10 h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 border-4 border-purple-200 dark:border-purple-800 shadow-md">
        <span className="text-purple-700 dark:text-purple-300">
          {item.icon || (item.type === 'education' ? <GraduationCap size={20} /> : <Briefcase size={20} />)}
        </span>
      </div>

      {/* Content for large screens - alternating left/right */}
      <div className={`hidden md:block md:w-1/2 ${!isEven ? 'md:pr-12 text-right' : 'md:pl-12 order-2'}`}>
        {!isEven && <TimelineContent item={item} />}
      </div>

      {/* Content for mobile - always below the node */}
      <div className="md:hidden w-full pl-6 mt-4">
        <TimelineContent item={item} />
      </div>
    </div>
  );
}

// Timeline Content Component
export function TimelineContent({ item }) {
  return (
    <div className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-md border border-dark-100 dark:border-dark-800 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">{item.title}</h3>
        <span className="text-sm font-medium text-dark-500 dark:text-dark-400 bg-dark-100 dark:bg-dark-800 px-3 py-1 rounded-full flex items-center">
          <Calendar size={14} className="mr-1" />
          {item.date}
        </span>
      </div>
      
      <h4 className="text-lg font-semibold text-dark-700 dark:text-dark-300 mb-2 flex items-center">
        <MapPin size={16} className="mr-1 text-purple-500 dark:text-purple-400" />
        {item.subtitle}
      </h4>
      
      <p className="text-dark-600 dark:text-dark-400 mb-4">{item.description}</p>
      
      {item.highlights && item.highlights.length > 0 && (
        <div>
          <h5 className="font-semibold text-dark-700 dark:text-dark-300 mb-2 flex items-center">
            <Bookmark size={16} className="mr-1 text-purple-500 dark:text-purple-400" />
            Key Highlights:
          </h5>
          <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-1">
            {item.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Achievement Card Component
export function AchievementCard({ achievement }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-dark-900 p-6 rounded-lg shadow-md border border-purple-100 dark:border-purple-800/50 hover:shadow-lg transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900">
            <span className="text-purple-700 dark:text-purple-300">
              {achievement.icon || <Award size={20} />}
            </span>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400">{achievement.title}</h3>
          <div className="flex justify-between items-center mb-2">
            <p className="text-dark-700 dark:text-dark-300 font-medium">{achievement.subtitle}</p>
            <span className="text-sm font-medium text-dark-500 dark:text-dark-400 flex items-center">
              <Calendar size={14} className="mr-1" />
              {achievement.date}
            </span>
          </div>
          <p className="text-dark-600 dark:text-dark-400">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}

// Filter Buttons Component
export function ExperienceFilter({ filter, setFilter }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        onClick={() => setFilter('all')}
        className={`px-6 py-2 rounded-full transition-all duration-300 ${
          filter === 'all'
            ? 'bg-purple-600 text-white dark:bg-purple-700'
            : 'bg-dark-100 text-dark-700 dark:bg-dark-800 dark:text-dark-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('education')}
        className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center ${
          filter === 'education'
            ? 'bg-purple-600 text-white dark:bg-purple-700'
            : 'bg-dark-100 text-dark-700 dark:bg-dark-800 dark:text-dark-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
        }`}
      >
        <GraduationCap size={16} className="mr-2" />
        Education
      </button>
      <button
        onClick={() => setFilter('work')}
        className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center ${
          filter === 'work'
            ? 'bg-purple-600 text-white dark:bg-purple-700'
            : 'bg-dark-100 text-dark-700 dark:bg-dark-800 dark:text-dark-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
        }`}
      >
        <Briefcase size={16} className="mr-2" />
        Work Experience
      </button>
    </div>
  );
}