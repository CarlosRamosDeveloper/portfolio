import { NavigateButton } from '@/components';
import { ROUTES } from '@/constants';
import { useTranslation } from 'react-i18next';

interface Props {
  section: 'portfolio' | 'projects';
}

export const DesktopNavigation = ({ section }: Props) => {
  const { t } = useTranslation('layout');

  return (
    <div className="hidden lg:flex">
      <div className="flex justify-center mb-3 gap-3">
        {section === 'portfolio' && (
          <>
            <NavigateButton
              path={ROUTES.softSkills}
              label={t('navbar.softSkills')}
            />
            <NavigateButton
              path={ROUTES.experience}
              label={t('navbar.experience')}
            />
            <NavigateButton
              path={ROUTES.education}
              label={t('navbar.education')}
            />
            <NavigateButton path={ROUTES.about} label={t('navbar.about')} />
            <NavigateButton path={ROUTES.contact} label={t('navbar.contact')} />
          </>
        )}
        {section === 'projects' && (
          <>
            <NavigateButton
              label={t('navbar.projects')}
              path={ROUTES.projects}
            />
            <NavigateButton
              label={t('navbar.featured')}
              path={ROUTES.featured}
            />
            <NavigateButton label={t('navbar.search')} path={ROUTES.search} />
          </>
        )}
      </div>
    </div>
  );
};
