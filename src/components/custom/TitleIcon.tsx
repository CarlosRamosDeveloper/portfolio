import { Link } from 'react-router';

import { ROUTES } from '@/constants/routes';
import { LAYOUT_TEXT } from '@/constants/layout';

export const TitleIcon = () => {
  return (
    <>
      <div>
        <Link to={ROUTES.home}>
          <h1 className="text-2xl lg:text-3xl m-5">{LAYOUT_TEXT.name}</h1>
        </Link>
      </div>
    </>
  );
};
