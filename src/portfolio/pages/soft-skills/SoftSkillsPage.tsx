import { SoftSkillsData } from '@/data/SoftSkillsData';
import { SoftSkillsCardList } from './components';
import { SOFT_SKILLS_TEXT } from '@/constants/pages/soft-skills.text';

const softSkills = [...SoftSkillsData];

export const SoftSkillsPage = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold">
        {SOFT_SKILLS_TEXT.title}
      </h2>
      <SoftSkillsCardList skills={softSkills} />
    </div>
  );
};
