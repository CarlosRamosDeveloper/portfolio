import {
  BackgroundCardsList,
  type Background,
} from '../components/backgroundCard';
import { ExperienceData } from '@/data';
import { EXPERIENCE_TEXT } from '@/constants/pages';
import { PageTitle } from '@/components';

const data: Background[] = [
  ...ExperienceData.sort()
    .reverse()
    .map((experience) => ({
      type: 'job' as const,
      data: experience,
    })),
];

export const ExperiencePage = () => {
  return (
    <div className="w-full">
      <PageTitle title={EXPERIENCE_TEXT.title} />
      <BackgroundCardsList background={data} />
    </div>
  );
};
