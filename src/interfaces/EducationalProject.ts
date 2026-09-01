import type { Technologies } from '.';

export interface EducationProject {
  name: string;
  description: string[];
  techStack: Technologies[];
  repository?: string;
  navigation?: string;
}
