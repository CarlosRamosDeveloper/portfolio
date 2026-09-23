import { useTranslation } from 'react-i18next';

import type { EducationType } from '@/interfaces';

interface Props {
  type: EducationType;
}

export const EducationLabelType = ({ type }: Props) => {
  const { t } = useTranslation('pages');

  return (
    <div className="text-sm text-muted-foreground pb-3 px-2">
      {t(`education.types.${type}`)}
    </div>
  );
};
