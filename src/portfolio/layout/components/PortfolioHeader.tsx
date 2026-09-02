import { PortfolioIcon, PortfolioNavBar, PortfolioSettings } from '.';

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
