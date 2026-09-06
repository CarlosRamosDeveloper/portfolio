interface Props {
  title: string;
}

export const ProjectTitle = ({ title }: Props) => {
  return <div className="text-3xl text-center">{title}</div>;
};
