import { useTranslation } from 'react-i18next';

import { handleNavigateOnNewWindow } from '@/portfolio/shared';

interface Props {
  subtitle: string;
  status: string;
  repository: string | null;
}

export const ProjectSubtitleSection = ({
  status,
  subtitle,
  repository,
}: Props) => {
  const { t } = useTranslation('components');

  const handleNavigate = handleNavigateOnNewWindow;

  return (
    <div>
      <div className="flex flex-col text-center sm:flex-row justify-between m-3 text-xl">
        <div className="mb-1 sm:mb-0">{status}</div>
        {repository && (
          <div
            onClick={() => handleNavigate(repository)}
            className="cursor-pointer"
          >
            {t('projectCard.navigateToRepository')}
          </div>
        )}
      </div>
      <div className="my-3 pl-5 text-xl text-center sm:text-left">
        {subtitle}
      </div>
    </div>
  );
};
