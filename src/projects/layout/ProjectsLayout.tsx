import { CustomFooter } from '@/components';
import { PortfolioHeader } from '@/portfolio/layout/components';
import { Outlet } from 'react-router';

export const ProjectsLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-500 to-cyan-900 flex flex-col">
      <PortfolioHeader />
      <main className="flex-1 flex justify-center">
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
};
