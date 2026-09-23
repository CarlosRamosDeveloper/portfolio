import { useTranslation } from 'react-i18next';

import { SoftSkillsData } from '@/data/SoftSkillsData';
import { SoftSkillsCardList } from './components';
import { FramePage, PageTitle } from '@/components';

const softSkills = [...SoftSkillsData];

export const SoftSkillsPage = () => {
  const { t } = useTranslation('pages');

  return (
    <FramePage>
      <PageTitle title={t('softSkills.title')} />
      <SoftSkillsCardList skills={softSkills} />
    </FramePage>
  );
};
