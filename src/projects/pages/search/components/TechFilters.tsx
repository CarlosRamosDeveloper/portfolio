import type { TechId, Technology } from '@/interfaces';
import { TechFilterItem } from '.';

interface Props {
  techList: [TechId, Technology][];
  selectedIds: TechId[];
  onChange: (id: TechId) => void;
}

export const TechFilters = ({ techList, selectedIds, onChange }: Props) => {
  return (
    <div className="flex flex-1 justify-center">
      {techList.map(([id, technology]) => (
        <TechFilterItem
          key={id}
          technology={technology}
          isSelected={selectedIds.includes(id)}
          onChange={() => onChange(id)}
        />
      ))}
    </div>
  );
};
