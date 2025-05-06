import React from 'react';
import RotatingText from '../components/RotatingText';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 60, damping: 15 }
  }
};

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="overflow-hidden w-full h-20 fixed top-0 z-50 backdrop-blur-lg bg-black/60 text-white"
    >
      <div className="max-w-screen-xl mx-auto h-full px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-violet-600">
          &lt;V/T&gt;
        </h1>

        {/* Menu */}
        <ul className="flex space-x-8 items-center">
          <li>
            <a href="#home" className="flex items-center gap-2 transition hover:text-pink-400">
              <FaHome size={14} />{t('navbar.home')}
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center gap-2 transition hover:text-pink-400">
              <FaProjectDiagram size={14} />{t('navbar.projects')}
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-2 transition hover:text-pink-400">
              <FaUser size={14} />{t('navbar.about')}
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-2 transition hover:text-pink-400">
              <FaEnvelope size={14} />{t('navbar.contact')}
            </a>
          </li>

          {/* Botón cambio de idioma */}
          <li>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 border border-pink-500 text-pink-400 rounded-full text-xs hover:bg-pink-600 hover:text-white transition"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavBar;
