interface Props {
  image: string;
  onClick: () => void;
}

export const GalleryThumbnail = ({ image, onClick }: Props) => {
  return (
    <button
      type="button"
      className="shrink-0 mx-1 cursor-pointer"
      onClick={onClick}
    >
      <img className="h-20 w-32 object-cover" src={image} />
    </button>
  );
};
