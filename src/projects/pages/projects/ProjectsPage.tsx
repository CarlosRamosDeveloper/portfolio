import type { Project } from '@/interfaces';

import { ProjectsData } from '@/data/ProjectsData';
import { ProjectSummaryList } from './components';

const projectsList: Project[] = ProjectsData.sort().reverse();

export const ProjectsPage = () => {
  return (
    <div>
      <ProjectSummaryList projects={projectsList} />
    </div>
  );
};
