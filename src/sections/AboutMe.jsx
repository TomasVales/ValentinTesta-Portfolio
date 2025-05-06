import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-[#090c19] to-black text-white py-20 px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-6 border-b border-pink-600 inline-block pb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("about.title")}
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("about.p1")}
        </motion.p>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("about.p2")}
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;
