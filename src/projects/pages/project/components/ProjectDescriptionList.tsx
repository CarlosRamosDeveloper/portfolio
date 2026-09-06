import { PROJECT_TEXT } from '@/constants/projects/pages';
import { ProjectDescriptionItem } from './ProjectDescriptionItem';

interface Props {
  descriptionList: string[];
}

export const ProjectDescriptionList = ({ descriptionList }: Props) => {
  if (descriptionList.length === 0) return null;
  return (
    <div>
      <h3 className="text text-2xl text-center mt-2 mb-0">
        {PROJECT_TEXT.projectDescription}
      </h3>
      <div>
        {descriptionList.map((text, index) => (
          <ProjectDescriptionItem text={text} key={index} />
        ))}
      </div>
    </div>
  );
};
