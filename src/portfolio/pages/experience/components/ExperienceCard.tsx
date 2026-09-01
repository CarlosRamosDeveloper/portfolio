import type { JobExperience } from '@/interfaces';
import {
  ExperienceDate,
  ExperienceDescriptionList,
  ExperienceSubtitle,
} from '.';
import { ExperienceWorkingPositionText } from './ExperienceWorkingPositionText';
import { TechStackList } from './TechStackList';

interface Props {
  experience: JobExperience;
}

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="my-6 w-full max-w-3xl border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <div className="flex p-3 justify-between">
        <div className="font-semibold text-xl">{experience.company}</div>
        <ExperienceDate start={experience.startYear} end={experience.endYear} />
      </div>
      <ExperienceWorkingPositionText
        workingPosition={experience.workingPosition}
      />
      <ExperienceSubtitle text={experience.subtitle} />
      <TechStackList techStack={experience.techStack} />
      <ExperienceDescriptionList descriptions={experience.description} />
    </div>
  );
};
