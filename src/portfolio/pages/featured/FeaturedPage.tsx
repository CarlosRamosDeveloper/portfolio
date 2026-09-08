import { ProjectsData } from '@/data/ProjectsData';
import { FeaturedProjectsList } from './components';
import { FEATURED_TEXT } from '@/constants/pages';
import { PageTitle } from '@/components';

const data = ProjectsData.filter((project) => project.isFeatured).reverse();

export const FeaturedPage = () => {
  return (
    <div className="w-full">
      <PageTitle title={FEATURED_TEXT.title} />
      <FeaturedProjectsList projects={data} />
    </div>
  );
};
