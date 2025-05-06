import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-pink-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-violet-600 filter blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("about.title")}
            <span className="block w-24 h-1 bg-gradient-to-r from-pink-600 to-violet-600 mx-auto mt-6 rounded-full"></span>
          </motion.h2>

          <div className="space-y-6">
            <motion.p
              className="text-gray-300 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {t("about.p1")}
            </motion.p>

            <motion.p
              className="text-gray-300 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {t("about.p2")}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;