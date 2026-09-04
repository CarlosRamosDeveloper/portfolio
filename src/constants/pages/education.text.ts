import type { EducationType } from '@/interfaces';

export const EDUCATION_TEXT = {
  title: 'Formación Académica',
  courseProjects: 'Proyectos del curso',
  navigateRepository: 'Ir al repositorio',
};

export const EDUCATION_TYPE_LABELS: Record<EducationType, string> = {
  vocational_training: 'Formación Profesional',
  certification: 'Certificación',
  course: 'Curso Online',
  specialization: 'Curso de especialización',
};
