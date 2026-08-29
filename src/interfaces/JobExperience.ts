import type { Technologies } from './Technologies';

export interface JobExperience {
  id: number;
  company: string;
  workingPosition: string;
  subtitle?: string;
  startingYear: number;
  finishingYear: number | null;
  techStack: Technologies[];
  description: string[];
}
