import type { ProjectStatus, Technologies } from '.';

export type Project = {
  id: number;
  name: string;
  repository?: string;
  url?: string | null;
  shortDescription: string;
  description: string[];
  screenshots: string[] | null;
  techStack: Technologies[];
  isFeatured: boolean;
  video?: string | null;
  status: ProjectStatus;
};
