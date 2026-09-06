interface Props {
  videos: string[] | null;
  images: string[] | null;
  url: string | null;
}

export const MediaSection = ({}: Props) => {
  return (
    <div>
      <div>Multimedia</div>
      <div>Video</div>
      <div>Navegar al proyecto</div>
      <div>Galería</div>
    </div>
  );
};
