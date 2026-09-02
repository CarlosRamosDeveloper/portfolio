import type { EducationProject, EducationType, Technologies } from '.';

export interface Education {
  id: number;
  title: string;
  type: EducationType;
  institution: string;
  startYear: number;
  endYear: number | null;
  techStack: Technologies[];
  projects?: EducationProject[];
  description?: string[];
}
