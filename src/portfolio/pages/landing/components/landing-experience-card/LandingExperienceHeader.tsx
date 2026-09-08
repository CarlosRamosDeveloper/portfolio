import { cn } from '@/lib/utils';

interface Props {
  title: string;
  subtitle: string;
  type: 'job' | 'education';
}

export const LandingExperienceHeader = ({ title, subtitle, type }: Props) => {
  return (
    <div
      className={cn(
        `flex items-center justify-between border-b border-border px-4 py-2 font-semibold`,
        type === 'job' && 'bg-card-details',
        type === 'education' && 'bg-card-secondary',
      )}
    >
      {title}
      <span className="text-sm font-normal ml-3">{subtitle}</span>
    </div>
  );
};
