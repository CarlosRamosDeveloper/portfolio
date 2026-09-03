import type { Education, JobExperience } from '@/interfaces';
import { LandingEducationCard, LandingJobCard } from '.';

export type LandingExperience =
  | {
      type: 'education';
      data: Education;
    }
  | {
      type: 'job';
      data: JobExperience;
    };

interface Props {
  item: LandingExperience;
}

export const LandingExperienceCard = ({ item }: Props) => {
  const { data, type } = item;

  return (
    <div className="m-2">
      {type === 'education' && <LandingEducationCard data={data} />}
      {type === 'job' && <LandingJobCard data={data} />}
    </div>
  );
};
