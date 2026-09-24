import { useTranslation } from 'react-i18next';

import { BackgroundCardsList } from '../components/backgroundCard';
import { FramePage, PageTitle } from '@/components';
import { useBackground } from '@/hooks';

export const ExperiencePage = () => {
  const { t } = useTranslation('pages');
  const data = useBackground({ type: 'job' });

  return (
    <FramePage>
      <PageTitle title={t('experience.title')} />
      <BackgroundCardsList background={data} />
    </FramePage>
  );
};
