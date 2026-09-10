import type { SoftSkill } from '@/interfaces';

interface Props {
  skill: SoftSkill;
}

export const SoftSkillCard = ({ skill }: Props) => {
  return (
    <div className="flex flex-col mt-3 border border-border">
      <div className="text-2xl text-center py-2 bg-card">{skill.name}</div>
      <div className="text-base px-4 py-2 bg-accent">{skill.description}</div>
    </div>
  );
};
