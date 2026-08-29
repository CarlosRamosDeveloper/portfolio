interface Props {
  description: string;
}

export const ExperienceDescription = ({ description }: Props) => {
  return <div className="px-2 py-0.5 text-base">-{description}</div>;
};
