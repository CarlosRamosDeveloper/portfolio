import { Link } from 'react-router';

import { LandingFeaturedCard } from './landing-featured-card';
import type { Project } from '@/interfaces';
import { ROUTES } from '@/constants/routes';
import { LANDING_TEXT } from '@/constants/pages';
import { ProjectsData } from '@/data/ProjectsData';
import { LandingLabel } from './LandingLabel';

const data: Project[] = ProjectsData.filter(
  (project) => project.isFeatured,
).reverse();

export const LandingFeaturedProjectsList = () => {
  return (
    <div className="w-full max-w-3xl flex flex-col text-center mx-auto mt-4">
      <Link to={ROUTES.featured}>
        <LandingLabel text={`[${LANDING_TEXT.featured}]`} type="navigation" />
      </Link>
      {data.map((project) => (
        <LandingFeaturedCard project={project} key={project.id} />
      ))}
    </div>
  );
};
