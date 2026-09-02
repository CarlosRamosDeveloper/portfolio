import type { ProjectStatus } from '@/interfaces';

const STATUS_LABEL: Record<ProjectStatus, string> = {
  deployed: 'Desplegado',
  design: 'Fase de diseño',
  finished: 'Finalizado',
  stopped: 'Detenido temporalmente',
  work_in_progress: 'En desarrollo activo',
};

interface Props {
  status: ProjectStatus;
}

export const FeaturedProjectStatusSection = ({ status }: Props) => {
  return <div>{STATUS_LABEL[status]}</div>;
};
