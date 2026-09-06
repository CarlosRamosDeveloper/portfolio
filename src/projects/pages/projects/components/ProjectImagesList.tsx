import { useState } from 'react';
import { ProjectSummarySubtitle } from './ProjectSummarySubtitle';
import { FeaturedImage } from '@/portfolio/pages/featured/components';
import { PROJECT_TEXT } from '@/constants/projects/pages';

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
    console.log('Toggle! ', isOpen);
    setIsOpen((prev) => !prev);
  };

  return (
    <div onClick={handleToggle}>
      {isOpen ? (
        <ProjectSummarySubtitle
          text={`${PROJECT_TEXT.seeImagesStart}${images.length}${PROJECT_TEXT.seeImagesEnd}`}
          addTopMargin={true}
        />
      ) : (
        <>
          {images.map((image) => (
            <FeaturedImage image={image || null} />
          ))}
        </>
      )}
    </div>
  );
};
