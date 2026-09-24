import type { Project } from '.';

export type ProjectDataType = Omit<
  Project,
  'name' | 'shortDescription' | 'description' | 'roadmap'
> & {
  roadmapIds?: number[];
};
