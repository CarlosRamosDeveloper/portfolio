import { useTranslation } from 'react-i18next';

import { GoalsSection, GreetSection } from './components';
import { FramePage, PageTitle } from '@/components';

export const AboutPage = () => {
  const { t } = useTranslation('pages');

  return (
    <FramePage>
      <PageTitle title={t('about.aboutMe')} />
      <GreetSection />
      <GoalsSection />
    </FramePage>
  );
};
