import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import {
  components as esComponents,
  landing as esLanding,
  layout as esLayout,
  pages as esPages,
} from './es';
import {
  components as enComponents,
  landing as enLanding,
  layout as enLayout,
  pages as enPages,
} from './en';
import { STORAGE_KEY_LANGUAGE } from '@/hooks/useLanguage';

const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE);
const initialLanguage =
  savedLanguage === 'es' || savedLanguage === 'en' ? savedLanguage : 'es';

const resources = {
  es: {
    components: esComponents,
    landing: esLanding,
    layout: esLayout,
    pages: esPages,
  },
  en: {
    components: enComponents,
    landing: enLanding,
    layout: enLayout,
    pages: enPages,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
