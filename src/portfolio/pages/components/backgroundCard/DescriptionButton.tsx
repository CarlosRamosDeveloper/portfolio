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
  return <button onClick={onClick}>{isOpen ? trueText : falseText}</button>;
};
