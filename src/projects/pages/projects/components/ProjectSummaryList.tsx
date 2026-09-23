import { useTranslation } from 'react-i18next';

import type { Project } from '@/interfaces';
import { ProjectSummaryCard } from './ProjectSummaryCard';
import { PageTitle } from '@/components';

interface Props {
  projects: Project[];
}

export const ProjectSummaryList = ({ projects }: Props) => {
  const { t } = useTranslation('pages');

  return (
    <div>
      <PageTitle title={t('projects.title')} />
      {projects.map((project) => (
        <ProjectSummaryCard project={project} key={project.id} />
      ))}
    </div>
  );
};
