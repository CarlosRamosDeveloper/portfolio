import { Separator } from '@/portfolio/layout/components';

interface Props {
  repositoryUrl?: string;
}

export const EducationalRepositoryItem = ({ repositoryUrl }: Props) => {
  if (!repositoryUrl) return null;
  return (
    <div>
      <Separator />
      <div className="m-1 px-6">
        <a className="text-xs" href={repositoryUrl} target="_blank">
          Ir al repositorio
        </a>
      </div>
    </div>
  );
};
