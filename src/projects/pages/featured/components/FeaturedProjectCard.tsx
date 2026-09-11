import type { Project } from '@/interfaces';
import {
  FeaturedImage,
  FeaturedNavigation,
  FeaturedProjectLabel,
  FeaturedProjectStatusSection,
  FeaturedTitle,
} from '.';

import { useImageViewer, useMediaQuery } from '@/hooks';
import { ImageOverlay } from '@/components/custom/ImageOverlay';
import { ROUTES } from '@/constants';
import { TechStackList } from '@/portfolio/pages/components';

interface Props {
  project: Project;
}

export const FeaturedProjectCard = ({ project }: Props) => {
  const { image, isOpen, closeImage, openImage } = useImageViewer();
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const maxTechPerRow = isMobile ? 2 : isTablet ? 3 : 5;

  return (
    <div className="my-6 w-full border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <FeaturedTitle projectName={project.name} />
      <FeaturedProjectStatusSection status={project.status} />
      <FeaturedNavigation
        url={`${ROUTES.projects}/${project.idSlug}`}
        type="page"
      />
      <FeaturedProjectLabel text={project.shortDescription} />
      <FeaturedImage
        image={project.screenshots?.[0] || null}
        onClick={() => openImage(project.screenshots?.[0] ?? '')}
      />
      <ImageOverlay image={image!} onClose={closeImage} isOpen={isOpen} />
      <TechStackList
        techStack={project.techStack}
        botSeparator
        topSeparator
        maxTechPerRow={maxTechPerRow}
      />
      <FeaturedNavigation url={project.repository} type="repository" />
    </div>
  );
};
