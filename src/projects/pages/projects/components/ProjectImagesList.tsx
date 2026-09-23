import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';
import { FeaturedImage } from '../../featured/components';

interface Props {
  images: string[];
}

export const ProjectImagesList = ({ images }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('components');

  if (images.length === 0)
    return (
      <ProjectSummarySubtitle
        text={t('projectCard.noImages')}
        addTopMargin={true}
      />
    );

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div onClick={handleToggle}>
      {!isOpen ? (
        <ProjectSummarySubtitle
          text={`${t('projectCard.seeImagesStart')}${images.length}${t('projectCard.seeImagesEnd')}`}
          addTopMargin={true}
        />
      ) : (
        <>
          {images.map((image, index) => (
            <FeaturedImage image={image || null} key={index} />
          ))}
        </>
      )}
    </div>
  );
};
