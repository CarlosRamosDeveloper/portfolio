import type { Project } from '@/interfaces';
import { ProjectSummaryCard } from './ProjectSummaryCard';
import { PROJECT_TEXT } from '@/constants/projects/pages';
import { PageTitle } from '@/components';

interface Props {
  projects: Project[];
}

export const ProjectSummaryList = ({ projects }: Props) => {
  return (
    <div>
      <PageTitle title={PROJECT_TEXT.title} />
      {projects.map((project) => (
        <ProjectSummaryCard project={project} key={project.id} />
      ))}
    </div>
  );
};
