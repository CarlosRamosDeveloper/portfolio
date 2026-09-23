import { useTranslation } from 'react-i18next';

import { EducationalProjectItem } from '.';
import type { Project } from '@/interfaces';
import { Separator } from '../..';

interface Props {
  projects: Project[];
}

export const EducationalProjectList = ({ projects = [] }: Props) => {
  if (projects.length === 0) return null;

  const { t } = useTranslation('components');

  return (
    <div>
      <Separator />
      <h3 className="text-xl p-3 text-center sm:text-left">
        {t('backgroundCard.courseProjects')}
      </h3>
      {projects.map((project) => (
        <EducationalProjectItem project={project} key={project.name} />
      ))}
    </div>
  );
};
