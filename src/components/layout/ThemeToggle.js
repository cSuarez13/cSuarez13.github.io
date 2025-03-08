import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ size = 'default' }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Initialize theme based on localStorage or default to dark
  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // If theme is explicitly saved, use it; otherwise, use system preference
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      
      setIsDarkMode(initialTheme === 'dark');
      
      // Apply theme to document
      if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Determine size based on prop
  const buttonSize = size === 'large' ? 'w-12 h-12' : 'w-10 h-10';
  const iconSize = size === 'large' ? 24 : 20;

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center ${buttonSize} rounded-full bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 transition-all duration-300 hover:ring-2 hover:ring-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun size={iconSize} />
      ) : (
        <Moon size={iconSize} />
      )}
    </button>
  );
};

export default ThemeToggle;