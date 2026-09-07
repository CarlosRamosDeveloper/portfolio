import { useState } from 'react';
import { ProjectImageList } from './ProjectImageList';

interface Props {
  videos: string[] | null;
  images: string[] | null;
}

export const ProjectGallery = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images === null || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrevItem = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const handleNextItem = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    // <div>
    //   <ProjectImageList images={images} />
    // </div>

    <div className="w-full">
      {/* Imagen principal */}

      <div className="flex h-100 items-center justify-center">
        <img
          className="max-h-full max-w-full object-contain"
          src={currentImage}
          alt={currentImage}
        />
      </div>

      {/* Slider */}
      <div className="mt-4 flex items-center gap-2">
        <button type="button" onClick={handlePrevItem}>
          {'<-'}
        </button>
        <div className="flex flex-1 gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              type="button"
              className="shrink-0"
              onClick={() => setCurrentIndex(index)}
            >
              <img className="h-20 w-32 object-cover" src={image}></img>
            </button>
          ))}
        </div>
        <button type="button" onClick={handleNextItem}>
          {'->'}
        </button>
      </div>
    </div>
  );
};
