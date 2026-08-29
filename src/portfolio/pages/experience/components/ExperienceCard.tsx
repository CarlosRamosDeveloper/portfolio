import type { JobExperience } from '@/interfaces';
import { ExperienceDescriptionList, ExperienceSubtitle } from '.';
import { Separator, TechCard } from '@/portfolio/components';
import { ExperienceWorkingPositionText } from './ExperienceWorkingPositionText';

interface Props {
  experience: JobExperience;
}

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <>
      <div className="my-6 w-100 border rounded-2xl">
        <div className="flex p-3 justify-between text-xl">
          <div className="font-semibold text-xl">{experience.company}</div>
          <div className="ml-4">
            {experience.startDate}
            {experience.startDate !== experience.endDate && (
              <> - {experience.endDate || 'Actualmente'}</>
            )}
          </div>
        </div>
        <ExperienceWorkingPositionText
          workingPosition={experience.workingPosition}
        />
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
              <ExperienceDescriptionList
                descriptions={experience.description}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
