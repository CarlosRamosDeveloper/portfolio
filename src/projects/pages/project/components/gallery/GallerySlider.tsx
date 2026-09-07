import { GalleryButton, GalleryThumbnail } from '.';

interface Props {
  images: string[];
  currentIndex: number;
  onChange: (index: number) => void;
}

export const GallerySlider = ({ images, currentIndex, onChange }: Props) => {
  const handlePrevItem = () => {
    onChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleCurrentItem = (index: number) => {
    onChange(index);
  };

  const handleNextItem = () => {
    onChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="flex items-center bg-black mt-3">
      <GalleryButton label="<-" onClick={handlePrevItem} location="left" />
      <div className="flex flex-1 overflow-x-auto mx-5">
        {images.map((image, index) => (
          <GalleryThumbnail
            image={image}
            isSelected={currentIndex === index}
            onClick={() => handleCurrentItem(index)}
            key={index}
          />
        ))}
      </div>
      <GalleryButton label="->" onClick={handleNextItem} location="right" />
    </div>
  );
};
