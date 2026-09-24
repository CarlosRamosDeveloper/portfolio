import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { LandingFeaturedCard } from './landing-featured-card';
import { ROUTES } from '@/constants/routes';
import { LandingLabel } from './LandingLabel';
import { useProject } from '@/hooks';

export const LandingFeaturedProjectsList = () => {
  const { t } = useTranslation('landing');
  const data = useProject()
    .filter((project) => project.isFeatured)
    .reverse();

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
