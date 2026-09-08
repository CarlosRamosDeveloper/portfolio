import { CONTACT_TEXT } from '@/constants/pages';
import { ContactComponentsList } from '@/portfolio/components';

export const ContactPage = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-semibold">
        {CONTACT_TEXT.title}
      </h2>
      <ContactComponentsList />
    </div>
  );
};
