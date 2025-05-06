import React from 'react';
import { motion } from 'framer-motion';
import { FaPizzaSlice } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Education from './Education';
import Skills from './Skills';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="min-h-screen bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('experience.title')}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* Pizzería Charle's */}
          <motion.div
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-pink-500/10 rounded-full">
                <FaPizzaSlice className="text-pink-400" size={16} />
              </div>
              <div>
                <h3 className="text-xl font-medium">
                  {t('experience.charles.title')}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t('experience.charles.date')}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('experience.charles.description')}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                ● {t('experience.charles.tasks')}
              </p>
            </div>
          </motion.div>

          {/* Educación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Education />
          </motion.div>

          {/* Habilidades */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Skills />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;