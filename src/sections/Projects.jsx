import React from 'react';
import { motion } from 'framer-motion';
import { SiFastapi, SiPython, SiPandas, SiYelp } from 'react-icons/si';
import { BiBarChart, BiMap } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('projects.title')}
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t('projects.description')}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 rounded-xl p-8 hover:scale-105 transition-transform duration-300 text-left shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              {i === 0 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">{t('projects.p1.title')}</h3>
                  <p className="text-sm text-gray-400 mb-4">{t('projects.p1.desc')}</p>
                  <div className="flex flex-wrap gap-2 text-xs mb-4">
                    <span className="flex items-center gap-1 bg-pink-600/20 text-pink-400 px-2 py-1 rounded-full">
                      <SiFastapi className="text-sm" /> FastAPI
                    </span>
                    <span className="flex items-center gap-1 bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">
                      <SiPython className="text-sm" /> Python
                    </span>
                    <span className="flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                      <SiPandas className="text-sm" /> Pandas
                    </span>
                  </div>
                  <a
                    href="https://github.com/valenntesta/primer-proyecto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition-colors duration-300"
                  >
                    {t('projects.view')}
                  </a>
                </>
              )}

              {i === 1 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">{t('projects.p2.title')}</h3>
                  <p className="text-sm text-gray-400 mb-4">{t('projects.p2.desc')}</p>
                  <div className="flex flex-wrap gap-2 text-xs mb-4">
                    <span className="flex items-center gap-1 bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">
                      <SiPython className="text-sm" /> Python
                    </span>
                    <span className="flex items-center gap-1 bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded-full">
                      <BiBarChart className="text-sm" /> Power BI
                    </span>
                    <span className="bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded-full">
                      Data Analysis
                    </span>
                  </div>
                  <a
                    href="https://github.com/valenntesta/segundo-proyecto"
                    target="_blank"
                    className="inline-block mt-2 px-4 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition-colors duration-300"
                  >
                    {t('projects.view')}
                  </a>
                </>
              )}

              {i === 2 && (
                <>
                  <h3 className="text-xl font-semibold mb-2">{t('projects.p3.title')}</h3>
                  <p className="text-sm text-gray-400 mb-4">{t('projects.p3.desc')}</p>
                  <div className="flex flex-wrap gap-2 text-xs mb-4">
                    <span className="flex items-center gap-1 bg-red-600/20 text-red-400 px-2 py-1 rounded-full">
                      <SiYelp className="text-sm" /> Yelp
                    </span>
                    <span className="flex items-center gap-1 bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                      <BiMap className="text-sm" /> Google Maps
                    </span>
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                      Business Intelligence
                    </span>
                  </div>
                  <a
                    href="https://github.com/valenntesta/PF-Google-Yelps-Final"
                    target="_blank"
                    className="inline-block mt-2 px-4 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition-colors duration-300"
                  >
                    {t('projects.view')}
                  </a>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
