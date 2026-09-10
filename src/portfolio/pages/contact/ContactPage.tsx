import { PageTitle } from '@/components';
import { FramePage } from '@/components/custom/FramePage';
import { CONTACT_TEXT } from '@/constants/pages';
import { ContactComponentsList } from '@/portfolio/components';

export const ContactPage = () => {
  return (
    <FramePage>
      <PageTitle title={CONTACT_TEXT.title} />
      <ContactComponentsList />
    </FramePage>
  );
};
