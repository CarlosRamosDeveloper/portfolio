import { TitleIcon } from '@/components';

import { MainSettings } from './MainSettings';
import type { ReactNode } from 'react';
import { MobileNavigation } from '../custom/MobileNavigation';

interface Props {
  children: ReactNode;
}

export const MainHeader = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full items-center justify-between px-4 lg:w-auto lg:justify-center lg:px-0">
        <TitleIcon />
        <div className="flex items-center gap-5">
          <MobileNavigation />
          <MainSettings />
        </div>
      </div>
      {children}
    </div>
  );
};
