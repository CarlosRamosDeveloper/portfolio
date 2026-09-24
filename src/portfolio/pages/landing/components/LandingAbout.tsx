import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/constants/routes';
import { LandingLabel } from './LandingLabel';

export const LandingAbout = () => {
  const { t } = useTranslation('landing');
  const descriptionData = t('description', {
    returnObjects: true,
  }) as string[];

  return (
    <div className="my-1 lg:my-6 flex flex-col text-center">
      {descriptionData.map((text, index) => (
        <div className="mt-0.5 lg:mt-3 p-4 lg:p-2" key={index}>
          <LandingLabel text={text} type="description" />
        </div>
      ))}
      <Link className="lg:my-2" to={ROUTES.about}>
        <LandingLabel text={`[${t('aboutMe')}]`} type="navigation" />
      </Link>
    </div>
  );
};
