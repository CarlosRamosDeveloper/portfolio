import type { Education, JobExperience } from '@/interfaces';
import { DateLabel, TechStackList } from '..';
import { DescriptionList, InstitutionLabel } from '.';
import {
  ExperienceSubtitle,
  ExperienceWorkingPositionText,
} from './experience';
import { EducationLabelType, EducationalProjectList } from './education';
import { useMediaQuery } from '@/hooks';

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
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');

  const maxTechPerRow = isMobile || isTablet ? 3 : 5;
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
