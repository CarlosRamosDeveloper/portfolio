type ItemType = 'page' | 'repository';

interface Props {
  url?: string | null;
  type?: ItemType;
}

const repositoryText = 'Acceder al repositorio';
const pageText = 'Acceder al proyecto';

export const FeaturedNavigation = ({ url, type }: Props) => {
  const handleNavigate = () => {
    console.log(url);
  };
  if (!url) return null;
  if (!type) return null;
  return (
    <div onClick={handleNavigate} className="cursor-pointer">
      {type === 'repository' ? repositoryText : pageText}
    </div>
  );
};
