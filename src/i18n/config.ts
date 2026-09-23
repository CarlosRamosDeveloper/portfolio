import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { layout as esLayout } from './es/layout';
import { layout as enLayout } from './en/layout';

const resources = {
  es: {
    layout: esLayout,
  },
  en: {
    layout: enLayout,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
