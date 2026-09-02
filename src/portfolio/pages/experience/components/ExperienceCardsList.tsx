import { ExperienceData } from '@/portfolio/data/ExperienceData';
import { ExperienceCard } from '.';

const experienceData = ExperienceData.sort().reverse();

export const ExperienceCardsList = () => {
  return (
    <div className="flex flex-col items-center">
      {experienceData.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};
