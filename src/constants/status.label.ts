import type { ProjectStatus } from '@/interfaces';

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  abandoned: 'Abandonado',
  deployed: 'Desplegado',
  design: 'Fase de diseño',
  finished: 'Finalizado',
  maintenance: 'En mantenimiento',
  stopped: 'Detenido temporalmente',
  work_in_progress: 'En desarrollo activo',
};
