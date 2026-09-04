import type { Technologies } from './Technologies';

export interface JobExperience {
  id: number;
  company: string;
  workingPosition: string;
  subtitle?: string;
  startYear: number;
  endYear: number | null;
  techStack: Technologies[];
  description: string[];
  isInternship?: boolean;
}
