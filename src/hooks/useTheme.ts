import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'colorblind';

const STORAGE_KEY_THEME = 'portfolio-theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);

    if (
      savedTheme === 'light' ||
      savedTheme === 'dark' ||
      savedTheme === 'colorblind'
    ) {
      return savedTheme;
    }

    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('light', 'dark', 'colorblind');
    root.classList.add(theme);

    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
