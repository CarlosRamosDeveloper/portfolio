interface Props {
  projectName: string;
}

export const FeaturedTitle = ({ projectName }: Props) => {
  return <div className="text text-3xl">{projectName}</div>;
};
