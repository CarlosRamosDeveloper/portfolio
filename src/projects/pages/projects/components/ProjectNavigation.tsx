import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';

interface Props {
  projectUrl: string;
}

export const ProjectNavigation = ({ projectUrl }: Props) => {
  const { t } = useTranslation('components');

  return (
    <div className="text-blue-600 font-semibold">
      <Link to={projectUrl}>
        <ProjectSummarySubtitle text={t('projectCard.navigateToProject')} />
      </Link>
    </div>
  );
};
