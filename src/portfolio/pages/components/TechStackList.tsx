import type { Technology } from '@/interfaces';
import { Separator, TechCard } from '.';
import { useState } from 'react';
import { TECHSTACK_LABEL } from '@/constants';

interface Props {
  techStack: Technology[];
  maxTechRow?: number;
}

export const TechStackList = ({ techStack, maxTechRow = 5 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (techStack.length === 0) return;

  const visibleTech = isExpanded ? techStack : techStack.slice(0, maxTechRow);
  const remainingTech = techStack.length - maxTechRow;
  const onlyRemainingOneTech = remainingTech === 1;

  return (
    <>
      <Separator />
      <div className="p-1 bg-card-details">
        <div className="m-0.5 grid grid-cols-5 gap-2 p-1">
          {visibleTech.map((tech) => (
            <TechCard
              key={tech.name}
              techName={tech.name}
              color={tech.color || ''}
              icon={tech.icon}
            />
          ))}
        </div>

        {techStack.length > maxTechRow && (
          <button
            type="button"
            onClick={() => setIsExpanded((previous) => !previous)}
          >
            {isExpanded
              ? TECHSTACK_LABEL.viewLessButton
              : onlyRemainingOneTech
                ? TECHSTACK_LABEL.oneTechRemaining
                : `${TECHSTACK_LABEL.moreTechRemainingStart} ${remainingTech} ${TECHSTACK_LABEL.moreTechRemainingEnd}`}
          </button>
        )}
      </div>
    </>
  );
};
