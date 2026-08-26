import { Outlet } from 'react-router';

import { PortfolioFooter, PortfolioHeader } from '../components';

export const PorfolioLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-500 to-cyan-900 flex flex-col">
      <PortfolioHeader />
      <main className="flex-1 flex justify-center">
        <Outlet />
      </main>
      <PortfolioFooter />
    </div>
  );
};
