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
        'h-25 w-30 lg:w-35 border-2 bg-accent p-1 text-sm lg:text-base',
        isSelected ? ' border-white' : 'border-transparent',
      )}
      type="button"
      onClick={onChange}
    >
      {technology.name}
    </button>
  );
};
