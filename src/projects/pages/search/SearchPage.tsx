import { PageTitle } from '@/components';
import { TECHNOLOGIES } from '@/constants';
import { SEARCH_TEXT } from '@/constants/projects/pages';
import { SearchedProjectsList, TechFilterItem } from './components';
import { useState } from 'react';
import type { TechId, Technology } from '@/interfaces';
import { ProjectsData } from '@/data/ProjectsData';

const techList = Object.entries(TECHNOLOGIES) as [TechId, Technology][];

export const SearchPage = () => {
  const [selectedTechIds, setSelectedTechIds] = useState<TechId[]>([]);

  const filteredProjects = ProjectsData.filter((project) =>
    selectedTechIds.every((selectedTechId) =>
      project.techStack.some((technology) => technology.id === selectedTechId),
    ),
  );

  const handleTechnologyClick = (id: TechId) => {
    setSelectedTechIds((previous) => {
      if (previous.includes(id)) {
        return previous.filter((techId) => techId !== id);
      }

      return [...previous, id];
    });
  };

  return (
    <div className="flex flex-col">
      <div>
        <PageTitle title={SEARCH_TEXT.title} />
        {techList.map(([id, technology]) => (
          <TechFilterItem
            key={id}
            technology={technology}
            isSelected={selectedTechIds.includes(id)}
            onChange={() => handleTechnologyClick(id)}
          />
        ))}
      </div>

      <SearchedProjectsList filteredProjects={filteredProjects} />
    </div>
  );
};
