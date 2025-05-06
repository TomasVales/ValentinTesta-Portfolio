import React from 'react';
import { motion } from 'framer-motion';
import { FaPizzaSlice } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Education from './Education';
import Skills from './Skills';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-16 bg-gradient-to-b from-[#0b1120] to-[#090c19]" />

      <section id="experience" className="min-h-screen bg-[#090c19] text-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {t('experience.title')}
          </motion.h2>

          <div className="space-y-16">
            {/* Pizzería Charle's */}
            <motion.div
              className="border-l-4 border-pink-600 pl-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-yellow-400 text-2xl">
                <FaPizzaSlice size={20} />
                <span>{t('experience.charles.title')}</span>
              </div>

              <p className="text-gray-400 text-sm mt-1">{t('experience.charles.date')}</p>
              <p className="mt-4 text-gray-300 text-base leading-relaxed">
                {t('experience.charles.description')}
              </p>
              <p className="mt-4 text-gray-300 text-base leading-relaxed">
                ● {t('experience.charles.tasks')}
              </p>
            </motion.div>

            {/* Educación */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Education />
            </motion.div>

            {/* Habilidades */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Skills />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
