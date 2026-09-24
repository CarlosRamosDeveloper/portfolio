import { useTranslation } from 'react-i18next';

import { SoftSkillsCardList } from './components';
import { FramePage, PageTitle } from '@/components';
import { useSoftSkills } from '@/hooks';

export const SoftSkillsPage = () => {
  const { t } = useTranslation('pages');
  const softSkills = useSoftSkills();

  return (
    <FramePage>
      <PageTitle title={t('softSkills.title')} />
      <SoftSkillsCardList skills={softSkills} />
    </FramePage>
  );
};
