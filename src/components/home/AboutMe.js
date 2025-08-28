import React from "react";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Briefcase, Trophy } from "lucide-react";

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

        <div
          className={`transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-4 md:p-6">
            <div className="mx-auto">
              <p>
                Hello! I&apos;m{" "}
                <span className="font-semibold text-purple-700">
                  Claudia Suarez
                </span>
                , a recent graduate with an{" "}
                <strong>
                  Advanced Diploma in Computer Programming and Analysis (with
                  Honours)
                </strong>
                from Seneca Polytechnic and a{" "}
                <strong>B.A. in Mathematics</strong> from the University of
                Havana. My unique interdisciplinary background combines rigorous
                mathematical training with comprehensive software development
                expertise, positioning me perfectly for roles in both
                programming and mathematical analysis.
              </p>

              <p>
                As a <strong>full-stack developer</strong>, I&apos;ve mastered
                modern web technologies including
                <strong>
                  React/Next.js, Node.js, Express.js, MongoDB, and PostgreSQL
                </strong>
                . My technical portfolio spans from building AI-powered mobile
                applications with React Native to developing cloud-based
                microservices with AWS, Docker, and CI/CD pipelines. I&apos;ve
                successfully delivered projects ranging from e-commerce
                platforms and hotel management systems to sophisticated
                epidemiological modeling simulations.
              </p>

              <p>
                My <strong>mathematical expertise</strong> includes advanced
                statistical analysis, data modeling, algorithm optimization, and
                research methodology. I&apos;ve applied these skills in
                developing
                <strong>COVID-19 transmission models</strong> with high
                accuracy, implementing complex data structures and algorithms,
                and creating analytical solutions for business intelligence and
                decision-making processes.
              </p>

              <p>
                <strong>Technical Proficiencies:</strong> Python,
                JavaScript/TypeScript, Java/Kotlin, C/C++, SQL/PL-SQL, React
                Native, Android development, cloud computing (AWS), database
                design, machine learning, and project management. I&apos;m
                equally comfortable leading technical teams, conducting
                mathematical research, or diving deep into complex algorithmic
                challenges.
              </p>

              <p>
                Whether you need a <strong>software developer</strong> to
                architect scalable applications, a <strong>data analyst</strong>{" "}
                to extract insights from complex datasets, or a{" "}
                <strong>mathematician</strong>
                to solve analytical challenges, I bring both the technical depth
                and problem-solving acumen to drive innovative solutions.
                I&apos;m excited to contribute my diverse skillset to
                organizations that value both computational excellence and
                analytical rigor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
