import {
  BackgroundCardsList,
  type Background,
} from '../components/backgroundCard';
import { EducationData } from '@/data';
import { EDUCATION_TEXT } from '@/constants/pages';

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
      <BackgroundCardsList background={data} />
    </div>
  );
};
