import { Link } from 'react-router';

import { ROUTES } from '@/constants/routes';
import { LAYOUT_TEXT } from '@/constants/layout';

export const PortfolioIcon = () => {
  return (
    <>
      <div>
        <Link to={ROUTES.home}>
          <h1 className="text-3xl m-5">{LAYOUT_TEXT.name}</h1>
        </Link>
      </div>
    </>
  );
};
