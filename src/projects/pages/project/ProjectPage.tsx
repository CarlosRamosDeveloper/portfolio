import { ProjectsData } from '@/portfolio/data/ProjectsData';
import { useParams } from 'react-router';
import {
  NonFoundProject,
  ProjectSubtitleSection,
  ProjectTitle,
} from './components';
import { TechStackList } from '@/portfolio/pages/components';
import { STATUS_LABEL } from '@/constants';

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
      />
      <TechStackList techStack={project.techStack} />
      <div>{project.description.length}</div>
      <div>
        <span>Multimedia</span>
        <span>Galería</span>
        {project.url}
        {project.video}
      </div>
    </div>
  );
};
