import {
  LandingAbout,
  LandingExperience,
  LandingFeaturedProjectsList,
  LandingHero,
} from './components';

export const LandingPage = () => {
  return (
    <>
      <div>
        <LandingHero />
        <LandingAbout />
        <LandingFeaturedProjectsList />
        <LandingExperience />
      </div>
    </>
  );
};
