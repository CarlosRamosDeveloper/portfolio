import { BackgroundCard, type Background } from './BackgroundCard';

interface Props {
  background: Background[];
}

export const BackgroundCardsList = ({ background }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {background.map((experience) => (
        <BackgroundCard
          experience={experience}
          key={`${experience.type}-${experience.data.id}`}
        />
      ))}
    </div>
  );
};
