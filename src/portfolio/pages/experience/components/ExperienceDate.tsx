interface Props {
  start: number;
  end?: number | null;
}

export const ExperienceDate = ({ start, end = null }: Props) => {
  return (
    <div className="text-xl">
      {start}
      {start !== end && <> - {end ?? 'Actualmente'}</>}
    </div>
  );
};
