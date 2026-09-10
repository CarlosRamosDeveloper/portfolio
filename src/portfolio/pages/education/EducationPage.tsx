import {
  BackgroundCardsList,
  type Background,
} from '../components/backgroundCard';
import { EducationData } from '@/data';
import { EDUCATION_TEXT } from '@/constants/pages';
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
  return (
    <FramePage>
      <PageTitle title={EDUCATION_TEXT.title} />
      <BackgroundCardsList background={data} />
    </FramePage>
  );
};
