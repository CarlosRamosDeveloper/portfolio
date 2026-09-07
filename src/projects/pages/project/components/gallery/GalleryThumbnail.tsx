interface Props {
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

export const GalleryThumbnail = ({ image, isSelected, onClick }: Props) => {
  return (
    <button
      type="button"
      className={`shrink-0 mx-1 cursor-pointer py-3 border-3 ${isSelected ? 'border-white' : 'border-transparent'}`}
      onClick={onClick}
    >
      <img className="h-20 w-32 object-cover" src={image} />
    </button>
  );
};
