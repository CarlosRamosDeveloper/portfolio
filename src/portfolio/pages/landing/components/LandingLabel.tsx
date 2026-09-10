import { cn } from '@/lib/utils';

interface Props {
  text: string;
  type: 'title' | 'subtitle' | 'navigation' | 'description';
}

export const LandingLabel = ({ text, type }: Props) => {
  return (
    <span
      className={cn(
        type === 'title' && 'text-2xl font-semibold lg:text-3xl',
        type === 'subtitle' && 'text-xl lg:text-2xl',
        type === 'navigation' && 'text-xl lg:text-2xl font-bold',
        type === 'description' && 'text-base lg:text-xl',
      )}
    >
      {text}
    </span>
  );
};
