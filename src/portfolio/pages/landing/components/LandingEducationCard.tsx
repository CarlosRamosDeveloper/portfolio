import type { Education } from '@/interfaces';

interface Props {
  data: Education;
}

export const LandingEducationCard = ({ data }: Props) => {
  return (
    <div className="w-full max-w-3xl border border-border">
      <div className="flex items-center justify-between border-b border-border bg-card-secondary px-4 py-2 font-semibold">
        {data.title}
        <span className="text-sm font-normal">Educación</span>
      </div>
      <div className="flex items-center justify-between px-4 py-3 bg-card">
        <span>Cantidad de proyectos: {data.projects?.length ?? 0}</span>
        <span className="text-sm text-muted-foreground">
          {data.startYear}-{data.endYear}
        </span>
      </div>
    </div>
  );
};
