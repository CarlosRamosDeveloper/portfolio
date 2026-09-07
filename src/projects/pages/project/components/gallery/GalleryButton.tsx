interface Props {
  label: string;
  onClick: () => void;
}

export const GalleryButton = ({ label, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};
