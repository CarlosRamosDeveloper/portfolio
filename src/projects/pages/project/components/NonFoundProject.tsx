import { Link } from 'react-router';

import { ROUTES } from '@/constants';
import { NON_FOUND_PROJECT_TEXT } from '@/constants/projects/non-found-project.text';

export const NonFoundProject = () => {
  return (
    <div>
      <h1 className="flex flex-1 text-3xl font-bold">
        {NON_FOUND_PROJECT_TEXT.title}
      </h1>
      <div className="text-2xl mt-5 text-center">
        <Link to={ROUTES.projects}>{NON_FOUND_PROJECT_TEXT.returnButton}</Link>
      </div>
    </div>
  );
};
