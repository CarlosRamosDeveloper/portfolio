import { useParams } from 'react-router';

import {
  NonFoundProject,
  ProjectDescriptionList,
  ProjectSubtitleSection,
  ProjectTitle,
} from './components';
import { TechStackList } from '@/portfolio/pages/components';
import { STATUS_LABEL } from '@/constants';
import { ProjectGallery } from './components/gallery';
import { ProjectsData } from '@/data/ProjectsData';
import { FramePage } from '@/components';
import { useMediaQuery } from '@/hooks';

export const ProjectPage = () => {
  const { idSlug } = useParams();

  const project = ProjectsData.find((project) => project.idSlug === idSlug);

  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');

  const maxTechPerRow = isMobile ? 2 : isTablet ? 3 : 5;

  if (!project) return <NonFoundProject />;

  return (
    <FramePage>
      <div className="my-6 flex flex-col">
        <ProjectTitle title={project.name} />
        <ProjectSubtitleSection
          status={STATUS_LABEL[project.status]}
          subtitle={project.shortDescription}
          repository={project.repository}
        />
        <ProjectGallery
          images={project.screenshots || []}
          videos={project.video || null}
        />
        <TechStackList
          techStack={project.techStack}
          maxTechPerRow={maxTechPerRow}
        />
        <ProjectDescriptionList descriptionList={project.description} />
      </div>
    </FramePage>
  );
};
