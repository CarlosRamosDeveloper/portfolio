import type { PropsWithChildren } from 'react';
import { CustomFooter } from './CustomFooter';
import { Outlet } from 'react-router';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-500 to-cyan-900 flex flex-col">
      {children}
      <main className="flex-1 flex justify-center">
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
};
