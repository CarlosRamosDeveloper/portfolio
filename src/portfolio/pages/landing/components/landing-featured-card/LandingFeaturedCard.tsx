import { useTranslation } from 'react-i18next';

import type { Project } from '@/interfaces';
import { LandingFeaturedHeaderCard } from '.';

interface Props {
  project: Project;
}

export const LandingFeaturedCard = ({ project }: Props) => {
  const { t } = useTranslation('components');

  return (
    <LandingFeaturedHeaderCard
      status={`${t(`projectCard.status.${project.status}`)}`}
      title={project.name}
    />
  );
};
