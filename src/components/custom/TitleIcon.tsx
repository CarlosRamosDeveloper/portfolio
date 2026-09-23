import { Link } from 'react-router';

import { ROUTES } from '@/constants/routes';
import { PORTFOLIO_TEXT } from '@/constants';

export const TitleIcon = () => {
  return (
    <>
      <div>
        <Link to={ROUTES.home}>
          <h1 className="text-2xl lg:text-3xl m-5">{PORTFOLIO_TEXT.name}</h1>
        </Link>
      </div>
    </>
  );
};
