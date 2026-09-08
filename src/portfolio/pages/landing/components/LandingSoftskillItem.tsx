import type { SoftSkill } from '@/interfaces';

interface Props {
  skill: SoftSkill;
}

export const LandingSoftskillItem = ({ skill }: Props) => {
  return (
    <div className="flex flex-1 items-center justify-center text-center bg-accent py-2 px-4 text-sm">
      {skill.name}
    </div>
  );
};
