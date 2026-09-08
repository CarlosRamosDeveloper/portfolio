import { TitleIcon } from '@/components';

import { MainSettings } from './MainSettings';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const MainHeader = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <TitleIcon />
        <MainSettings />
      </div>
      {children}
    </div>
  );
};
