import { ProjectsData } from '@/portfolio/data/ProjectsData';
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

export const ProjectPage = () => {
  const { idSlug } = useParams();

  const project = ProjectsData.find((project) => project.idSlug === idSlug);

  if (!project) return <NonFoundProject />;

  return (
    <div className="my-6 w-full max-w-4xl flex flex-col mx-auto">
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
      <TechStackList techStack={project.techStack} />
      <ProjectDescriptionList descriptionList={project.description} />
    </div>
  );
};
