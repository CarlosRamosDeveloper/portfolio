import { ProjectsData } from '@/portfolio/data/ProjectsData';
import { FeaturedProjectsList } from './components';
import { FEATURED_TEXT } from '@/constants/pages';

const data = ProjectsData.filter((project) => project.isFeatured).reverse();

export const FeaturedPage = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-semibold">
        {FEATURED_TEXT.title}
      </h2>
      <FeaturedProjectsList projects={data} />
    </div>
  );
};
