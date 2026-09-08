import { SEARCH_TEXT } from '@/constants/projects/pages';

interface Props {
  onClick: () => void;
}

export const CleanFiltersButton = ({ onClick }: Props) => {
  return (
    <div className="flex mx-auto">
      <button className="py-2 px-4 bg-accent" onClick={onClick}>
        {SEARCH_TEXT.buttonClean}
      </button>
    </div>
  );
};
