import { ProjectsData } from '@/portfolio/data/ProjectsData';
import { useParams } from 'react-router';
import {
  NonFoundProject,
  ProjectSubtitleSection,
  ProjectTitle,
} from './components';
import { TechStackList } from '@/portfolio/pages/components';
import { STATUS_LABEL } from '@/constants';
import { MediaSection } from './components/media';

export const ProjectPage = () => {
  const { idSlug } = useParams();

  const project = ProjectsData.find((project) => project.idSlug === idSlug);

  if (!project) return <NonFoundProject />;

  return (
    <div>
      <ProjectTitle title={project.name} />
      <ProjectSubtitleSection
        status={STATUS_LABEL[project.status]}
        subtitle={project.shortDescription}
        repository={project.repository}
      />
      <TechStackList techStack={project.techStack} />
      {project.description.length}
      <MediaSection
        images={project.screenshots || []}
        url={project.url || null}
        videos={project.video || null}
      />
    </div>
  );
};
