import { GalleryButton, GalleryThumbnail } from '.';

interface Props {
  images: string[];
  index: number;
  onChange: (index: number) => void;
}

export const GallerySlider = ({ images, index, onChange }: Props) => {
  const handlePrevItem = () => {
    onChange(index === 0 ? images.length - 1 : index - 1);
  };

  const handleCurrentItem = (index: number) => {
    onChange(index);
  };

  const handleNextItem = () => {
    onChange(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="flex items-center bg-black/80 mt-5">
      <GalleryButton label="<-" onClick={handlePrevItem} />
      <div className="flex flex-1 overflow-x-auto mx-5">
        {images.map((image, index) => (
          <GalleryThumbnail
            image={image}
            onClick={() => handleCurrentItem(index)}
            key={index}
          />
        ))}
      </div>
      <GalleryButton label="->" onClick={handleNextItem} />
    </div>
  );
};
