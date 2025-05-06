import React, { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
      className="w-full h-20 fixed top-0 z-50 backdrop-blur-lg bg-black/60 text-white"
    >
      <div className="max-w-screen-xl mx-auto h-full px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-violet-600">
          &lt;V/T&gt;
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          <li>
            <a href="#home" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
              <FaHome size={14} />{t('navbar.home')}
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
              <FaProjectDiagram size={14} />{t('navbar.projects')}
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
              <FaUser size={14} />{t('navbar.about')}
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
              <FaEnvelope size={14} />{t('navbar.contact')}
            </a>
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 border border-pink-500 text-pink-400 rounded-full text-xs hover:bg-pink-600 hover:text-white transition-colors"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-60 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-20 left-0 right-0 w-full z-40 rounded-none bg-black/80 backdrop-blur-md border-y border-white/10 shadow-md px-6 py-5 md:hidden"

            >
              <ul className="flex flex-col gap-5 text-sm font-medium">
                <li>
                  <a
                    href="#home"
                    className="flex items-center gap-2 hover:text-pink-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaHome size={16} /> {t('navbar.home')}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="flex items-center gap-2 hover:text-pink-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaProjectDiagram size={16} /> {t('navbar.projects')}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="flex items-center gap-2 hover:text-pink-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaUser size={16} /> {t('navbar.about')}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 hover:text-pink-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaEnvelope size={16} /> {t('navbar.contact')}
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsOpen(false);
                    }}
                    className="mt-2 px-4 py-1 border border-pink-500 text-pink-400 rounded-full text-sm hover:bg-pink-600 hover:text-white transition"
                  >
                    {i18n.language === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default NavBar;