import type { Project } from '@/interfaces';

import { ProjectsData } from '@/data/ProjectsData';
import { ProjectSummaryList } from './components';
import { FramePage } from '@/components';

const projectsList: Project[] = ProjectsData.sort().reverse();

export const ProjectsPage = () => {
  return (
    <FramePage>
      <ProjectSummaryList projects={projectsList} />
    </FramePage>
  );
};
