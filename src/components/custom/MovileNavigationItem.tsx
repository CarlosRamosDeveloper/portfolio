import { NavLink } from 'react-router';

interface Props {
  type: 'title' | 'link';
  label: string;
  path?: string;
}

export const MobileNavigationItem = ({ type, label, path }: Props) => {
  if (type === 'title') {
    return <h2 className="text-xl py-2 bg-card">{label}</h2>;
  }

  return (
    <div className="flex w-50 pl-5 py-1 bg-accent">
      <NavLink to={path!}>{label}</NavLink>
    </div>
  );
};
