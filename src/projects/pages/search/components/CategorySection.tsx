import { TECH_CATEGORY_TYPE_LABEL } from '@/constants/tech.category.type.label';
import type { TechCategory } from '@/interfaces';
import type { ReactNode } from 'react';

interface Props {
  title: TechCategory;
  children: ReactNode;
}

export const CategorySection = ({ children, title }: Props) => {
  return (
    <>
      {TECH_CATEGORY_TYPE_LABEL[title]}
      {children}
    </>
  );
};
