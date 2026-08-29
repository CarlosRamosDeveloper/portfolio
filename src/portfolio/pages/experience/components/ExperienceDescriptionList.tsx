import { ExperienceDescription } from './ExperienceDescription';

interface Props {
  descriptions: string[];
}

export const ExperienceDescriptionList = ({ descriptions }: Props) => {
  return (
    <>
      <div className="py-2">
        {descriptions.map((description) => (
          <ExperienceDescription description={description} />
        ))}
      </div>
    </>
  );
};
