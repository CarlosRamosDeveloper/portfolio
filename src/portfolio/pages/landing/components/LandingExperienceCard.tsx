import type { Education, JobExperience } from '@/interfaces';
import { LandingJobCard } from './LandingJobCard';
import { LandingEducationCard } from './LandingEducationCard';

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
  if (type === 'education') return <LandingEducationCard data={data} />;
  if (type === 'job') return <LandingJobCard data={data} />;
};
