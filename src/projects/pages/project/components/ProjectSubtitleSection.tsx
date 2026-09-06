interface Props {
  subtitle: string;
  status: string;
}

export const ProjectSubtitleSection = ({ status, subtitle }: Props) => {
  return (
    <div>
      <div>{status}</div>
      <div>{subtitle}</div>
    </div>
  );
};
