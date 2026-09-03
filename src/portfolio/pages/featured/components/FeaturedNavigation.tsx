type ItemType = 'page' | 'repository' | 'demo';

interface Props {
  url?: string | null;
  type?: ItemType;
}

const COMPONENT_TEXT: Record<ItemType, string> = {
  page: 'Acceder al proyecto',
  repository: 'Acceder al repositorio',
  demo: 'Ver demo',
};

export const FeaturedNavigation = ({ url, type }: Props) => {
  const handleNavigate = () => {
    console.log(url);
  };
  if (!url) return null;
  if (!type) return null;

  return (
    <div onClick={handleNavigate} className="cursor-pointer p-3">
      {COMPONENT_TEXT[type]}
    </div>
  );
};
