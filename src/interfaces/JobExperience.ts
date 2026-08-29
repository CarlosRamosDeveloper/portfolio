import type { Technology } from '.';

export interface JobExperience {
  id: number;
  company: string;
  workingPosition: string;
  subtitle?: string;
  startingYear: number;
  finishingYear: number | null;
  techStack: Technology[];
  description: string[];
}
