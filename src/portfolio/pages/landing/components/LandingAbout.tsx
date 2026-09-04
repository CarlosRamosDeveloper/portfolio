import { LANDING_TEXT } from '@/constants/pages';
import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router';

export const LandingAbout = () => {
  return (
    <div>
      <div className="my-2 w-full max-w-3xl flex flex-col text-center mx-auto text-base">
        {LANDING_TEXT.description}
        <Link to={ROUTES.about} className="mt-3 font-semibold">
          [{LANDING_TEXT.aboutMe}]
        </Link>
      </div>
    </div>
  );
};
