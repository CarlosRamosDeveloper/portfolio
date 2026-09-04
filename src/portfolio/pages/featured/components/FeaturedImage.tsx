interface Props {
  image: string | null;
  onClick?: () => void;
}

export const FeaturedImage = ({ image, onClick }: Props) => {
  if (!image) return null;
  return (
    <img
      src={image}
      alt="Imagen del proyecto"
      className="mx-auto max-h-50 object-contain"
      onClick={onClick}
    />
  );
};
