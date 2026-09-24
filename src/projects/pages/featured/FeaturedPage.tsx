import { useTranslation } from 'react-i18next';

import { FramePage, PageTitle } from '@/components';
import { FeaturedProjectsList } from './components';
import { useProject } from '@/hooks';

export const FeaturedPage = () => {
  const { t } = useTranslation('pages');
  const data = useProject()
    .filter((project) => project.isFeatured)
    .reverse();

  return (
    <FramePage>
      <PageTitle title={t('featured.title')} />
      <FeaturedProjectsList projects={data} />
    </FramePage>
  );
};
