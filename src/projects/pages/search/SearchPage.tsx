import { PageTitle } from '@/components';
import { TECHNOLOGIES } from '@/constants';
import { SEARCH_TEXT } from '@/constants/projects/pages';
import { TechFilterItem } from './components';
import { useState } from 'react';
import type { TechId, Technology } from '@/interfaces';

const techList = Object.entries(TECHNOLOGIES) as [TechId, Technology][];

export const SearchPage = () => {
  const [selectedTechIds, setSelectedTechIds] = useState<TechId[]>([]);

  const handleTechnologyClick = (id: TechId) => {
    setSelectedTechIds((previous) => {
      if (previous.includes(id)) {
        return previous.filter((techId) => techId !== id);
      }

      return [...previous, id];
    });
  };

  return (
    <>
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
      <div></div>
    </>
  );
};
