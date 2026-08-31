import { HeaderSettings, PortfolioIcon, PortfolioNavBar } from '.';

export const PortfolioHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <PortfolioIcon />
      <PortfolioNavBar />
      <HeaderSettings />
    </div>
  );
};
