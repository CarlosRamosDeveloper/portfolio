import { useTranslation } from 'react-i18next';

import { EducationData } from '@/data';
import type { Education, Project } from '@/interfaces';
import { useProject } from '.';

export const useEducation = (): Education[] => {
  const { t } = useTranslation('education');
  const projects = useProject();

  return EducationData.map((education) => ({
    ...education,
    title: t(`items.${education.id}.title`),
    description: t(`items.${education.id}.description`, {
      returnObjects: true,
    }) as string[],
    projects: education.projectIds
      ?.map((projectId) => projects.find((project) => project.id === projectId))
      .filter((project): project is Project => project !== undefined),
  }));
};
