import { cn } from '@/lib/utils';

interface Props {
  text: string;
  type: 'title' | 'status';
}

export const LandingFeaturedLabel = ({ text, type }: Props) => {
  return (
    <div
      className={cn(
        `mx-2`,
        type === 'title' && 'font-semibold',
        type === 'status' && 'text-slate-500',
      )}
    >
      {text}
    </div>
  );
};
