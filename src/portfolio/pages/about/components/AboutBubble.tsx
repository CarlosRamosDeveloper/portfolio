interface Props {
  text: string;
}

export const AboutBubble = ({ text }: Props) => {
  return <div className="p-4 lg:p-2 border border-border text-xl">{text}</div>;
};
