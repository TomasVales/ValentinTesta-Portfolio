import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos de traducción
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

// Definí los recursos
const resources = {
en: { translation: translationEN },
es: { translation: translationES },
};

i18n
  .use(initReactI18next) // conecta con React
.init({
    resources,
    lng: 'en', // Idioma predeterminado
    fallbackLng: 'en', // Si no encuentra el idioma, usa este

    interpolation: {
      escapeValue: false, // React ya se encarga de la seguridad
    },
});

export default i18n;