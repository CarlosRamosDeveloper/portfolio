interface Props {
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return <h2 className="text-center text-2xl font-semibold">{title}</h2>;
};
