import type { IconType } from 'react-icons/lib';
import { TechIcon } from './TechIcon';

interface Props {
  techName: string;
  icon?: IconType;
  color: string;
}

export const TechCard = ({ techName, color, icon }: Props) => {
  console.log('TechCard: ', color);
  return (
    <>
      <div
        className="border bg-muted px-3 py-1 text-sm border-card-secondary-foreground"
        key={techName}
      >
        {icon ? <TechIcon icon={icon} color={color} /> : techName}
      </div>
    </>
  );
};
