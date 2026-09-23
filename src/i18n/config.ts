import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import {
  layout as esLayout,
  pages as esPages,
  components as esComponents,
  components,
} from './es';
import {
  layout as enLayout,
  pages as enPages,
  components as enComponents,
} from './en';
import { STORAGE_KEY_LANGUAGE } from '@/hooks/useLanguage';

const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE);
const initialLanguage =
  savedLanguage === 'es' || savedLanguage === 'en' ? savedLanguage : 'es';

const resources = {
  es: {
    components: esComponents,
    layout: esLayout,
    pages: esPages,
  },
  en: {
    components: enComponents,
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
