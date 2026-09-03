interface Props {
  text: string;
}

export const FeaturedProjectLabel = ({ text }: Props) => {
  return <div className="p-4 mt-3 bg-accent">{text}</div>;
};
