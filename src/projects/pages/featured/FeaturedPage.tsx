import { FramePage, PageTitle } from '@/components';
import { ProjectsData } from '@/data';
import { FeaturedProjectsList } from './components';
import { FEATURED_TEXT } from '@/constants/pages';

const data = ProjectsData.filter((project) => project.isFeatured).reverse();

export const FeaturedPage = () => {
  return (
    <FramePage>
      <PageTitle title={FEATURED_TEXT.title} />
      <FeaturedProjectsList projects={data} />
    </FramePage>
  );
};
