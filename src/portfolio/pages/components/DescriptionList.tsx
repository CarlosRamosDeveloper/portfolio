import { DescriptionLabel, Separator } from '.';

interface Props {
  descriptions: string[];
}

export const DescriptionList = ({ descriptions }: Props) => {
  if (descriptions.length === 0) return null;
  return (
    <>
      <Separator />
      <div className="py-2 bg-card-secondary">
        {descriptions.map((description, index) => (
          <DescriptionLabel description={description} key={index} />
        ))}
      </div>
    </>
  );
};
