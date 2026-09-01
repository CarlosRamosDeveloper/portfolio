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

export const EducationLabelType = ({ type }: Props) => {
  return (
    <div className="text-sm text-muted-foreground pb-3 px-2">
      {EDUCATION_TYPE_LABELS[type]}
    </div>
  );
};
