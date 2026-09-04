import { cn } from '@/lib/utils';

interface Props {
  start: number;
  end?: number | null;
  mode?: 'full' | 'landing';
}

export const DateLabel = ({ start, end = null, mode = 'full' }: Props) => {
  return (
    <div
      className={cn(
        `text-muted-foreground min-w-max 
        ${mode === 'full' ? 'text-xl' : ''} 
        ${mode === 'landing' ? 'text-sm' : ''}`,
      )}
    >
      {start}
      {start !== end && <> - {end ?? 'Actualmente'}</>}
    </div>
  );
};
