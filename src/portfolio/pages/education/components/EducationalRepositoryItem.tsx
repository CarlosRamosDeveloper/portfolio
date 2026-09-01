interface Props {
  repositoryUrl?: string;
}

export const EducationalRepositoryItem = ({ repositoryUrl }: Props) => {
  if (!repositoryUrl) return null;
  return (
    <a className="text-xs px-2" href={repositoryUrl} target="_blank">
      Ver repositorio
    </a>
  );
};
