import { cn } from '@/lib/utils';

interface Props {
  text: string;
}

export const AboutBubble = ({ text }: Props) => {
  return <div className={cn('p-2 border border-border text-base')}>{text}</div>;
};
