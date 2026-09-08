import type { Technology } from '@/interfaces';
import { cn } from '@/lib/utils';

interface Props {
  technology: Technology;
  isSelected: boolean;
  onChange: () => void;
}

export const TechFilterItem = ({ technology, isSelected, onChange }: Props) => {
  return (
    <button
      className={cn(
        'p-3 bg-accent m-1',
        isSelected ? 'border-2 border-white' : 'border border-transparent',
      )}
      type="button"
      onClick={onChange}
    >
      {technology.name}
    </button>
  );
};
