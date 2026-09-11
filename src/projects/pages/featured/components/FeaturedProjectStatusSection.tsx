import { STATUS_LABEL } from '@/constants';
import type { ProjectStatus } from '@/interfaces';

interface Props {
  status: ProjectStatus;
}

export const FeaturedProjectStatusSection = ({ status }: Props) => {
  return (
    <div className="text-card-details-foreground flex flex-col items-center">
      {STATUS_LABEL[status]}
    </div>
  );
};
