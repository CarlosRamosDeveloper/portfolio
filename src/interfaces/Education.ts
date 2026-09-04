import type { EducationType, Project, Technologies } from '.';

export interface Education {
  id: number;
  title: string;
  type: EducationType;
  institution: string;
  startYear: number;
  endYear: number | null;
  techStack: Technologies[];
  projects?: Project[];
  description?: string[];
}
