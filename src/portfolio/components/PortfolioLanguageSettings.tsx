import { useTheme } from '../hooks/useTheme';

export const PortfolioLanguageSettings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex rounded-lg border border-border overflow-hidden">
      <button
        className={`px-2 ${theme === 'light' ? 'bg-muted' : ''}`}
        onClick={() => setTheme('light')}
      >
        Claro
      </button>
      <button
        className={`px-2 ${theme === 'dark' ? 'bg-muted' : ''}`}
        onClick={() => setTheme('dark')}
      >
        Oscuro
      </button>
      <button
        className={`px-2 ${theme === 'colorblind' ? 'bg-muted' : ''}`}
        onClick={() => setTheme('colorblind')}
      >
        Daltónico
      </button>
    </div>
  );
};
