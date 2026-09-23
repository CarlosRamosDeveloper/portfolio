import { useTranslation } from 'react-i18next';

interface Props {
  onClick: () => void;
}

export const CleanFiltersButton = ({ onClick }: Props) => {
  const { t } = useTranslation('pages');

  return (
    <div className="flex mx-auto">
      <button className="py-2 px-4 bg-accent" onClick={onClick}>
        {t('search.cleanButton')}
      </button>
    </div>
  );
};
