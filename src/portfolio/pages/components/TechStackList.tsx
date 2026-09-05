import type { Technology } from '@/interfaces';
import { Separator, TechCard } from '.';

interface Props {
  techStack: Technology[];
}

export const TechStackList = ({ techStack }: Props) => {
  if (techStack.length === 0) return;
  return (
    <>
      <Separator />
      <div className="p-1 bg-card-details">
        <div className="flex flex-wrap gap-2 m-0.5 p-1 justify-between">
          {techStack.map((tech) => (
            <TechCard
              key={tech.name}
              techName={tech.name}
              color={tech.color || ''}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};
