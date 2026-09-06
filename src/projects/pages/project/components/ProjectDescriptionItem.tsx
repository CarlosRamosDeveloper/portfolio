interface Props {
  text: string;
}

export const ProjectDescriptionItem = ({ text }: Props) => {
  return <div className="text-xl mt-0.5 p-2">{`> ${text}`}</div>;
};
