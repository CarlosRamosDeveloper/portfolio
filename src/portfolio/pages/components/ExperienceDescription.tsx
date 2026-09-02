interface Props {
  description: string;
}

export const ExperienceDescription = ({ description }: Props) => {
  return (
    <div className="px-2 pl-2 pb-2 text-sm text-card-secondary-foreground">
      <span className="text-primary">▸ </span>
      {description}
    </div>
  );
};
