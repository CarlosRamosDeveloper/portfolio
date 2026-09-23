import { useTranslation } from 'react-i18next';

import {
  BackgroundCardsList,
  type Background,
} from '../components/backgroundCard';
import { ExperienceData } from '@/data';
import { FramePage, PageTitle } from '@/components';

const data: Background[] = [
  ...ExperienceData.sort()
    .reverse()
    .map((experience) => ({
      type: 'job' as const,
      data: experience,
    })),
];

export const ExperiencePage = () => {
  const { t } = useTranslation('pages');

  return (
    <FramePage>
      <PageTitle title={t('experience.title')} />
      <BackgroundCardsList background={data} />
    </FramePage>
  );
};
