import { NavigateButton } from '@/components';
import { ROUTES } from '@/constants';
import { NAVBAR_TEXT } from '@/constants/layout';

interface Props {
  section: 'portfolio' | 'projects';
}

export const DesktopNavigation = ({ section }: Props) => {
  return (
    <div className="hidden lg:flex">
      <div className="flex justify-center mb-3 gap-3">
        {section === 'portfolio' && (
          <>
            <NavigateButton
              path={ROUTES.softSkills}
              label={NAVBAR_TEXT.softSkills}
            />
            <NavigateButton
              path={ROUTES.experience}
              label={NAVBAR_TEXT.experience}
            />
            <NavigateButton
              path={ROUTES.education}
              label={NAVBAR_TEXT.education}
            />
            <NavigateButton path={ROUTES.about} label={NAVBAR_TEXT.about} />
            <NavigateButton path={ROUTES.contact} label={NAVBAR_TEXT.contact} />
          </>
        )}
        {section === 'projects' && (
          <>
            <NavigateButton
              label={NAVBAR_TEXT.projects}
              path={ROUTES.projects}
            />
            <NavigateButton
              label={NAVBAR_TEXT.featured}
              path={ROUTES.featured}
            />
            <NavigateButton label={NAVBAR_TEXT.search} path={ROUTES.search} />
          </>
        )}
      </div>
    </div>
  );
};
