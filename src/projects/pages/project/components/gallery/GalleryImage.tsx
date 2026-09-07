interface Props {
  image: string;
}

export const GalleryImage = ({ image }: Props) => {
  return (
    <div className="flex h-100 items-center justify-center">
      <img
        className="max-h-full max-w-full object-contain"
        src={image}
        alt={image}
      />
    </div>
  );
};
