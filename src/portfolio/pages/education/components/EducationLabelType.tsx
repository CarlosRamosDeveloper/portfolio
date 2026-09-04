import { EDUCATION_TYPE_LABELS } from '@/constants/pages';
import type { EducationType } from '@/interfaces';

interface Props {
  type: EducationType;
}

export const EducationLabelType = ({ type }: Props) => {
  return (
    <div className="text-sm text-muted-foreground pb-3 px-2">
      {EDUCATION_TYPE_LABELS[type]}
    </div>
  );
};
