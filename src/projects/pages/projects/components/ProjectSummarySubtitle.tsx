import { cn } from '@/lib/utils';

interface Props {
  text: string;
  addTopMargin?: boolean;
}

export const ProjectSummarySubtitle = ({
  text,
  addTopMargin: hasSomethingOnTop = false,
}: Props) => {
  return (
    <div className={cn(`text-sm px-4 ${hasSomethingOnTop ? 'py-2' : 'pb-2'}`)}>
      <span>{text}</span>
    </div>
  );
};
