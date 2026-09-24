import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('landing');

  const { data, type } = item;

  return (
    <div className="m-2">
      <LandingExperienceHeader
        title={
          type === 'education' ? data.title : type === 'job' ? data.company : ''
        }
        subtitle={
          type === 'education'
            ? `${t('education')}`
            : type === 'job'
              ? data.isInternship === true
                ? `${t('internship')}`
                : `${t('work')}`
              : ''
        }
        type={type}
      />
      <LandingExperienceCardBody
        description={
          type === 'education'
            ? `${t('projectQuantity')}: ${data.projects?.length}`
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
