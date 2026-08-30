import type { Technologies } from '@/interfaces';
import { TechCard } from '.';
import { Separator } from '@/portfolio/components';

interface Props {
  techStack: Technologies[];
}

export const TechStackList = ({ techStack }: Props) => {
  if (techStack.length === 0) return;
  return (
    <>
      <Separator />
      <div className="p-1 m-1">
        <div className="flex flex-wrap gap-2 m-0.5 p-1">
          {techStack.map((tech) => (
            <TechCard key={tech} techName={tech} />
          ))}
        </div>
      </div>
    </>
  );
};
