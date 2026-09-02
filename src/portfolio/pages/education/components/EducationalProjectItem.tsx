import { useState } from 'react';

import type { EducationProject } from '@/interfaces';
import { EducationalRepositoryItem, EducationProjectTitle } from '.';
import { DescriptionList, Separator, TechStackList } from '../../components';

interface Props {
  project: EducationProject;
}

export const EducationalProjectItem = ({ project }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVisibilityToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Separator />
      <div
        className="flex flex-1 items-center justify-between"
        onClick={handleVisibilityToggle}
      >
        <EducationProjectTitle title={project.name} />
      </div>
      {isOpen && (
        <div>
          <EducationalRepositoryItem repositoryUrl={project.repository} />
          <TechStackList techStack={project.techStack} />
          <DescriptionList descriptions={project.description} />
        </div>
      )}

      {/* TODO: Implementar el sistema de navegación a la página del proyecto cuando se cree la página de proyectos */}
      {/* {project.navigation && <h1>{project.navigation}</h1>} */}
    </>
  );
};
