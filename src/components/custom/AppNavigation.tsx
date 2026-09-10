import { DesktopNavigation } from './DesktopNavigation';

interface Props {
  section: 'portfolio' | 'projects';
}

export const AppNavigation = ({ section }: Props) => {
  return (
    <>
      <DesktopNavigation section={section} />
    </>
  );
};
