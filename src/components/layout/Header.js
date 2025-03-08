import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Avatar */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-purple-400 dark:border-purple-600 shadow-sm">
              <Image 
                src="/images/myImg.jpg" 
                alt="Claudia's Avatar" 
                width={48} 
                height={48} 
                className="object-cover"
              />
            </div>
            <Link href="/" className="text-2xl font-bold text-purple-700 dark:text-purple-400 transition-colors duration-300">
              Claudia Suarez
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  router.pathname === item.path
                    ? 'text-purple-600 dark:text-purple-300 font-semibold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]'
                    : 'text-dark-600 dark:text-dark-300 hover:text-purple-500 dark:hover:text-purple-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Animated Resume Button */}
            <a 
              href="/resume/myResume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 rounded-md text-base font-medium relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 transform group-hover:scale-110"></span>
              <span className="absolute inset-0 w-full h-full bg-purple-700 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
              <span className="relative flex items-center text-white">
                <Download size={18} className="mr-2 group-hover:animate-bounce" />
                Resume
              </span>
            </a>
          </nav>
          
          {/* Theme Toggle Button (right corner on desktop) */}
          <div className="hidden md:block">
            <ThemeToggle size="large" />
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            {/* Theme Toggle */}
            <div className="mr-2">
              <ThemeToggle />
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-dark-900 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === item.path
                  ? 'text-purple-600 dark:text-purple-300 font-semibold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]'
                  : 'text-dark-600 dark:text-dark-300 hover:text-purple-500 dark:hover:text-purple-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Resume Button (Mobile) */}
          <a 
            href="/resume/myResume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 transition-colors duration-200 text-center flex items-center justify-center"
          >
            <Download size={16} className="mr-2 animate-bounce" />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;