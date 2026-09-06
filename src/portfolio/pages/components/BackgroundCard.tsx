import type { Education, JobExperience } from '@/interfaces';
import { DateLabel } from './DateLabel';

export type Background =
  | { type: 'job'; data: JobExperience }
  | {
      type: 'education';
      data: Education;
    };

interface Props {
  experience: Background;
}

export const BackgroundCard = ({ experience }: Props) => {
  const { data, type } = experience;

  return (
    <div className="my-6 w-full max-w-3xl border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <div className="flex p-3 justify-between">
        <div className="font-semibold text-xl">
          {type === 'education' && data.title}
          {type === 'job' && data.company}
        </div>
        <DateLabel start={data.startYear} end={data.endYear} />
        {/* education: Titulo // job: Empresa */}
        {/* Date label */}
      </div>
      {/* job: working possition */}
      {/* job: experience subtitle */}
      <div className="flex flex-1 justify-between">
        {/* education: Centro educativo */}
        {/* education:Tipo de educación */}
      </div>
      {/* Tech stack */}
      {/* Descripción */}
      {/* education: Proyectos */}
    </div>
  );
};
