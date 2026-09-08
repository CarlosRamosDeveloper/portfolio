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
        'py-7 px-5 cursor-pointer bg-accent',
        location === 'left' && 'rounded-l-xl ml-3',
        location === 'right' && 'rounded-e-xl mr-3',
      )}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
