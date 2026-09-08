interface Props {
  text: string;
}

export const AboutBubble = ({ text }: Props) => {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl text-base p-2 border border-border">
      {text}
    </div>
  );
};
