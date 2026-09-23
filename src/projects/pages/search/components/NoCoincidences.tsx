import { useTranslation } from 'react-i18next';

export const NoCoincidences = () => {
  const { t } = useTranslation('pages');
  return (
    <div className="text-center mt-7 text-2xl font-semibold">
      {t('search.noCoincidences')}
    </div>
  );
};
