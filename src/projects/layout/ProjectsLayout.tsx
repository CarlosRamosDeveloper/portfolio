import { Outlet } from 'react-router';

import { CustomFooter } from '@/components';
import { ProjectsHeader } from './components';
import { MainHeader } from '@/components/main-header';

export const ProjectsLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-500 to-cyan-900 flex flex-col">
      <MainHeader>
        <ProjectsHeader />
      </MainHeader>
      <main className="flex-1 flex justify-center">
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
};
