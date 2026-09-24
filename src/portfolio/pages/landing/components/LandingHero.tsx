import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/constants';
import { LandingLabel } from './LandingLabel';

export const LandingHero = () => {
  const { t } = useTranslation('landing');

  return (
    <div className="my-3 flex flex-col text-center">
      <LandingLabel text={t('title')} type="title" />
      <LandingLabel text={t('subtitle')} type="subtitle" />
      <div className="flex justify-around mt-1 lg:mt-3">
        <Link to={ROUTES.projects}>
          <LandingLabel text={`[${t('projects')}]`} type="navigation" />
        </Link>
        <Link to={ROUTES.contact}>
          <LandingLabel text={`[${t('contact')}]`} type="navigation" />
        </Link>
      </div>
    </div>
  );
};
