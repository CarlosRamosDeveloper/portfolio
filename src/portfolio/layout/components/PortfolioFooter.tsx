import { ContactComponentsList } from '@/portfolio/components';

export const PortfolioFooter = () => {
  return (
    <>
      <div className="mb-2.5 flex flex-col items-center gap-2">
        <h5>CarlosRamosDev© 2026</h5>
        <ContactComponentsList isFooter={true} />
      </div>
    </>
  );
};
