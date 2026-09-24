import { useTranslation } from 'react-i18next';

import { EducationData } from '@/data';
import type { Education } from '@/interfaces';

export const useEducation = (): Education[] => {
  const { t } = useTranslation('education');

  return EducationData.map((education) => ({
    ...education,
    title: t(`items.${education.id}.title`),
    description: t(`items.${education.id}.description`, {
      returnObjects: true,
    }) as string[],
  }));
};
