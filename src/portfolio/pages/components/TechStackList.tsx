import type { Technology } from '@/interfaces';
import { Separator, TechCard } from '.';
import { useState } from 'react';
import { TECHSTACK_LABEL } from '@/constants';

interface Props {
  techStack: Technology[];
}

const techMaxValue = 5;

export const TechStackList = ({ techStack }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (techStack.length === 0) return;

  const visibleTech = isExpanded ? techStack : techStack.slice(0, techMaxValue);
  const remainingTech = techStack.length - techMaxValue;
  const onlyRemainingOneTech = remainingTech === 1;

  return (
    <>
      <Separator />
      <div className="p-1 bg-card-details">
        <div className="flex flex-wrap gap-2 m-0.5 p-1 justify-between">
          {visibleTech.map((tech) => (
            <TechCard
              key={tech.name}
              techName={tech.name}
              color={tech.color || ''}
              icon={tech.icon}
            />
          ))}
        </div>

        {techStack.length > techMaxValue && (
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
