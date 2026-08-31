interface Props {
  description: string;
}

export const ExperienceDescription = ({ description }: Props) => {
  return (
    <div className="px-2 pl-2 pb-2 text-sm">
      <span className="text-primary">▸ </span>
      {description}
    </div>
  );
};
