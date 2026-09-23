import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/constants';
import type { Project } from '@/interfaces';

interface Props {
  project: Project;
}

export const SearchedProject = ({ project }: Props) => {
  const { t } = useTranslation('pages');

  return (
    <div className="flex flex-col items-center lg:flex-row justify-between lg:justify-between p-2 bg-card mt-2">
      <div>{project.name}</div>
      <div>
        <Link to={`${ROUTES.projects}/${project.idSlug}`}>
          {t('search.navigateToProject')}
        </Link>
      </div>
    </div>
  );
};
