import { GALLERY_TEXT } from '@/constants/projects/pages';
import { ProjectImageItem } from './ProjectImageItem';

interface Props {
  images: string[] | null;
}

export const ProjectImageList = ({ images = [] }: Props) => {
  if (images === null || images.length === 0)
    return <div>{GALLERY_TEXT.noImage}</div>;
  return (
    <div>
      <span className="text-xl">{GALLERY_TEXT.title}</span>
      {images.map((image, index) => (
        <ProjectImageItem image={image} key={index} />
      ))}
    </div>
  );
};
