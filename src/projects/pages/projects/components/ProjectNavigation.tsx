import { Link } from 'react-router';
import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';
import { PROJECT_TEXT } from '@/constants/projects/pages';

interface Props {
  projectUrl: string;
}

export const ProjectNavigation = ({ projectUrl }: Props) => {
  console.log(projectUrl);
  return (
    // Cambiar el color del enlace
    // Aplicar el enlace a la página del proyecto
    <div className="">
      <Link to={projectUrl}>
        <ProjectSummarySubtitle text={PROJECT_TEXT.navigateToProject} />
      </Link>
    </div>
  );
};
