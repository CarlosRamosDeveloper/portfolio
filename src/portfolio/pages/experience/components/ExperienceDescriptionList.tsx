import { Separator } from '@/portfolio/layout/components';
import { ExperienceDescription } from './ExperienceDescription';

interface Props {
  descriptions: string[];
}

export const ExperienceDescriptionList = ({ descriptions }: Props) => {
  if (descriptions.length === 0) return null;
  return (
    <>
      <Separator />
      <div className="py-2 bg-card-secondary">
        {descriptions.map((description, index) => (
          <ExperienceDescription description={description} key={index} />
        ))}
      </div>
    </>
  );
};
