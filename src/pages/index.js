import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import SkillsSection from '../components/home/SkillsSection';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <Layout 
      title="Claudia Suarez - Computer Scientist & Mathematician" 
      description="Professional portfolio of Claudia Suarez, a mathematician and computer scientist specializing in responsive web design, software development, database management, and data visualization."
    >
      <Hero />
      <AboutMe />
      <SkillsSection />
      <CallToAction />
    </Layout>
  );
}