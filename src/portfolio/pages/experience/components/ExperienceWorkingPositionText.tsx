interface Props {
  workingPosition: string;
}

export const ExperienceWorkingPositionText = ({ workingPosition }: Props) => {
  return <div className="px-3 text-base">{workingPosition}</div>;
};
