import { NavLink } from 'react-router';

import { cn } from '@/lib/utils';

interface Props {
  path: string;
  label: string;
}

export const NavigateButton = ({ label, path }: Props) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn(
            'text-xl font-medium transition-colors hover:text-primary',
            isActive && 'underline underline-offset-4',
          )
        }
      >
        {label}
      </NavLink>
    </>
  );
};
