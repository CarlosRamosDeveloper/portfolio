import { EXPERIENCE_TEXT } from '@/constants/pages';
import { ExperienceCardsList } from './components';

export const ExperiencePage = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-semibold">
        {EXPERIENCE_TEXT.title}
      </h2>
      <ExperienceCardsList />
    </div>
  );
};
