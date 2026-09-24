import type { Education } from '.';

export type EducationDataType = Omit<
  Education,
  'title' | 'description' | 'projects'
> & {
  projectIds?: number[];
};
