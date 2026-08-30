import { Separator } from '@/portfolio/components';
import { ExperienceDescription } from './ExperienceDescription';

interface Props {
  descriptions: string[];
}

export const ExperienceDescriptionList = ({ descriptions }: Props) => {
  if (descriptions.length === 0) return null;
  return (
    <>
      <Separator />
      <div className="py-2 m-1">
        {descriptions.map((description) => (
          <ExperienceDescription description={description} />
        ))}
      </div>
    </>
  );
};
