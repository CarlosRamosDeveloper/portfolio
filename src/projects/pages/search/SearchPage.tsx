import { PageTitle } from '@/components';
import { TECHNOLOGIES } from '@/constants';
import { SEARCH_TEXT } from '@/constants/projects/pages';
import { useState } from 'react';
import type { TechCategory, TechId, Technology } from '@/interfaces';
import { ProjectsData } from '@/data/ProjectsData';
import { TechFilters } from './components/TechFilters';
import { CategorySection } from './components/CategorySection';
import { SearchedProjectsList } from './components';

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
      <CategorySection title="language">
        <TechFilters
          techList={filterTechnologiesByCategory(techList, 'language')}
          selectedIds={selectedTechIds}
          onChange={handleTechnologyClick}
        />
      </CategorySection>
      <CategorySection title="framework">
        <TechFilters
          techList={filterTechnologiesByCategory(techList, 'framework')}
          selectedIds={selectedTechIds}
          onChange={handleTechnologyClick}
        />
      </CategorySection>
      <CategorySection title="library">
        <TechFilters
          techList={filterTechnologiesByCategory(techList, 'library')}
          selectedIds={selectedTechIds}
          onChange={handleTechnologyClick}
        />
      </CategorySection>
      <CategorySection title="database">
        <TechFilters
          techList={filterTechnologiesByCategory(techList, 'database')}
          selectedIds={selectedTechIds}
          onChange={handleTechnologyClick}
        />
      </CategorySection>
      <CategorySection title="ui-toolkit">
        <TechFilters
          techList={filterTechnologiesByCategory(techList, 'ui-toolkit')}
          selectedIds={selectedTechIds}
          onChange={handleTechnologyClick}
        />
      </CategorySection>
      <CategorySection title="platform">
        <TechFilters
          techList={filterTechnologiesByCategory(techList, 'platform')}
          selectedIds={selectedTechIds}
          onChange={handleTechnologyClick}
        />
      </CategorySection>
      <button onClick={handleClearFilters}>Limpiar tech</button>
      <SearchedProjectsList filteredProjects={filteredProjects} />
    </div>
  );
};
