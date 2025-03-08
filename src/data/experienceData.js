// src/data/experienceData.js
import { GraduationCap, Briefcase, Award, Code, Database, ChartBar, Layers } from 'lucide-react';

export const experienceData = {
  education: [
    {
      id: 'seneca',
      type: 'education',
      title: 'Seneca Polytechnic',
      subtitle: 'Advanced Diploma in Computer Programming and Analysis (Co-op)',
      date: 'May 2023 - Present',
      description: 'Currently enrolled with expected graduation in December 2025. Cumulative GPA: 3.8/4.0.',
      icon: <GraduationCap size={20} />,
      highlights: [
        'Versatile developer with expertise in full-stack web development, database technologies, and a strong foundation in analytical problem-solving',
        'Dean\'s List recipient',
        'First Semester GPA: 3.9/4'
      ]
    },
    {
      id: 'havana',
      type: 'education',
      title: 'University of Havana',
      subtitle: 'Bachelor of Arts in Mathematics',
      date: '2017 - 2021',
      description: 'Graduated with a GPA of 4.38/5.0. Received highest grade (5/5) on State Exam. Advanced mathematical background with practical experience in computational modeling and data analysis.',
      icon: <GraduationCap size={20} />,
      highlights: [
        'State Exam Grade: 5/5',
        'Advanced Calculus and Mathematical Analysis',
        'Linear Algebra and Matrix Theory',
        'Differential Equations and Numerical Methods',
        'Probability Theory and Statistics',
        'Mathematical Modeling and Simulation'
      ]
    }
  ],
  work: [
    {
      id: 'it-service',
      type: 'work',
      title: 'IT Service Desk Co-op',
      subtitle: 'Seneca Polytechnic',
      date: 'September 2024 - December 2024',
      description: 'Provided comprehensive technical support for students, faculty, and staff across multiple campuses. Troubleshot and resolved hardware, software, and network issues to ensure smooth academic operations.',
      icon: <Briefcase size={20} />,
      highlights: [
        'Resolved technical support tickets with high customer satisfaction rating',
        'Deployed software updates and security patches to multiple devices',
        'Created technical documentation for common issues and resolutions',
        'Collaborated with IT team to implement improved troubleshooting protocols',
        'Provided training sessions for users on common software applications'
      ]
    },
    {
      id: 'teaching',
      type: 'work',
      title: 'Teaching Assistant',
      subtitle: 'University of Havana',
      date: '2020 - 2022',
      description: 'Developed strong communication skills by effectively explaining complex concepts and providing feedback to students of diverse backgrounds and learning styles.',
      icon: <Layers size={20} />,
      highlights: [
        'Demonstrated patience and empathy while working one-on-one with students, understanding their individual needs, and providing personalized support',
        'Utilized strong organizational skills to manage various tasks, including lesson planning, grading, and scheduling, ensuring smooth and efficient classroom operations',
        'Provided exceptional customer service by actively listening to students\' concerns, addressing their questions, and fostering a supportive learning environment',
        'Courses taught: Mathematical Analysis, Ordinary Differential Equations and Statistical Inference'
      ]
    },
    {
      id: 'research',
      type: 'work',
      title: 'Research Assistant',
      subtitle: 'University of Havana',
      date: '2020 - 2022',
      description: 'Led research in epidemiological modeling through developing stochastic simulations in Python, applying statistical methods, and publishing findings.',
      icon: <Database size={20} />,
      highlights: [
        'Developed effective problem-solving abilities through overcoming research challenges and innovative solutions',
        'Exhibited meticulous attention to detail when collecting and managing data, ensuring accuracy and reliability throughout the research process',
        'Effectively managed time and resources to meet research project deadlines and deliverables',
        'Collaborated seamlessly with diverse teams of researchers, scientists, and professionals',
        'Development of a stochastic simulation model, based on the dynamics of a SIDARTHE compartment model, applied to the evolution of COVID-19 outbreaks in local environments'
      ]
    }
  ],
  achievements: [
    {
      id: 'covid-research',
      title: 'COVID-19 Research Recognition',
      subtitle: 'MATCOM\'s Student Scientific Conference',
      date: '2021',
      description: 'Work by G. Bouza and C. Suarez titled "A model to simulate the transmission of COVID-19 in closed environments" received the Grand Prize in the Academic Event, a Gold Medal in Applied Mathematics, and the Best Written Paper in Applied Mathematics.',
      icon: <Award size={20} />
    },
    {
      id: 'math-didactics',
      title: 'Mathematics Didactics Gold Medal',
      subtitle: 'National Festival of Mathematics and Computing',
      date: '2021',
      description: 'Project by V. Cruz, F. Rodriguez, and C. Suarez titled "Humor, Romance and Secrets to Study Math" received a Gold Medal in Didactics of Mathematics.',
      icon: <Award size={20} />
    },
    {
      id: 'matcom-didactics',
      title: 'Mathematics Didactics Gold Medal',
      subtitle: 'MATCOM\'s Student Scientific Conference',
      date: '2021',
      description: 'The project "Humor, Romance and Secrets to Study Math" earned another Gold Medal in Didactics of Mathematics.',
      icon: <Award size={20} />
    },
  ]
};

export default experienceData;