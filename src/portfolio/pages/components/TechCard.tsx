interface Props {
  techName: string;
}

export const TechCard = ({ techName }: Props) => {
  return (
    <>
      <div
        className="rounded-full border bg-muted px-3 py-1 text-sm border-card-secondary-foreground"
        key={techName}
      >
        {techName}
      </div>
    </>
  );
};
