interface Props {
  text?: string;
}

export const ExperienceSubtitle = ({ text }: Props) => {
  if (!text) return;
  return <p className="flex text-sm px-5 py-2">{text}</p>;
};
