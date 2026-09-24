import { ProjectsData } from '@/data';
import type { Project } from '@/interfaces';
import { useTranslation } from 'react-i18next';
import { useRoadmap } from './useRoadmap';

export const useProject = (): Project[] => {
  const { t } = useTranslation('projects');
  const roadmap = useRoadmap();

  const data = ProjectsData.map((project) => ({
    ...project,
    name: t(`items.${project.id}.name`),
    shortDescription: t(`items.${project.id}.shortDescription`),
    description: t(`items.${project.id}.description`, {
      returnObjects: true,
    }) as string[],
    roadmap: roadmap,
  }));

  console.log(data);

  return data;

  return ProjectsData.map((project) => ({
    ...project,
    name: t(`items.${project.id}.name`),
    shortDescription: t(`items.${project.id}.shortDescription`),
    description: t(`items.${project.id}.description`, {
      returnObjects: true,
    }) as string[],
    roadmap: roadmap,
  }));
};
