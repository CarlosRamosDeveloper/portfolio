import { LANDING_TEXT } from '@/constants/pages';
import { LandingExperienceCardList } from '.';
import { LandingLabel } from './LandingLabel';

export const LandingExperience = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <LandingLabel
        text={LANDING_TEXT.experienceAndEducation}
        type="navigation"
      />
      <LandingExperienceCardList />
    </div>
  );
};
