import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import type { Technology } from '@/interfaces';
import { Separator, TechCard } from '.';
import { cn } from '@/lib/utils';
import { splitIntoRows } from '@/portfolio/shared';

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
  const { t } = useTranslation('components');
  if (techStack.length === 0) return;

  const visibleTech = isExpanded ? techStack : techStack.slice(0, maxTechRow);
  const remainingTech = techStack.length - maxTechRow;
  const onlyRemainingOneTech = remainingTech === 1;
  const techRow = splitIntoRows(visibleTech, maxTechRow);

  return (
    <>
      {topSeparator && <Separator />}

      <div className="p-1 bg-card-details">
        <div className="p-1 bg-card-details">
          <div className="m-0.5 grid gap-2 p-1">
            {techRow.map((row, rowIndex) => (
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
                ? t('techStack.viewLessButton')
                : onlyRemainingOneTech
                  ? t('techStack.oneTechRemaining')
                  : `${t('techStack.moreTechRemainingStart')} ${remainingTech} ${t('techStack.moreTechRemainingEnd')}`}
            </button>
          )}
        </div>
      </div>
      {botSeparator && <Separator />}
    </>
  );
};
