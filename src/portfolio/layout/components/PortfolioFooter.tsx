import { LAYOUT_TEXT } from '@/constants/layout';
import { ContactComponentsList } from '@/portfolio/components';

export const PortfolioFooter = () => {
  return (
    <>
      <div className="mb mt-4 flex flex-col items-center gap-2 text-sm">
        <h5>
          {LAYOUT_TEXT.footer} - {LAYOUT_TEXT.initialYear}
        </h5>
        <ContactComponentsList isFooter={true} />
      </div>
    </>
  );
};
