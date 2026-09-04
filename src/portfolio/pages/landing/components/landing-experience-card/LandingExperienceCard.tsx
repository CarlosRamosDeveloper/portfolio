import type { Education, JobExperience } from '@/interfaces';
import { LandingExperienceHeader } from './LandingExperienceHeader';
import { LandingExperienceCardBody } from './LandingExperienceCardBody';

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
      <LandingExperienceHeader
        title={
          type === 'education' ? data.title : type === 'job' ? data.company : ''
        }
        subtitle={
          type === 'education'
            ? 'Educación'
            : type === 'job'
              ? data.isInternship === true
                ? 'Prácticas'
                : 'Trabajo'
              : ''
        }
        type={type}
      />
      <LandingExperienceCardBody
        description={
          type === 'education'
            ? `Cantidad de proyectos: ${data.projects?.length}`
            : type === 'job'
              ? data.workingPosition
              : ''
        }
        startDate={data.startYear}
        endDate={data.endYear}
        type={type}
      />
    </div>
  );
};
