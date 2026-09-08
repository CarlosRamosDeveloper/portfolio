import { ROUTES } from '@/constants';
import { LANDING_TEXT } from '@/constants/pages';

import { Link } from 'react-router';
import { LandingLabel } from './LandingLabel';

export const LandingHero = () => {
  return (
    <div className="my-3 w-full max-w-3xl flex flex-col text-center mx-auto text-xl">
      <LandingLabel text={LANDING_TEXT.title} type="title" />
      <LandingLabel text={LANDING_TEXT.subtitle} type="subtitle" />
      <div className="flex justify-around mt-3">
        <Link to={ROUTES.projects}>
          <LandingLabel text={`[${LANDING_TEXT.projects}]`} type="navigation" />
        </Link>
        <Link to={ROUTES.contact}>
          <LandingLabel text={`[${LANDING_TEXT.contact}]`} type="navigation" />
        </Link>
      </div>
    </div>
  );
};
