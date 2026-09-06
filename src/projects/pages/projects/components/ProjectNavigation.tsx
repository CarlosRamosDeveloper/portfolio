import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';
import { PROJECT_TEXT } from '@/constants/projects/pages';

interface Props {
  projectUrl?: string;
}

export const ProjectNavigation = ({ projectUrl }: Props) => {
  return (
    // Cambiar el color del enlace
    // Aplicar el enlace a la página del proyecto
    <div className="">
      <ProjectSummarySubtitle text={PROJECT_TEXT.navigateToProject} />
    </div>
  );
};
