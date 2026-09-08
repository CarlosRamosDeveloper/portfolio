import type { IconType } from 'react-icons/lib';
import { TechIcon } from '.';

interface Props {
  techName: string;
  icon?: IconType;
  color: string;
}

export const TechCard = ({ techName, color, icon }: Props) => {
  return (
    <div
      className="flex min-h-25 flex-col items-center justify-center border border-card-secondary-foreground bg-muted px-3 py-2 text-sm"
      key={techName}
    >
      <div className="flex h-14 items-center justify-center">
        {icon && <TechIcon icon={icon} color={color} />}
      </div>
      <span className="flex h-10 items-center justify-center text-center">
        {techName}
      </span>
    </div>
  );
};
