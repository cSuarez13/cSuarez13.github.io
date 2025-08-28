import React from "react";
import { Github, Linkedin, Mail, Phone, BookOpen, ArrowUp } from "lucide-react";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Contact Info in 3 columns */}
        <div>
          <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-6 text-center">
            Contact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Email */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center text-dark-600 dark:text-dark-300">
                <Mail
                  size={16}
                  className="mr-2 text-purple-600 dark:text-purple-400"
                />
                <a
                  href="mailto:csuarez.socorro@gmail.com"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  csuarez.socorro@gmail.com
                </a>
              </div>
            </div>

            {/* Column 2: Social Links */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center text-dark-600 dark:text-dark-300">
                <Linkedin
                  size={16}
                  className="mr-2 text-purple-600 dark:text-purple-400"
                />
                <a
                  href="https://www.linkedin.com/in/claudia-suarez-a27b09265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center text-dark-600 dark:text-dark-300">
                <Github
                  size={16}
                  className="mr-2 text-purple-600 dark:text-purple-400"
                />
                <a
                  href="https://github.com/cSuarez13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Column 3: Phone */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center text-dark-600 dark:text-dark-300">
                <Phone
                  size={16}
                  className="mr-2 text-purple-600 dark:text-purple-400"
                />
                <a
                  href="tel:+14374455004"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  +1 (437) 445-5004
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top and Copyright */}
        <div className="mt-8 flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="flex items-center text-dark-600 dark:text-dark-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 mb-4"
          >
            <span className="mr-2">Back to Top</span>
            <ArrowUp size={16} />
          </button>

          <p className="text-dark-500 dark:text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} Claudia Suarez. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
