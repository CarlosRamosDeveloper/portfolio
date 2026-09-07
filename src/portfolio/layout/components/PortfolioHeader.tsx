import { TitleIcon } from '@/components';
import { PortfolioNavBar } from '.';
import { PortfolioSettings } from './settings';

export const PortfolioHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <TitleIcon />
        <PortfolioSettings />
      </div>
      <PortfolioNavBar />
    </div>
  );
};
