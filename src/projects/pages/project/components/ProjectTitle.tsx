interface Props {
  title: string;
}

export const ProjectTitle = ({ title }: Props) => {
  return <div className="text-4xl text-center">{title}</div>;
};
