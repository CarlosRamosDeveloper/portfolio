import type { Background } from '@/portfolio/pages/components/backgroundCard';
import { useEducation } from '.';

interface Props {
  type: 'job' | 'education';
}

export const useBackground = ({ type }: Props): Background[] => {
  if (type === 'education')
    return useEducation()
      .sort()
      .reverse()
      .map((experience) => ({
        type: 'education' as const,
        data: experience,
      }));
  return [];
};
