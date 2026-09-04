interface Props {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageOverlay = ({ image, isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Imagen ampliada"
        className="max-h-full max-w-full object-contain"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
};
