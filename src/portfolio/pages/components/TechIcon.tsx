import { cn } from '@/lib/utils';
import type { IconType } from 'react-icons/lib';

interface Props {
  icon: IconType;
  color: string;
}

export const TechIcon = ({ icon: Icon, color }: Props) => {
  console.log(color);
  return <Icon className={cn('size-10')} style={{ color }} />;
};
