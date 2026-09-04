import { handleNavigateOnNewWindow } from '@/portfolio/shared';

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
  if (!url) return null;
  if (!type) return null;

  return (
    <div
      onClick={() => handleNavigateOnNewWindow(url)}
      className="cursor-pointer p-3"
    >
      {COMPONENT_TEXT[type]}
    </div>
  );
};
