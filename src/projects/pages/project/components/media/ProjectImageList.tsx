import { ProjectImageItem } from './ProjectImageItem';

interface Props {
  images: string[] | null;
}

export const ProjectImageList = ({ images = [] }: Props) => {
  if (images === null || images.length === 0)
    return <div>Este proyecto no dispone de imágenes</div>;
  return (
    <div>
      <span className="text-xl">Galería</span>
      {images.map((image, index) => (
        <ProjectImageItem image={image} key={index} />
      ))}
    </div>
  );
};
