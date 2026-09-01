import type { Education } from '@/interfaces';
import {
  ExperienceDate,
  ExperienceDescriptionList,
} from '../../experience/components';
import { TechStackList } from '../../experience/components/TechStackList';
import { EducationLabelType } from '.';
import { InstitutionLabel } from './InstitutionLabel';

interface Props {
  education: Education;
}

export const EducationCard = ({ education }: Props) => {
  console.log('EducationCard: ', education.title);

  return (
    <div className="my-6 w-100 border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <div className="flex p-3 justify-between">
        <div className="font-semibold text-xl">{education.title}</div>
        <ExperienceDate start={education.startYear} end={education.endYear} />
      </div>
      <div className="flex flex-1 justify-between">
        <InstitutionLabel institutionName={education.institution} />
        <EducationLabelType type={education.type} />
      </div>
      {/* <ExperienceWorkingPositionText
        workingPosition={experience.workingPosition}
      /> */}
      {/* <ExperienceSubtitle text={experience.subtitle} /> */}
      <TechStackList techStack={education.techStack} />
      <ExperienceDescriptionList descriptions={education.description || []} />
    </div>
  );
};
