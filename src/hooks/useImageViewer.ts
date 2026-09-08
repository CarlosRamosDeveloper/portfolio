import { useState } from 'react';

export const useImageViewer = () => {
  const [image, setImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setImage(image);
  };

  const closeImage = () => {
    setImage(null);
  };

  return {
    image: image,
    isOpen: image !== null,
    openImage: openImage,
    closeImage: closeImage,
  };
};
