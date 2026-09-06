import type { ProjectStatus, Technology } from '.';

export type Project = {
  id: number;
  idSlug: string;
  name: string;
  repository: string | null;
  url: string | null;
  shortDescription: string;
  description: string[];
  screenshots: string[] | null;
  techStack: Technology[];
  isFeatured: boolean;
  video?: string[] | null;
  status: ProjectStatus;
};
