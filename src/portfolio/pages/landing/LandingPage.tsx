import { FramePage } from '@/components';
import {
  LandingAbout,
  LandingExperience,
  LandingFeaturedProjectsList,
  LandingHero,
  LandingSoftskillsList,
} from './components';

export const LandingPage = () => {
  return (
    <FramePage>
      <LandingHero />
      <LandingAbout />
      <LandingSoftskillsList />
      <LandingFeaturedProjectsList />
      <LandingExperience />
    </FramePage>
  );
};
