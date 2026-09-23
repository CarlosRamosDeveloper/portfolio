import { useTranslation } from 'react-i18next';

import {
  BackgroundCardsList,
  type Background,
} from '../components/backgroundCard';
import { EducationData } from '@/data';
import { FramePage, PageTitle } from '@/components';

const data: Background[] = [
  ...EducationData.sort()
    .reverse()
    .map((experience) => ({
      type: 'education' as const,
      data: experience,
    })),
];

export const EducationPage = () => {
  const { t } = useTranslation('pages');

  return (
    <FramePage>
      <PageTitle title={t('education.title')} />
      <BackgroundCardsList background={data} />
    </FramePage>
  );
};
