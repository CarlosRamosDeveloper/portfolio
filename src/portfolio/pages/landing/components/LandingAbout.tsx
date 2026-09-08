import { LANDING_TEXT } from '@/constants/pages';
import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router';
import { LandingLabel } from './LandingLabel';

export const LandingAbout = () => {
  return (
    <div>
      <div className="my-5 w-full max-w-3xl flex flex-col text-center mx-auto text-base">
        {LANDING_TEXT.description.map((text) => (
          <div className="mt-3 p-2">
            <LandingLabel text={text} type="description" />
          </div>
        ))}
        <Link className="my-2" to={ROUTES.about}>
          <LandingLabel text={`[${LANDING_TEXT.aboutMe}]`} type="navigation" />
        </Link>
      </div>
    </div>
  );
};
