import { PageTitle } from '@/components';
import { TECHNOLOGIES } from '@/constants';
import { SEARCH_TEXT } from '@/constants/projects/pages';
import { SearchedProjectsList } from './components';
import { useState } from 'react';
import type { TechCategory, TechId, Technology } from '@/interfaces';
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

  const filterTechnologiesByCategory = (
    techList: [TechId, Technology][],
    category: TechCategory,
  ): [TechId, Technology][] => {
    return techList.filter(
      ([, technology]) => technology.category === category,
    );
  };

  console.log(filterTechnologiesByCategory(techList, 'language'));

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
        category={'language'}
        techList={filterTechnologiesByCategory(techList, 'language')}
        selectedIds={selectedTechIds}
        onChange={handleTechnologyClick}
      />
      <TechFilters
        category={'game-engine'}
        techList={filterTechnologiesByCategory(techList, 'game-engine')}
        selectedIds={selectedTechIds}
        onChange={handleTechnologyClick}
      />
      <TechFilters
        category={'framework'}
        techList={filterTechnologiesByCategory(techList, 'framework')}
        selectedIds={selectedTechIds}
        onChange={handleTechnologyClick}
      />
      <TechFilters
        category={'library'}
        techList={filterTechnologiesByCategory(techList, 'library')}
        selectedIds={selectedTechIds}
        onChange={handleTechnologyClick}
      />
      <TechFilters
        category={'database'}
        techList={filterTechnologiesByCategory(techList, 'database')}
        selectedIds={selectedTechIds}
        onChange={handleTechnologyClick}
      />
      <TechFilters
        category={'ui-toolkit'}
        techList={filterTechnologiesByCategory(techList, 'ui-toolkit')}
        selectedIds={selectedTechIds}
        onChange={handleTechnologyClick}
      />
      <TechFilters
        category={'platform'}
        techList={filterTechnologiesByCategory(techList, 'platform')}
        selectedIds={selectedTechIds}
        onChange={handleTechnologyClick}
      />
      <button onClick={handleClearFilters}>Limpiar tech</button>
      <SearchedProjectsList filteredProjects={filteredProjects} />
    </div>
  );
};
