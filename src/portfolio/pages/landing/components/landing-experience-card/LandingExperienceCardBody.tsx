import { DateLabel } from '@/portfolio/pages/components';

interface Props {
  description: string;
  startDate: number;
  endDate: number | null;
  type: 'job' | 'education';
}

export const LandingExperienceCardBody = ({
  description,
  startDate,
  endDate,
}: Props) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-card">
      <div>{description}</div>
      <DateLabel start={startDate} end={endDate} mode="landing" />
    </div>
  );
};
