import type { Project } from '@/interfaces';
import { ProjectSummaryCard } from './ProjectSummaryCard';

interface Props {
  projects: Project[];
}

export const ProjectSummaryList = ({ projects }: Props) => {
  return (
    <div>
      <span>Todos los proyectos</span>
      {projects.map((project) => (
        <ProjectSummaryCard project={project} key={project.id} />
      ))}
    </div>
  );
};
