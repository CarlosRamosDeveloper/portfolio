interface Props {
  text: string;
}

export const ExperienceSubtitle = ({ text }: Props) => {
  return <p className="flex text-sm px-5 py-2">{text}</p>;
};
