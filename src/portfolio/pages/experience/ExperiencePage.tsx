import {
  BackgroundCardsList,
  type Background,
} from '../components/backgroundCard';
import { ExperienceData } from '@/data';
import { EXPERIENCE_TEXT } from '@/constants/pages';

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
      <BackgroundCardsList background={data} />
    </div>
  );
};
