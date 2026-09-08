import { handleNavigateOnNewWindow } from '@/portfolio/shared';
import { Link } from 'react-router';

type ItemType = 'page' | 'repository' | 'demo';

interface Props {
  url?: string | null;
  type?: ItemType;
}

const COMPONENT_TEXT: Record<ItemType, string> = {
  page: 'Ver el proyecto al detalle',
  repository: 'Acceder al repositorio',
  demo: 'Ver demo',
};

const style = 'cursor-pointer p-3';

export const FeaturedNavigation = ({ url, type }: Props) => {
  if (!url) return null;
  if (!type) return null;

  if (type !== 'page')
    return (
      <div onClick={() => handleNavigateOnNewWindow(url)} className={style}>
        {COMPONENT_TEXT[type]}
      </div>
    );

  return (
    <Link className={style} to={url}>
      {COMPONENT_TEXT[type]}
    </Link>
  );
};
