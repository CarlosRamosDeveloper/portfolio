import { Link } from 'react-router';

import { FEATURED_PROJECT_NAVIGATION_TYPE_TEXT } from '@/constants/pages';
import type { FeaturedNavigationItemType } from '@/interfaces';
import { handleNavigateOnNewWindow } from '@/portfolio/shared';

interface Props {
  url?: string | null;
  type?: FeaturedNavigationItemType;
}

const style = 'cursor-pointer p-3';

export const FeaturedNavigation = ({ url, type }: Props) => {
  if (!url) return null;
  if (!type) return null;

  if (type !== 'page')
    return (
      <div onClick={() => handleNavigateOnNewWindow(url)} className={style}>
        {FEATURED_PROJECT_NAVIGATION_TYPE_TEXT[type]}
      </div>
    );

  return (
    <Link className={style} to={url}>
      {FEATURED_PROJECT_NAVIGATION_TYPE_TEXT[type]}
    </Link>
  );
};
