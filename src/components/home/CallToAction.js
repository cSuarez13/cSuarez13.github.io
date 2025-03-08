import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-purple-600/10 to-purple-900/10 dark:from-purple-900/30 dark:to-dark-900"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-700 dark:text-purple-400">
            Let's Work Together
          </h2>
          
          <p className="text-lg text-dark-700 dark:text-dark-200 max-w-2xl mx-auto mb-10">
            I'm currently looking for new opportunities to apply my skills and contribute to 
            innovative projects. Whether you have a project in mind or just want to connect, 
            I'd love to hear from you!
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/projects"
              className="px-6 py-3 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors duration-300 flex items-center justify-center gap-2 font-medium"
            >
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </Link>
            
            <Link 
              href="/contact"
              className="px-6 py-3 rounded-lg border-2 border-purple-700 dark:border-purple-500 text-purple-700 dark:text-purple-400 hover:bg-purple-700/10 dark:hover:bg-purple-700/20 transition-colors duration-300 font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;