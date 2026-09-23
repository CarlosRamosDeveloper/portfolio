import { PORTFOLIO_TEXT } from '@/constants';
import { ContactComponentsList } from '@/portfolio/components';

export const CustomFooter = () => {
  return (
    <>
      <div className="mb mt-4 flex flex-col items-center gap-2 text-sm">
        <h5>
          {PORTFOLIO_TEXT.footer} - {PORTFOLIO_TEXT.initialYear}
        </h5>
        <ContactComponentsList isFooter={true} />
      </div>
    </>
  );
};
