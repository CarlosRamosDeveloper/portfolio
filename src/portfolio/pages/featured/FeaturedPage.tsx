import { ProjectsData } from '@/data/ProjectsData';
import { FeaturedProjectsList } from './components';
import { FEATURED_TEXT } from '@/constants/pages';
import { FramePage, PageTitle } from '@/components';

const data = ProjectsData.filter((project) => project.isFeatured).reverse();

export const FeaturedPage = () => {
  return (
    <FramePage>
      <PageTitle title={FEATURED_TEXT.title} />
      <FeaturedProjectsList projects={data} />
    </FramePage>
  );
};
