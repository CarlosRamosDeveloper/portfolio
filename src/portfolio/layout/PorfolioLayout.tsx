import { Outlet } from 'react-router';

import { AppNavigation, CustomFooter } from '@/components';
import { MainHeader } from '@/components/main-header';

export const PorfolioLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-500 to-cyan-900 flex flex-col">
      <MainHeader>
        <AppNavigation section="portfolio" />
      </MainHeader>
      <main className="flex-1 flex justify-center">
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
};
