interface Props {
  label: string;
  onClick: () => void;
}

export const GalleryButton = ({ label, onClick }: Props) => {
  return (
    <button
      className="p-4 m-3 cursor-pointer bg-red-500"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
