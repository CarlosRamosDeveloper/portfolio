import type { Project } from '@/interfaces';
import { SearchedProject } from './SearchedProject';
import { NoCoincidences } from './NoCoincidences';

interface Props {
  filteredProjects: Project[];
}

export const SearchedProjectsList = ({ filteredProjects }: Props) => {
  if (filteredProjects.length === 0) return <NoCoincidences />;
  return (
    <div className="mt-5">
      {filteredProjects.map((project) => (
        <SearchedProject project={project} />
      ))}
    </div>
  );
};
