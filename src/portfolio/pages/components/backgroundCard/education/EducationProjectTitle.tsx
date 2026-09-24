import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  url: string;
}

export const EducationProjectTitle = ({ title, url }: Props) => {
  const { t } = useTranslation('components');

  return (
    <div className="flex flex-1 flex-col items-center gap-2 sm:flex-row sm:justify-between p-2 sm:p-4">
      <div className="text-base">{title}</div>
      <div className="sm:pr-4">
        <Link to={url}>{t('backgroundCard.viewProject')}</Link>
      </div>
    </div>
  );
};
