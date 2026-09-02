import type { Project } from '@/interfaces';
import { TechStackList } from '../../components';
import { FeaturedProjectStatusSection } from './FeaturedProjectStatusSection';
import { FeaturedTitle } from './FeaturedTitle';
import { FeaturedProjectLabel } from './FeaturedProjectLabel';
import { FeaturedNavigation } from './FeaturedNavigation';

interface Props {
  project: Project;
}

export const FeaturedProjectCard = ({ project }: Props) => {
  return (
    <div className="my-6 w-full max-w-3xl border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <FeaturedTitle projectName={project.name} />
      <FeaturedProjectStatusSection status={project.status} />
      <FeaturedProjectLabel text={project.shortDescription} />
      <TechStackList techStack={project.techStack} />
      <FeaturedNavigation url={project.repository} type="repository" />
      <FeaturedNavigation url={project.url} type="page" />
    </div>
  );
};
