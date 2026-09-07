import { NavigateButton } from '@/components';
import { ROUTES } from '@/constants';
import { NAVBAR_TEXT } from '@/constants/layout';

export const ProjectsNavBar = () => {
  return (
    <div className="flex justify-center mb-3 gap-6">
      <div>
        <NavigateButton label={NAVBAR_TEXT.projects} path={ROUTES.projects} />
      </div>
      <div>
        <NavigateButton label={NAVBAR_TEXT.featured} path={ROUTES.featured} />
      </div>
      <div>[Buscador]</div>
    </div>
  );
};
