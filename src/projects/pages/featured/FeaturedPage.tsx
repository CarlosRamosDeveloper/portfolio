import { useTranslation } from 'react-i18next';

import { FramePage, PageTitle } from '@/components';
import { ProjectsData } from '@/data';
import { FeaturedProjectsList } from './components';

const data = ProjectsData.filter((project) => project.isFeatured).reverse();

export const FeaturedPage = () => {
  const { t } = useTranslation('pages');

  return (
    <FramePage>
      <PageTitle title={t('featured.title')} />
      <FeaturedProjectsList projects={data} />
    </FramePage>
  );
};
