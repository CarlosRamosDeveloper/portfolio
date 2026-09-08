import { LANDING_TEXT } from '@/constants/pages';
import { LandingExperienceCardList } from '.';

export const LandingExperience = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl mt-5 text-center">
        {LANDING_TEXT.experienceAndEducation}
      </h3>
      <LandingExperienceCardList />
    </div>
  );
};
