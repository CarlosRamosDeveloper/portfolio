interface Props {
  projectName: string;
}

export const FeaturedTitle = ({ projectName }: Props) => {
  return <div className="text text-3xl py-3 text-center">{projectName}</div>;
};
