import { useTranslation } from 'react-i18next';

import { LandingExperienceCardList } from '.';
import { LandingLabel } from './LandingLabel';

export const LandingExperience = () => {
  const { t } = useTranslation('landing');

  return (
    <div className="flex flex-col items-center mt-5">
      <LandingLabel text={t('experienceAndEducation')} type="navigation" />
      <LandingExperienceCardList />
    </div>
  );
};
