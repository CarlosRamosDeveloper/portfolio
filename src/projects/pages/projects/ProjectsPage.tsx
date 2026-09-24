import { ProjectSummaryList } from './components';
import { FramePage } from '@/components';
import { useProject } from '@/hooks';

export const ProjectsPage = () => {
  const projectsList = useProject().sort().reverse();

  return (
    <FramePage>
      <ProjectSummaryList projects={projectsList} />
    </FramePage>
  );
};
