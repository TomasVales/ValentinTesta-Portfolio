import React from 'react';
import Aurora from '../components/Aurora';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white bg-black overflow-hidden px-4 pt-20"
    >

      <Aurora
        colorStops={["#dc2626", "#db2777", "#7c3aed"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      <motion.div
        className="z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="flex flex-col text-5xl md:text-9xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>{t('hero.title')}</span>
          <span className="text-transparent stroke-text">Testa</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          className="mt-6 max-w-xl mx-auto text-gray-400 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#experience"
            className="bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-2 rounded-full text-sm font-semibold"
          >
            {t('hero.experience')}
          </a>
          <a
            href="/CV_ValentinTesta.pdf"
            download
            className="border border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white transition px-6 py-2 rounded-full text-sm font-semibold"
          >
            {t('hero.cv')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
