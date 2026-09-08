import { Outlet } from 'react-router';

import { CustomFooter } from '@/components';
import { MainHeader } from '@/components/main-header';
import { PortfolioNavBar } from './components';

export const PorfolioLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-500 to-cyan-900 flex flex-col">
      <MainHeader>
        <PortfolioNavBar />
      </MainHeader>
      <main className="flex-1 flex justify-center">
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
};
