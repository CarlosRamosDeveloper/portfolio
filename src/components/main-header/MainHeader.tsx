import { TitleIcon } from '@/components';

import { MainSettings } from './MainSettings';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const MainHeader = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full items-center justify-between px-4 sm:w-auto lg:w-auto sm:justify-center lg:justify-center lg:px-0">
        <TitleIcon />
        <MainSettings />
      </div>
      {children}
    </div>
  );
};
