import type { Background } from '@/portfolio/pages/components/backgroundCard';
import { useEducation } from '.';
import { useExperience } from './useExperience';

interface Props {
  type: 'job' | 'education';
}

export const useBackground = ({ type }: Props): Background[] => {
  if (type === 'education')
    return useEducation()
      .sort()
      .reverse()
      .map((education) => ({
        type: 'education' as const,
        data: education,
      }));
  if (type === 'job')
    return useExperience()
      .sort()
      .reverse()
      .map((experience) => ({
        type: 'job' as const,
        data: experience,
      }));

  return [];
};
