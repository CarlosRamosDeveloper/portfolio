import { NavLink } from 'react-router';

import { cn } from '@/lib/utils';

interface Props {
  path: string;
  label: string;
}

export const NavigateButton = ({ label, path }: Props) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        cn(
          'rounded-xl px-4 py-2 text-xl font-medium transition-colors',
          'hover:bg-accent hover:text-accent-foreground',
          isActive && 'bg-primary text-primary-foreground',
        )
      }
    >
      {label}
    </NavLink>
  );
};
