import { ROUTES } from '@/constants/routes';

import { NAVBAR_TEXT } from '@/constants/layout';
import { NavigateButton } from '@/components';

export const PortfolioNavBar = () => {
  return (
    <div className="flex justify-center mb-3 gap-3">
      <NavigateButton path={ROUTES.softSkills} label={NAVBAR_TEXT.softSkills} />
      <NavigateButton path={ROUTES.experience} label={NAVBAR_TEXT.experience} />
      <NavigateButton path={ROUTES.education} label={NAVBAR_TEXT.education} />
      <NavigateButton path={ROUTES.about} label={NAVBAR_TEXT.about} />
      <NavigateButton path={ROUTES.contact} label={NAVBAR_TEXT.contact} />
    </div>
  );
};
