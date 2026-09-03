import type { ProjectStatus } from '@/interfaces';

const STATUS_LABEL: Record<ProjectStatus, string> = {
  abandoned: 'Abandonado',
  deployed: 'Desplegado',
  design: 'Fase de diseño',
  finished: 'Finalizado',
  maintenance: 'En mantenimiento',
  stopped: 'Detenido temporalmente',
  work_in_progress: 'En desarrollo activo',
};

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
