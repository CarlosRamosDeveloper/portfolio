import { cn } from '@/lib/utils';
import type { IconType } from 'react-icons/lib';

interface Props {
  label: string;
  isFooter?: boolean;
  icon: IconType;
  onClick?: () => void;
}

export const ContactComponent = ({
  label,
  icon: Icon,
  onClick,
  isFooter = false,
}: Props) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center mx-2 p-3">
      <Icon className={cn(isFooter ? 'size-5' : 'size-12')} />
      <p className="mt-0">{label}</p>
    </div>
  );
};
