import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import {
  components as esComponents,
  education as esEducation,
  experience as esExperience,
  landing as esLanding,
  layout as esLayout,
  navigation as esNavigation,
  pages as esPages,
  projects as esProjects,
  softSkills as esSoftSkills,
} from './es';
import {
  components as enComponents,
  education as enEducation,
  experience as enExperience,
  landing as enLanding,
  layout as enLayout,
  navigation as enNavigation,
  pages as enPages,
  projects as enProjects,
  softSkills as enSoftSkills,
} from './en';
import { STORAGE_KEY_LANGUAGE } from '@/hooks/useLanguage';

const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE);
const initialLanguage =
  savedLanguage === 'es' || savedLanguage === 'en' ? savedLanguage : 'es';

const resources = {
  es: {
    components: esComponents,
    education: esEducation,
    experience: esExperience,
    landing: esLanding,
    layout: esLayout,
    navigation: esNavigation,
    pages: esPages,
    projects: esProjects,
    softSkills: esSoftSkills,
  },
  en: {
    components: enComponents,
    education: enEducation,
    experience: enExperience,
    landing: enLanding,
    layout: enLayout,
    navigation: enNavigation,
    pages: enPages,
    projects: enProjects,
    softSkills: enSoftSkills,
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
