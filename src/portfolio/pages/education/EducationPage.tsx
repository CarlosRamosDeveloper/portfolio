import { EducationData } from '@/portfolio/data';
import type { Background } from '../components/BackgroundCard';
import { EducationCardList } from './components';
import { EDUCATION_TEXT } from '@/constants/pages';
import { BackgroundCardsList } from '../components';

const data: Background[] = [
  ...EducationData.sort()
    .reverse()
    .map((experience) => ({
      type: 'education' as const,
      data: experience,
    })),
];

export const EducationPage = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-semibold">
        {EDUCATION_TEXT.title}
      </h2>
      <EducationCardList />
      <BackgroundCardsList background={data} />
    </div>
  );
};
