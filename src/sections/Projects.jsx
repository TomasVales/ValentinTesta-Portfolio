import React from 'react';
import { motion } from 'framer-motion';
import { SiFastapi, SiPython, SiPandas, SiYelp } from 'react-icons/si';
import { BiBarChart, BiMap } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.p1.title'),
      description: t('projects.p1.desc'),
      technologies: [
        { icon: <SiFastapi className="text-sm" />, name: 'FastAPI', color: 'pink' },
        { icon: <SiPython className="text-sm" />, name: 'Python', color: 'blue' },
        { icon: <SiPandas className="text-sm" />, name: 'Pandas', color: 'yellow' }
      ],
      link: "https://github.com/valenntesta/primer-proyecto"
    },
    {
      title: t('projects.p2.title'),
      description: t('projects.p2.desc'),
      technologies: [
        { icon: <SiPython className="text-sm" />, name: 'Python', color: 'blue' },
        { icon: <BiBarChart className="text-sm" />, name: 'Power BI', color: 'yellow' },
        { name: 'Data Analysis', color: 'indigo' }
      ],
      link: "https://github.com/valenntesta/segundo-proyecto"
    },
    {
      title: t('projects.p3.title'),
      description: t('projects.p3.desc'),
      technologies: [
        { icon: <SiYelp className="text-sm" />, name: 'Yelp', color: 'red' },
        { icon: <BiMap className="text-sm" />, name: 'Google Maps', color: 'blue' },
        { name: 'Business Intelligence', color: 'green' }
      ],
      link: "https://github.com/valenntesta/PF-Google-Yelps-Final"
    }
  ];

  const colorClasses = {
    pink: 'bg-pink-500/10 text-pink-400',
    blue: 'bg-blue-500/10 text-blue-400',
    yellow: 'bg-yellow-500/10 text-yellow-400',
    indigo: 'bg-indigo-500/10 text-indigo-400',
    red: 'bg-red-500/10 text-red-400',
    green: 'bg-green-500/10 text-green-400'
  };

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className={`${colorClasses[tech.color]} px-3 py-1 rounded-full text-xs flex items-center gap-1`}
                    >
                      {tech.icon && tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 text-sm font-medium text-pink-400 hover:text-white hover:bg-pink-500/20 rounded transition-colors"
                >
                  {t('projects.view')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;