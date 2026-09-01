import type { Technologies } from './Technologies';

type EducationType =
  | 'vocational_training'
  | 'course'
  | 'specialization'
  | 'certification';

interface EducationProject {
  name: string;
  description: string[];
  techStack: Technologies[];
  repository?: string;
  navigation?: string;
}

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
