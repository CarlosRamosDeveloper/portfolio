import type { Project } from '@/interfaces';

interface Props {
  filteredProjects: Project[];
}

export const SearchedProjectsList = ({ filteredProjects }: Props) => {
  return <div>{filteredProjects.map((project) => project.name)}</div>;
};
