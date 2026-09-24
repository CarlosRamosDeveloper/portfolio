import { ExperienceData } from '@/data';
import {
  LandingExperienceCard,
  type LandingExperience,
} from './landing-experience-card/LandingExperienceCard';
import { useBackground } from '@/hooks';

export const LandingExperienceCardList = () => {
  const data: LandingExperience[] = [
    ...useBackground({ type: 'education' }),
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

  return (
    <div className="mt-3">
      {sortedData.map((item) => (
        <LandingExperienceCard
          item={item}
          key={`${item.type}-${item.data.id}`}
        />
      ))}
    </div>
  );
};
