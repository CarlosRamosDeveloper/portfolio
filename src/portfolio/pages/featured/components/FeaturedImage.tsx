interface Props {
  image: string | null;
}

export const FeaturedImage = ({ image }: Props) => {
  if (!image) return null;
  return (
    <img
      src={image}
      alt="Imagen del proyecto"
      className="mx-auto max-h-50 object-contain"
    />
  );
};
