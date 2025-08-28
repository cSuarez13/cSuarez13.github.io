import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Code2, Brain, CloudCog, ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [typedText, setTypedText] = useState("");
  const fullText = "Computer Scientist / Mathematician";
  const typingSpeed = 100;

  useEffect(() => {
    if (inView && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [inView, typedText, fullText]);

  // Scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center px-4 relative"
    >
      <div
        className={`transform transition-all duration-1000 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center">
          {/* Small avatar above name */}
          <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-purple-300 dark:border-purple-700 shadow-lg">
            <Image
              src="/images/myIMG.jpg"
              alt="Claudia's Avatar"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center">
            <span className="text-purple-700 dark:text-purple-400">
              Claudia Suarez
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-dark-600 dark:text-dark-200 text-center mt-4 h-8">
            {typedText}
            <span className="inline-block w-1 h-6 bg-purple-500 dark:bg-purple-400 ml-1 animate-blink"></span>
          </h2>
        </div>

        <div className="flex justify-center mt-12 space-x-6">
          <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400">
              <Code2 size={32} />
            </div>
            <span className="mt-2 text-dark-600 dark:text-dark-300">
              Full-Stack Development
            </span>
          </div>

          <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400">
              <Brain size={32} />
            </div>
            <span className="mt-2 text-dark-600 dark:text-dark-300">
              Mathematical Modeling
            </span>
          </div>

          <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400">
              <CloudCog size={32} />
            </div>
            <span className="mt-2 text-dark-600 dark:text-dark-300">
              Cloud Solutions
            </span>
          </div>
        </div>

        <div className="mt-16 flex justify-center w-full">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 focus:outline-none"
            aria-label="Scroll to about section"
          >
            <span className="text-sm mb-2 group-hover:underline">
              Learn more about me
            </span>
            <ChevronDown
              size={24}
              className="animate-bounce group-hover:text-purple-600 dark:group-hover:text-purple-400"
            />
          </button>
        </div>
      </div>

      {/* Background gradient elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;
