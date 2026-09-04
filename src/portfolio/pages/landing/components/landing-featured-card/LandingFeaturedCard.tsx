import type { Project } from '@/interfaces';
import { STATUS_LABEL } from '@/portfolio/pages/featured/components/FeaturedProjectStatusSection';
import { LandingFeaturedHeaderCard } from '.';

interface Props {
  project: Project;
}

export const LandingFeaturedCard = ({ project }: Props) => {
  return (
    <LandingFeaturedHeaderCard
      status={`${STATUS_LABEL[project.status]}`}
      title={project.name}
    />
  );
};
