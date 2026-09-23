import { Link } from 'react-router';

import type { FeaturedNavigationItemType } from '@/interfaces';
import { handleNavigateOnNewWindow } from '@/portfolio/shared';
import { useTranslation } from 'react-i18next';

interface Props {
  url?: string | null;
  type?: FeaturedNavigationItemType;
}

const style = 'block cursor-pointer p-3 text-center';

export const FeaturedNavigation = ({ url, type }: Props) => {
  if (!url) return null;
  if (!type) return null;

  const { t } = useTranslation('components');

  if (type !== 'page')
    return (
      <div onClick={() => handleNavigateOnNewWindow(url)} className={style}>
        {t(`projectCard.navigationType.${type}`)}
      </div>
    );

  return (
    <Link className={style} to={url}>
      {t(`projectCard.navigationType.${type}`)}
    </Link>
  );
};
