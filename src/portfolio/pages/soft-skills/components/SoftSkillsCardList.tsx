import type { SoftSkill } from '@/interfaces';
import { SoftSkillCard } from './SoftSkillCard';

interface Props {
  skills: SoftSkill[];
}

export const SoftSkillsCardList = ({ skills }: Props) => {
  return (
    <div>
      {skills.map((skill) => (
        <SoftSkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};
