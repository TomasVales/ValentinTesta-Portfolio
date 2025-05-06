import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: <FaEnvelope className="text-xl text-pink-500" />,
      label: t('contact.email'),
      content: (
        <a href="mailto:valentesta05@gmail.com" className="text-gray-300 hover:text-pink-400 transition-colors">
          valentesta05@gmail.com
        </a>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-xl text-pink-500" />,
      label: t('contact.phone'),
      content: (
        <a href="tel:+5493512360188" className="text-gray-300 hover:text-pink-400 transition-colors">
          +54 9 351 236 0188
        </a>
      ),
    },
    {
      icon: <FaLinkedin className="text-xl text-pink-500" />,
      label: t('contact.linkedin'),
      content: (
        <a
          href="https://www.linkedin.com/in/valentesta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition-colors"
        >
          linkedin.com/in/valentesta
        </a>
      ),
    },
    {
      icon: <FaGithub className="text-xl text-pink-500" />,
      label: 'GitHub',
      content: (
        <a
          href="https://github.com/valentesta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition-colors"
        >
          github.com/valentesta
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-pink-500" />,
      label: t('contact.location'),
      content: <p className="text-gray-300">Córdoba, Argentina (GMT-3)</p>,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('contact.title')}
            <span className="block w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-gray-900/80 rounded-xl p-8 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 hover:bg-gray-800/50 rounded-lg transition-colors"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-2 bg-gray-800 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">{item.label}</p>
                  <div className="text-base">
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;