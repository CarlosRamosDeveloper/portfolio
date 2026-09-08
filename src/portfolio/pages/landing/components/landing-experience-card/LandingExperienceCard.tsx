import type { Education, JobExperience } from '@/interfaces';
import { LandingExperienceHeader } from './LandingExperienceHeader';
import { LandingExperienceCardBody } from './LandingExperienceCardBody';
import { LANDING_TEXT } from '@/constants/pages';

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
            ? `${LANDING_TEXT.education}`
            : type === 'job'
              ? data.isInternship === true
                ? `${LANDING_TEXT.internship}`
                : `${LANDING_TEXT.work}`
              : ''
        }
        type={type}
      />
      <LandingExperienceCardBody
        description={
          type === 'education'
            ? `${LANDING_TEXT.projectQuantity}: ${data.projects?.length}`
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
