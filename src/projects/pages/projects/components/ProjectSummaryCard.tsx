import { useTranslation } from 'react-i18next';

import type { Project } from '@/interfaces';
import { TechStackList } from '@/portfolio/pages/components';
import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';
import { ProjectImagesList } from './ProjectImagesList';
import { ProjectNavigation } from './ProjectNavigation';
import { FeaturedProjectStatusSection } from '../../featured/components';
import { useMaxTechPerRow } from '@/hooks';

interface Props {
  project: Project;
}

const maxTech = 3;

export const ProjectSummaryCard = ({ project }: Props) => {
  const { t } = useTranslation('components');

  const shortStack = project.techStack.slice(0, maxTech);
  const maxTechPerRow = useMaxTechPerRow();

  return (
    <div className="my-6 border border-foreground rounded-2xl bg-card text-card-foreground overflow-hidden">
      <div className="flex flex-col sm:flex-row p-3 justify-between text-center sm:text-left">
        <span className="font-semibold text-3xl sm:text-xl text-center mb-3 sm:mb-0">
          {project.name}
        </span>

        <FeaturedProjectStatusSection status={project.status} />
      </div>

      <div className="">
        <ProjectSummarySubtitle text={project.shortDescription} />
      </div>
      <div className="flex justify-between flex-col sm:flex-row">
        <ProjectSummarySubtitle
          text={`${t('projectCard.totalTech')}${project.techStack.length}`}
        />
        <ProjectNavigation projectUrl={project.idSlug} />
      </div>
      <TechStackList
        techStack={shortStack}
        maxTechPerRow={maxTechPerRow}
        botSeparator
        topSeparator
      />

      <ProjectImagesList images={project.screenshots || []} />
    </div>
  );
};
