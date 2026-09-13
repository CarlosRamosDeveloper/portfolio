interface Props {
  text: string;
}

export const AboutBubble = ({ text }: Props) => {
  return (
    <div className="p-4 lg:p-2 border border-border text-base px-4 py-2">
      {text}
    </div>
  );
};
