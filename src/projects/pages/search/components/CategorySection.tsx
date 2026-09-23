import type { ReactNode } from 'react';

import { useTranslation } from 'react-i18next';

import type { TechCategory } from '@/interfaces';

interface Props {
  title: TechCategory;
  children: ReactNode;
}

export const CategorySection = ({ children, title }: Props) => {
  const { t } = useTranslation('pages');
  return (
    <div className="mb-2 mt-3">
      <h3 className="text-center text-xl">
        {t(`search.techCategories.${title}`)}
      </h3>
      {children}
    </div>
  );
};
