import { LANDING_TEXT } from '@/constants/pages';
import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router';
import { LandingLabel } from './LandingLabel';

export const LandingAbout = () => {
  return (
    <div className="my-6 flex flex-col text-center">
      {LANDING_TEXT.description.map((text, index) => (
        <div className="mt-3 p-2" key={index}>
          <LandingLabel text={text} type="description" />
        </div>
      ))}
      <Link className="my-2" to={ROUTES.about}>
        <LandingLabel text={`[${LANDING_TEXT.aboutMe}]`} type="navigation" />
      </Link>
    </div>
  );
};
