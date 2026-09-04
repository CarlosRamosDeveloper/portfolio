import { ROUTES } from '@/constants';
import { LANDING_TEXT } from '@/constants/pages';

import { Link } from 'react-router';

export const LandingHero = () => {
  return (
    <div className="my-6 w-full max-w-3xl flex flex-col text-center mx-auto text-xl">
      <span>{LANDING_TEXT.title}</span>
      <span>{LANDING_TEXT.subtitle}</span>
      <div className="flex justify-around mt-3">
        <Link to={ROUTES.projects}>[{LANDING_TEXT.projects}]</Link>
        <Link to={ROUTES.contact}>[{LANDING_TEXT.contact}]</Link>
      </div>
    </div>
  );
};
