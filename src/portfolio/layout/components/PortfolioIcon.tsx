import { Link } from 'react-router';

import { ROUTES } from '@/constants/routes';

export const PortfolioIcon = () => {
  return (
    <>
      <div>
        <Link to={ROUTES.home}>
          <h1 className="text-3xl m-5">Carlos Ramos Iserte</h1>
        </Link>
      </div>
    </>
  );
};
