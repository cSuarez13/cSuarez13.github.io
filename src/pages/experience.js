// src/pages/experience.js
import { useState } from "react";
import Layout from "../components/layout/Layout";
import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";
import experienceData from "../data/experienceData";

export default function Experience() {
  const [filter, setFilter] = useState("all"); // 'all', 'education', 'work'

  // Get timeline data in the exact order requested
  const getAllTimelineData = () => {
    let data = [];

    if (filter === "all") {
      const seneca = experienceData.education.find(
        (item) => item.id === "seneca"
      );
      const fsra = experienceData.work.find((item) => item.id === "fsra-coop");
      const teaching = experienceData.work.find(
        (item) => item.id === "teaching"
      );
      const research = experienceData.work.find(
        (item) => item.id === "research-assistant"
      );
      const havana = experienceData.education.find(
        (item) => item.id === "havana"
      );

      if (seneca) data.push({ ...seneca, type: "education" });
      if (fsra) data.push({ ...fsra, type: "work" });
      if (teaching) data.push({ ...teaching, type: "work" });
      if (research) data.push({ ...research, type: "work" });
      if (havana) data.push({ ...havana, type: "education" });
    } else if (filter === "education") {
      // For education filter, show most recent first
      data = [
        ...experienceData.education.map((item) => ({
          ...item,
          type: "education",
        })),
      ];
    } else if (filter === "work") {
      // For work filter, show most recent first
      const fsra = experienceData.work.find((item) => item.id === "fsra-coop");
      const teaching = experienceData.work.find(
        (item) => item.id === "teaching"
      );
      const research = experienceData.work.find(
        (item) => item.id === "research-assistant"
      );

      if (fsra) data.push({ ...fsra, type: "work" });
      if (teaching) data.push({ ...teaching, type: "work" });
      if (research) data.push({ ...research, type: "work" });
    }

    return data;
  };

  // Get timeline data
  const timelineData = getAllTimelineData();

  return (
    <Layout
      title="Experience & Education - Claudia Suarez"
      description="Claudia Suarez's education and professional experience"
    >
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-400 text-center mt-8 mb-12">
          Experience & Education
        </h1>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "all"
                ? "bg-purple-600 text-white dark:bg-purple-700"
                : "bg-dark-100 text-dark-700 dark:bg-dark-800 dark:text-dark-300 hover:bg-purple-100 dark:hover:bg-purple-900/30"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("education")}
            className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center ${
              filter === "education"
                ? "bg-purple-600 text-white dark:bg-purple-700"
                : "bg-dark-100 text-dark-700 dark:bg-dark-800 dark:text-dark-300 hover:bg-purple-100 dark:hover:bg-purple-900/30"
            }`}
          >
            <GraduationCap size={16} className="mr-2" />
            Education
          </button>
          <button
            onClick={() => setFilter("work")}
            className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center ${
              filter === "work"
                ? "bg-purple-600 text-white dark:bg-purple-700"
                : "bg-dark-100 text-dark-700 dark:bg-dark-800 dark:text-dark-300 hover:bg-purple-100 dark:hover:bg-purple-900/30"
            }`}
          >
            <Briefcase size={16} className="mr-2" />
            Work Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="relative mb-24">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900/50 rounded-full"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isEducation={item.type === "education"}
              />
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 text-center mb-12">
            Achievements & Awards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData.achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Timeline Item Component with animation
function TimelineItem({ item, index, isEducation }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-1000 ease-out`}
    >
      {/* Content for large screens - education on right, work on left */}
      <div
        className={`hidden md:block md:w-1/2 ${
          !isEducation ? "md:pr-12 text-right" : "order-2"
        }`}
      >
        {!isEducation && <TimelineContent item={item} align="right" />}
      </div>

      {/* Timeline node */}
      <div className="flex items-center justify-center z-10 h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 border-4 border-purple-200 dark:border-purple-800 shadow-md">
        <span className="text-purple-700 dark:text-purple-300">
          {item.icon ||
            (isEducation ? (
              <GraduationCap size={20} />
            ) : (
              <Briefcase size={20} />
            ))}
        </span>
      </div>

      {/* Content for large screens - education on right, work on left */}
      <div
        className={`hidden md:block md:w-1/2 ${
          isEducation ? "md:pl-12" : "order-first"
        }`}
      >
        {isEducation && <TimelineContent item={item} align="left" />}
      </div>

      {/* Content for mobile - always below the node */}
      <div className="md:hidden w-full pl-6 mt-4">
        <TimelineContent item={item} />
      </div>
    </div>
  );
}

// Timeline Content Component
function TimelineContent({ item, align = "left" }) {
  return (
    <div className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-md border border-dark-100 dark:border-dark-800 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">
          {item.title}
        </h3>
        <span className="text-sm font-medium text-dark-500 dark:text-dark-400 bg-dark-100 dark:bg-dark-800 px-3 py-1 rounded-full flex items-center">
          <Calendar size={14} className="mr-1" />
          {item.date}
        </span>
      </div>

      <h4 className="text-lg font-semibold text-dark-700 dark:text-dark-300 mb-2">
        {item.subtitle}
      </h4>

      <p className="text-dark-600 dark:text-dark-400 mb-4">
        {item.description}
      </p>

      {item.highlights && item.highlights.length > 0 && (
        <div>
          <h5 className="font-semibold text-dark-700 dark:text-dark-300 mb-2">
            Key Highlights:
          </h5>
          <ul
            className={`list-disc ${
              align === "right" ? "list-inside" : "ml-5"
            } text-dark-600 dark:text-dark-400 space-y-1`}
          >
            {item.highlights.map((highlight, i) => (
              <li key={i} className="text-sm">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Achievement Card Component
function AchievementCard({ achievement }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-dark-900 p-6 rounded-lg shadow-md border border-purple-100 dark:border-purple-800/50 hover:shadow-lg transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900">
            <span className="text-purple-700 dark:text-purple-300">
              {achievement.icon}
            </span>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400">
            {achievement.title}
          </h3>
          <div className="flex justify-between items-center mb-2">
            <p className="text-dark-700 dark:text-dark-300 font-medium">
              {achievement.subtitle}
            </p>
            <span className="text-sm font-medium text-dark-500 dark:text-dark-400">
              {achievement.date}
            </span>
          </div>
          <p className="text-dark-600 dark:text-dark-400">
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );
}
