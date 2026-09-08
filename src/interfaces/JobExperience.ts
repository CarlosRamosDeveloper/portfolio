import type { Technology } from '.';

export interface JobExperience {
  id: number;
  company: string;
  workingPosition: string;
  subtitle?: string;
  startYear: number;
  endYear: number | null;
  techStack: Technology[];
  description: string[];
  isInternship?: boolean;
}
