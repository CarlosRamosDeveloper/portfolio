import type { Background } from '@/portfolio/pages/components/backgroundCard';
import { useEducation } from '.';
import { useExperience } from './useExperience';
import type { LandingExperience } from '@/portfolio/pages/landing/components/landing-experience-card/LandingExperienceCard';

interface Props {
  type?: 'job' | 'education';
}

export const useBackground = ({
  type,
}: Props): Background[] | LandingExperience[] => {
  const education = useEducation();
  const experience = useExperience();

  if (type === 'education')
    return education
      .sort()
      .reverse()
      .map((edu) => ({
        type: 'education' as const,
        data: edu,
      }));
  if (type === 'job')
    return experience
      .sort()
      .reverse()
      .map((ex) => ({
        type: 'job' as const,
        data: ex,
      }));

  const data = [
    ...education.map((edu) => ({
      type: 'education' as const,
      data: edu,
    })),
    ...experience.map((ex) => ({
      type: 'job' as const,
      data: ex,
    })),
  ];

  return [...data].sort((a, b) => {
    if (a.data.startYear === null) return -1;
    if (b.data.startYear === null) return 1;

    return b.data.startYear - a.data.startYear;
  });
};
