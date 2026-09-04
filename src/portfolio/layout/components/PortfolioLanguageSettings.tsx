import { SETTINGS_TEXT } from '@/constants';
import { useTheme } from '../../hooks/useTheme';

export const PortfolioLanguageSettings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex w-fit rounded-lg border border-border overflow-hidden">
      <button
        className={`px-3 ${theme === 'light' ? 'bg-muted' : ''}`}
        onClick={() => setTheme('light')}
      >
        {SETTINGS_TEXT.lightTheme}
      </button>
      <button
        className={`px-3 ${theme === 'dark' ? 'bg-muted' : ''}`}
        onClick={() => setTheme('dark')}
      >
        {SETTINGS_TEXT.darkTheme}
      </button>
      <button
        className={`px-3 ${theme === 'colorblind' ? 'bg-muted' : ''}`}
        onClick={() => setTheme('colorblind')}
      >
        {SETTINGS_TEXT.colorblind}
      </button>
    </div>
  );
};
