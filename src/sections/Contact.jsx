import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: <FaEnvelope className="text-pink-500 mt-1" />,
      label: t('contact.email'),
      content: (
        <a href="mailto:valentesta05@gmail.com" className="text-gray-300 hover:text-pink-400 transition">
          valentesta05@gmail.com
        </a>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-pink-500 mt-1" />,
      label: t('contact.phone'),
      content: <p className="text-gray-300">+54 9 351 236 0188</p>,
    },
    {
      icon: <FaLinkedin className="text-pink-500 mt-1" />,
      label: t('contact.linkedin'),
      content: (
        <a
          href="https://www.linkedin.com/in/valentesta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition"
        >
          linkedin.com/in/valentesta
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-pink-500 mt-1" />,
      label: t('contact.location'),
      content: <p className="text-gray-300">Córdoba, Argentina (GMT-3)</p>,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black to-[#07070a] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
      <motion.h2
  className="text-4xl font-bold mb-2"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {t('contact.title').split(' ').map((word, index) => (
    <span
      key={index}
      className={index === 1 ? 'text-pink-500' : 'text-white'}
    >
      {word}{' '}
    </span>
  ))}
</motion.h2>

        <motion.p
          className="text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('contact.subtitle')}
        </motion.p>

        <motion.div
          className="bg-gray-900/70 rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {item.icon}
              <div>
                <p className="font-semibold">{item.label}</p>
                {item.content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
