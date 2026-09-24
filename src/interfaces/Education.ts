import type { EducationType, Project, Technology } from '.';

export interface Education {
  id: number;
  title: string;
  type: EducationType;
  institution: string;
  startYear: number;
  endYear: number | null;
  techStack: Technology[];
  projects?: Project[];
  description?: string[];
}
