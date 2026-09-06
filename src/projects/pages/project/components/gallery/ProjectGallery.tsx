import { ProjectImageList } from './ProjectImageList';

interface Props {
  videos: string[] | null;
  images: string[] | null;
}

export const ProjectGallery = ({ images }: Props) => {
  return (
    <div>
      <ProjectImageList images={images} />
    </div>
  );
};
