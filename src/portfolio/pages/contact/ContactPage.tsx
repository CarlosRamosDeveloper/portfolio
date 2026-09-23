import { useTranslation } from 'react-i18next';

import { PageTitle } from '@/components';
import { FramePage } from '@/components/custom/FramePage';
import { ContactComponentsList } from '@/portfolio/components';

export const ContactPage = () => {
  const { t } = useTranslation('pages');

  return (
    <FramePage>
      <PageTitle title={t('contact.title')} />
      <ContactComponentsList />
    </FramePage>
  );
};
