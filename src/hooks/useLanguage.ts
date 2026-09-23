import i18n from '@/i18n/config';
import { useEffect, useState } from 'react';

type Language = 'es' | 'en';

const STORAGE_KEY_LANGUAGE = 'portfolio-lang';

export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE);

    if (savedLanguage === 'en' || savedLanguage === 'es') {
      return savedLanguage;
    }

    return 'en';
  });

  const setLanguage = (language: Language) => {
    setLanguageState(language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('es', 'en');
    root.classList.add(language);

    localStorage.setItem(STORAGE_KEY_LANGUAGE, language);
  }, [language]);

  return {
    language,
    setLanguage,
  };
};
