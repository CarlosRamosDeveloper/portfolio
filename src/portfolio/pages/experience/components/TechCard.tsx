interface Props {
  techName: string;
}

export const TechCard = ({ techName }: Props) => {
  return (
    <>
      <div
        className="rounded-full border border-border bg-muted px-3 py-1 text-sm"
        key={techName}
      >
        {techName}
      </div>
    </>
  );
};
