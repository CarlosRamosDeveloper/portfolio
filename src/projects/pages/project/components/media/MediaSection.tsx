import { ProjectImageList } from './ProjectImageList';

interface Props {
  videos: string[] | null;
  images: string[] | null;
  url: string | null;
}

export const MediaSection = ({ images }: Props) => {
  return (
    <div>
      <div>Multimedia</div>
      <div>Video</div>
      <div>Navegar al proyecto</div>
      <ProjectImageList images={images} />
    </div>
  );
};
