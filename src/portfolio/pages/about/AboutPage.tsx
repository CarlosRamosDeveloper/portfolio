import { useTranslation } from 'react-i18next';

import { GoalsSection, GreetSection } from './components';
import { FramePage, PageTitle } from '@/components';

export const AboutPage = () => {
  const { t } = useTranslation('pages');

  return (
    <FramePage>
      <PageTitle title={t('about.title')} />
      <GreetSection />
      <GoalsSection />
    </FramePage>
  );
};
