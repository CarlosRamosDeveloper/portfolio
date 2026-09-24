import type { EducationType, Technology } from '.';

export interface Education {
  id: number;
  title: string;
  type: EducationType;
  institution: string;
  startYear: number;
  endYear: number | null;
  techStack: Technology[];
  projects?: number[];
  description?: string[];
}
