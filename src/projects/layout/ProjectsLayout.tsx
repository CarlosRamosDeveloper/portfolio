import { AppNavigation, MainLayout } from '@/components';
import { MainHeader } from '@/components/main-header';

export const ProjectsLayout = () => {
  return (
    <MainLayout>
      <MainHeader>
        <AppNavigation section="projects" />
      </MainHeader>
    </MainLayout>
  );
};
