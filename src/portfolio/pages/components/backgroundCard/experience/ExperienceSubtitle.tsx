interface Props {
  text?: string;
}

export const ExperienceSubtitle = ({ text }: Props) => {
  if (!text) return;
  return <p className="px-5 py-2 text-sm text-muted-foreground">{text}</p>;
};
