import { EXPERIENCE_TEXT } from '@/constants/pages';
import { ExperienceCardsList } from './components';

import { ExperienceData } from '@/portfolio/data';
import type { Background } from '../components/BackgroundCard';
import { BackgroundCardsList } from '../components/BackgroundCardsList';

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
      <h2 className="text-center text-2xl font-semibold">
        {EXPERIENCE_TEXT.title}
      </h2>
      <ExperienceCardsList />
      <BackgroundCardsList background={data} />
    </div>
  );
};
