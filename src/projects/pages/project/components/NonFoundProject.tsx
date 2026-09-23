import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/constants';

export const NonFoundProject = () => {
  const { t } = useTranslation('pages');

  return (
    <div>
      <h1 className="flex flex-1 text-3xl font-bold">{t('nonFound.title')}</h1>
      <div className="text-2xl mt-5 text-center">
        <Link to={ROUTES.projects}> {t('nonFound.returnButton')}</Link>
      </div>
    </div>
  );
};
