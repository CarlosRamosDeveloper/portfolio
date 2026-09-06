import { PROJECT_TEXT } from '@/constants/projects/pages';
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
  const handleNavigate = handleNavigateOnNewWindow;

  return (
    <div>
      <div className="flex flex-1 justify-between m-3 text-xl">
        <div>{status}</div>
        {repository && (
          <div
            onClick={() => handleNavigate(repository)}
            className="cursor-pointer"
          >
            {PROJECT_TEXT.navigateToRepository}
          </div>
        )}
      </div>
      <div className="my-3 text-xl">{subtitle}</div>
    </div>
  );
};
