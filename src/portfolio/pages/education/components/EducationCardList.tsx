import { EducationData } from '@/portfolio/data/EducationData';
import { EducationCard } from './EducationCard';

const educationData = EducationData.sort().reverse();

export const EducationCardList = () => {
  console.log(educationData);
  return (
    <div className="flex flex-col items-center">
      {educationData.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </div>
  );
};
