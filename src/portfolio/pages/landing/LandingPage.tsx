import {
  LandingAbout,
  LandingExperience,
  LandingHero,
  LandingProjects,
} from './components';

export const LandingPage = () => {
  return (
    <>
      <div>
        <LandingHero />
        <LandingAbout />
        <LandingProjects />
        <LandingExperience />
      </div>
    </>
  );
};
