import { cn } from '@/lib/utils';

interface Props {
  label: string;
  onClick: () => void;
  location: 'left' | 'right';
}

export const GalleryButton = ({ label, onClick, location }: Props) => {
  return (
    <button
      className={cn(
        'p-4 m-3 cursor-pointer bg-accent',
        location === 'left' && 'rounded-l-xl',
        location === 'right' && 'rounded-e-xl',
      )}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
