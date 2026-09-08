import { PageTitle } from '@/components';
import { TECHNOLOGIES } from '@/constants';
import { SEARCH_TEXT } from '@/constants/projects/pages';
import { SearchedProjectsList } from './components';
import { useState } from 'react';
import type { TechId, Technology } from '@/interfaces';
import { ProjectsData } from '@/data/ProjectsData';
import { TechFilters } from './components/TechFilters';

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

  const handleClearFilters = () => {
    setSelectedTechIds([]);
  };

  return (
    <div className="flex flex-col">
      <PageTitle title={SEARCH_TEXT.title} />
      <TechFilters
        techList={techList}
        selectedIds={selectedTechIds}
        onChange={handleTechnologyClick}
      />
      <button onClick={handleClearFilters}>Limpiar tech</button>
      <SearchedProjectsList filteredProjects={filteredProjects} />
    </div>
  );
};
