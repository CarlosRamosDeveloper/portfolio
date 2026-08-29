import type { JobExperience } from '@/interfaces';
import { Separator, TechCard } from '.';
import { ExperienceSubtitle } from '../pages/experience/components';

interface Props {
  experience: JobExperience;
}

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <>
      <div className="my-6 w-100 border rounded-2xl">
        <div className="flex p-3 justify-between text-xl">
          <div>{experience.company}</div>
          <div className="ml-4">
            {experience.startingYear}
            {experience.startingYear !== experience.finishingYear && (
              <> - {experience.finishingYear || 'Actualmente'}</>
            )}
          </div>
        </div>
        {experience.subtitle && (
          <ExperienceSubtitle text={experience.subtitle} />
        )}
        <Separator />
        <div className="flex flex-wrap gap-2 p-3">
          {experience.techStack.map((tech) => TechCard(tech))}
        </div>

        <div>
          {experience.description && (
            <>
              <Separator />
              <p className="p-3">{experience.description}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
