import { useState } from 'react';

import { GalleryImage, GallerySlider } from '.';

interface Props {
  videos: string[] | null;
  images: string[] | null;
}

export const ProjectGallery = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images === null || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="w-full">
      <GalleryImage image={currentImage} />

      <GallerySlider
        images={images}
        index={currentIndex}
        onChange={setCurrentIndex}
      />
    </div>
  );
};
