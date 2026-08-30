export const TechCard = (techName: string) => {
  return (
    <>
      <div
        className="rounded-full border border-border px-3 py-1 text-sm"
        key={techName}
      >
        {techName}
      </div>
    </>
  );
};
