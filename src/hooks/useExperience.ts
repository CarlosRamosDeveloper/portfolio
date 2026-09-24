import { useTranslation } from 'react-i18next';

import { ExperienceData } from '@/data';
import type { JobExperience } from '@/interfaces';

export const useExperience = (): JobExperience[] => {
  const { t } = useTranslation('experience');

  return ExperienceData.map((experience) => ({
    ...experience,
    workingPosition: t(`items.${experience.id}.workingPosition`),
    subtitle: t(`items.${experience.id}.subtitle`),
    description: t(`items.${experience.id}.description`, {
      returnObjects: true,
    }) as string[],
  }));
};
