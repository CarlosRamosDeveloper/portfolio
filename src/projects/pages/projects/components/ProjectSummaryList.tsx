import type { Project } from '@/interfaces';
import { ProjectSummaryCard } from './ProjectSummaryCard';
import { PROJECT_TEXT } from '@/constants/projects/pages';

interface Props {
  projects: Project[];
}

export const ProjectSummaryList = ({ projects }: Props) => {
  return (
    <div>
      <span>{PROJECT_TEXT.title}</span>
      {projects.map((project) => (
        <ProjectSummaryCard project={project} key={project.id} />
      ))}
    </div>
  );
};
