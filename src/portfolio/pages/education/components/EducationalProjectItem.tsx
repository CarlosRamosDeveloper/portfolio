import type { EducationProject } from '@/interfaces';
import { Separator } from '@/portfolio/components';
import { EducationalRepositoryItem, EducationProjectTitle } from '.';
import { ExperienceDescriptionList } from '../../experience/components';
import { TechStackList } from '../../experience/components/TechStackList';

interface Props {
  project: EducationProject;
}

export const EducationalProjectItem = ({ project }: Props) => {
  return (
    <>
      <Separator />
      <div className="flex flex-1 items-center justify-between">
        <EducationProjectTitle title={project.name} />
        <EducationalRepositoryItem repositoryUrl={project.repository} />
      </div>
      <TechStackList techStack={project.techStack} />
      <ExperienceDescriptionList descriptions={project.description} />

      {/* TODO: Implementar el sistema de navegación a la página del proyecto cuando se cree la página de proyectos */}
      {/* {project.navigation && <h1>{project.navigation}</h1>} */}
    </>
  );
};
