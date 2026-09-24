import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

type Props =
  | { type: 'title'; label: string; onClick?: never; path?: never }
  | {
      type: 'link';
      label: string;
      path: string;
      onClick?: () => void;
    };

export const MobileNavigationItem = ({ type, label, path, onClick }: Props) => {
  const { t } = useTranslation('navigation');

  if (type === 'title') {
    return <h2 className="text-xl py-2 bg-card">{t(label)}</h2>;
  }

  return (
    <div className="flex w-50 bg-accent m-1">
      <NavLink to={path} onClick={onClick} className="w-full py-1 pl-5">
        {t(label)}
      </NavLink>
    </div>
  );
};
