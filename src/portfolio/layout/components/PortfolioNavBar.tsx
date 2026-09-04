import { ROUTES } from '@/constants/routes';
import { NavigateButton } from '.';
import { NAVBAR_TEXT } from '@/constants';

export const PortfolioNavBar = () => {
  return (
    <div className="flex justify-center mb-3 gap-6">
      <div>
        <NavigateButton
          path={ROUTES.experience}
          label={NAVBAR_TEXT.experience}
        />
      </div>
      <div>
        <NavigateButton path={ROUTES.education} label={NAVBAR_TEXT.education} />
      </div>
      <div>
        <NavigateButton path={ROUTES.featured} label={NAVBAR_TEXT.featured} />
      </div>
      <div>
        <NavigateButton path={ROUTES.about} label={NAVBAR_TEXT.about} />
      </div>
      <div>
        <NavigateButton path={ROUTES.contact} label={NAVBAR_TEXT.contact} />
      </div>
    </div>
  );
};
