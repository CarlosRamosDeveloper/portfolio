import { PageTitle } from '@/components';
import { CONTACT_TEXT } from '@/constants/pages';
import { ContactComponentsList } from '@/portfolio/components';

export const ContactPage = () => {
  return (
    <div className="w-full">
      <PageTitle title={CONTACT_TEXT.title} />
      <ContactComponentsList />
    </div>
  );
};
