import type { JobExperience } from '@/interfaces';

interface Props {
  data: JobExperience;
}

export const LandingJobCard = ({ data }: Props) => {
  return (
    <div className="w-full max-w-3xl border border-border">
      <div className="flex items-center justify-between border-b border-border bg-card-details px-4 py-2 font-semibold">
        {data.company}
        <span className="text-sm font-normal ml-3">
          {data.isInternship ? 'Prácticas' : 'Trabajo'}
        </span>
      </div>
      <div className="flex items-center justify-between px-4 py-3 bg-card">
        <span>{data.workingPosition}</span>
        <span className="text-sm text-muted-foreground">
          {data.startYear}-{data.endYear}
        </span>
      </div>
    </div>
  );
};
