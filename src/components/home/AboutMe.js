import React from 'react';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="about" 
      ref={ref} 
      className="py-20 px-4 md:px-8 bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-700 dark:text-purple-400">
          About Me
        </h2>
        
        <div className={`transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-4 md:p-6">
            <div className="mx-auto">
              <p className="text-lg text-dark-700 dark:text-dark-200 leading-relaxed mb-6">
                Hello! I'm <span className="font-semibold text-purple-700 dark:text-purple-400">Claudia Suarez</span>, 
                a versatile developer with a background in mathematics. With a B.A. in Mathematics from the University of Havana 
                and currently pursuing an Advanced Diploma in Computer Programming and Analysis at Seneca Polytechnic, 
                I bring a strong analytical foundation and problem-solving mindset to all my technical work.
              </p>
              
              <p className="text-lg text-dark-700 dark:text-dark-200 leading-relaxed mb-6">
                My expertise spans multiple domains including full-stack web development, database management, and data science. 
                I've developed projects ranging from epidemiological modeling and simulation to interactive web applications and movie information systems.
                I'm proficient in Python, JavaScript, C++, SQL, and various frameworks like Node.js, Next.js, and Express.
              </p>
              
              <p className="text-lg text-dark-700 dark:text-dark-200 leading-relaxed">
                I'm constantly expanding my technical toolkit with emerging technologies such as RESTful APIs, AWS, Docker, 
                CI/CD pipelines, and cloud services. My unique combination of mathematical background and diverse programming expertise 
                allows me to approach technical challenges with both creative and analytical perspectives. I'm passionate about continuous learning 
                and excited to apply my skills to build innovative solutions across different computing disciplines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;