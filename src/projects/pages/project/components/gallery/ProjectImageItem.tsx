interface Props {
  image: string;
}

export const ProjectImageItem = ({ image }: Props) => {
  return <img src={image} alt={image} />;
};
