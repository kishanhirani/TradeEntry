import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';

i18n.use(initReactI18next).init({
  lng: 'en',

  fallbackLng: 'en',

  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
    fr: {
      translation: fr,
    },
  },
});

export default i18n;
