import { ProjectsData } from '@/portfolio/data/ProjectsData';
import { FeaturedProjectsList } from './components';

const data = ProjectsData.filter((project) => project.isFeatured).reverse();

export const FeaturedPage = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-semibold">
        Proyectos Destacados
      </h2>
      <FeaturedProjectsList projects={data} />
    </div>
  );
};
