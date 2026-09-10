import { ROUTES } from '@/constants';
import { SEARCH_TEXT } from '@/constants/projects/pages';
import type { Project } from '@/interfaces';
import { Link } from 'react-router';

interface Props {
  project: Project;
}

export const SearchedProject = ({ project }: Props) => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between lg:justify-between p-2 bg-card mt-2">
      <div>{project.name}</div>
      <div>
        <Link to={`${ROUTES.projects}/${project.idSlug}`}>
          {SEARCH_TEXT.navigateToProject}
        </Link>
      </div>
    </div>
  );
};
