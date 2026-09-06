import type { Project } from '@/interfaces';
import { TechStackList } from '@/portfolio/pages/components';
import {
  FeaturedImage,
  FeaturedProjectStatusSection,
} from '@/portfolio/pages/featured/components';
import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';

interface Props {
  project: Project;
}

const maxTech = 3;

export const ProjectSummaryCard = ({ project }: Props) => {
  const shortStack = project.techStack.slice(0, maxTech);

  return (
    <div className="my-6 w-full max-w-3xl border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <div className="flex p-3 justify-between">
        <span className="font-semibold text-xl">{project.name}</span>

        <FeaturedProjectStatusSection status={project.status} />
      </div>

      <ProjectSummarySubtitle text={project.shortDescription} />
      <ProjectSummarySubtitle
        text={`Total de tecnologías: ${project.techStack.length}`}
      />
      <TechStackList techStack={shortStack} maxTechPerRow={maxTech} />
      <span>Total de imagenes: 3 | Ver imagenes</span>
      <div>
        {project.screenshots?.map((image) => (
          <FeaturedImage image={image || null} />
        ))}
      </div>
    </div>
  );
};
