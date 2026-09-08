interface Props {
  isOpen: boolean;
  trueText: string;
  falseText: string;
  onClick: () => void;
}

export const DescriptionButton = ({
  isOpen,
  trueText,
  falseText,
  onClick,
}: Props) => {
  return (
    <button className="bg-accent p-1 mx-auto flex text-xs" onClick={onClick}>
      {isOpen ? trueText : falseText}
    </button>
  );
};
