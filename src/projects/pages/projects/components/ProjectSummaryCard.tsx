import type { Project } from '@/interfaces';
import { TechStackList } from '@/portfolio/pages/components';
import { FeaturedProjectStatusSection } from '@/portfolio/pages/featured/components';
import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';
import { ProjectImagesList } from './ProjectImagesList';
import { PROJECT_TEXT } from '@/constants/projects/pages';
import { ProjectNavigation } from './ProjectNavigation';

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
      <div className="flex justify-between">
        <ProjectSummarySubtitle
          text={`${PROJECT_TEXT.totalTech}${project.techStack.length}`}
        />
        <ProjectNavigation />
      </div>
      <TechStackList techStack={shortStack} maxTechPerRow={maxTech} />
      <ProjectImagesList images={project.screenshots || []} />
    </div>
  );
};
