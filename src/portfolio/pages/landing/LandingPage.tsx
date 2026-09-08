import {
  LandingAbout,
  LandingExperience,
  LandingFeaturedProjectsList,
  LandingHero,
  LandingSoftskillsList,
} from './components';

export const LandingPage = () => {
  return (
    <>
      <div>
        <LandingHero />
        <LandingAbout />
        <LandingSoftskillsList />
        <LandingFeaturedProjectsList />
        <LandingExperience />
      </div>
    </>
  );
};
