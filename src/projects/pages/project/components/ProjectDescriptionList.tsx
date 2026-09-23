import { useTranslation } from 'react-i18next';

import { ProjectDescriptionItem } from './ProjectDescriptionItem';

interface Props {
  descriptionList: string[];
}

export const ProjectDescriptionList = ({ descriptionList }: Props) => {
  if (descriptionList.length === 0) return null;

  const { t } = useTranslation('components');
  return (
    <div className="my-3">
      <h3 className="text text-2xl text-center mt-2 mb-0">
        {t('projectCard.projectDescription')}
      </h3>
      <div>
        {descriptionList.map((text, index) => (
          <ProjectDescriptionItem text={text} key={index} />
        ))}
      </div>
    </div>
  );
};
