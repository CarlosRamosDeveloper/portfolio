import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const MainThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation('layout');

  return (
    <div className="flex w-fit rounded-lg border border-border overflow-hidden">
      <button
        className={`px-3 ${theme === 'light' ? 'bg-muted' : ''}`}
        onClick={() => setTheme('light')}
      >
        {t('settings.lightTheme')}
      </button>
      <button
        className={`px-3 ${theme === 'dark' ? 'bg-muted' : ''}`}
        onClick={() => setTheme('dark')}
      >
        {t('settings.darkTheme')}
      </button>
      <button
        className={`px-3 ${theme === 'colorblind' ? 'bg-muted' : ''}`}
        onClick={() => setTheme('colorblind')}
      >
        {t('settings.colorblind')}
      </button>
    </div>
  );
};
