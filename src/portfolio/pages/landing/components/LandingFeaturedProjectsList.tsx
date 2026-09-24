import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { LandingFeaturedCard } from './landing-featured-card';
import type { Project } from '@/interfaces';
import { ROUTES } from '@/constants/routes';
import { ProjectsData } from '@/data/ProjectsData';
import { LandingLabel } from './LandingLabel';

const data: Project[] = ProjectsData.filter(
  (project) => project.isFeatured,
).reverse();

export const LandingFeaturedProjectsList = () => {
  const { t } = useTranslation('landing');

  return (
    <div className="flex flex-col text-center mt-4">
      <Link to={ROUTES.featured} className="mb-3">
        <LandingLabel text={`[${t('featured')}]`} type="navigation" />
      </Link>
      {data.map((project) => (
        <LandingFeaturedCard project={project} key={project.id} />
      ))}
    </div>
  );
};
