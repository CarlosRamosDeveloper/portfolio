import type { Technologies } from './Technologies';

export interface JobExperience {
  id: number;
  company: string;
  workingPosition: string;
  subtitle?: string;
  startDate: number;
  endDate: number | null;
  techStack: Technologies[];
  description: string[];
}
