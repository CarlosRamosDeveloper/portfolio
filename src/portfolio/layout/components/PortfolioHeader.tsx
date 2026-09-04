import { PortfolioIcon, PortfolioNavBar } from '.';
import { PortfolioSettings } from './settings';

export const PortfolioHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <PortfolioIcon />
        <PortfolioSettings />
      </div>
      <PortfolioNavBar />
    </div>
  );
};
