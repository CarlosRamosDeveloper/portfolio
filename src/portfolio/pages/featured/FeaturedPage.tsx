import { ProjectsData } from '@/portfolio/data/ProjectsData';
import { FeaturedProjectsList } from './components';

export const FeaturedPage = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-semibold">
        Proyectos Destacados
      </h2>
      <FeaturedProjectsList projects={ProjectsData} />
    </div>
  );
};
