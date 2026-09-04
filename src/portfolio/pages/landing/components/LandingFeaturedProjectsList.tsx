import { ProjectsData } from '@/portfolio/data/ProjectsData';
import { LandingFeaturedCard } from './landing-featured-card';
import type { Project } from '@/interfaces';
import { Link } from 'react-router';

const data: Project[] = ProjectsData.filter((project) => project.isFeatured);

export const LandingFeaturedProjectsList = () => {
  return (
    <div className="w-full max-w-3xl flex flex-col text-center mx-auto">
      <Link to="/featured">
        <h3 className="text-xl my-2">[Proyectos Destacados]</h3>
      </Link>
      {data.map((project) => (
        <LandingFeaturedCard project={project} key={project.id} />
      ))}
    </div>
  );
};
