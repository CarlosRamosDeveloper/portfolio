import { ExperienceData } from '../data/ExperienceData';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceCardsList = () => {
  return (
    <>
      {ExperienceData.sort()
        .reverse()
        .map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
    </>
  );
};
