import type { Project } from '@/interfaces';
import { SearchedProject } from './SearchedProject';
import { NoCoincidences } from './NoCoincidences';
import { SEARCH_TEXT } from '@/constants/projects/pages';

interface Props {
  filteredProjects: Project[];
}

export const SearchedProjectsList = ({ filteredProjects }: Props) => {
  if (filteredProjects.length === 0) return <NoCoincidences />;
  return (
    <div className="flex flex-col">
      <span className="text-center mt-5 text-xl lg:text-2xl font-semibold">
        {SEARCH_TEXT.results}
      </span>
      <div className="mt-2">
        {filteredProjects.map((project) => (
          <SearchedProject project={project} />
        ))}
      </div>
    </div>
  );
};
