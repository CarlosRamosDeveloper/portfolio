import type { Technology } from '@/interfaces';
import { Separator, TechCard } from '.';
import { useState } from 'react';
import { TECHSTACK_LABEL } from '@/constants';
import { cn } from '@/lib/utils';

interface Props {
  techStack: Technology[];
  maxTechPerRow?: number;
  topSeparator?: boolean;
  botSeparator?: boolean;
}

export const TechStackList = ({
  techStack,
  topSeparator = false,
  botSeparator = false,
  maxTechPerRow: maxTechRow = 5,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (techStack.length === 0) return;

  const visibleTech = isExpanded ? techStack : techStack.slice(0, maxTechRow);
  const remainingTech = techStack.length - maxTechRow;
  const onlyRemainingOneTech = remainingTech === 1;
  const techRows = [];

  for (let i = 0; i < visibleTech.length; i += maxTechRow) {
    techRows.push(visibleTech.slice(i, i + maxTechRow));
  }

  return (
    <>
      {topSeparator && <Separator />}

      <div className="p-1 bg-card-details">
        <div className="p-1 bg-card-details">
          <div className="m-0.5 grid gap-2 p-1">
            {techRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  'flex gap-2',
                  row.length === 1 ? 'justify-center' : 'justify-evenly',
                )}
              >
                {row.map((tech) => (
                  <TechCard
                    key={tech.id}
                    techName={tech.name}
                    color={tech.color || ''}
                    icon={tech.icon}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center bg-card-details p-1">
          {techStack.length > maxTechRow && (
            <button
              className="bg-accent p-1 mb-1 text-sm border justify-center flex flex-1"
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
      </div>
      {botSeparator && <Separator />}
    </>
  );
};
