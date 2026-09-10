import { Link } from 'react-router';
import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';
import { PROJECT_TEXT } from '@/constants/projects/pages';

interface Props {
  projectUrl: string;
}

export const ProjectNavigation = ({ projectUrl }: Props) => {
  return (
    <div className="text-blue-600 font-semibold">
      <Link to={projectUrl}>
        <ProjectSummarySubtitle text={PROJECT_TEXT.navigateToProject} />
      </Link>
    </div>
  );
};
