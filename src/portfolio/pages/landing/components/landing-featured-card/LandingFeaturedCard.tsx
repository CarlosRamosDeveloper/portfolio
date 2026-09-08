import type { Project } from '@/interfaces';

import { LandingFeaturedHeaderCard } from '.';
import { STATUS_LABEL } from '@/constants';

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
