import { SoftSkillsData } from '@/data/SoftSkillsData';
import { SoftSkillsCardList } from './components';
import { SOFT_SKILLS_TEXT } from '@/constants/pages/soft-skills.text';
import { FramePage, PageTitle } from '@/components';

const softSkills = [...SoftSkillsData];

export const SoftSkillsPage = () => {
  return (
    <FramePage>
      <PageTitle title={SOFT_SKILLS_TEXT.title} />
      <SoftSkillsCardList skills={softSkills} />
    </FramePage>
  );
};
