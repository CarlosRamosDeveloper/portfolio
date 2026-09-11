import { useState } from 'react';
import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';

import { PROJECT_TEXT } from '@/constants/projects/pages';
import { FeaturedImage } from '../../featured/components';

interface Props {
  images: string[];
}

export const ProjectImagesList = ({ images }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  if (images.length === 0)
    return (
      <ProjectSummarySubtitle
        text={PROJECT_TEXT.noImages}
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
          text={`${PROJECT_TEXT.seeImagesStart}${images.length}${PROJECT_TEXT.seeImagesEnd}`}
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
