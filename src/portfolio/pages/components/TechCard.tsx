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
      className="flex flex-col items-center justify-center border border-card-secondary-foreground bg-muted px-3 py-2 text-sm"
      key={techName}
    >
      {icon && <TechIcon icon={icon} color={color} />}
      <span className="mt-2">{techName}</span>
    </div>
  );
};
