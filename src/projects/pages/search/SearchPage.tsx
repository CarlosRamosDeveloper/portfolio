import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { FramePage, PageTitle } from '@/components';
import { TECHNOLOGIES } from '@/constants';
import type { TechCategory, TechId, Technology } from '@/interfaces';
import { TechFilters } from './components/TechFilters';
import { CategorySection } from './components/CategorySection';
import { CleanFiltersButton, SearchedProjectsList } from './components';
import { useProject } from '@/hooks';

const techList = (
  Object.entries(TECHNOLOGIES) as [TechId, Technology][]
).filter(([, tech]) => tech.isRelevant);

export const SearchPage = () => {
  const [selectedTechIds, setSelectedTechIds] = useState<TechId[]>([]);
  const { t } = useTranslation('pages');

  const filteredProjects = useProject().filter((project) =>
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
    <FramePage>
      <div className="flex flex-col">
        <PageTitle title={t('search.title')} />
        <CleanFiltersButton onClick={handleClearFilters} />
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
        <CategorySection title="platform">
          <TechFilters
            techList={filterTechnologiesByCategory(techList, 'platform')}
            selectedIds={selectedTechIds}
            onChange={handleTechnologyClick}
          />
        </CategorySection>
        <SearchedProjectsList filteredProjects={filteredProjects} />
      </div>
    </FramePage>
  );
};
