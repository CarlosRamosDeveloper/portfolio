import { useState } from 'react';

import type { Project } from '@/interfaces';
import { Separator, TechStackList } from '../..';
import { EducationalRepositoryItem, EducationProjectTitle } from '.';
import { DescriptionList } from '..';
import { ROUTES } from '@/constants';
import { useMaxTechPerRow } from '@/hooks';

interface Props {
  project: Project;
}

export const EducationalProjectItem = ({ project }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVisibilityToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const maxTechPerRow = useMaxTechPerRow();

  return (
    <>
      <Separator />
      <div
        className="flex flex-1 items-center justify-between"
        onClick={handleVisibilityToggle}
      >
        <EducationProjectTitle
          title={project.name}
          url={`${ROUTES.projects}/${project.idSlug}`}
        />
      </div>
      {isOpen && (
        <div>
          <EducationalRepositoryItem repositoryUrl={project.repository} />
          <TechStackList
            techStack={project.techStack}
            maxTechPerRow={maxTechPerRow}
            topSeparator
          />
          <DescriptionList descriptions={project.description} />
        </div>
      )}
    </>
  );
};
