import { useTranslation } from 'react-i18next';

import { SoftSkillsCardList } from './components';
import { FramePage, PageTitle } from '@/components';
import { SOFT_SKILL_IDS } from '@/constants';

export const SoftSkillsPage = () => {
  const { t } = useTranslation('pages');
  const { t: ts } = useTranslation('softSkills');

  const softSkills = SOFT_SKILL_IDS.map((id) => ({
    id,
    name: ts(`items.${id}.name`),
    description: ts(`items.${id}.description`),
  }));

  return (
    <FramePage>
      <PageTitle title={t('softSkills.title')} />
      <SoftSkillsCardList skills={softSkills} />
    </FramePage>
  );
};
