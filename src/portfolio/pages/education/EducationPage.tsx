import {
  BackgroundCardsList,
  type Background,
} from '../components/backgroundCard';
import { EducationData } from '@/data';
import { EDUCATION_TEXT } from '@/constants/pages';
import { PageTitle } from '@/components';

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
      <PageTitle title={EDUCATION_TEXT.title} />
      <BackgroundCardsList background={data} />
    </div>
  );
};
