interface Props {
  institutionName: string;
}

export const InstitutionLabel = ({ institutionName }: Props) => {
  return <div className="text-sm px-2">{institutionName}</div>;
};
