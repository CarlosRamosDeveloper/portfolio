import type { Project } from '@/interfaces';

interface Props {
  project: Project;
}

export const SearchedProject = ({ project }: Props) => {
  return <div>{project.name}</div>;
};
