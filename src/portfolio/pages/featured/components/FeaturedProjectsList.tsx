import type { Project } from '@/interfaces';
import { FeaturedProjectCard } from './FeaturedProjectCard';

interface Props {
  projects: Project[];
}

export const FeaturedProjectsList = ({ projects }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {projects.map((project, index) => (
        <FeaturedProjectCard key={index} project={project} />
      ))}
    </div>
  );
};
