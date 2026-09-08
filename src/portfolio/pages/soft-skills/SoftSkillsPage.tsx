import { SoftSkillsData } from '@/data/SoftSkillsData';
import { SoftSkillsCardList } from './components';

const softSkills = [...SoftSkillsData];

export const SoftSkillsPage = () => {
  return (
    <div>
      <div>SoftSkillsPage</div>
      <SoftSkillsCardList skills={softSkills} />
    </div>
  );
};
