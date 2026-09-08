import { TECH_CATEGORY_TYPE_LABEL } from '@/constants/tech.category.type.label';
import type { TechCategory } from '@/interfaces';
import type { ReactNode } from 'react';

interface Props {
  title: TechCategory;
  children: ReactNode;
}

export const CategorySection = ({ children, title }: Props) => {
  return (
    <div className="mb-2 mt-3">
      <h3 className="text-center text-xl">{TECH_CATEGORY_TYPE_LABEL[title]}</h3>
      {children}
    </div>
  );
};
