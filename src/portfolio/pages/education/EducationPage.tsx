import { useTranslation } from 'react-i18next';

import { BackgroundCardsList } from '../components/backgroundCard';
import { FramePage, PageTitle } from '@/components';
import { useBackground } from '@/hooks';

export const EducationPage = () => {
  const { t } = useTranslation('pages');
  const data = useBackground({ type: 'education' });

  return (
    <FramePage>
      <PageTitle title={t('education.title')} />
      <BackgroundCardsList background={data} />
    </FramePage>
  );
};
