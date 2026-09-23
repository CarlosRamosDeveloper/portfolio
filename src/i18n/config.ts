import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { layout as esLayout } from './es/layout';
import { layout as enLayout } from './en/layout';
import { pages as esPages } from './es/pages';
import { pages as enPages } from './en/pages';
import { STORAGE_KEY_LANGUAGE } from '@/hooks/useLanguage';

const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE);
const initialLanguage =
  savedLanguage === 'es' || savedLanguage === 'en' ? savedLanguage : 'es';

const resources = {
  es: {
    layout: esLayout,
    pages: esPages,
  },
  en: {
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
