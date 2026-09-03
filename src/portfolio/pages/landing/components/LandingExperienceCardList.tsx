import { EducationData, ExperienceData } from '@/portfolio/data';
import { LandingExperienceCard } from '.';
import type { LandingExperience } from './LandingExperienceCard';

const data: LandingExperience[] = [
  ...EducationData.map((education) => ({
    type: 'education' as const,
    data: education,
  })),
  ...ExperienceData.map((experience) => ({
    type: 'job' as const,
    data: experience,
  })),
];

const sortedData = [...data].sort((a, b) => {
  if (a.data.startYear === null) return -1;
  if (b.data.startYear === null) return 1;

  return b.data.startYear - a.data.startYear;
});

export const LandingExperienceCardList = () => {
  return (
    <div>
      <div>LandingExperienceCardList</div>
      {sortedData.map((item) => (
        <LandingExperienceCard
          item={item}
          key={`${item.type}-${item.data.id}`}
        />
      ))}
    </div>
  );
};
