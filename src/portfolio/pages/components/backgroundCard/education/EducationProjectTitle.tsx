interface Props {
  title: string;
}

export const EducationProjectTitle = ({ title }: Props) => {
  return <div className="text-base p-4">{title}</div>;
};
