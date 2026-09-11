import { AppNavigation, MainLayout } from '@/components';
import { MainHeader } from '@/components/main-header';

export const PorfolioLayout = () => {
  return (
    <MainLayout>
      <MainHeader>
        <AppNavigation section="portfolio" />
      </MainHeader>
    </MainLayout>
  );
};
