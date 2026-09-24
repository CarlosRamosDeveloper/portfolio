import { useTranslation } from 'react-i18next';

import { SOFT_SKILL_IDS } from '@/constants';

export const useSoftSkills = () => {
  const { t } = useTranslation('softSkills');

  return SOFT_SKILL_IDS.map((id) => ({
    id,
    name: t(`items.${id}.name`),
    description: t(`items.${id}.description`),
  }));
};
