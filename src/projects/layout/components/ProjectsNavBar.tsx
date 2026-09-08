import { NavigateButton } from '@/components';
import { ROUTES } from '@/constants';
import { NAVBAR_TEXT } from '@/constants/layout';

export const ProjectsNavBar = () => {
  return (
    <div className="flex justify-center mb-3 gap-4">
      <NavigateButton label={NAVBAR_TEXT.projects} path={ROUTES.projects} />
      <NavigateButton label={NAVBAR_TEXT.featured} path={ROUTES.featured} />
      <div>[Buscador]</div>
    </div>
  );
};
