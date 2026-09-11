import type { Education, JobExperience } from '@/interfaces';
import { DateLabel, TechStackList } from '..';
import { DescriptionList, InstitutionLabel } from '.';
import {
  ExperienceSubtitle,
  ExperienceWorkingPositionText,
} from './experience';
import { EducationLabelType, EducationalProjectList } from './education';
import { useMaxTechPerRow } from '@/hooks';

export type Background =
  | { type: 'job'; data: JobExperience }
  | {
      type: 'education';
      data: Education;
    };

interface Props {
  experience: Background;
}

export const BackgroundCard = ({ experience }: Props) => {
  const maxTechPerRow = useMaxTechPerRow();

  const { data, type } = experience;

  return (
    <div className="my-3 w-full border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <div className="flex p-3 justify-between">
        <div className="font-semibold text-xl">
          {type === 'education' && data.title}
          {type === 'job' && data.company}
        </div>
        <DateLabel start={data.startYear} end={data.endYear} />
      </div>
      {type === 'job' && (
        <>
          <ExperienceWorkingPositionText
            workingPosition={data.workingPosition}
          />
          <ExperienceSubtitle text={data.subtitle} />
        </>
      )}
      <div className="flex flex-1 justify-between">
        {type === 'education' && (
          <>
            <InstitutionLabel institutionName={data.institution} />
            <EducationLabelType type={data.type} />
          </>
        )}
      </div>
      <TechStackList
        techStack={data.techStack}
        topSeparator
        maxTechPerRow={maxTechPerRow}
      />
      <DescriptionList descriptions={data.description || []} />
      {type === 'education' && (
        <EducationalProjectList projects={data.projects || []} />
      )}
    </div>
  );
};
