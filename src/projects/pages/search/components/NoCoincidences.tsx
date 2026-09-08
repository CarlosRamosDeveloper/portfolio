import { SEARCH_TEXT } from '@/constants/projects/pages';

export const NoCoincidences = () => {
  return (
    <div className="text-center mt-7 text-2xl font-semibold">
      <span>{SEARCH_TEXT.noCoincidences}</span>
    </div>
  );
};
