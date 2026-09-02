import type { Education } from '@/interfaces';
import { EducationalProjectList, EducationLabelType } from '.';
import { InstitutionLabel } from './InstitutionLabel';
import { DateLabel, DescriptionList, TechStackList } from '../../components';

interface Props {
  education: Education;
}

export const EducationCard = ({ education }: Props) => {
  return (
    <div className="my-6 w-full max-w-3xl border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <div className="flex p-3 justify-between">
        <div className="font-semibold text-xl">{education.title}</div>
        <DateLabel start={education.startYear} end={education.endYear} />
      </div>
      <div className="flex flex-1 justify-between">
        <InstitutionLabel institutionName={education.institution} />
        <EducationLabelType type={education.type} />
      </div>
      <TechStackList techStack={education.techStack} />
      <DescriptionList descriptions={education.description || []} />
      <EducationalProjectList projects={education.projects || []} />
    </div>
  );
};
