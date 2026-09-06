interface Props {
  text: string;
}

export const ProjectSummarySubtitle = ({ text }: Props) => {
  return (
    <div className="text-sm px-4 pb-2">
      <span>{text}</span>
    </div>
  );
};
