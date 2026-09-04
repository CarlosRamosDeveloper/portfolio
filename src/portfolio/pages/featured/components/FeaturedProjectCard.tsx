import type { Project } from '@/interfaces';
import {
  FeaturedImage,
  FeaturedNavigation,
  FeaturedProjectLabel,
  FeaturedProjectStatusSection,
  FeaturedTitle,
} from '.';
import { TechStackList } from '../../components';

import { useImageViewer } from '@/hooks';
import { ImageOverlay } from '@/components/custom/ImageOverlay';

interface Props {
  project: Project;
}

export const FeaturedProjectCard = ({ project }: Props) => {
  const { image, isOpen, closeImage, openImage } = useImageViewer();

  return (
    <div className="my-6 w-full max-w-3xl border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <FeaturedTitle projectName={project.name} />
      <FeaturedProjectStatusSection status={project.status} />
      <FeaturedProjectLabel text={project.shortDescription} />
      <FeaturedImage
        image={project.screenshots?.[0] || null}
        onClick={() => openImage(project.screenshots?.[0] ?? '')}
      />
      <ImageOverlay image={image!} onClose={closeImage} isOpen={isOpen} />
      <TechStackList techStack={project.techStack} />
      <FeaturedNavigation url={project.repository} type="repository" />
      <FeaturedNavigation url={project.url} type="page" />
      <FeaturedNavigation url={project.video} type="demo" />
    </div>
  );
};
