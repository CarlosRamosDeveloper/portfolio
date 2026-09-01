import type { EducationType } from '@/interfaces';

interface Props {
  type: EducationType;
}

const EDUCATION_TYPE_LABELS: Record<EducationType, string> = {
  vocational_training: 'Formación Profesional',
  certification: 'Certificación',
  course: 'Curso Online',
  specialization: 'Curso de especialización',
};

export const EducationTypeItem = ({ type }: Props) => {
  return <div>{EDUCATION_TYPE_LABELS[type]}</div>;
};
