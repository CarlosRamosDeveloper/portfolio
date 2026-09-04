import { EducationCardList } from './components';
import { EDUCATION_TEXT } from '@/constants/pages';

export const EducationPage = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-semibold">
        {EDUCATION_TEXT.title}
      </h2>
      <EducationCardList />
    </div>
  );
};
