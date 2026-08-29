interface Props {
  text: string;
}

export const ExperienceSubtitle = ({ text }: Props) => {
  return <p className="flex text-xs p-3">{text}</p>;
};
