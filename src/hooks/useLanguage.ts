import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export type Language = 'es' | 'en';
export const STORAGE_KEY_LANGUAGE = 'portfolio-lang';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const language = i18n.language as Language;

  const setLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_LANGUAGE, language);
  }, [language]);

  return {
    language,
    setLanguage,
  };
};
