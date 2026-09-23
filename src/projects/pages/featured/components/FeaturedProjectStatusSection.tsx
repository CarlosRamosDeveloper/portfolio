import { useTranslation } from 'react-i18next';

import type { ProjectStatus } from '@/interfaces';

interface Props {
  status: ProjectStatus;
}

export const FeaturedProjectStatusSection = ({ status }: Props) => {
  const { t } = useTranslation('components');

  return (
    <div className="text-card-details-foreground flex flex-col items-center">
      {t(`projectCard.status.${status}`)}
    </div>
  );
};
