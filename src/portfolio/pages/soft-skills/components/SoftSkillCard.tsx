import type { SoftSkill } from '@/interfaces';

interface Props {
  skill: SoftSkill;
}

export const SoftSkillCard = ({ skill }: Props) => {
  return <div>{skill.name}</div>;
};
