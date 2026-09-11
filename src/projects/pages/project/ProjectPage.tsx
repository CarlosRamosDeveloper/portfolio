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
import { useMaxTechPerRow } from '@/hooks';

export const ProjectPage = () => {
  const { idSlug } = useParams();
  const maxTechPerRow = useMaxTechPerRow();

  const project = ProjectsData.find((project) => project.idSlug === idSlug);

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
