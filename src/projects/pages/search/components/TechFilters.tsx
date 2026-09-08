import type { TechCategory, TechId, Technology } from '@/interfaces';
import { TechFilterItem } from '.';

interface Props {
  techList: [TechId, Technology][];
  selectedIds: TechId[];
  onChange: (id: TechId) => void;
  category: TechCategory;
}

export const TechFilters = ({
  techList,
  selectedIds,
  onChange,
  category,
}: Props) => {
  return (
    <>
      <div>{category}</div>
      <div>
        {techList.map(([id, technology]) => (
          <TechFilterItem
            key={id}
            technology={technology}
            isSelected={selectedIds.includes(id)}
            onChange={() => onChange(id)}
          />
        ))}
      </div>
    </>
  );
};
