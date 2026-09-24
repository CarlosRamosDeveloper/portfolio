import { useLanguage } from '@/hooks/useLanguage';
import { useTranslation } from 'react-i18next';

export const MainLanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation('layout');

  return (
    <div className="flex w-fit rounded-lg border border-border overflow-hidden">
      <button
        className={`px-3 ${language === 'es' ? 'bg-muted' : ''}`}
        onClick={() => setLanguage('es')}
      >
        <p>{t('languages.es')}</p>
      </button>
      <button
        className={`px-3 ${language === 'en' ? 'bg-muted' : ''}`}
        onClick={() => setLanguage('en')}
      >
        <p>{t('languages.en')}</p>
      </button>
    </div>
  );
};
