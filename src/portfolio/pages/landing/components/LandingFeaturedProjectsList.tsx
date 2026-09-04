import { Link } from 'react-router';

import { ProjectsData } from '@/portfolio/data/ProjectsData';
import { LandingFeaturedCard } from './landing-featured-card';
import type { Project } from '@/interfaces';
import { ROUTES } from '@/constants/routes';
import { LANDING_TEXT } from '@/constants/pages';

const data: Project[] = ProjectsData.filter(
  (project) => project.isFeatured,
).reverse();

export const LandingFeaturedProjectsList = () => {
  return (
    <div className="w-full max-w-3xl flex flex-col text-center mx-auto">
      <Link to={ROUTES.featured}>
        <h3 className="text-xl my-2">[{LANDING_TEXT.featured}]</h3>
      </Link>
      {data.map((project) => (
        <LandingFeaturedCard project={project} key={project.id} />
      ))}
    </div>
  );
};
