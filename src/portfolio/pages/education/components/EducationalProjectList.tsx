import type { EducationProject } from '@/interfaces';
import { EducationalProjectItem } from './EducationalProjectItem';
import { Separator } from '@/portfolio/components';

interface Props {
  projects: EducationProject[];
}

export const EducationalProjectList = ({ projects = [] }: Props) => {
  if (projects.length === 0) return null;
  return (
    <div>
      <Separator />
      <h3 className="text-xl p-2">Proyectos del curso</h3>
      {projects.map((project) => (
        <EducationalProjectItem project={project} />
      ))}
    </div>
  );
};
