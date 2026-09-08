import type { TechCategory } from '@/interfaces';
import type { ReactNode } from 'react';

interface Props {
  title: TechCategory;
  children: ReactNode;
}

export const CategorySection = ({ children, title }: Props) => {
  return (
    <>
      {title}
      {children}
    </>
  );
};
