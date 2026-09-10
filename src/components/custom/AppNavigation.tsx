import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';

interface Props {
  section: 'portfolio' | 'projects';
}

export const AppNavigation = ({ section }: Props) => {
  return (
    <>
      <DesktopNavigation section={section} />
      <MobileNavigation section={section} />
    </>
  );
};
