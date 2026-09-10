import type { TechId, Technology } from '@/interfaces';
import { TechFilterItem } from '.';
import { useMediaQuery } from '@/hooks';
import { splitIntoRows } from '@/portfolio/shared';

interface Props {
  techList: [TechId, Technology][];
  selectedIds: TechId[];
  onChange: (id: TechId) => void;
}

export const TechFilters = ({ techList, selectedIds, onChange }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const maxTechPerRow = isDesktop ? 5 : 3;
  const techRows = splitIntoRows(techList, maxTechPerRow);

  return (
    <div className="flex flex-col gap-2">
      {techRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2 justify-center">
          {row.map(([id, technology]) => (
            <TechFilterItem
              key={id}
              technology={technology}
              isSelected={selectedIds.includes(id)}
              onChange={() => onChange(id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
